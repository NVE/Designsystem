// test-applikasjon for komponentbiblioteket
import { render } from 'lit';
import '../public/css/nve.css';
import './styles/testsite.css';
/* Importer demo-side for hver komponent du vil vise her og sett det i render-funksjonen */
import alertDemo from './components/nve-alert/nve-alert.demo';
import badgeDemo from './components/nve-badge/nve-badge.demo';
import dialogDemo from './components/nve-dialog/nve-dialog.demo';
import dropdownDemo from './components/nve-dropdown/nve-dropdown.demo';
import menuItemDemo from './components/nve-menu-item/nve-menu-item.demo';
import buttonDemo from './components/nve-button/nve-button.demo';
import checkboxGroupDemo from './components/nve-checkbox-group/nve-checkbox-group.demo';
import checkboxDemo from './components/nve-checkbox/nve-checkbox.demo';
import inputDemo from './components/nve-input/nve-input.demo';
import labelDemo from './components/nve-label/nve-label.demo';
import tooltipDemo from './components/nve-tooltip/nve-tooltip.demo';
import radioGroupDemo from './components/nve-radio-group/nve-radio-group.demo';
import selectDemo from './components/nve-select/nve-select.demo';
import stepperDemo from './components/nve-stepper/nve-stepper.demo';
import textareaDemo from './components/nve-textarea/nve-textarea.demo';

import { icons, registerIconLibrary } from './registerIcons/systemLibraryCustomization';

registerIconLibrary('system', {
  resolver: (name) => {
    console.log('icons injected');
    return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
  },
});

render(
  [
    alertDemo,
    badgeDemo,
    buttonDemo,
    radioGroupDemo,
    tooltipDemo,
    labelDemo,
    inputDemo,
    dropdownDemo,
    menuItemDemo,
    checkboxDemo,
    checkboxGroupDemo,
    dialogDemo,
    textareaDemo,
    selectDemo,
    stepperDemo,
  ],
  document.getElementById('app')!
); // Render the Lit app in the specified container
