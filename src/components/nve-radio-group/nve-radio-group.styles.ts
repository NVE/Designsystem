import { css } from "lit";

export default css`
    :host::part(form-control),
    :host::part(form-control-input) {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-x-small, 0.5rem);
    }

    :host::part(form-control-input) {
        align-items: flex-start;
    }

    :host::part(form-control-label) {
        display: flex;
        color: var(--neutrals-foreground-primary);
        font: var(--label-x-small-light);
        margin-bottom: unset;
        text-align: left;
    }

    :host([orientation='vertical'])::part(form-control),
    :host([vertical])::part(form-control) {
        align-items: flex-start;
    }

    :host([orientation='horizontal'])::part(form-control-input),
    :host([horizontal])::part(form-control-input) {
        flex-direction: row;
    }
    :host([orientation='vertical'])::part(form-control-input),
    :host([vertical])::part(form-control-input) {
        flex-direction: column;
    }    
`;
