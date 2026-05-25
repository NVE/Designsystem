import { INveFormComponent } from '@interfaces/NveComponent.interface';

type LengthLike = { length: number };

const NVE_VALIDATABLE_SELECTOR = [
  'nve-input',
  'nve-textarea',
  'nve-radio-group',
  'nve-checkbox-group',
  'nve-combobox',
].join(',');

export function validateFormWithHelpers(form: HTMLFormElement): ValidateFormResult {
  const fields = form.querySelectorAll(NVE_VALIDATABLE_SELECTOR) as NodeListOf<INveFormComponent>;
  let validation: ValidateFormResult = {
    isValid: true,
    invalidFields: [],
  };

  fields.forEach((field) => {
    if (typeof field.validateWithHelpers === 'function') {
      const fieldIsValid = field.validateWithHelpers();

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

export function validateFormSimple(form: HTMLFormElement): ValidateFormResult {
  const fields = form.querySelectorAll(NVE_VALIDATABLE_SELECTOR) as NodeListOf<INveFormComponent>;
  let validation: ValidateFormResult = {
    isValid: true,
    invalidFields: [],
  };

  fields.forEach((field) => {
    if (typeof field.validateSimple === 'function') {
      const fieldIsValid = field.validateSimple();

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

export type ValidationRuleSimple<T = unknown> = (value: T) => true | string;

export type ValidationRuleWithHelpers<T = unknown> = (value: T, component?: HTMLElement) => true | string;
export type ValidateFormResult = {
  isValid: boolean;
  invalidFields: INveFormComponent[];
  firstInvalidField?: INveFormComponent;
};

export const rules = {
  required:
    (message: string): ValidationRuleWithHelpers =>
    (value) => {
      if (value === undefined || value === null) return message;

      if (typeof value === 'string') {
        return value.trim() !== '' || message;
      }

      if (Array.isArray(value)) {
        return value.length > 0 || message;
      }

      return true;
    },

  minLength:
    (length: number, message: string): ValidationRuleWithHelpers<LengthLike> =>
    (value) =>
      value.length >= length || message,

  maxLength:
    (length: number, message: string): ValidationRuleWithHelpers<LengthLike> =>
    (value) =>
      value.length <= length || message,

  min:
    (minValue: number, message: string): ValidationRuleWithHelpers<string | number> =>
    (value) => {
      if (Array.isArray(value)) return true;
      if (value === '' || value === null || value === undefined) return true;

      const numericValue = Number(value);
      if (Number.isNaN(numericValue)) return true;

      return numericValue >= minValue || message;
    },

  max:
    (maxValue: number, message: string): ValidationRuleWithHelpers<string | number> =>
    (value) => {
      if (Array.isArray(value)) return true;
      if (value === '' || value === null || value === undefined) return true;

      const numericValue = Number(value);
      if (Number.isNaN(numericValue)) return true;

      return numericValue <= maxValue || message;
    },

  email:
    (message: string): ValidationRuleWithHelpers<string> =>
    (value) => {
      if (Array.isArray(value)) return true;
      if (!value) return true;
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || message;
    },

  custom:
    <T>(validator: (value: T) => boolean, message: string): ValidationRuleWithHelpers<T> =>
    (value) =>
      validator(value) || message,
};
