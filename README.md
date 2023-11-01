# NVE Designsystem

Dette repository inneholder Figma-tokens og komponentbibliotek basert på Shoelace.

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
