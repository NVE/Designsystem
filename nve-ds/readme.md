### **Import av komponenter i Vue**

1. npm i nve-designsystem
2. I main.ts: import { defineCustomElement as NveButton} from 'nve-designsystem/dist/components/nve-button'; NveButton();
3. I index.html: \<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.9.0/cdn/themes/light.css" /\>
   \<link rel="stylesheet" href="node_modules/nve-designsystem/dist/css/nve.css"\>
   \<link rel="stylesheet" href="node_modules/nve-designsystem/dist/css/nve_dark.css"\>
   \<link rel="stylesheet" href="node_modules/nve-designsystem/dist/css/varsom.css"\>
   \<link rel="stylesheet" href="node_modules/nve-designsystem/dist/css/varsom_dark.css"\>
   \<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"\>
   \<script type="module"
   src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/shoelace-autoloader.js"\>\</script\>

### **Eksempel på bruk av komponent**

\<nve-button trailing-icon="edit" leading-icon="preview" label="Test knapp" size="large" type="primary" show-label
disabled="disabled" loading\>
\</nve-button\> <br>
Trailing-icon og leading-icon tar imot ikonnavn fra Material Design Icons.

### **Storybook**

Komponentene kan ses i Storybook med ulike parametere: https://master--65322c4ee3062d1c117bb2d5.chromatic.com/
