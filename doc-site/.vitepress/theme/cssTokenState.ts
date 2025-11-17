// Mapper typografi css-variabler fra .css fil til lesbare objekter.
import { reactive, ref } from 'vue';
import { FontValues, FontVariables, TableContent } from './types/FontValues';

/** Om css tilstand er initialisert */
const stateInitialized = ref(false);

/** Objekt med font-token-navn som nøkkel og token-verdi som verdi for standard skjermstørrelsen */
const fontTokensDefault = ref<Record<string, string>>({});
/** Objekt med font-token-navn som nøkkel og token-verdi som verdi for skjermstørrelsen over 1400px */
const fontTokens1400 = ref<Record<string, string>>({});
/** Objekt med font-token-navn som nøkkel og token-verdi som verdi for skjermstørrelsen mindre enn 1200px */
const fontTokens1200 = ref<Record<string, string>>({});
/** Objekt med font-token-navn som nøkkel og token-verdi som verdi for skjermstørrelsen mindre enn 600px */
const fontTokens600 = ref<Record<string, string>>({});

/** Objekt med line-height-token-navn som nøkkel og token-verdi som verdi */
const lineHeightsObject = ref<Record<string, string>>({});
/** Objekt med font-weight-token-navn som nøkkel og token-verdi som verdi */
const fontWeightsObject = ref<Record<string, string>>({});

/** Objekt med heading-font-token-navn som nøkkel og font-vekt, font-størrelsen og linje høyde faktiske verdier som verdi. */
const headings = ref<Record<string, FontValues>>({});
/** Objekt med subheading-font-token-navn som nøkkel og font-vekt, font-størrelsen og linje høyde faktiske verdier som verdi. */
const subHeadings = ref<Record<string, FontValues>>({});
/** Objekt med lead-font-token-navn som nøkkel og font-vekt, font-størrelsen og linje høyde faktiske verdier som verdi. */
const lead = ref<Record<string, FontValues>>({});
/** Objekt med body-font-token-navn som nøkkel og font-vekt, font-størrelsen og linje høyde faktiske verdier som verdi. */
const body = ref<Record<string, FontValues>>({});
/** Objekt med body-compact-font-token-navn som nøkkel og font-vekt, font-størrelsen og linje høyde faktiske verdier som verdi. */
const bodyCompact = ref<Record<string, FontValues>>({});
/** Objekt med detailtext-font-token-navn som nøkkel og font-vekt, font-størrelsen og linje høyde faktiske verdier som verdi. */
const detailText = ref<Record<string, FontValues>>({});
/** Objekt med label-font-token-navn som nøkkel og font-vekt, font-størrelsen og linje høyde faktiske verdier som verdi. */
const label = ref<Record<string, FontValues>>({});

/** Objekt med heading-font-token-navn som nøkkel og font-vekt, font-størrelsen og linje høyde token-navn som verdi. */
const headingsVariables: (FontVariables | null)[] = [];
/** Objekt med subheading-font-token-navn som nøkkel og font-vekt, font-størrelsen og linje høyde token-navn som verdi. */
const subheadingsVariables: (FontVariables | null)[] = [];
/** Objekt med lead-font-token-navn som nøkkel og font-vekt, font-størrelsen og linje høyde token-navn som verdi. */
const leadVariables: (FontVariables | null)[] = [];
/** Objekt med body-font-token-navn som nøkkel og font-vekt, font-størrelsen og linje høyde token-navn som verdi. */
const bodyVariables: (FontVariables | null)[] = [];
/** Objekt med body-compact-font-token-navn som nøkkel og font-vekt, font-størrelsen og linje høyde token-navn som verdi. */
const bodyCompactVariables: (FontVariables | null)[] = [];
/** Objekt med detailtext-font-token-navn som nøkkel og font-vekt, font-størrelsen og linje høyde token-navn som verdi. */
const detailTextVariables: (FontVariables | null)[] = [];
/** Objekt med label-font-token-navn som nøkkel og font-vekt, font-størrelsen og linje høyde token-navn som verdi. */
const labelVariables: (FontVariables | null)[] = [];

/**
 * Initialiserer font variabeler og verdier fra en css fil
 * @param cssFileContent
 */
