import { html } from 'lit';
import '../../components/nve-button/nve-button.component';

const checkedValues: string[] = [];

/**  Metoden for å teste custom validering*/
const validateCheckboxGroupDemo = (e: any) => {
  e.preventDefault();

  const chgrElement = document.getElementById('checkboxGroup') as HTMLInputElement;
  if (!chgrElement) return;
  if (!checkedValues.includes('3')) {
    chgrElement.setCustomValidity('Feil svar, må inneholde 3');
  } else {
    chgrElement.setCustomValidity('');
  }
};

export interface NveCheckboxGroupProps {
  disabled: boolean;
  validation: boolean;
  orientation: 'vertical' | 'horizontal';
  label: string;
  tooltip: string;
  errorMessage: string;
  required: boolean;
  requiredLabel: string;
  selectedValues: string[];
}

export const NveCheckboxGroup = (props: NveCheckboxGroupProps) => {
  if (props.validation){
  return html`
  <form @submit="${(e: any) => validateCheckboxGroupDemo(e)}">
      <nve-checkbox-group
        ?disabled=${props.disabled}
        orientation=${props.orientation}
        label=${props.label}
        tooltip=${props.tooltip}
        errorMessage=${props.errorMessage}
        ?required=${props.required}
        requiredLabel=${props.requiredLabel}
        .selectedValues=${checkedValues}
        id="checkboxGroup"
      >
        <nve-checkbox value="1">1</nve-checkbox>
        <nve-checkbox value="2">2</nve-checkbox>
        <nve-checkbox value="3">3</nve-checkbox>
      </nve-checkbox-group>
        <nve-button style="margin-top:10px" type="submit" variant="primary" size="small">Sjekk svar</nve-button>
    </form>
  `;}else{
    return html`
      <nve-checkbox-group
        ?disabled=${props.disabled}
        orientation=${props.orientation}
        label=${props.label}
        tooltip=${props.tooltip}
        errorMessage=${props.errorMessage}
        ?required=${props.required}
        requiredLabel=${props.requiredLabel}
      >
        <nve-checkbox>value</nve-checkbox>
        <nve-checkbox>value</nve-checkbox>
        <nve-checkbox>value</nve-checkbox>
      </nve-checkbox-group>
    `;
  }
};
