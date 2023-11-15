import { Component, Element, Prop, h } from '@stencil/core';

<script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.9.0/cdn/shoelace-autoloader.js"></script>;

@Component({
  tag: 'nve-button',
  styleUrl: 'nve-button.css',
  scoped: true,
})
export class NveButton {
  @Element() element: HTMLElement;
  @Prop() type: 'primary' | 'secondary' | 'outlined' | 'ghost' = 'primary';
  @Prop() size: 'large' | 'medium' | 'small' | 'x-small' = 'medium';
  @Prop() variant: 'nve' | 'varsom' = 'nve';
  @Prop() showLabel: boolean = true;
  @Prop() label: string;
  @Prop() trailingIcon?: string;
  @Prop() leadingIcon?: string;
  @Prop() disabled: boolean = false;
  @Prop() loading: boolean = false;

  setSize() {
    if (this.size === 'x-small') {
      return 'medium';
    } else {
      return this.size;
    }
  }

  componentDidRender() {
    if (this.size === 'x-small') this.element.style.setProperty('--sl-input-height-medium', '2.25rem');
    //TODO: change more properties...
  }

  render() {
    const className = `nve-button ${this.variant === 'nve' ? 'nve-light' : 'varsom-light'} ${this.type} ${this.size} ${this.disabled ? 'disabled' : null}`;

    return (
      <div>
        <sl-button class={className} size={this.setSize()} disabled={this.disabled}>
          {/** prefix icon */}
          {this.leadingIcon ? (
            <span slot="prefix" class="material-icons margin-right">
              {this.leadingIcon}
            </span>
          ) : null}

          {/** suffix icon */}
          {this.trailingIcon ? (
            <span slot="suffix" class="material-icons margin-left">
              {this.trailingIcon}
            </span>
          ) : null}

          {/** label */}
          {this.showLabel ? this.label : null}

          {this.loading ? <span slot="suffix" class="spinner margin-left"></span> : null}
        </sl-button>
      </div>
    );
  }
}
