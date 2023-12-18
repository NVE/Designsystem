// test-applikasjon for komponentbiblioteket
import { render } from 'lit';
import './styles/imports.css';
import '../build/css/varsom.css';
import './styles/global.css';
import './styles/testsite.css';


/* Importer demo-side for hver komponent du vil vise her og sett det i render-funksjonen */
import dialogDemo from './components/nve-dialog/nve-dialog-demo'
import buttonDemo from './components/nve-button/nve-button-demo';
import tooltipDemo from './components/nve-tooltip/nve-tooltip-demo';
import labelDemo from './components/nve-label/nve-label-demo';
import inputDemo from './components/nve-input/nve-input-demo';

render([buttonDemo, tooltipDemo, labelDemo, inputDemo, dialogDemo], document.getElementById('app')!); // Render the Lit app in the specified container
