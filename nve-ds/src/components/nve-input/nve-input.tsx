import { Component, Element, Prop, h } from '@stencil/core';
import { classMap } from 'lit/directives/class-map.js';

<script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.9.0/cdn/shoelace-autoloader.js"></script>;

@Component({
  tag: 'nve-input',
  styleUrl: 'nve-input.css',
  scoped: true,
})
export class NveInput {
  /**
   * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
   * to `text`.
   */
  @Prop({ reflect: true }) type:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url' = 'text';

  /** The name of the input, submitted as a name/value pair with form data. */
  @Prop() name = '';

  /** The current value of the input, submitted as a name/value pair with form data. */
  @Prop() value = '';

  /** The default value of the form control. Primarily used for resetting the form control. */
  @Prop() defaultValue = ''; //TODO: Er denne riktig? Se SlInput

  /** The input's size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Draws a filled input. */
  @Prop({ reflect: true }) filled = false;

  /** Draws a pill-style input with rounded edges. */
  @Prop({ reflect: true }) pill = false;

  /** The input's label. If you need to display HTML, use the `label` slot instead. */
  @Prop() label = '';

  /** The input's help text. If you need to display HTML, use the `help-text` slot instead. */
  @Prop({ attribute: 'help-text' }) helpText = '';

  /** Adds a clear button when the input is not empty. */
  @Prop() clearable = false;

  /** Disables the input. */
  @Prop({ reflect: true }) disabled = false;

  /** Placeholder text to show as a hint when the input is empty. */
  @Prop() placeholder = '';

  /** Makes the input readonly. */
  @Prop({ reflect: true }) readonly = false;

  /** Adds a button to toggle the password's visibility. Only applies to password types. */
  @Prop({ attribute: 'password-toggle'}) passwordToggle = false;

  /** Determines whether or not the password is currently visible. Only applies to password input types. */
  @Prop({ attribute: 'password-visible'}) passwordVisible = false;

  /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
  @Prop({ attribute: 'no-spin-buttons'}) noSpinButtons = false;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @Prop({ reflect: true }) form = '';

  /** Makes the input a required field. */
  @Prop({ reflect: true }) required = false;

  /** A regular expression pattern to validate input against. */
  @Prop() pattern: string;

  /** The minimum length of input that will be considered valid. */
  @Prop() minlength: number;

  /** The maximum length of input that will be considered valid. */
  @Prop() maxlength: number;

  /** The input's minimum value. Only applies to date and number input types. */
  @Prop() min: number | string;

  /** The input's maximum value. Only applies to date and number input types. */
  @Prop() max: number | string;

  /**
   * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
   * implied, allowing any numeric value. Only applies to date and number input types.
   */
  @Prop() step: number | 'any';

  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  @Prop() autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

  /** Indicates whether the browser's autocorrect feature is on or off. */
  @Prop() autocorrect: 'off' | 'on';

  /**
   * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
   * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
   */
  @Prop() autocomplete: string;

  /** Indicates that the input should receive focus on page load. */
  @Prop() autofocus: boolean;

  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  @Prop() enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';

  /** Enables spell checking on the input. */
  @Prop({
    //TODO!
    // converter: {
    //   // Allow "true|false" attribute values but keep the property boolean
    //   fromAttribute: value => (!value || value === 'false' ? false : true),
    //   toAttribute: value => (value ? 'true' : 'false')
    // }
  })
  spellcheck = true;

  /**
   * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
   * keyboard on supportive devices.
   */
  @Prop() inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

  /**
   * Shows a clickable info-icon to the right of the label
   * TODO: See the event infoIconClicked
   */
  @Prop() showInfoIcon = false;

  /**
   * Shows current number of characters and max character count (see maxlength) below the input field
   */
  @Prop() showLength = false;

  /**
   * Color theme
   */
  @Prop() variant: 'nve' | 'varsom' = 'nve';

  render() {
    return(
       <sl-input
          type={this.type}
          name={this.name}
          value={this.value}
          defaultValue={this.defaultValue}
          size={this.size}
          filled={this.filled}
          pill={this.pill}
          label={this.label}
          helpText={this.helpText}
          clearable={this.clearable}
          disabled={this.disabled}
          placeholder={this.placeholder}
          readonly={this.readonly}
          passwordToggle={this.passwordToggle}
          passwordVisible={this.passwordVisible}
          noSpinButtons={this.noSpinButtons}
          form={this.form}
          required={this.required}
          pattern={this.pattern}           
          minlength={this.minlength}
          maxlength={this.maxlength}
          min={this.min}
          max={this.max}
          step={this.step as number}
          autocapitalize={this.autocapitalize}
          autocorrect={this.autocorrect}           
          autocomplete={this.autocomplete}
          autofocus={this.autofocus}
          enterkeyhint={this.enterkeyhint}
          spellcheck={this.spellcheck}
          inputmode={this.inputmode}
/* TODO            
          valueAsDate={this.valueAsDate}
          + de andre properties etter valueAsDate i dok'en?

          @change={this.handleChange}
          @input={this.handleInput}
          @invalid={this.handleInvalid}
          @keydown={this.handleKeyDown}
          @focus={this.handleFocus}
          @blur={this.handleBlur}
*/
          >
            //TODO: Slots
            {/* <span slot="help-text" style="display: flex; flex-direction: row; justify-content: space-between; ">
                <span slot="help-text">Hint</span>
                <span slot="help-text">0/20</span>
            </span> */}
        </sl-input>
    );

  }
}