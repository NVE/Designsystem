<!-- 
 Viser API-dokumentasjon for alle felter til en komponent
 Henter opplysningene fra custom-elements.json.
 -->
<template>
  <div>
    <h2 id="egenskaper">
      Egenskaper
      <a class="header-anchor" href="#egenskaper" aria-label='Permalink to "Egenskaper"'>&ZeroWidthSpace;</a>
    </h2>
    <table>
      <thead>
        <tr>
          <th>Navn</th>
          <th>Type</th>
          <th>Arvet fra</th>
          <th>Beskrivelse</th>
          <th>
            <a href="https://lit.dev/docs/components/properties/#reflected-attributes" target="_blank">Reflected</a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="field in fields" :key="field.name">
          <td>{{ field.name }}</td>
          <td>
            {{ field.type?.text }}
            <span v-if="field.default"> = {{ field.default }}</span>
          </td>
          <td>{{ field.inheritedFrom?.name }}</td>
          <td>{{ field.description }}</td>
          <td>
            <nve-icon v-if="field.reflects" name="Check" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getComponentFields } from '../../customElementsManifest.store';

const props = defineProps<{
  componentName: string;
}>();

const fields = computed(() => getComponentFields(props.componentName));
</script>
