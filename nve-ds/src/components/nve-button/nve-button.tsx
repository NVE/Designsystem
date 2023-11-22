import { Component, Prop, h } from '@stencil/core';

 <script type="module"
      src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.9.0/cdn/shoelace-autoloader.js">
      </script>

@Component({
  tag: 'nve-button',
  styleUrl: 'nve-button.css',
  scoped: true
})
export class NveButton {

  @Prop() type: "primary" | "secondary" | "outlined" | "ghost" = "primary";
  @Prop() size: "large" | "medium" | "small" | "x-small" = "medium";
  @Prop() label: string;
  @Prop() trailingIcon: string;
  @Prop() leadingIcon: string;
  @Prop() disabled: string;
  @Prop() loading: boolean;

  //shoelace props
  @Prop() variant: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text' = 'default';
  @Prop() caret: boolean;
  @Prop() outline: boolean;
  @Prop() pill: boolean;
  @Prop() circle: boolean;
  @Prop() name: string;
  @Prop() value: string;
  @Prop() href: string;
  @Prop() target: '_blank' | '_parent' | '_self' | '_top';
  @Prop() rel: string;
  @Prop() download: string | undefined;
  @Prop() form: string;
  @Prop() formAction: string;
  @Prop() formEnctype: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
  @Prop() formMethod: 'post' | 'get';
  @Prop() formNoValidate: boolean;
  @Prop() formTarget: '_self' | '_blank' | '_parent' | '_top';

  render() {

    const className = `nve-button ${this.type} ${this.size} ${this.disabled}`
    
    return  <div>
      
    <sl-button class={className}
    size={this.size}
    formMethod={this.formMethod}
    circle={this.circle}
    pill={this.pill}
    href={this.href}
    variant={this.variant}
    caret={this.caret}
    outline={this.outline}
    name={this.name}
    value={this.value}
    target={this.target}
    rel={this.rel}
    download={this.download}
    form={this.form}
    formAction={this.formAction}
    formEnctype={this.formEnctype}
    formNoValidate={this.formNoValidate}
    formTarget={this.formTarget}
     >
      
    {/** prefix icon */}
  <span slot="prefix" class="material-icons">
        {this.leadingIcon
        }
              </span>

    {/** suffix icon */}                            
     <span slot="suffix" class="material-icons">
        {this.trailingIcon
        }
              </span>

     {/** label */}
     {this.label}
 
    {this.loading ? 
    <span slot="suffix" class="spinner"></span>
    : ""}  
    

     </sl-button>


  
  

     
     
    
    </div>;
  }


}
