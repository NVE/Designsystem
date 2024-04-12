import { html } from 'lit';

/**
 * Demonstrasjon av nve-details
 */
const table = html`
  <hr />
  <nve-divider></nve-divider>
  <h3 id="nve-details">nve-details</h3>
  <div
    class="demo"
    style="display: grid; grid-template-columns: min-content 1fr 1fr; gap: 15px; max-width: 1500px; padding-inline-start: 2rem;"
  >
    <div></div>
    <div style="font-weight: 700">Default</div>
    <div style="font-weight: 700">Left-stroke</div>
    <div style="line-height: 51px; padding-inline: 1rem;">Brand</div>
    <div>
      <nve-details summary="Brand tittel">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices, libero quis mattis fringilla, ipsum
          tellus tincidunt tortor, ac dapibus libero tellus at metus. Praesent laoreet turpis ac sapien varius vehicula
          non at eros. Sed sit amet justo eget massa viverra pellentesque a id sem. Curabitur risus orci, mollis quis
          tincidunt quis, venenatis interdum massa.
        </div>
      </nve-details>
    </div>
    <div>
      <nve-details summary="Brand tittel" variant="brand" left-stroke>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices, libero quis mattis fringilla, ipsum
          tellus tincidunt tortor, ac dapibus libero tellus at metus. Praesent laoreet turpis ac sapien varius vehicula
          non at eros. Sed sit amet justo eget massa viverra pellentesque a id sem. Curabitur risus orci, mollis quis
          tincidunt quis, venenatis interdum massa.
        </div>
      </nve-details>
    </div>

    <div style="line-height: 51px; padding-inline: 1rem;">Neutral</div>
    <div>
      <nve-details summary="Neutral tittel" variant="neutral">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices, libero quis mattis fringilla, ipsum
          tellus tincidunt tortor, ac dapibus libero tellus at metus. Praesent laoreet turpis ac sapien varius vehicula
          non at eros. Sed sit amet justo eget massa viverra pellentesque a id sem. Curabitur risus orci, mollis quis
          tincidunt quis, venenatis interdum massa.
        </div>
      </nve-details>
    </div>
    <div>
      <nve-details summary="Neutral tittel" variant="neutral" left-stroke>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices, libero quis mattis fringilla, ipsum
          tellus tincidunt tortor, ac dapibus libero tellus at metus. Praesent laoreet turpis ac sapien varius vehicula
          non at eros. Sed sit amet justo eget massa viverra pellentesque a id sem. Curabitur risus orci, mollis quis
          tincidunt quis, venenatis interdum massa.
        </div>
      </nve-details>
    </div>

    <div style="line-height: 51px; padding-inline: 1rem;">Info</div>
    <div>
      <nve-details summary="Info tittel" variant="info">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices, libero quis mattis fringilla, ipsum
          tellus tincidunt tortor, ac dapibus libero tellus at metus. Praesent laoreet turpis ac sapien varius vehicula
          non at eros. Sed sit amet justo eget massa viverra pellentesque a id sem. Curabitur risus orci, mollis quis
          tincidunt quis, venenatis interdum massa.
        </div>
      </nve-details>
    </div>
    <div>
      <nve-details summary="Info tittel" variant="info" left-stroke>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices, libero quis mattis fringilla, ipsum
          tellus tincidunt tortor, ac dapibus libero tellus at metus. Praesent laoreet turpis ac sapien varius vehicula
          non at eros. Sed sit amet justo eget massa viverra pellentesque a id sem. Curabitur risus orci, mollis quis
          tincidunt quis, venenatis interdum massa.
        </div>
      </nve-details>
    </div>

    <div style="line-height: 51px; padding-inline: 1rem;">Error</div>
    <div>
      <nve-details summary="Error tittel" variant="error">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices, libero quis mattis fringilla, ipsum
          tellus tincidunt tortor, ac dapibus libero tellus at metus. Praesent laoreet turpis ac sapien varius vehicula
          non at eros. Sed sit amet justo eget massa viverra pellentesque a id sem. Curabitur risus orci, mollis quis
          tincidunt quis, venenatis interdum massa.
        </div>
      </nve-details>
    </div>
    <div>
      <nve-details summary="Error tittel" variant="error" left-stroke>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices, libero quis mattis fringilla, ipsum
          tellus tincidunt tortor, ac dapibus libero tellus at metus. Praesent laoreet turpis ac sapien varius vehicula
          non at eros. Sed sit amet justo eget massa viverra pellentesque a id sem. Curabitur risus orci, mollis quis
          tincidunt quis, venenatis interdum massa.
        </div>
      </nve-details>
    </div>

    <div style="line-height: 51px; padding-inline: 1rem;">Success</div>
    <div>
      <nve-details summary="Success tittel" variant="success">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices, libero quis mattis fringilla, ipsum
          tellus tincidunt tortor, ac dapibus libero tellus at metus. Praesent laoreet turpis ac sapien varius vehicula
          non at eros. Sed sit amet justo eget massa viverra pellentesque a id sem. Curabitur risus orci, mollis quis
          tincidunt quis, venenatis interdum massa.
        </div>
      </nve-details>
    </div>
    <div>
      <nve-details summary="Success tittel" variant="success" left-stroke>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices, libero quis mattis fringilla, ipsum
          tellus tincidunt tortor, ac dapibus libero tellus at metus. Praesent laoreet turpis ac sapien varius vehicula
          non at eros. Sed sit amet justo eget massa viverra pellentesque a id sem. Curabitur risus orci, mollis quis
          tincidunt quis, venenatis interdum massa.
        </div>
      </nve-details>
    </div>

    <div style="line-height: 51px; padding-inline: 1rem;">Warning</div>
    <div>
      <nve-details summary="Warning tittel" variant="warning">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices, libero quis mattis fringilla, ipsum
          tellus tincidunt tortor, ac dapibus libero tellus at metus. Praesent laoreet turpis ac sapien varius vehicula
          non at eros. Sed sit amet justo eget massa viverra pellentesque a id sem. Curabitur risus orci, mollis quis
          tincidunt quis, venenatis interdum massa.
        </div>
      </nve-details>
    </div>
    <div>
      <nve-details summary="Warning tittel" variant="warning" left-stroke id="warningtest">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices, libero quis mattis fringilla, ipsum
          tellus tincidunt tortor, ac dapibus libero tellus at metus. Praesent laoreet turpis ac sapien varius vehicula
          non at eros. Sed sit amet justo eget massa viverra pellentesque a id sem. Curabitur risus orci, mollis quis
          tincidunt quis, venenatis interdum massa.
        </div>
      </nve-details>
    </div>
  </div>
`;

export default table;
