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
        margin-bottom: unset;
        text-align: left;
    }

    :host([vertical])::part(form-control) {
        align-items: flex-start;
    }

    :host([horizontal])::part(form-control-input) {
        flex-direction: row;
    }
    :host([vertical])::part(form-control-input) {
        flex-direction: column;
    }
`;
