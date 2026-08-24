import type { LitElement } from 'lit';
import type { ValidationRule } from '../validation/validateForm';

/**
 * Interface som alle komponenter må ha før de deler felles funksjonalitet.
 * INveComponent
 */
export interface INveComponent {
  /**
   * En unik identifikator for testformål.
   * Standardverdien er undefined (så at den ikke vises i DOMen hvis man ikke skal bruke den), men du kan angi id-en til komponenten med for eksempel testId="example_id"
   */
  testId: string | undefined;
}

/**
 * Interface for skjemakomponenter som skal implementere validering.
 * Den krever at en komponent må ha en validate() metode som returnerer en boolean som
 * indikerer om komponenten er gyldig eller ikke.
 * internalValidationMessage er den interne valideringsmeldingen for komponenten.
 */
export interface FormValidationComponent extends LitElement, INveComponent {
  validate(): boolean;
  validationRules: Array<ValidationRule>;
  errorMessage: string;
  internalValidationMessage: string;
}
