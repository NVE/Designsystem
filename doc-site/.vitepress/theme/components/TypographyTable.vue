<!-- Viser en font verdi tabell for et valgt innhold (se TableContent type), og for en valgt skjermbredde -->
<template>
  <div v-if="cssTokenState.stateInitialized" ref="componentRoot" class="typography-table">
    <nve-radio-group
      size="large"
      label="Skjermbredde:"
      orientation="horizontal"
      value="desktop"
      @sl-input="setResolution($event.target.value)"
    >
      <nve-radio value="mobileSmall">Liten mobil</nve-radio>
      <nve-radio value="mobile">Mobil</nve-radio>
      <nve-radio value="tablet">Tablet </nve-radio>
      <nve-radio value="desktop"> Desktop </nve-radio>
      <nve-radio value="desktopLarge">Stor desktop</nve-radio>
    </nve-radio-group>

    <ul v-if="tableContentType === 'default'" class="font-list font-list--border-top">
      <li
        v-for="(value, key) in currentResolutionValues"
        :key="key"
        :style="{ 'font-size': `var(${key})`, 'line-height': '100%' }"
      >
        {{ key }} {{ value }}
      </li>
    </ul>
    <template v-else>
      <div class="font-list__container">
        <table>
          <thead>
            <tr>
              <th>Variable</th>
              <th>font-weight</th>
              <th>font-size</th>
              <th>line-height</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in tableContent" :key="key">
              <td>{{ key }}</td>
              <td>{{ value.weight }}</td>
              <td>{{ value.size }}</td>
              <td>{{ value.lineHeight }}</td>
            </tr>
          </tbody>
        </table>

        <ul class="font-list">
          <li v-for="(value, key) in tableContent" :key="key" :style="{ font: `var(${key})` }">
            {{ key }} {{ value.size }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { cssTokenState } from '../cssTokenState';
import { FontValues, TableContent } from '../types/FontValues';

const props = defineProps<{
  tableContentType: TableContent;
}>();

const componentRoot = ref<HTMLElement | null>(null);
const tableContent = ref<Record<string, FontValues>>({});
const screenSizeRadio = ref<string>('default');
const currentResolutionValues = ref<Record<string, string>>(
  Object.fromEntries(Object.entries(cssTokenState.fontTokensDesktop).reverse())
);

const setResolution = (resolution: 'desktop' | 'desktopLarge' | 'tablet' | 'mobile' | 'mobileSmall') => {
  screenSizeRadio.value = resolution;
  let fontTokensObject: { [key: string]: string } = {};
  switch (resolution) {
    case 'desktopLarge':
      fontTokensObject = cssTokenState.fontTokensDesktopLarge;
      break;

    case 'tablet':
      fontTokensObject = cssTokenState.fontTokensTablet;
      break;
    case 'mobile':
      fontTokensObject = cssTokenState.fontTokensMobile;
      break;
    case 'mobileSmall':
      fontTokensObject = cssTokenState.fontTokensMobileSmall;
      break;
    case 'desktop':
      fontTokensObject = cssTokenState.fontTokensDesktop;
      break;
    default:
      fontTokensObject = cssTokenState.fontTokensDesktop;
  }
  const reversedFontTokensObject = Object.fromEntries(Object.entries(fontTokensObject).reverse()); //TODO: this doesnt work so well
  currentResolutionValues.value = reversedFontTokensObject;
  if (props.tableContentType !== 'default') {
    cssTokenState.updateFontValuesPerTableContent(props.tableContentType, fontTokensObject);
  }
};

watch(
  () => currentResolutionValues.value,
  (newValue) => {
    Object.entries(newValue).map((entry) => {
      const [key, value] = entry;
      componentRoot.value?.style.setProperty(key, value);
    });
  },
  { immediate: true }
);

watch(
  () => [
    cssTokenState.headings,
    cssTokenState.subHeadings,
    cssTokenState.lead,
    cssTokenState.body,
    cssTokenState.bodyCompact,
    cssTokenState.detailText,
    cssTokenState.label,
  ],
  () => {
    switch (props.tableContentType) {
      case 'default':
        tableContent.value = cssTokenState.headings;
        break;
      case 'headings':
        tableContent.value = cssTokenState.headings;
        break;
      case 'subheadings':
        tableContent.value = cssTokenState.subHeadings;
        break;
      case 'lead':
        tableContent.value = cssTokenState.lead;
        break;
      case 'body':
        tableContent.value = cssTokenState.body;
        break;
      case 'body-compact':
        tableContent.value = cssTokenState.bodyCompact;
        break;
      case 'detail-text':
        tableContent.value = cssTokenState.detailText;
        break;
      case 'label':
        tableContent.value = cssTokenState.label;
        break;
    }

    Object.entries(tableContent.value).map((entry) => {
      const [key, value] = entry;
      const a = `${value.weight} ${value.size} / ${value.lineHeight} 'Source Sans Pro'`;
      componentRoot.value?.style.setProperty(key, a);
    });
  },
  { immediate: true }
);
</script>

<style scoped>
.typography-table {
  display: flex;
  flex-direction: column;
}

table {
  --vp-c-divider: var(--color-shades-grey-200);
  border: solid 1px var(--color-shades-grey-200);
}

.vp-doc tr:nth-child(2n) {
  background-color: unset;
}

nve-radio-group {
  border: solid 1px var(--color-shades-grey-200);
  border-bottom: none;
  border-radius: 3px 3px 0px 0px;
  padding: 10px;
}

.font-list {
  border-bottom: solid 1px var(--color-shades-grey-200);
  border-left: solid 1px var(--color-shades-grey-200);
  border-right: solid 1px var(--color-shades-grey-200);
  border-radius: 0px 0px 3px 3px;
  min-width: 20rem;
  max-width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none !important;
  background: #f6f6f7;
}

.font-list--border-top {
  border-top: solid 1px var(--color-shades-grey-200);
}

.font-list__container table,
ul {
  margin: 0;
}

.font-list__container table {
  display: table;
}
</style>
