<!-- Viser en font verdi tabell for et valgt innhold (se TableContent type), og for en valgt skjermbredde -->
<template>
  <div v-if="cssTokenState.stateInitialized" ref="componentRoot" class="typography-table">
    <nve-radio-group
      size="large"
      label="Skjermbredde:"
      orientation="horizontal"
      value="default"
      @sl-input="setResolution($event.target.value)"
    >
      <nve-radio value="600">mindre enn 600 px</nve-radio>
      <nve-radio value="1200">mindre enn 1200 px </nve-radio>
      <nve-radio value="default"> Standard </nve-radio>
      <nve-radio value="1400">større enn 1400 px </nve-radio>
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
  Object.fromEntries(Object.entries(cssTokenState.fontTokensDefault).reverse())
);

const setResolution = (resolution: 'default' | '1400' | '1200' | '600') => {
  screenSizeRadio.value = resolution;
  let fontTokensObject: { [key: string]: string } = {};
  switch (resolution) {
    case '1400':
      fontTokensObject = cssTokenState.fontTokens1400;
      break;
    case '1200':
      fontTokensObject = cssTokenState.fontTokens1200;
      break;
    case '600':
      fontTokensObject = cssTokenState.fontTokens600;
      break;
    default:
      fontTokensObject = cssTokenState.fontTokensDefault;
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
    cssTokenState.headers,
    cssTokenState.subHeaders,
    cssTokenState.ingress,
    cssTokenState.body,
    cssTokenState.bodyCompact,
    cssTokenState.detailText,
    cssTokenState.label,
  ],
  () => {
    switch (props.tableContentType) {
      case 'default':
        tableContent.value = cssTokenState.headers;
        break;
      case 'headers':
        tableContent.value = cssTokenState.headers;
        break;
      case 'subheaders':
        tableContent.value = cssTokenState.subHeaders;
        break;
      case 'ingress':
        tableContent.value = cssTokenState.ingress;
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
