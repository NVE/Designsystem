import { customElement } from "lit/decorators.js";
import { SlRadio, SlRadioButton } from "@shoelace-style/shoelace";
import styles from "./nve-radio.styles";

@customElement("nve-radio-button")
export class NveRadioButton extends SlRadioButton {
    constructor() {
        super();
    }
}

@customElement("nve-radio")
export class NveRadio extends SlRadio {
    constructor() {
        super();
    }
    static styles = [SlRadio.styles, styles];
}

declare global {
    interface HTMLElementTagNameMap {
        "nve-radio": NveRadio;
        "nve-radio-button": NveRadioButton;
    }
}

