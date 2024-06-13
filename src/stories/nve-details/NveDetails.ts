import { html } from 'lit';

export interface NveDetailsProps {
  variant: string;
  leftStroke: boolean;
  summary: string;
  open: boolean;
}

export const NveDetails = (props: NveDetailsProps) => {
  return html`
    <div style="width: 400px; height: 400px;">
      <nve-details summary=${props.summary} variant=${props.variant} left-stroke=${props.leftStroke} open=${props.open}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices, libero quis mattis fringilla, ipsum
          tellus tincidunt tortor, ac dapibus libero tellus at metus. Praesent laoreet turpis ac sapien varius vehicula
          non at eros. Sed sit amet justo eget massa viverra pellentesque a id sem. Curabitur risus orci, mollis quis
          tincidunt quis, venenatis interdum massa.
        </div>
      </nve-details>
    </div>
  `;
};
