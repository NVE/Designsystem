import { customElement } from "lit/decorators.js";
import { SlRadio, SlRadioGroup, SlRadioButton } from "@shoelace-style/shoelace";

@customElement("nve-radio-group")
export class NveRadioGroup extends SlRadioGroup {
    constructor() {
        super();
    }

    /* Overskriv private metoder i sl-radio-group for å støtte nve-radio og nve-radio-button elementer */
    private getAllRadios = function () {
        return [...this.querySelectorAll<SlRadio | SlRadioButton | NveRadio | NveRadioButton>("sl-radio, sl-radio-button, nve-radio, nve-radio-button")];
    };

    private handleRadioClick = function (event) {
        const target = event.target.closest("sl-radio, sl-radio-button, nve-radio, nve-radio-button");
        const radios = this.getAllRadios();
        const oldValue = this.value;
        if (target.disabled) {
            return;
        }
        this.value = target.value;
        radios.forEach((radio) => (radio.checked = radio === target));
        if (this.value !== oldValue) {
            this.emit("sl-change");
            this.emit("sl-input");
        }
    };

    private syncRadioElements = async function () {
        const radios = this.getAllRadios();

        await Promise.all(
            // Sync the checked state and size
            radios.map(async (radio) => {
                await radio.updateComplete;
                radio.checked = radio.value === this.value;
                radio.size = this.size;
            })
        );

        this.hasButtonGroup = radios.some((radio) => radio.tagName.toLowerCase() === "sl-radio-button" || radio.tagName.toLowerCase() === "nve-radio-button");

        if (!radios.some((radio) => radio.checked)) {
            if (this.hasButtonGroup) {
                const buttonRadio = radios[0].shadowRoot?.querySelector("button");

                if (buttonRadio) {
                    buttonRadio.tabIndex = 0;
                }
            } else {
                radios[0].tabIndex = 0;
            }
        }

        if (this.hasButtonGroup) {
            const buttonGroup = this.shadowRoot?.querySelector("sl-button-group") || this.shadowRoot?.querySelector("nve-button-group");

            if (buttonGroup) {
                buttonGroup.disableRole = true;
            }
        }
    };

    private syncRadios = function () {
        if (
            (customElements.get("sl-radio") && customElements.get("sl-radio-button")) ||
            (customElements.get("nve-radio") && customElements.get("nve-radio-button"))
        ) {
            this.syncRadioElements();
            return;
        }

        if (customElements.get("sl-radio") || customElements.get("nve-radio")) {
            this.syncRadioElements();
        } else {
            customElements.whenDefined("sl-radio").then(() => this.syncRadios());
        }

        if (customElements.get("sl-radio-button") || customElements.get("nve-radio-button")) {
            this.syncRadioElements();
        } else {
            // Rerun this handler when <sl-radio> or <sl-radio-button> is registered
            customElements.whenDefined("sl-radio-button").then(() => this.syncRadios());
            customElements.whenDefined("nve-radio-button").then(() => this.syncRadios());
        }
    };
}

declare global {
    interface HTMLElementTagNameMap {
        "nve-radio-group": NveRadioGroup;
    }
}
