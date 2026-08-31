import { IRadioControl } from '@interfaces/radiocontrol';

/**
 * Velger en radio-knapp og setter fokus på den.
 * @param radio Radio-knappen som skal velges og få fokus.
 */
export function selectRadioControlWithFocus(radioControl: IRadioControl, radioControls: IRadioControl[]) {
  selectRadioControl(radioControl, radioControls);
  radioControl.focus();
}

/**
 * Velger en radio-knapp og oppdaterer tilstanden til gruppen.
 * @param radio Radio-knappen som skal velges.
 */
export function selectRadioControl(radioControl: IRadioControl, radioControls: IRadioControl[]) {
  radioControls.forEach((radio) => {
    radio.checked = radio === radioControl;
  });

  updateTabIndexes(radioControls);
}

/**
 * Setter riktig tabIndex på radio-knappene basert på hvilken som er valgt.
 * Hvis ingen er valgt, settes tabIndex på den første aktiverte radio-knappen.
 * Det gjøres for å sikre at kun én radio-knapp er tabbable i gruppen. Resten skal navigeres med piltastene.
 */
function updateTabIndexes(radioControls: IRadioControl[]) {
  const checkedEnabled = radioControls.find((radio) => radio.checked && !radio.disabled);
  const firstEnabled = radioControls.find((radio) => !radio.disabled);
  const tabbable = checkedEnabled ?? firstEnabled;
  radioControls.forEach((radio) => {
    radio.tabIndex = tabbable && radio === tabbable ? 0 : -1;
  });
}

function getNextEnabledIndex(fromIndex: number, delta: 1 | -1, radioControls: IRadioControl[]): number {
  const count = radioControls.length;
  for (let step = 1; step <= count; step++) {
    const index = (fromIndex + delta * step + count) % count;
    if (!radioControls[index].disabled) return index;
  }
  return -1; // alle radio-knapper er deaktivert
}

/**
 * Håndterer tastetrykk for navigasjon mellom radio-knapper.
 * @param e Event som utløses når en tast trykkes ned.
 */
export function handleRadioControlKeyDown(
  e: KeyboardEvent,
  radioControls: IRadioControl[],
  disabled: boolean
): IRadioControl | undefined {
  if (radioControls.length === 0 || disabled) return;

  const currentIndex = radioControls.findIndex((radio) => radio.contains(document.activeElement));

  if (currentIndex === -1) return;

  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();

    const current = radioControls[currentIndex];

    if (current.disabled) return;

    selectRadioControlWithFocus(current, radioControls);
    return current;
  }

  let nextIndex = -1;

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    nextIndex = getNextEnabledIndex(currentIndex, 1, radioControls);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    nextIndex = getNextEnabledIndex(currentIndex, -1, radioControls);
  }

  if (nextIndex === -1) return;

  e.preventDefault();

  const next = radioControls[nextIndex];

  selectRadioControlWithFocus(next, radioControls);

  return next;
}
