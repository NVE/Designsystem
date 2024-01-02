// test-applikasjon for komponentbiblioteket
import { render } from 'lit';
import '../build/css/varsom.css';
import './styles/testsite.css';
import './styles/global.css';

/* Importer demo-side for hver komponent du vil vise her og sett det i render-funksjonen */
import buttonDemo from './components/nve-button/nve-button-demo';
import checkboxGroupDemo from './components/nve-checkbox-group/nve-checkbox-group-demo';
import checkboxDemo from './components/nve-checkbox/nve-checkbox-demo';
import inputDemo from './components/nve-input/nve-input-demo';
import labelDemo from './components/nve-label/nve-label-demo';
import tooltipDemo from './components/nve-tooltip/nve-tooltip-demo';

render(
  [buttonDemo, tooltipDemo, labelDemo, inputDemo, checkboxDemo, checkboxGroupDemo],
  document.getElementById('app')!
); // Render the Lit app in the specified container
