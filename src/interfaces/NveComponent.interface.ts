/**
 * Interface som alle komponenter må ha før de deler felles funksjonalitet. 
 * INveComponent
 */
export interface INveComponent {
    /**
   * En unik identifikator for testformål. 
   * Standardverdien er en tom streng, men du kan angi id-en til komponenten med for eksempel testId="example_id"
   */
    testId:string;
}