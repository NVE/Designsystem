<script setup lang="ts">
import nveVariables from '../../../../tokens/brand/nve.json';
import varsomVariables from '../../../../tokens/brand/varsom.json';
import { computed } from '@vue/reactivity';

const jsonToColorMap = (styleSheet: typeof nveVariables | typeof varsomVariables) => {
  const colorMap: Record<string, Array<{ name: string; value: string }>> = {};
  for (const [key, value] of Object.entries(styleSheet)) {
    const colors: Array<{ name: string; value: string }> = [];
    for (const [vKey, vValue] of Object.entries(value)) {
      if (vValue.type === 'color') {
        colors.push({ name: vKey, value: vValue.value });
      }
    }
    if (colors.length) {
      colorMap[key] = colors.sort((c1, c2) => c1.name.localeCompare(c2.name));
    }
  }
  return colorMap;
};

const nveColors = computed(() => {
  return jsonToColorMap(nveVariables);
});

const varsomColors = computed(() => {
  return jsonToColorMap(varsomVariables);
});

/* returnerer hex-convertert: 0 til 15 */
const rgbToLightness = (r: number, g: number, b: number) => (1 / 2) * (Math.max(r, g, b) + Math.min(r, g, b));

const calculateContrastingTextColor = (color: string) => {
  //aller helst vil vi bruke en css-regel som color-contrast() her, men den er kun i Safari per nå.
  console.dir(color);
  if (!color.startsWith('#') || color.length < 7) {
    return '#000';
  } else {
    const red = parseInt(color.substring(1, 2), 16);
    const green = parseInt(color.substring(3, 4), 16);
    const blue = parseInt(color.substring(5, 6), 16);
    if (rgbToLightness(red, green, blue) > 6) {
      return '#000';
    }
    return '#fff';
  }
};

const maxColumns = computed(() => {
  return Object.values(nveColors.value).reduce((acc, val) => {
    return Math.max(acc, val.length);
  }, 0);
});
</script>

<template>
  <h4>Dette er fargene slik de er definert.</h4>
  <div>Man skal ikke bruke disse variablene direkte, men heller bruke andre variabler som bruker disse</div>

  <div class="holder" :style="`--_cols: ${maxColumns}`">
    <div v-if="nveColors" class="color-map">
      <div class="row">
        <div class="cell"></div>
        <div v-for="index in maxColumns + 1" class="cell">
          {{
            Object.values(nveColors)
              .at(0)
              ?.at(index - 1)?.name
          }}
        </div>
      </div>
      <div v-for="(value, key, index) in nveColors" class="row">
        <div>{{ key }}</div>
        <div
          v-for="v in value"
          class="cell"
          :style="`--_c: ${v.value}; --_tc: ${calculateContrastingTextColor(v.value)}`"
        >
          <nve-tooltip>
            <div slot="content">
              <div>--{{ key }}-{{ v.name }}</div>
              <div>{{ v.value }}</div>
            </div>
            <div class="value"></div>
          </nve-tooltip>
        </div>
      </div>
    </div>
    <h4 v-if="varsomColors">Varsom overstyrer noen av disse fargene:</h4>
    <div v-if="varsomColors" class="color-map">
      <div class="row">
        <div class="cell"></div>
        <div v-for="index in maxColumns + 1" class="cell">
          {{
            Object.values(nveColors)
              .at(0)
              ?.at(index - 1)?.name
          }}
        </div>
      </div>
      <div v-for="(value, key, index) in varsomColors" class="row">
        <div>{{ key }}</div>
        <div
          v-for="v in value"
          class="cell"
          :style="`--_c: ${v.value}; --_tc: ${calculateContrastingTextColor(v.value)}`"
        >
          <nve-tooltip>
            <div slot="content">
              <div>--{{ key }}-{{ v.name }}</div>
              <div>{{ v.value }}</div>
            </div>
            <div class="value"></div>
          </nve-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-map {
  display: grid;
  grid-template-columns: auto repeat(var(--_cols), 1fr);
}
.row {
  display: grid;
  grid-template-columns: subgrid;
  grid-column-start: 1;
  grid-column-end: calc(var(--_cols) + 2);
  & > :first-child {
    padding-inline-end: 8px;
  }
}
.cell {
  background-color: var(--_c);
  color: var(--_tc);
}
.value {
  width: 100%;
  height: 100%;
}
</style>
