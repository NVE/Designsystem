# nve-stepper

## Properties

| Property            | Attribute           | Type                         | Default                  |
|---------------------|---------------------|------------------------------|--------------------------|
| `iconLibrary`       | `iconLibrary`       | `"Outlined" \| "Sharp"`      | "Outlined"               |
| `orientation`       | `orientation`       | `"horizontal" \| "vertical"` | "horizontal"             |
| `selectedStep`      | `selectedStep`      | `number`                     |                          |
| `spaceBetweenSteps` | `spaceBetweenSteps` | `number`                     | 200                      |
| `stepWidth`         |                     | `number`                     | 100                      |
| `steps`             | `steps`             | `StepProps[]`                | "new Array<StepProps>()" |

## Methods

| Method        | Type                                |
|---------------|-------------------------------------|
| `getExtremes` | `(): "start" \| "end" \| undefined` |
| `nextStep`    | `(): void`                          |
| `prevStep`    | `(): void`                          |
| `selectStep`  | `(event: any): void`                |
| `setStep`     | `(index: number): void`             |


# my-nve

## Properties

| Property            | Attribute           | Type                         | Default                  |
|---------------------|---------------------|------------------------------|--------------------------|
| `iconLibrary`       | `iconLibrary`       | `"Outlined" \| "Sharp"`      | "Outlined"               |
| `orientation`       | `orientation`       | `"horizontal" \| "vertical"` | "horizontal"             |
| `selectedStep`      | `selectedStep`      | `number`                     |                          |
| `spaceBetweenSteps` | `spaceBetweenSteps` | `number`                     | 200                      |
| `stepWidth`         |                     | `number`                     | 100                      |
| `steps`             | `steps`             | `StepProps[]`                | "new Array<StepProps>()" |

## Methods

| Method        | Type                                |
|---------------|-------------------------------------|
| `getExtremes` | `(): "start" \| "end" \| undefined` |
| `nextStep`    | `(): void`                          |
| `prevStep`    | `(): void`                          |
| `selectStep`  | `(event: any): void`                |
| `setStep`     | `(index: number): void`             |
