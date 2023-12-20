import { customElement } from "lit/decorators.js";
import { SlRadioButton } from "@shoelace-style/shoelace";

@customElement("nve-radio-button")
export class NveRadioButton extends SlRadioButton {
    constructor() {
        super();
    }
    static styles = [SlRadioButton.styles];

    // TODO: style nve-radio-button
}

declare global {
    interface HTMLElementTagNameMap {
        "nve-radio-button": NveRadioButton;
    }
}

