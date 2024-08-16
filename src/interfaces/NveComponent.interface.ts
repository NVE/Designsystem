/**
 * Interface som alle komponenter må ha før de deler felles funksjonalitet.
 * INveComponent
 */
export interface INveComponent {
  /**
   * En unik identifikator for testformål.
   * Standardverdien er undefined (så at den ikke vises i DOMen hvis man ikke skal bruke den), men du kan angi id-en til komponenten med for eksempel testId="example_id"
   */
  testId: string | undefined;
}
