// Mapper typografi css-variabler fra .css fil til lesbare objekter.
import { reactive, ref } from 'vue';
import { FontValues, FontVariables, TableContent } from './types/FontValues';

/** Om css tilstand er initialisert */
const stateInitialized = ref(false);

/** Objekt med font-token-navn som nøkkel og token-verdi som verdi for standard skjermstørrelsen */
const fontTokensDesktop = ref<Record<string, string>>({});
/** Objekt med font-token-navn som nøkkel og token-verdi som verdi for stor skjerm */
const fontTokensDesktopLarge = ref<Record<string, string>>({});
/** Objekt med font-token-navn som nøkkel og token-verdi som verdi for tablet */
const fontTokensTablet = ref<Record<string, string>>({});
/** Objekt med font-token-navn som nøkkel og token-verdi som verdi for mobil */
const fontTokensMobile = ref<Record<string, string>>({});
/** Objekt med font-token-navn som nøkkel og token-verdi som verdi for liten mobil */
const fontTokensMobileSmall = ref<Record<string, string>>({});

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
  const cssContentDesktop: string[] = cssFileContent.match(/:root\.nve\s*\{([\s\S]*?)\}/) || [];
  const cssContentDesktopLarge: string[] =
    cssFileContent.match(/@media\s*\(min-width:\s*1600px\)\s*\{([\s\S]*?)\}/) || [];
  const cssContentTablet =
    cssFileContent.match(
      /@media\s*\(\(\s*min-width:\s*764px\s*\)\s*and\s*\(\s*max-width:\s*1023px\s*\)\s*\)\s*\{([\s\S]*?)\}/
    ) || [];
  const cssContentMobile =
    cssFileContent.match(
      /@media\s*\(\(\s*min-width:\s*390px\s*\)\s*and\s*\(\s*max-width:\s*763px\s*\)\s*\)\s*\{([\s\S]*?)\}/
    ) || [];
  const cssContentMobileSmall: string[] =
    cssFileContent.match(/@media\s*\(max-width:\s*389px\)\s*\{([\s\S]*?)\}/) || [];

  const dimensionsReg: string[] = cssFileContent.match(/(--dimension-[\d-]+x):\s*([^;]+);/g) || [];

  const cssFontTokensDesktopLarge: string[] =
    cssContentDesktopLarge[1].match(/--font-size-[a-z0-9-]+:\s*[^;]+;/g) || [];
  const cssFontTokensTablet: string[] = cssContentTablet[1].match(/--font-size-[a-z0-9-]+:\s*[^;]+;/g) || [];
  const cssFontTokensMobile: string[] = cssContentMobile[1].match(/--font-size-[a-z0-9-]+:\s*[^;]+;/g) || [];
  const cssFontTokensMobileSmall: string[] = cssContentMobileSmall[1].match(/--font-size-[a-z0-9-]+:\s*[^;]+;/g) || [];
  const cssFontTokensDesktop: string[] = cssContentDesktop[1].match(/--font-size-[a-z0-9-]+:\s*[^;]+;/g) || [];
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

  fontTokensDesktop.value = getFontSizeDimension(cssFontTokensDesktop);
  fontTokensDesktopLarge.value = getFontSizeDimension(cssFontTokensDesktopLarge);
  fontTokensTablet.value = getFontSizeDimension(cssFontTokensTablet);
  fontTokensMobile.value = getFontSizeDimension(cssFontTokensMobile);
  fontTokensMobileSmall.value = getFontSizeDimension(cssFontTokensMobileSmall);

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

  headings.value = getFontValues(headingsVariables, fontTokensDesktop.value);
  subHeadings.value = getFontValues(subheadingsVariables, fontTokensDesktop.value);
  lead.value = getFontValues(leadVariables, fontTokensDesktop.value);
  body.value = getFontValues(bodyVariables, fontTokensDesktop.value);
  bodyCompact.value = getFontValues(bodyCompactVariables, fontTokensDesktop.value);
  detailText.value = getFontValues(detailTextVariables, fontTokensDesktop.value);
  label.value = getFontValues(labelVariables, fontTokensDesktop.value);

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
      subHeadings.value = getFontValues(subheadingsVariables, newResolutionValues);
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
  fontTokensDesktop,
  fontTokensDesktopLarge,
  fontTokensTablet,
  fontTokensMobile,
  fontTokensMobileSmall,
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
