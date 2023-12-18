import { css } from "lit";

export default css`
    /* Vis hover effekt på hele sammensatte komponenten */
    :host(:hover),
    :host(:hover)::part(control),
    :host(:hover)::part(label),
    :host(:hover)::part(base) {
        color: var(--neutrals-foreground-subtle);
    }

    /* Sett "ring" og fjern default blå bakgrunn fra shoelace */
    :host(:hover)::part(control) {
        border: solid var(--border-width-strong) var(--neutrals-foreground-subtle);
        background-color: var(--neutrals-background-primary);
    }

    /* overstyr opacity på disabled */
    .radio--disabled {
        opacity: 0.38;
    }

    /* Overstyr styling på control, label og radio */
    .radio__control {
        color: var(--neutrals-foreground-primary);
        border: solid var(--border-width-strong) var(--neutrals-foreground-primary);
    }

    .radio__label {
        display: inline-flex;
        margin-inline-start: unset; /* 0.5rem; ta bort margin */
    }

    .radio {
        font: var(--label-x-small-light);

        color: var(--neutrals-foreground-primary);
        background-color: var(--neutrals-background-primary);

        display: inline-flex;
        align-items: center;
        gap: var(--spacing-x-small, 0.5rem); /* sett gap */
    }

    .radio--checked .radio__control {
        color: var(--neutrals-foreground-primary);
        border-color: var(--neutrals-foreground-primary);
        background-color: var(--neutrals-background-primary);
    }
`;
