import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-textarea-demo.styles';

@customElement('nve-textarea-demo')
export default class NveTextareaDemo extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  //autofocus kanskje burde ikke brukes?
  static styles = [styles];

  constructor() {
    super();
  }

  //emit events that dont bubble:blur, focus, select, selectionchange, change, input
  /*
   <textarea
        part="textarea"
        class="textarea__control"
        title=${this.title /** En tom tittel hindrer nettleserens valideringsverktøy i å vises ved overføring
        autocapitalize=${ifDefined(this.autocapitalize)}
        autocomplete=${ifDefined(this.autocomplete)}
        autocorrect=${ifDefined(this.autocorrect)}
        ?autofocus=${this.autofocus}
        cols=${ifDefined(this.cols)}
        ?disabled=${this.disabled}
        form=${ifDefined(this.form)}
        maxlength=${ifDefined(this.maxlength)}
        minlength=${ifDefined(this.minlength)}
        name=${ifDefined(this.name)}
        placeholder=${ifDefined(this.placeholder)}
        ?readonly=${this.readonly}
        ?required=${this.required}
        rows=${ifDefined(this.rows && this.rows >= 3 ? this.rows : 3)}
        spellcheck=${ifDefined(this.spellcheck)}
        wrap=${ifDefined(this.wrap)}
        .value=${live(this.value)}
        inputmode=${ifDefined(this.inputmode)}
        aria-describedby="help-text"
        @change=${this.handleChange}
        @input=${this.handleInput}
        @blur=${this.handleBlur}
  */

  render() {
    return html`
      <!--
     
      ></textarea>-->
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-textarea-demo': NveTextareaDemo;
  }
}
