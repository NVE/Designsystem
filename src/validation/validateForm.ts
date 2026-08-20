import type { FormValidationComponent } from '@interfaces/NveComponent.interface';

const NVE_VALIDATABLE_SELECTOR = [
  'nve-input',
  'nve-textarea',
  'nve-radio-group',
  'nve-checkbox-group',
  'nve-combobox',
].join(',');

/**
 * Valideringsresultat for et skjema.
 * isValid: boolean - Indikerer om skjemaet er gyldig eller ikke.
 * invalidFields: FormValidationComponent[] - En liste over alle ugyldige felter i skjemaet.
 * firstInvalidField: FormValidationComponent | undefined - Det første ugyldige feltet i skjemaet, eller undefined hvis alle feltene er gyldige.
 */
export type ValidateFormResult = {
  isValid: boolean;
  invalidFields: FormValidationComponent[];
  firstInvalidField: FormValidationComponent | undefined;
};

/**
 * Validerer et skjema ved å sjekke alle feltene som implementerer FormValidationComponent.
 * Hvis et felt ikke er gyldig, legges det til i invalidFields-listen, og firstInvalidField settes til det første ugyldige feltet som finnes.
 * @param event - SubmitEvent - Hendelsen som utløser valideringen, vanligvis en form submission.
 * @returns ValidateFormResult - Resultatet av valideringen
 */
export function validateForm(event: SubmitEvent): ValidateFormResult {
  const form = event.currentTarget as HTMLFormElement;
  const fields = form.querySelectorAll(NVE_VALIDATABLE_SELECTOR) as NodeListOf<FormValidationComponent>;
  let validation: ValidateFormResult = {
    isValid: true,
    invalidFields: [],
    firstInvalidField: undefined,
  };

  fields.forEach((field) => {
    if (typeof field.validate === 'function') {
      const fieldIsValid = field.validate();

      if (!fieldIsValid) {
        validation.isValid = false;
        validation.invalidFields.push(field);
        if (!validation.firstInvalidField) {
          validation.firstInvalidField = field;
        }
      }
    }
  });

  return validation;
}

/**
 * ValidationRule er en type som representerer en valideringsregel for et skjema.
 * Den tar en verdi av typen T (standard er unknown) og returnerer enten true hvis verdien er gyldig, eller en tekst som beskriver feilen hvis verdien er ugyldig.
 */
export type ValidationRule<T = unknown> = (value: T) => true | string;

export const rules = {
  /**
   * Sjekker om en verdi er definert og ikke tom.
   * @param value - Verdien som skal sjekkes.
   * @returns boolean - true hvis verdien er definert og ikke tom, ellers false.
   */
  required: (value: unknown): boolean => {
    if (value === undefined || value === null) return false;

    if (typeof value === 'string') {
      return value.trim() !== '';
    }

    if (Array.isArray(value)) {
      return value.length > 0;
    }

    return true;
  },

  /**
   * Sjekker om en verdi har en minimum lengde.
   * @param length - Minimum lengde som verdien må ha.
   * @param value - Verdien som skal sjekkes.
   * @returns boolean - true hvis verdien har en lengde som er større enn eller lik minimum lengden, ellers false.
   */
  minLength: (length: number, value: unknown) => {
    if (value === undefined || value === null || value === '') return false;
    if (typeof value === 'string') return value.length >= length;
    if (Array.isArray(value)) return value.length >= length;
    return false;
  },
  /**
   * Sjekker om en verdi har en maksimum lengde.
   * @param length - Maksimum lengde som verdien kan ha.
   * @param value - Verdien som skal sjekkes.
   * @returns boolean - true hvis verdien har en lengde som er mindre enn eller lik maksimum lengden, ellers false.
   */
  maxLength: (length: number, value: unknown) => {
    if (value === undefined || value === null || value === '') return false;
    if (typeof value === 'string') return value.length <= length;
    if (Array.isArray(value)) return value.length <= length;
    return false;
  },
  /**
   * Sjekker om en verdi er større enn eller lik en minimum verdi.
   * @param minValue - Minimum verdi som verdien må være større enn eller lik.
   * @param value - Verdien som skal sjekkes.
   * @returns boolean - true hvis verdien er større enn eller lik minimum verdien, ellers false.
   */
  min: (minValue: number, value: unknown) => {
    if (value === '' || value === null || value === undefined || Array.isArray(value)) return false;

    const numericValue = Number(value);
    if (Number.isNaN(numericValue)) return false;

    return numericValue >= minValue;
  },
  /**
   * Sjekker om en verdi er mindre enn eller lik en maksimum verdi.
   * @param maxValue - Maksimum verdi som verdien må være mindre enn eller lik.
   * @param value - Verdien som skal sjekkes.
   * @returns boolean - true hvis verdien er mindre enn eller lik maksimum verdien, ellers false.
   */
  max: (maxValue: number, value: unknown) => {
    if (value === '' || value === null || value === undefined || Array.isArray(value)) return false;

    const numericValue = Number(value);
    if (Number.isNaN(numericValue)) return false;

    return numericValue <= maxValue;
  },
  /**
   * Sjekker om en verdi er en gyldig e-postadresse.
   * @param value - Verdien som skal sjekkes.
   * @returns boolean - true hvis verdien er en gyldig e-postadresse, ellers false.
   */
  email: (value: unknown) => {
    if (value === undefined || value === null || value === '' || Array.isArray(value) || typeof value !== 'string') {
      return false;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  },
};
