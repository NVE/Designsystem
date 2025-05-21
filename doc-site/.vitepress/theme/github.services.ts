/**
 * Funksjoner for å hente data fra designsystem-repo'et i Github
 * For å koble en sak eller PR i Github til en komponent, merk den med komponent-navnet, f.eks. `nve-checkbox`
 */
import { request } from '@octokit/request';

/**
 * En sak eller PR i Github
 */
export interface Issue {
  /** Sammendrag / tittel */
  title: string;

  /** Link til saken */
  url: string;

  /** true hvis denne er en PR */
  isPullRequest: boolean;

  /** En liste av brukernavn til ansvarlige. Tom liste = ingen som har ansvar for saken */
  assigneeLogins: string[];
}

/**
 * Henter saker (issues) og pull requests fra Github-repoet
 * @returns Saker og PR-er gruppert på komponentnavn
 */
export const fetchIssues = async (): Promise<Map<string, Issue[]>> => {
  let done = false;
  const pageSize = 100;
  let page = 1;

  const issuesPerComponent = new Map<string, Issue[]>();

  while (!done) {
    try {
      const response = await request(`GET /repos/NVE/Designsystem/issues`, {
        per_page: pageSize,
        page: page,
      });
      response.data.forEach((issue: GithubIssue) => {
        issue.labels.forEach((label: GithubLabel) => {
          // Sjekker om denne saken er merka med et komponentnavn.
          // Vi sjekker ikke mot komponentregisteret,
          // for vi vil også ha med navn på komponenter som ikke er laget ennå
          if (label.name?.startsWith('nve-')) {
        const issuesForThisComponent = issuesPerComponent.get(label.name) || [];
        issuesForThisComponent.push({
          title: issue.title,
          url: issue.html_url,
          isPullRequest: !!issue.pull_request,
          assigneeLogins: issue.assignees.map((assignee: GithubAssignee) => assignee.login),
        });
        issuesPerComponent.set(label.name, issuesForThisComponent);
          }
        });
      });

    interface GithubIssue {
      title: string;
      html_url: string;
      pull_request?: object;
      assignees: GithubAssignee[];
      labels: GithubLabel[];
    }

    interface GithubLabel {
      name?: string;
    }

    interface GithubAssignee {
      login: string;
    }
      done = response.data.length < pageSize; // hvis denne sida var full, må vi prøve å hente en side til for å se om det er flere
      page++;
    } catch {
      done = true;
    }
  }
  return issuesPerComponent;
};