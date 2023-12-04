// main.ts (or main.js if using JavaScript)
import { render } from 'lit';
import './styles/global.css';

/* Importer demo.html du vil vise på lokal dev her og sett det i render-funksjonen */
import radio from "./components/nve-radio/radio-demo";

render(radio, document.getElementById('app')!); // Render the Lit app in the specified container