// eslint-disable-next-line max-lines-per-function
const initGlobalState = (cssFileContent: string) => {
  const cssContentDefault: string[] = cssFileContent.match(/:root\.nve\s*\{([\s\S]*?)\}/) || [];
  const cssContent1400px: string[] = cssFileContent.match(/@media\s*\(min-width:\s*1400px\)\s*\{([\s\S]*?)\}/) || [];
  const cssContent1200px: string[] = cssFileContent.match(/@media\s*\(max-width:\s*1200px\)\s*\{([\s\S]*?)\}/) || [];
  const cssContent600px: string[] = cssFileContent.match(/@media\s*\(max-width:\s*600px\)\s*\{([\s\S]*?)\}/) || [];

  const dimensionsReg: string[] = cssFileContent.match(/(--dimension-[\d-]+x):\s*([^;]+);/g) || [];

  const cssFontTokens1400px: string[] = cssContent1400px[1].match(/--font-size-[a-z0-9-]+:\s*[^;]+;/g) || [];
  const cssFontTokens1200px: string[] = cssContent1200px[1].match(/--font-size-[a-z0-9-]+:\s*[^;]+;/g) || [];
  const cssFontTokens600px: string[] = cssContent600px[1].match(/--font-size-[a-z0-9-]+:\s*[^;]+;/g) || [];
  const cssFontTokensDefault: string[] = cssContentDefault[1].match(/--font-size-[a-z0-9-]+:\s*[^;]+;/g) || [];
  const fontWeights: string[] = cssFileContent.match(/--font-weight-[a-z0-9-]+:\s*[^;]+;/g) || [];

  const lineHeights: string[] = cssFileContent.match(/--line-height-[\d\w]+:\s*[^;]+;/g) || [];

  const cssHeadingFonts: string[] = cssFileContent.match(/--typography-heading-[a-z0-9-]+:\s*[^;]+;/g) || [];
  const cssSubHeadingFonts: string[] = cssFileContent.match(/--typography-subheading-[a-z0-9-]+:\s*[^;]+;/g) || [];
  const leadFonts: string[] = cssFileContent.match(/--typography-lead-[a-z0-9-]+:\s*[^;]+;/g) || [];
  const bodyFonts: string[] = cssFileContent.match(/--typography-body-(?!.*(?:-underline|-compact))[^;]+;\s*/g) || [];
  const bodyCompactFonts: string[] =
    cssFileContent.match(/--typography-body-compact(?!.*(?:-underline))[^;]+;\s*/g) || [];
  const detailTextFonts: string[] = cssFileContent.match(/--typography-detailtext-[a-z0-9-]+:\s*[^;]+;/g) || [];
  const labelFonts: string[] = cssFileContent.match(/--typography-label-[a-z0-9-]+:\s*[^;]+;/g) || [];

  // returnerer {--dimension-1x: "0.25rem"}
  const dimensions = Object.fromEntries(
    dimensionsReg.map((entry) => {
      const [key, value] = entry
        .replace(';', '')
        .split(':')
        .map((str) => str.trim());
      return [key, value];
    })
  );

  fontTokensDefault.value = getFontSizeDimension(cssFontTokensDefault);
  fontTokens1400.value = getFontSizeDimension(cssFontTokens1400px);
  fontTokens1200.value = getFontSizeDimension(cssFontTokens1200px);
  fontTokens600.value = getFontSizeDimension(cssFontTokens600px);

  lineHeightsObject.value = Object.fromEntries(
    lineHeights.map((entry) => {
      const [key, value] = entry
        .replace(';', '')
        .split(':')
        .map((str) => str.trim());
      return [key, value];
    })
  );

  fontWeightsObject.value = Object.fromEntries(
    fontWeights.map((entry) => {
      const [key, value] = entry
        .replace(';', '')
        .split(':')
        .map((str) => str.trim());
      return [key, value];
    })
  );

  headingsVariables.push(...getFontVariables(cssHeadingFonts));
  subheadingsVariables.push(...getFontVariables(cssSubHeadingFonts));
  leadVariables.push(...getFontVariables(leadFonts));
  bodyVariables.push(...getFontVariables(bodyFonts));
  bodyCompactVariables.push(...getFontVariables(bodyCompactFonts));
  detailTextVariables.push(...getFontVariables(detailTextFonts));
  labelVariables.push(...getFontVariables(labelFonts));

  headings.value = getFontValues(headingsVariables, fontTokensDefault.value);
  subHeadings.value = getFontValues(subheadingsVariables, fontTokensDefault.value);
  lead.value = getFontValues(leadVariables, fontTokensDefault.value);
  body.value = getFontValues(bodyVariables, fontTokensDefault.value);
  bodyCompact.value = getFontValues(bodyCompactVariables, fontTokensDefault.value);
  detailText.value = getFontValues(detailTextVariables, fontTokensDefault.value);
  label.value = getFontValues(labelVariables, fontTokensDefault.value);

  stateInitialized.value = true;

  // returnerer {--font-size-2x-small: '0.875rem}
  function getFontSizeDimension(fontTokens: string[]): Record<string, string> {
    return Object.fromEntries(
      fontTokens.map((entry) => {
        const [key, value] = entry
          .replace(';', '')
          .split(':')
          .map((str) => str.trim());
        return [key, dimensions[value.replace(/^var\((.*)\)$/, '$1')]];
      })
    );
  }

  //returnerer --typography-heading-large: {size: --font-size}
  function getFontVariables(cssContent: string[]): (FontVariables | null)[] {
    return cssContent.map((entry) => {
      const keyMatch = entry.match(/(--[\w-]+):/);
      const weightMatch = entry.match(/var\((--font-weight-[\w-]+)\)/);
      const sizeMatch = entry.match(/var\((--font-size-[\w-]+)\)/);
      const lineHeightMatch = entry.match(/var\((--line-height-[\w-]+)\)/);
      if (!weightMatch || !sizeMatch || !lineHeightMatch || !keyMatch) {
        return null;
      }
      return { [keyMatch[1]]: { weight: weightMatch[1], size: sizeMatch[1], lineHeight: lineHeightMatch[1] } };
    });
  }
};

