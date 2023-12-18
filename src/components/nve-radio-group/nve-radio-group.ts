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
 * @property {string} orientation = horizontal eller vertical - Om radio-gruppen skal rendres horisontalt
 *
 * @slot Standard slot hvor `<nve-radio>` ellet `<nve-radio-button>` plasseres
 *
 * @example <nve-radio-group horizontal value="1"><nve-radio value="1">Value 1 (checked)</nve-radio></nve-radio-group>
 * @example <nve-radio-group vertical value="1"><nve-radio value="1">Value 1 (checked)</nve-radio></nve-radio-group>
 *
 */
// @ts-ignore - overskriving av private metoder i sl-radio-group
export class NveRadioGroup extends SlRadioGroup {
    constructor() {
        super();
    }
    @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';

    static styles = [SlRadioGroup.styles, styles];

    /* Overskriver private metoder i sl-radio-group for å kunne bruke nve-radio og nve-radio-button elementer inne i <nve-radio-group></nve-radio-group>*/
    // @ts-ignore - overskriving av private metoder i sl-radio-group
    private getAllRadios = function () {
        // Lagt til nve-radio og nve-radio-button
        // @ts-ignore - bruk av this i private metode
        return [...this.querySelectorAll<SlRadio | SlRadioButton | NveRadio | NveRadioButton>("sl-radio, sl-radio-button, nve-radio, nve-radio-button")];
    };

    // @ts-ignore - overskriving av private metoder i sl-radio-group
    private handleRadioClick = function (event) {
        // Lagt til nve-radio og nve-radio-button
        const target = event.target.closest("sl-radio, sl-radio-button, nve-radio, nve-radio-button");
        // @ts-ignore - this
        const radios = this.getAllRadios();
        // @ts-ignore - this
        const oldValue = this.value;
        if (target.disabled) {
            return;
        }
        // lagt til focus på klikk
        const controls = target.shadowRoot.querySelectorAll("span[part='base']");
        if (controls.length > 0) {
            controls[0].focus();
            // debugger;
        }
        // @ts-ignore - this
        this.value = target.value;
        radios.forEach((radio: { checked: boolean; }) => (radio.checked = radio === target));
        // @ts-ignore - this
        if (this.value !== oldValue) {
            // @ts-ignore - this
            this.emit("sl-change");
            // @ts-ignore - this
            this.emit("sl-input");
        }
    };

    // @ts-ignore - overskriving av private metoder i sl-radio-group
    private syncRadioElements = async function () {
        // @ts-ignore - this
        const radios = this.getAllRadios();

        await Promise.all(
            // Sync the checked state and size
            radios.map(async (radio: { updateComplete: any; checked: boolean; value: any; size: any; }) => {
                await radio.updateComplete;
                // @ts-ignore - this
                radio.checked = radio.value === this.value;
                // @ts-ignore - this
                radio.size = this.size;
            })
        );

        // lagt til nve-radio-button
        // @ts-ignore - this
        this.hasButtonGroup = radios.some((radio) => radio.tagName.toLowerCase() === "sl-radio-button" || radio.tagName.toLowerCase() === "nve-radio-button");

        if (!radios.some((radio: { checked: any; }) => radio.checked)) {
            // @ts-ignore - this
            if (this.hasButtonGroup) {
                const buttonRadio = radios[0].shadowRoot?.querySelector("button");

                if (buttonRadio) {
                    buttonRadio.tabIndex = 0;
                }
            } else {
                radios[0].tabIndex = 0;
            }
        }

        // @ts-ignore - this
        if (this.hasButtonGroup) {
            // lagt til nve-button-group
            // @ts-ignore - this
            const buttonGroup = this.shadowRoot?.querySelector("sl-button-group") || this.shadowRoot?.querySelector("nve-button-group");

            if (buttonGroup) {
                buttonGroup.disableRole = true;
            }
        }
    };

    // @ts-ignore - overskriving av private metoder i sl-radio-group
    private syncRadios = function () {
        if (
            (customElements.get("sl-radio") && customElements.get("sl-radio-button")) ||
            // lagt til nve-radio og nve-radio-button
            (customElements.get("nve-radio") && customElements.get("nve-radio-button"))
        ) {
            // @ts-ignore - this
            this.syncRadioElements();
            return;
        }

        if (customElements.get("sl-radio") || customElements.get("nve-radio")) {
            // @ts-ignore - this
            this.syncRadioElements();
        } else {
            // @ts-ignore - this
            customElements.whenDefined("sl-radio").then(() => this.syncRadios());
        }

        // lagt til nve-radio-button
        if (customElements.get("sl-radio-button") || customElements.get("nve-radio-button")) {
            // @ts-ignore - this
            this.syncRadioElements();
        } else {
            // Rerun this handler when <sl-radio> or <sl-radio-button> is registered
            // @ts-ignore - this
            customElements.whenDefined("sl-radio-button").then(() => this.syncRadios());
            // lagt til nve-radio-button
            // @ts-ignore - this
            customElements.whenDefined("nve-radio-button").then(() => this.syncRadios());
        }
    };
}

declare global {
    interface HTMLElementTagNameMap {
        "nve-radio-group": NveRadioGroup;
    }
}
