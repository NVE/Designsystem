import { LitElement, html, css } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { StepProps, StepState } from "./nve-step/nve-step.component";
import styles from './nve-stepper.styles';

@customElement("nve-stepper")
export default class NveStepper extends LitElement {
  static styles = [styles];

  @property ({type :String })
  orientation: 'horizontal' | 'vertical' = 'horizontal';
  @property ({ type: Number})
  selectedStep = 0;
  @property({ type: Array })
  steps = new Array<StepProps>();

  @state() atStart = true
  @state() atEnd = true;

  @query(".scroll-menu")
  scrollContainer!: Element;

  stepWidth = 100;

  firstUpdated() {
    this.checkOverflow();
  }

  checkOverflow() {
    const totalStepsWidth = this.steps.length * this.stepWidth;
    const containerWidth = this.scrollContainer!.clientWidth;

    this.atStart = this.scrollContainer!.scrollLeft <= 0;
    this.atEnd = totalStepsWidth <= containerWidth;
  }

  nextStep() {
    if (this.selectedStep < this.steps.length - 1) {
      this.setStep(this.selectedStep + 1);
      this.scrollContainer.scrollBy({
        left: this.stepWidth,
        behavior: "smooth",
      });
    }
    this.scrollToSelectedStep();
    this.checkOverflow();
  }

  prevStep() {
    if (this.selectedStep > 0) {
      this.setStep(this.selectedStep - 1);
      this.scrollContainer.scrollBy({
        left: -this.stepWidth,
        behavior: "smooth",
      });
    }
    this.scrollToSelectedStep();
    this.checkOverflow();
  }

  selectStep(event: any) {
    if(event.detail.index >0){
      if(this.steps[event.detail.index-1].state == StepState.IkkePåbegynt){
        return
      }
    }
    this.setStep(event.detail.index);
  }

  setStep(index: number) {
    this.selectedStep = index;
    for (let i = 0; i < this.steps.length; i++) {
      this.steps[i].isSelected = i === index;
      if (i < index) {
        this.steps[i].state = StepState.Fullført;
      } else if (i === index) {
        this.steps[i].state = StepState.Aktiv;
      } else {
        // this.steps[i].state = StepState.IkkePåbegynt;
      }
    }
    this.steps = [...this.steps];
  }
  scrollingLeft() {
    if (this.scrollContainer.scrollLeft <= 0) {
      this.atStart = true;
      return;
    }
    this.scrollContainer.scrollBy({
      left: -this.stepWidth,
      behavior: "smooth",
    });
    this.atStart = false;
    this.atEnd = false;
  }

  scrollingRight() {
    if (
      this.scrollContainer.scrollLeft >=
      this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth
    ) {
      this.atEnd = true;
      return;
    }
    this.scrollContainer.scrollBy({ left: this.stepWidth, behavior: "smooth" });
    this.atEnd = false;
    this.atStart = false;
  }

  scrollToSelectedStep() {
    const selectedStepLeft = this.stepWidth * this.selectedStep;
    this.scrollContainer.scrollLeft = selectedStepLeft;
  }


  render() {
    return html`
      <div class="stepper ${this.orientation}">
      <nve-button size="small" variant="primary" @click=${this.prevStep}>Prev</nve-button>
        <div class="scroll-menu">
          <a
            class="scroll-button prev"
            @click=${this.scrollingLeft}
            class=${this.atStart ? "hidden" : ""}
            >&#10094;</a
          >
          <div class="flex-container">
            ${this.steps.map(
              (step, index) => html`
                <nve-step
                  @clicked=${this.selectStep}
                  .icons=${step.icons}
                  .title=${step.title}
                  .description=${step.description}
                  .state=${step.state}
                  .isSelected=${step.isSelected}
                  .isLast=${index === this.steps.length - 1}
                  .index=${index}
                  .direction=${this.orientation}
                  >
                </nve-step>
              `
            )}
          </div>
          <a
            class="scroll-button next"
            @click=${this.scrollingRight}
            class=${this.atEnd ? "hidden" : ""}
            >&#10095;</a
          >
        </div>
        <nve-button size="small" variant="primary" @click=${this.nextStep}>Next</nve-button>
      </div>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "my-nve": NveStepper;
  }
}

export interface StepperProps {
  selectedStep: number;
  orientation: 'horizontal' | 'vertical';
}

