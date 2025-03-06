export type FontValues = {
  weight: string | undefined;
  size: string;
  lineHeight: string;
};

export type TableContent =
  | 'default'
  | 'headers'
  | 'subheaders'
  | 'ingress'
  | 'body'
  | 'body-compact'
  | 'detail-text'
  | 'label';

export interface FontVariables {
  [x: string]: {
    weight: string | null;
    size: string | null;
    lineHeight: string | null;
  };
}
