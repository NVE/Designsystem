import { Component, Prop, h } from '@stencil/core';

 <script type="module"
      src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.9.0/cdn/shoelace-autoloader.js"></script>

import './../../../../build/css/nve.css';
import './../../../../build/css/nve_dark.css';
import './../../../../build/css/varsom.css';
import './../../../../build/css/varsom_dark.css';

@Component({
  tag: 'nve-button',
  styleUrl: 'nve-button.css',
  scoped: true
})
export class NveButton {


    @Prop() type: "primary" | "secondary" | "outlined" | "ghost" = "primary";
  @Prop() size: "large" | "medium" | "small" | "x-small" = "medium";
  @Prop() showLabel: boolean;
  @Prop() label: string;
  @Prop() trailingIcon: string;
  @Prop() leadingIcon: string;
  @Prop() disabled: string;
  @Prop() loading: boolean;


  render() {

    const className = `nve-button ${this.type} ${this.size} ${this.disabled}`
    
    return <div>
      
     <sl-button class={className}
     size={this.size}

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
