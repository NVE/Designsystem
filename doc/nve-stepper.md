# nve-stepper

## Properties

| Property            | Attribute           | Type                         | Default                  | Description                                      |
|---------------------|---------------------|------------------------------|--------------------------|--------------------------------------------------|
| `iconLibrary`       | `iconLibrary`       | `"Outlined" \| "Sharp"`      | "Outlined"               | Hvilken ikonbibliotek som skal brukes, Sharp eller Outlined. |
| `optionalEndButton` | `optionalEndButton` | `string`                     | ""                       | Mulighet om å endre teksten på knapp ved siste steg,<br />default er disabled neste. |
| `orientation`       | `orientation`       | `"horizontal" \| "vertical"` | "horizontal"             | Hvilken retning steppene skal gå. TODO: implementer vertical |
| `selectedStepIndex` | `selectedStepIndex` | `{ value: number; }`         | {"value":0}              | Indeks for valgt steg, gir mulighet for å styre hvilket steg som er valgt. |
| `spaceBetweenSteps` | `spaceBetweenSteps` | `number`                     | 200                      | Avstand mellom steppene                          |
| `steps`             | `steps`             | `StepProps[]`                | "new Array<StepProps>()" | Steppene som skal vises, se StepProps interface for data som skal sendes inn. |

## Methods

| Method        | Type                                | Description                                      |
|---------------|-------------------------------------|--------------------------------------------------|
| `getExtremes` | `(): "start" \| "end" \| undefined` | Sjekker om vi er på start eller slutten av steppene |
| `nextStep`    | `(): void`                          |                                                  |
| `onComplete`  | `(): void`                          |                                                  |
| `prevStep`    | `(): void`                          |                                                  |
| `reRender`    | `(): void`                          | Ved endring av props, re-render komponenten eksternt med document.querySelector("nve-stepper")?.reRender();<br />Ellers vil man ikke se endringene før intern state endres. |
| `selectStep`  | `(event: any): void`                |                                                  |
| `setStep`     | `(index: number): void`             |                                                  |

## Events

| Event      |
|------------|
| `complete` |


# my-nve

## Properties

| Property            | Attribute           | Type                         | Default                  | Description                                      |
|---------------------|---------------------|------------------------------|--------------------------|--------------------------------------------------|
| `iconLibrary`       | `iconLibrary`       | `"Outlined" \| "Sharp"`      | "Outlined"               | Hvilken ikonbibliotek som skal brukes, Sharp eller Outlined. |
| `optionalEndButton` | `optionalEndButton` | `string`                     | ""                       | Mulighet om å endre teksten på knapp ved siste steg,<br />default er disabled neste. |
| `orientation`       | `orientation`       | `"horizontal" \| "vertical"` | "horizontal"             | Hvilken retning steppene skal gå. TODO: implementer vertical |
| `selectedStepIndex` | `selectedStepIndex` | `{ value: number; }`         | {"value":0}              | Indeks for valgt steg, gir mulighet for å styre hvilket steg som er valgt. |
| `spaceBetweenSteps` | `spaceBetweenSteps` | `number`                     | 200                      | Avstand mellom steppene                          |
| `steps`             | `steps`             | `StepProps[]`                | "new Array<StepProps>()" | Steppene som skal vises, se StepProps interface for data som skal sendes inn. |

## Methods

| Method        | Type                                | Description                                      |
|---------------|-------------------------------------|--------------------------------------------------|
| `getExtremes` | `(): "start" \| "end" \| undefined` | Sjekker om vi er på start eller slutten av steppene |
| `nextStep`    | `(): void`                          |                                                  |
| `onComplete`  | `(): void`                          |                                                  |
| `prevStep`    | `(): void`                          |                                                  |
| `reRender`    | `(): void`                          | Ved endring av props, re-render komponenten eksternt med document.querySelector("nve-stepper")?.reRender();<br />Ellers vil man ikke se endringene før intern state endres. |
| `selectStep`  | `(event: any): void`                |                                                  |
| `setStep`     | `(index: number): void`             |                                                  |

## Events

| Event      |
|------------|
| `complete` |
