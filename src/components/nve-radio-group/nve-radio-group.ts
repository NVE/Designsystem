import { customElement, property } from "lit/decorators.js";
import { SlRadio, SlRadioGroup, SlRadioButton } from "@shoelace-style/shoelace";
import { NveRadioButton } from "../nve-radio-button/nve-radio-button";
import { NveRadio } from "../nve-radio/nve-radio";
import styles from "./nve-radio-group.styles";

@customElement("nve-radio-group")
/**
 * Representerer en tilpasset radiogruppekomponent som utvider SlRadioGroup-klassen.
 * Denne komponenten tillater bruk av nve-radio og nve-radio-button elementer inne i <nve-radio-group></nve-radio-group>
 * ved å overstyre noen private metoder i SlRadioGroup.
 *
 * @extends SlRadioGroup
 *
 * @dependency NveRadioButton, NveRadio
 *
 * @property {boolean} horizontal - Om radio-gruppen skal rendres horisontalt
 * @property {boolean} vertical   - Om radio-gruppen skal rendres vertikalt
 *
 * @slot - The default slot where `<nve-radio>` or `<nve-radio-button>` elements are placed.
 * @slot label - The radio group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.
 *
 * @example <nve-radio-group horizontal value="1"><nve-radio value="1">Value 1 (checked)</nve-radio></nve-radio-group>
 * @example <nve-radio-group vertical value="1"><nve-radio value="1">Value 1 (checked)</nve-radio></nve-radio-group>
 *
 */
export class NveRadioGroup extends SlRadioGroup {
    constructor() {
        super();
    }
    @property({ type: Boolean, reflect: true }) horizontal = false;
    @property({ type: Boolean, reflect: true }) vertical = false;

    static styles = [SlRadioGroup.styles, styles];

    /* Overskriver private metoder i sl-radio-group for å kunne bruke nve-radio og nve-radio-button elementer inne i <nve-radio-group></nve-radio-group>*/
    private getAllRadios = function () {
        // Lagt til nve-radio og nve-radio-button
        return [...this.querySelectorAll<SlRadio | SlRadioButton | NveRadio | NveRadioButton>("sl-radio, sl-radio-button, nve-radio, nve-radio-button")];
    };

    private handleRadioClick = function (event) {
        // Lagt til nve-radio og nve-radio-button
        const target = event.target.closest("sl-radio, sl-radio-button, nve-radio, nve-radio-button");
        const radios = this.getAllRadios();
        const oldValue = this.value;
        if (target.disabled) {
            return;
        }
        // lagt til focus på klikk
        const controls = target.shadowRoot.querySelectorAll("span[part='base']");
        if(controls.length > 0) {
            controls[0].focus();
            // debugger;
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

        // lagt til nve-radio-button
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
            // lagt til nve-button-group
            const buttonGroup = this.shadowRoot?.querySelector("sl-button-group") || this.shadowRoot?.querySelector("nve-button-group");

            if (buttonGroup) {
                buttonGroup.disableRole = true;
            }
        }
    };

    private syncRadios = function () {
        if (
            (customElements.get("sl-radio") && customElements.get("sl-radio-button")) ||
            // lagt til nve-radio og nve-radio-button
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

        // lagt til nve-radio-button
        if (customElements.get("sl-radio-button") || customElements.get("nve-radio-button")) {
            this.syncRadioElements();
        } else {
            // Rerun this handler when <sl-radio> or <sl-radio-button> is registered
            customElements.whenDefined("sl-radio-button").then(() => this.syncRadios());
            // lagt til nve-radio-button
            customElements.whenDefined("nve-radio-button").then(() => this.syncRadios());
        }
    };
}

declare global {
    interface HTMLElementTagNameMap {
        "nve-radio-group": NveRadioGroup;
    }
}
