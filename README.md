# NVE Designsystem

Dette repository inneholder Figma-tokens og komponentbibliotek basert på Shoelace.

### **Bygge css**

For å bygge css basert på tokens fra Figma, kjør følgende kommando: "npm run tokenbuild." <br>

### **Import av komponenter i Vue (MÅ TESTES MED LIT)**

1. npm i nve-designsystem
2. I vite.config: Under defineConfig, Legg inn compilerOptions: { isCustomElement: (tag) => tag.includes('nve-') }
3. I index.html: \<link rel="stylesheet" href="node_modules/nve-designsystem/dist/css/nve.css"\>
   \<link rel="stylesheet" href="node_modules/nve-designsystem/dist/css/nve_dark.css"\>
   \<link rel="stylesheet" href="node_modules/nve-designsystem/dist/css/varsom.css"\>
   \<link rel="stylesheet" href="node_modules/nve-designsystem/dist/css/varsom_dark.css"\>

### **Eksempel på bruk av komponent**

\<nve-button trailing-icon="edit" leading-icon="preview" size="large" variant="primary"
loading\> Tekst på knapp
\</nve-button\> <br>
Trailing-icon og leading-icon tar imot ikonnavn fra Material Design Symbols.

### **Storybook (MÅ OPPDATERES)**

Komponentene kan ses i Storybook med ulike parametere: https://main--65322c4ee3062d1c117bb2d5.chromatic.com/ <br>
For å kjøre Storybook lokalt, kjør "npm run build; npm run storybook;" <br>
For å publisere Storybook på Chromatic, kjør "npm run build; npm run build-storybook". Deretter må det kjøres en kommando med project token fra Chromatic: "npx chromatic --project-token=\<project-token\>"

### **npm**

For å publisere på npm, må man oppdatere versjonsnr. i package.json og package-lock.json. Deretter kjør kommando "npm publish --access public". Dette krever at man er innlogget på npm. For at CSS-variabler skal være tilgjengelig i npm-pakken, må css-filer kopieres. Dette gjøres ved å kjøre kommando "npm run copy-files". Lenke til npm-pakke: https://www.npmjs.com/package/nve-designsystem

### **kjøremiljø**

Prosjekt importerer shoelace npm pakke, bruker ikke shoelace cdn. Kjør npm run dev for utvikling.
For å starte storybook, kjør npm run storybook. Man trenger ikke å bygge først.
For å teste en komponent via index.html må man huske å legge til script tag med komponenten som f.eks. <script type="module" src="/src/nve-button.ts"></script>
