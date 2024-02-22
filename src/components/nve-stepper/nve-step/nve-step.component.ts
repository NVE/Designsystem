import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import  styles from './nve-step.styles';

export enum StepState {
  IkkePåbegynt,
  Aktiv,
  Fullført,
  Feilet,
}

export interface StepProps {
  icons: string[];
  title: string;
  description: string;
  state: StepState;
  isSelected: boolean;
}

@customElement("nve-step")
export default class NveStep extends LitElement {
  @property({ type: Array })
  icons: string[] = [];

  @property({ reflect: true }) 
  title: string = '';

  @property({ type: Number })
  index = 0;

  @property({ type: String })
  titleText: string = "";

  @property({ type: String })
  description: string = "";

  @property({ type: Number })
  state: StepState = StepState.IkkePåbegynt; // Erstatt med standardverdi

  @property({ type: Boolean })
  isSelected: boolean = false;

  @property({ type: Boolean })
  isLast: boolean = false;

  @property ({type :String })
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  // @state() hasError = false;
  // @state() started = false;
  // @state() evaluated = false;

  static styles = [styles];

  setState(){}

  iconForState(state: StepState): string {
    let icon = "";
    // this.isSelected = false;
    switch (state) {
      case StepState.IkkePåbegynt:
        icon = `counter_${this.index + 1}`;
        break;
      case StepState.Aktiv:
        icon = `counter_${this.index + 1}`;
        break;
      case StepState.Fullført:
      case StepState.Feilet:
        icon = "check_circle";
        break;
      default:
        icon = "help_outline";
        break;
    }
    this.requestUpdate();
    return icon;
  }

  onClick() {
    this.dispatchEvent(
      new CustomEvent("clicked", { detail: { index: this.index } })
    );
    // this.requestUpdate();
    // // this.isSelected = true;
    console.log("this.isSelected xx", this.isSelected)
    setTimeout(()=> console.log("this.isSelected xx", this.isSelected), 1000)
  }

  render() {
    return html`
      <div class="step">
        <span
          @click="${this.onClick}"
          class="material-symbols-outlined ${this.isSelected
            ? "selected"
            : ""} ${this.state == StepState.Feilet ? "hasError" : ""} ${this.state >0
            ? ""
            : "notStarted"}"
        >
        <nve-icon slot="suffix" name="${this.iconForState(this.state)}"></nve-icon>
        </span>
        
        
        ${this.isLast
          ? ""
          : html`<div
              class="divider-horizontal ${this.isSelected
                ? "selectedInterval"
                : ""} ${this.state >0? "" : "notStarted"}"
            ></div>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "nve-step": NveStep;
  }
}
