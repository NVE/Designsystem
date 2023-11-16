import { Component, Element, h, Prop } from '@stencil/core';

<script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.9.0/cdn/shoelace-autoloader.js"></script>;

@Component({
  tag: 'nve-checkbox',
  styleUrl: 'nve-checkbox.css',
  scoped: true,
})
export class NveCheckbox {
  @Element() element: HTMLElement;
  @Prop() checked: boolean = false;
  @Prop() label: string;
  @Prop() indeterminate = false;

  render() {
    return (
      <div>
        <sl-checkbox indeterminate={this.indeterminate} className="checkbox" checked={this.checked}>
          {this.label}
        </sl-checkbox>
      </div>
    );
  }
}
