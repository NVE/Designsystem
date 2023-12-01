import { css } from 'lit';

export default css`
    :host(:hover),
    :host(:hover)::part(label),
    :host(:hover)::part(control),
    :host(:hover)::part(base) {
        border-color: var(--interactive-primary-foreground-hover);
        color: var(--interactive-primary-foreground-hover);
        background-color: var(--interactive-primary-background-hover);
        /* background-color: var(--neutrals-background-primary); */
    }

    :host(:focus) {        
        border: 2px solid var(--interactive-primary-foreground-border-focus, #008ffb);
    }

    /* Overstyr farge på "prikken" i kontrollen */
    .radio__control {
        color: var(--neutrals-foreground-primary);
        border: solid var(--sl-input-border-width) var(--neutrals-foreground-primary);
    }

    .radio__label {
        display: inline-flex;
        margin-inline-start: unset;
    }

    .radio {
        font: var(--label-x-small-light);

        color: var(--neutrals-foreground-primary);
        background-color: var(--neutrals-background-primary);

        display: inline-flex;
        align-items: center;
        gap: var(--spacing-x-small, 0.5rem);
    }

    .radio--disabled {
        opacity: 0.38;
    }

    .radio--checked .radio__control {
        color: var(--neutrals-foreground-primary);
        border-color: var(--neutrals-foreground-primary);
        background-color: var(--neutrals-background-primary);
    }
`;