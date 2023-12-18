// test-applikasjon for komponentbiblioteket
import { render } from 'lit';
import '../build/css/varsom.css';
import './styles/global.css';
import './styles/testsite.css';
import './styles/imports.css';

/* Importer demo-side for hver komponent du vil vise her og sett det i render-funksjonen */
import dialogDemo from './components/nve-dialog/nve-dialog-demo'

render([dialogDemo], document.getElementById('app')!);