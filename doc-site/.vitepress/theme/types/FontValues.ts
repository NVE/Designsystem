// Brukes for å mappe css token til en faktisk verdi
export type FontValues = {
  weight: string | undefined;
  size: string;
  lineHeight: string;
};

// Definerer hvilken typografi innhold skal vises i TypographyTable.vue
export type TableContent =
  | 'default'
  | 'headers'
  | 'subheaders'
  | 'ingress'
  | 'body'
  | 'body-compact'
  | 'detail-text'
  | 'label';

//font-token nøkkel - FontValues verdi par
export interface FontVariables {
  [x: string]: FontValues;
}
