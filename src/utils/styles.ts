/**
 * Bruker en streng med CSS-stiler på et gitt HTML-element.
 * 
 * Denne funksjonen analyserer en streng med CSS-stiler, deler dem opp i individuelle
 * egenskaper og verdier, og bruker hver stil på det angitte HTMLElementet.
 *
 * @param element - HTML-elementet som stilene skal brukes på.
 * @param-stiler - En streng som inneholder CSS-stiler, f.eks. "bredde: 100px; høyde: 50px;".
 */
export const applyStyles = (element: HTMLElement, styles: string)  => {
    styles.split(';').filter(style => style.trim()).forEach(style => {
      const [property, value] = style.split(':').map(part => part.trim());
      if (property && value) {
        element.style.setProperty(property, value);
      }
    });
  }