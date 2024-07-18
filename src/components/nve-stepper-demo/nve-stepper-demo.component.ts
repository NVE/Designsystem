import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-stepper-demo.styles';
import { StepProps, StepState } from '../nve-stepper/nve-step/nve-step.component';
import { INveStepper } from '../nve-stepper/nve-stepper.component';

const custom_btn_steps1: StepProps[] = [
  {
    title: "Kategorisering",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget.",
    state: StepState.Started,
    isSelected: true,
    readyForEntrance: true,
  },
  {
    title: "Beskrivelse",
    description: "",
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: "Kontakt info",
    description: "",
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
];

const custom_btn_steps2: StepProps[] = [
  {
    title: "Kategorisering",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget.",
    state: StepState.Started,
    isSelected: true,
    readyForEntrance: true,
  },
  {
    title: "Beskrivelse",
    description: "",
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: "Kontakt info",
    description: "",
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
];

const custom_btn_steps3: StepProps[] = [
  {
    title: "Kategorisering",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget.",
    state: StepState.Started,
    isSelected: true,
    readyForEntrance: true,
  },
  {
    title: "Beskrivelse",
    description: "",
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: "Kontakt info",
    description: "",
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
];

@customElement('nve-stepper-demo')
export default class NveStepperDemo extends LitElement implements INveComponent {

  @property({ reflect: true, type: String }) testId: string = '';
  @state() private isLastStep1: boolean = false;
  @state() private isLastStep2: boolean = false;

  static styles = [styles];

  constructor() {
    super();
  }

  private handleNextStep1(element: HTMLElement | null) {
    if (element) {
      const stepper = element as unknown as INveStepper;
      stepper.nextStep();
      this.isLastStep1 = stepper.getCurrentIndex() === (custom_btn_steps1.length - 1);
    }
  }

  private handleNextStep2(element: HTMLElement | null) {
    if (element) {
      const stepper = element as unknown as INveStepper;
      stepper.nextStep();
      this.isLastStep2 = stepper.getCurrentIndex() === (custom_btn_steps2.length - 1);

    }
  }

  private handlePrevStep1(element: HTMLElement | null) {
    if (element) {
      const stepper = element as unknown as INveStepper;
      stepper.prevStep();
      this.isLastStep1 = stepper.getCurrentIndex() === (custom_btn_steps1.length - 1);
    }
  }

  private handlePrevStep2(element: HTMLElement | null) {
    if (element) {
      const stepper = element as unknown as INveStepper;
      stepper.prevStep();
      this.isLastStep2 = stepper.getCurrentIndex() === (custom_btn_steps2.length - 1);
    }
  }


  private customFinishSteps() {
    console.log('Finish steps for custom buttons!');
  }


  protected firstUpdated(): void {
    const stepper1 = this.shadowRoot?.getElementById('verticalStepperWithDefaultButtons') as unknown as INveStepper;
    if (stepper1) {
      stepper1.finishSteps = () => {
        console.log('Custom finish steps for verticalStepperWithDefaultButtons executed!');
      };
    }
  }

  render() {
    return html`
      <h2>Mobile version</h2>
      <div class="container">
        <nve-stepper
          id="verticalStepperWithDefaultButtons"
          .steps=${custom_btn_steps1}
          .orientation=${"vertical"}
          .spaceBetweenSteps=${100}
          .displayMobileVersion=${true}
        ></nve-stepper>
      </div>
      <nve-divider></nve-divider>

      <h2>Vertical with default buttons</h2>
      <div class="container">
        <nve-stepper
          id="verticalStepperWithDefaultButtons"
          .steps=${custom_btn_steps1}
          .orientation=${"vertical"}
          .spaceBetweenSteps=${100}
        ></nve-stepper>
      </div>
      <nve-divider></nve-divider>

      <h2>Horizontal without default buttons</h2>
      <div class="container">
        <nve-stepper
          id="horizontalStepper"
          .steps=${custom_btn_steps2}
          .hideStepButtons=${true}
        ></nve-stepper>
        <div>
          <nve-button
            size="small"
            variant="primary"
            @click=${() => this.handlePrevStep1(this.shadowRoot?.getElementById('horizontalStepper') as HTMLElement | null)}
          >
            Previous
          </nve-button>
          <nve-button
            size="small"
            variant="primary"
            @click=${() => {
              const element = this.shadowRoot?.getElementById('horizontalStepper') as HTMLElement | null;
              if (this.isLastStep1) {
                this.customFinishSteps();
              } else {
                this.handleNextStep1(element);
              }
            }}
          >
            ${this.isLastStep1 ? 'Skicka' : 'Next'}
          </nve-button>
        </div>
      </div>
      <nve-divider></nve-divider>

      <h2>Vertical without default nve-buttons</h2>
      <div class="container">
        <nve-stepper
          id="verticalStepper"
          .steps=${custom_btn_steps3}
          .hideStepButtons=${true}
          .orientation=${"vertical"}
          .spaceBetweenSteps=${100}
        ></nve-stepper>
        <div>
          <nve-button
            size="large"
            variant="secondary"
            @click=${() => this.handlePrevStep2(this.shadowRoot?.getElementById('verticalStepper') as HTMLElement | null)}
          >
            Previous
          </nve-button>
          <nve-button
            size="large"
            variant="secondary"
            @click=${() => {
              const element = this.shadowRoot?.getElementById('verticalStepper') as HTMLElement | null;
              if (this.isLastStep2) {
                this.customFinishSteps();
              } else {
                this.handleNextStep2(element);
              }
            }}
          >
            ${this.isLastStep2 ? 'Skicka' : 'Next'}
          </nve-button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-stepper-demo': NveStepperDemo;
  }
}
