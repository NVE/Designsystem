import { css } from 'lit';

export default css`
:host::part(combobox) {
    font: var(--body-small);
    color: var(--neutrals-foreground-primary, #0D0D0E);
    max-width: 300px;
    min-width: 200px;
    border-radius: 0.25rem;
    border: var(--borderWidth-default, 1px) solid var(--Neutrals-Border-Default, #878C94);
}

:host(:hover)::part(combobox) {
    border-color: var(--Neutrals-Foreground-Primary, #00131C);
}

:host(:focus-visible)::part(form-control-input) {
    outline: var(--sl-focus-ring); 
    outline-offset: var(--sl-focus-ring-offset); 
}

:host::part(standard-not-disabled-focused-combobox),
:host::part(standard-not-disabled-open-combobox) {
    outline: var(--sl-focus-ring); 
    outline-offset: var(--sl-focus-ring-offset); 
}

:host::part(popup) {
    border-radius: var(--borderRadius-small, 0.25rem);
    border: 1px solid var(--Neutrals-Foreground-Subtle, #006B99);
   
}
/* Må overskrive top for å få mellomrom */
.select[data-current-placement^="top"]::part(popup) {
    top: -146.2px; 
}
/* Må overskrive bottom for å få mellomrom */
.select[data-current-placement^="bottom"]::part(popup) {
    top: 53px; 
}

/* filled*/
:host([filled])::part(listbox) {
    background-color: var(--Neutrals-Background-Primary-Contrast, #EFF8FC);
}
`;
