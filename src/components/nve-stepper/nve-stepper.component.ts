import { LitElement, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { StepProps, StepState } from './nve-step/nve-step.component';
import styles from './nve-stepper.styles';

@customElement('nve-stepper')
export default class NveStepper extends LitElement {
  static styles = [styles];

  @property({ type: String })
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  @property({ type: Number })
  selectedStep = 0;
  
  @property({ type: Array })
  steps = new Array<StepProps>();

  @state() atStart = true;
  @state() atEnd = true;

  @query('.scroll-menu')
  scrollContainer!: Element;

  stepWidth = 100;

  firstUpdated() {
    setTimeout(()=>this.checkOverflow(), 100)
    this.checkOverflow();
    this.steps[0].isSelected = true;
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
        behavior: 'smooth',
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
        behavior: 'smooth',
      });
    }
    this.scrollToSelectedStep();
    this.checkOverflow();
  }

  selectStep(event: any) {
    if (event.detail.index > 0) {
      if (this.steps[event.detail.index - 1].state == StepState.NotStarted) {
        return;
      }
    }
    this.setStep(event.detail.index);
  }

  setStep(index: number) {
    if (this.steps[index].readyForEntrance) {
      this.selectedStep = index;
      for (let i = 0; i < this.steps.length; i++) {
        this.steps[i].isSelected = i === index;
        if (i <= index) {
          if (this.steps[i].state < StepState.Done) {
            this.steps[i].state = StepState.Started;
          }
        }
        this.steps = [...this.steps];
      }
    }
  }
  scrollingLeft() {
    if (this.scrollContainer.scrollLeft <= 0) {
      this.atStart = true;
      return;
    }
    this.scrollContainer.scrollBy({
      left: -this.stepWidth,
      behavior: 'smooth',
    });
    this.atStart = false;
    this.atEnd = false;
  }

  scrollingRight() {
    if (this.scrollContainer.scrollLeft >= this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth) {
      this.atEnd = true;
      return;
    }
    this.scrollContainer.scrollBy({ left: this.stepWidth, behavior: 'smooth' });
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
        <nve-button size="small" style="z-index:2" variant="primary" @click=${this.prevStep}>Prev</nve-button>
        <div class="scroll-menu">
          <a class="scroll-button prev ${this.atStart ? 'hidden' : ''}" @click=${this.scrollingLeft}>&#10094;</a>
          <div class="flex-container">
            ${this.steps.map(
              (step, index) => html`
                <nve-step
                  @clicked=${this.selectStep}
                  .icons=${step.icons}
                  .title=${step.title}
                  .description=${step.description}
                  .state=${step.state}
                  .stepperIndex=${this.selectedStep}
                  .isSelected=${step.isSelected}
                  .isLast=${index === this.steps.length - 1}
                  .index=${index}
                  .readyForEntrance=${step.readyForEntrance}
                  .direction=${this.orientation}
                >
                </nve-step>
              `
            )}
          </div>
          <a class="scroll-button next ${this.atEnd ? 'hidden' : ''}" @click=${this.scrollingRight}>&#10095;</a>
        </div>
        <nve-button size="small" style="z-index:2" variant="primary" @click=${this.nextStep}>Next</nve-button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-nve': NveStepper;
  }
}

export interface StepperProps {
  selectedStep: number;
  orientation: 'horizontal' | 'vertical';
}
