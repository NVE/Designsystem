import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import  styles from './nve-step.styles';

export enum StepState {
  NotStarted,
  Started,
  Done,
  Error,
}

export interface StepProps {
  icons: string[];
  title: string;
  description: string;
  state: StepState;
  isSelected: boolean;
  readyForEntrance:boolean;
}

@customElement("nve-step")
export default class NveStep extends LitElement {
  @property({ type: Array })
  icons: string[] = [];

  @property({ reflect: true }) 
  title: string = "";
  
  @property({ type: Number })
  index = 0;
  
  @property({ type: String })
  description: string = "";
  
  @property({ type: Number })
  state: StepState = StepState.NotStarted; // Erstatt med standardverdi

  @property({ type: Number })
  stepperIndex: number = 0;

  @property({ type: Boolean, reflect: true })
  isSelected: boolean = false;

  @property({ type: Boolean })
  isLast: boolean = false;

  @property({ type: Boolean })
  entraceAllowed: boolean = false;

  @property ({type :String })
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  static styles = [styles];

  iconForState(state: StepState): string {
    let icon = "";
    switch (state) {
      case StepState.NotStarted:
        icon = `counter_${this.index + 1}`;
        break;
      case StepState.Started:
        if(this.isSelected)
        icon = `counter_${this.index + 1}`;
        else
        icon = "error";
        break;
      case StepState.Done:
        icon = "check_circle";
        break;
      case StepState.Error:
        icon = "error";
        break;
      default:
        icon = "help_outline";
        break;
    }
    return icon;
  }

  onClick() {
    this.dispatchEvent(
      new CustomEvent("clicked", { detail: { index: this.index } })
    );
  }

  render() {
    return html`
      <div class="step">
        <div class="step-figure"> 
        <span
          @click="${this.onClick}"
          class="material-symbols-outlined ${this.isSelected
            ? "selected"
            : ""} ${this.state == StepState.Error ? "hasError" : ""} ${this.state >0
            ? ""
            : "notStarted"}"
        >
        <nve-icon slot="suffix" name="${this.iconForState(this.state)}"></nve-icon>
        </span>
           
        ${this.isLast
          ? ""
          : html`<div
              class="divider-horizontal ${this.index < this.stepperIndex
                ? "selectedInterval"
                : ""} ${this.state >0? "" : "notStarted"}"
        ></div>`}
        </div>
        <div class="step-title">${this.title}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "nve-step": NveStep;
  }
}
