// test-applikasjon for komponentbiblioteket
import { render } from 'lit';
import '../build/css/varsom.css';
/* Importer demo-side for hver komponent du vil vise her og sett det i render-funksjonen */
import dialogDemo from './components/nve-dialog/nve-dialog.demo';
import dropdownDemo from './components/nve-dropdown/nve-dropdown.demo';
import menuItemDemo from './components/nve-menu-item/nve-menu-item.demo';
import alertDemo from './components/nve-alert/nve-alert.demo';
import buttonDemo from './components/nve-button/nve-button.demo';
import checkboxGroupDemo from './components/nve-checkbox-group/nve-checkbox-group.demo';
import checkboxDemo from './components/nve-checkbox/nve-checkbox.demo';
import inputDemo from './components/nve-input/nve-input.demo';
import labelDemo from './components/nve-label/nve-label.demo';
import tooltipDemo from './components/nve-tooltip/nve-tooltip.demo';
import radioDemo from './components/nve-radio/nve-radio.demo';
import selectDemo from './components/nve-select/nve-select-demo';

render(
  [
    alertDemo,
    buttonDemo,
    radioDemo,
    tooltipDemo,
    labelDemo,
    inputDemo,
    dropdownDemo,
    menuItemDemo,
    checkboxDemo,
    checkboxGroupDemo,
    dialogDemo,
    selectDemo,
  ],
  document.getElementById('app')!
); // Render the Lit app in the specified container