/**
 * Gjør om font-token verdier til faktiske verdier
 * @param fonts
 * @param currentResolutionValues
 * @returns riktige font verdier for valgt skjermstørrelse
 */
const getFontValues = (
  fonts: (FontVariables | null)[],
  currentResolutionValues: Record<string, string>
): Record<string, FontValues> => {
  const fontValues: Record<string, FontValues> = {};
  fonts.forEach((font) => {
    if (font) {
      const [key, value] = Object.entries(font)[0];
      if (value.weight && value.size && value.lineHeight) {
        fontValues[key] = {
          weight: fontWeightsObject.value[value.weight],
          size: currentResolutionValues[value.size],
          lineHeight: lineHeightsObject.value[value.lineHeight],
        };
      }
    }
  });
  return fontValues;
};

/**
 * Oppdaterer font verdier per spesifikk TableContent for valgte skjerm størrelser
 * @param tableContent
 * @param newResolutionValues
 */
const updateFontValuesPerTableContent = (tableContent: TableContent, newResolutionValues: Record<string, string>) => {
  switch (tableContent) {
    case 'headings':
      headings.value = getFontValues(headingsVariables, newResolutionValues);
      break;
    case 'subheadings':
      subHeaddings.value = getFontValues(subheadingsVariables, newResolutionValues);
      break;
    case 'lead':
      lead.value = getFontValues(leadVariables, newResolutionValues);
      break;
    case 'body':
      body.value = getFontValues(bodyVariables, newResolutionValues);
      break;
    case 'body-compact':
      bodyCompact.value = getFontValues(bodyCompactVariables, newResolutionValues);
      break;
    case 'detail-text':
      detailText.value = getFontValues(detailTextVariables, newResolutionValues);
      break;
    case 'label':
      label.value = getFontValues(labelVariables, newResolutionValues);
      break;
  }
};

export const cssTokenState = reactive({
  fontTokensDefault,
  fontTokens1400,
  fontTokens1200,
  fontTokens600,
  headings,
  subHeadings,
  lead,
  body,
  bodyCompact,
  detailText,
  label,
  initGlobalState,
  stateInitialized,
  updateFontValuesPerTableContent,
});
