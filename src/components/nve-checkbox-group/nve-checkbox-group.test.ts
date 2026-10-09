import { afterAll, describe, expect, it, vi } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveCheckboxGroup from './nve-checkbox-group.component';
import '../nve-checkbox/nve-checkbox.component';

if (!customElements.get('nve-checkbox-group')) {
  customElements.define('nve-checkbox-group', NveCheckboxGroup);
}

async function waitForSlotWork(el: NveCheckboxGroup) {
  await el.updateComplete;
  await new Promise((resolve) => requestAnimationFrame(() => resolve(undefined)));
  await el.updateComplete;
}

describe('nve-checkbox-group', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('has field--disabled when disabled attribute is set', async () => {
    const el = await fixture<NveCheckboxGroup>(
      html`<nve-checkbox-group disabled>
        <nve-checkbox value="1">Option 1</nve-checkbox>
        <nve-checkbox value="2">Option 2</nve-checkbox>
      </nve-checkbox-group>`
    );
    await el.updateComplete;

    const checkboxes = Array.from(el.querySelectorAll('nve-checkbox')) as Array<{ disabled: boolean }>;
    expect(checkboxes).toHaveLength(2);
    expect(checkboxes.every((checkbox) => checkbox.disabled)).toBe(true);
  });

  it('field__help-text element with correct help text', async () => {
    const el = await fixture<NveCheckboxGroup>(html`<nve-checkbox-group helpText="Help text"></nve-checkbox-group>`);
    const text = el?.shadowRoot?.querySelector('.field__help-text')?.textContent?.trim();

    expect(text).toBe('Help text');
  });

  it('renders content assigned to the helpText and hintText slots', async () => {
    const el = await fixture<NveCheckboxGroup>(html`
      <nve-checkbox-group label="Varsler">
        <p slot="helpText">Se <a href="#">veiledningen</a></p>
        <p slot="hintText">Velg varslene du ønsker</p>
        <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
      </nve-checkbox-group>
    `);

    const helpTextSlot = el.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="helpText"]');
    const hintTextSlot = el.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="hintText"]');

    expect(helpTextSlot?.assignedElements()[0]?.textContent?.trim()).toBe('Se veiledningen');
    expect(hintTextSlot?.assignedElements()[0]?.textContent?.trim()).toBe('Velg varslene du ønsker');
  });

  it('renders helpText and hint attributes instead of their slots when both are provided', async () => {
    const el = await fixture<NveCheckboxGroup>(html`
      <nve-checkbox-group label="Varsler" helpText="Hjelpetekst fra attributtet" hint="Hint fra attributtet">
        <p slot="helpText">Hjelpetekst fra sporet</p>
        <p slot="hintText">Hinttekst fra sporet</p>
        <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
      </nve-checkbox-group>
    `);

    const renderedHelpText = el.shadowRoot?.querySelector('[part="help-text"]');
    const renderedHintText = el.shadowRoot?.querySelector('[part="hint-text"]');

    expect(renderedHelpText?.textContent?.trim()).toBe('Hjelpetekst fra attributtet');
    expect(renderedHintText?.textContent?.trim()).toBe('Hint fra attributtet');
    expect(el.shadowRoot?.querySelector('slot[name="helpText"]')).toBeNull();
    expect(el.shadowRoot?.querySelector('slot[name="hintText"]')).toBeNull();
  });

  it('horizontal layout', async () => {
    const el = await fixture<NveCheckboxGroup>(
      html`<nve-checkbox-group orientation="horizontal"></nve-checkbox-group>`
    );

    const container = el?.shadowRoot?.querySelector('.checkbox-group--horizontal');

    expect(container).toBeTruthy();
  });

  it('has correct size', async () => {
    const el = await fixture<NveCheckboxGroup>(
      html`<nve-checkbox-group size="large">
        <nve-checkbox value="1">Option 1</nve-checkbox>
        <nve-checkbox value="2">Option 2</nve-checkbox>
      </nve-checkbox-group>`
    );
    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector('slot:not([name])');
    slot?.dispatchEvent(new Event('slotchange'));
    await waitForSlotWork(el);

    const checkboxes = Array.from(el.querySelectorAll('nve-checkbox')) as Array<{ size: string }>;
    expect(checkboxes).toHaveLength(2);
    expect(checkboxes.every((checkbox) => checkbox.size === 'large')).toBe(true);
  });

  it('field__hint-text element with correct hint text', async () => {
    const el = await fixture<NveCheckboxGroup>(html`<nve-checkbox-group hint="Hint text"></nve-checkbox-group>`);
    const text = el?.shadowRoot?.querySelector('.field__hint-text')?.textContent?.trim();

    expect(text).toBe('Hint text');
  });

  it('test if selectedValues are removed from the DOM', async () => {
    const options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ];
    const selectedValues = ['1'];
    const el = await fixture<NveCheckboxGroup>(
      html`<nve-checkbox-group .options=${options} .selectedValues=${selectedValues}
        ><nve-checkbox value="1">Option 1</nve-checkbox>
        <nve-checkbox value="2">Option 2</nve-checkbox></nve-checkbox-group
      >`
    );
    expect(el.hasAttribute('selectedValues')).toBeFalsy();
  });

  it('triggers change event when a checkbox is clicked', async () => {
    const el = await fixture<NveCheckboxGroup>(html`
      <nve-checkbox-group>
        <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
      </nve-checkbox-group>
    `);

    type CheckboxGroupChangeDetail = {
      value: string;
      action: 'select' | 'deselect';
    };

    let selectedValue = '';

    const submitSpy = vi.fn();

    el.addEventListener('change', (event: Event) => {
      const customEvent = event as CustomEvent<CheckboxGroupChangeDetail>;
      selectedValue = customEvent.detail.value;
      submitSpy(customEvent);
    });

    const checkbox = el.querySelector('nve-checkbox') as HTMLElement;
    const input = checkbox.shadowRoot?.querySelector('input') as HTMLInputElement;
    input.click();

    expect(submitSpy).toHaveBeenCalledTimes(1);
    expect(selectedValue).toBe('flood');
  });

  describe('validate method', () => {
    it('returns true when no validation rules are set', async () => {
      const el = await fixture<NveCheckboxGroup>(
        html` <nve-checkbox-group label="Status" value="current">
          <nve-checkbox value="planned">Planlagt</nve-checkbox>
          <nve-checkbox value="current">Pågående</nve-checkbox>
        </nve-checkbox-group>`
      );
      const isValid = el.validate();
      expect(isValid).toBe(true);
      expect(el.internalValidationMessage).toBe('');
    });

    it('returns false and sets internalValidationMessage when a validation rule fails', async () => {
      const el = await fixture<NveCheckboxGroup>(html`
        <nve-checkbox-group
          label="Status"
          .validationRules=${[(value: string) => value.length > 0 || 'Feltet kan ikke være tomt']}
        >
          <nve-checkbox value="planned">Planlagt</nve-checkbox>
          <nve-checkbox value="current">Pågående</nve-checkbox>
        </nve-checkbox-group>
      `);

      const isValid = el.validate();
      expect(isValid).toBe(false);
      expect(el.internalValidationMessage).toBe('Feltet kan ikke være tomt');
    });

    it('returns true and clears internalValidationMessage when all validation rules pass', async () => {
      const el = await fixture<NveCheckboxGroup>(html`
        <nve-checkbox-group
          label="Status"
          .validationRules=${[(value: string[]) => value.length > 0 || 'Feltet kan ikke være tomt']}
        >
          <nve-checkbox value="planned">Planlagt</nve-checkbox>
          <nve-checkbox value="current">Pågående</nve-checkbox>
        </nve-checkbox-group>
      `);

      el._selectedValues = ['planned'];
      const isValid = el.validate();
      expect(isValid).toBe(true);
      expect(el.internalValidationMessage).toBe('');
    });
  });
});
