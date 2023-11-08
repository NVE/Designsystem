import { Component, Element, Prop, h } from '@stencil/core';

 <script type="module"
      src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.9.0/cdn/shoelace-autoloader.js"></script>

@Component({
  tag: 'nve-button',
  styleUrl: 'nve-button.css',
  scoped: true
})
export class NveButton {

@Element() element: HTMLElement;
    @Prop() type: "primary" | "secondary" | "outlined" | "ghost" = "primary";
  @Prop() size: "large" | "medium" | "small" | "x-small" = "medium";
  @Prop() showLabel: boolean;
  @Prop() label: string;
  @Prop() trailingIcon: string;
  @Prop() leadingIcon: string;
  @Prop() disabled: string;
  @Prop() loading: boolean;

  setSize(){
    if (this.size === "x-small"){
    return "medium";
    }
      else {
        return this.size;
      }
  }
  

  componentDidRender(){
    if (this.size === "x-small")
    this.element.style.setProperty('--sl-input-height-medium', '50rem');
  }

  render() {

    const className = `nve-button ${this.type} ${this.size} ${this.disabled}`
    
    return <div>
      
     <sl-button class={className}
     size={this.setSize()}

     >
      
    {/** prefix icon */}
   {this.leadingIcon ? <span slot="prefix" class="material-icons">
        {this.leadingIcon
        }
              </span>: ""}

    {/** suffix icon */}                            
     {this.trailingIcon ? <span slot="suffix" class="material-icons">
        {this.trailingIcon
        }
              </span>: ""}

     {/** label */}
     {this.showLabel ? this.label : "" }
 
    {this.loading ? 
    <span slot="suffix" class="spinner"></span>
    : ""}  
    

     </sl-button>


  
  

     
     
    
    </div>;
  }


}
