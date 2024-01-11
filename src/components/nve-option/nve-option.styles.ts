import { css } from 'lit';

export default css`

:host{
    font: var(--body-small);
    color: var(--neutrals-foreground-primary, #0D0D0E);
}
.option--hover:not(.option--current):not(.option--disabled){
    background-color: var(--neutrals-background-primary-contrast, #F7F7F8);
    
}
.option--selected:not(.option--disabled){
    background-color: var(--neutrals-background-secondary, #E4E5E7);
    color: var(--neutrals-foreground-primary, #0D0D0E);
}

/* fjerner checkmark siden den er hvit */
:host::part(checked-icon) {
   display: none;
}

.option--current,
.option--current.option--disabled {
    color: var(--neutrals-foreground-primary, #0D0D0E);
    background: var(--Neutrals-Background-Primary-Contrast, #EFF8FC);

}

:host(:focus-visible) .option{
    box-shadow: none; 
    background-color: var(--neutrals-background-secondary, #E4E5E7);
 
}
:host(:focus-visible) .option.option--disabled{
    opacity: 0.5;

}
/* hvit hover når filled */
:host([filled]) .option--hover:not(.option--current):not(.option--disabled):hover {
    background-color: var(--neutrals-background-primary, #FFF);
}
`;
