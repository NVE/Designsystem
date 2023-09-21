import { Component, Prop, h, Method } from "@stencil/core";

@Component({
  tag: "nve-button",
  styleUrl: "nve-button.css",
  shadow: true
})

export class NveButton {
  @Prop() text: string = "";
  @Prop() variant: 'default' | 'outlined' = 'default';
  @Prop() action: Function;

  @Method()
  async handleClick() {
    return console.log("Handle");
  }

  render() {
    return (
      <div>
        <button class={`nve-button ${this.variant}`} onClick={this.handleClick.bind(this)}>
          {this.text}
        </button>
      </div>
    );
  }
}
