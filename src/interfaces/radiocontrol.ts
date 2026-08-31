/**
 * Interface for radio kontrol komponenter.
 */
export interface IRadioControl extends HTMLElement {
  /** Om radio-kontroll er valgt */
  checked: boolean;
  /** Om radio-kontroll er deaktivert */
  disabled: boolean;
  /** Verdi for radio-kontroll */
  value: string;
  /** Posisjonen til radio-kontroll i gruppen */
  pos: number | null;
  /** Størrelsen på gruppen av radio-kontroller */
  setsize: number | null;
}
