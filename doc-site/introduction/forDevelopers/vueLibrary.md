<PageHeader title="Vue-komponentbibliotek" imagePath="developer"></PageHeader>
Vue-komponentbiblioteket utvider designsystemet med funksjonalitet som er for avansert for webkomponenter alene. Det er tilpasset Vue 3 og gjør det enklere å jobbe med komplekse UI-behov i større prosjekter.

- Kildekode: [GitHub](https://github.com/NVE/nve-vue-components)
- Dokumentasjon og installasjon: [NPM](https://www.npmjs.com/package/@norges-vassdrags-og-energidirektorat/nve-vue-components)
- Les mer om utviklingsprosess og struktur i prosjektets [CONTRIBUTING.md](https://github.com/NVE/nve-vue-components/blob/main/CONTRIBUTING.md)

Biblioteket kan installeres og brukes i alle Vue 3-prosjekter:

```bash
npm install @norges-vassdrags-og-energidirektorat/nve-vue-components
```

## Dokumentasjon og demo

Kodeeksempler og demonstrasjon finnes i demo-applikasjonen som følger prosjektet. Du kan også se hvordan
komponentene brukes på denne siden.

## Nve-table

<NveTableDemo />
<CodeExamplePreview>

```vue
<script setup lang="ts">
import { NveTable, sortByProperty, sortByFunction } from '@norges-vassdrags-og-energidirektorat/nve-vue-components';
import type { TableHeader } from '@norges-vassdrags-og-energidirektorat/nve-vue-components';
import { NveButton, NveCheckboxGroup, NveCheckbox, NveIcon, NveAccordionItem } from 'nve-designsystem';
import { ref, type Ref, useTemplateRef } from 'vue';
type Country = {
  name: string;
  governmentType: string;
  countryCode: string;
  capital: string;
  continent: string;
  population: number;
  area: number;
  foundingYear: number;
};

const countries = [
  {
    name: 'United States',
    countryCode: 'US',
    capital: 'Washington, D.C.',
    continent: 'North America',
    governmentType: 'Federal presidential constitutional republic',
    population: 331002651,
    area: 9833517,
    foundingYear: 1776,
  },
  {
    name: 'China',
    governmentType: 'Unitary one-party socialist republic',
    countryCode: 'CN',
    capital: 'Beijing',
    continent: 'Asia',
    population: 1439323776,
    area: 9596961,
    foundingYear: 1949,
  },
  {
    name: 'Germany',
    governmentType: 'Federal parliamentary republic',
    countryCode: 'DE',
    capital: 'Berlin',
    continent: 'Europe',
    population: 83783942,
    area: 357022,
    foundingYear: 1871,
  },
  {
    name: 'India',
    governmentType: 'Federal parliamentary democratic republic',
    countryCode: 'IN',
    capital: 'New Delhi',
    continent: 'Asia',
    population: 1380004385,
    area: 3287263,
    foundingYear: 1947,
  },
];

const governmentSorterFunction = (governmentType: string) => {
  if (governmentType.toLowerCase().includes('monarchy')) {
    return 1;
  } else if (governmentType.toLowerCase().includes('republic')) {
    return 2;
  } else {
    return 3;
  }
};

const tableHeaders: Ref<Array<TableHeader<Country>>> = ref([
  {
    key: 'name',
    title: 'Navn',
    hidden: false,
    sort: (sorter) => {
      const sF = sortByProperty(sorter.direction);
      return (a: Country, b: Country) => sF(a['name'], b['name']);
    },
  },
  {
    key: 'governmentType',
    title: 'Styreform',
    hidden: false,
    sort: (sorter) => {
      const sF = sortByFunction<Country>(sorter.direction);
      return (a: Country, b: Country) => sF(a, b, (d) => governmentSorterFunction(d.governmentType));
    },
  },
  {
    key: 'countryCode',
    title: 'Flagg',
    hidden: false,
    sort: (sorter) => {
      const sF = sortByProperty(sorter.direction);
      return (a: Country, b: Country) => sF(a['countryCode'], b['countryCode']);
    },
  },
  {
    key: 'capital',
    title: 'Hovedstad',
    hidden: false,
    sort: (sorter) => {
      const sF = sortByProperty(sorter.direction);
      return (a: Country, b: Country) => sF(a['capital'], b['capital']);
    },
  },
  {
    key: 'continent',
    title: 'Kontinent',
    hidden: false,
    sort: (sorter) => {
      const sF = sortByProperty(sorter.direction);
      return (a: Country, b: Country) => sF(a['continent'], b['continent']);
    },
  },
  {
    key: 'population',
    title: 'Befolkning',
    hidden: false,
    sort: (sorter) => {
      const sF = sortByProperty(sorter.direction, true); // true her gjør at vi sorterer som tall
      return (a: Country, b: Country) => sF(a['population'], b['population']);
    },
    accessor: (row: Country) => prettyPrintNumber(row['population']),
  },
  {
    key: 'area',
    title: 'Areal',
    hidden: false,
    sort: (sorter) => {
      const sF = sortByProperty(sorter.direction, true); // true her gjør at vi sorterer som tall
      return (a: Country, b: Country) => sF(a['area'], b['area']);
    },
    accessor: (row: Country) => `${prettyPrintNumber(row['area'])} km²`,
  },
  {
    key: 'foundingYear',
    title: 'Grunnlagt',
    hidden: false,
    sort: (sorter) => {
      const sF = sortByProperty(sorter.direction, true); // true her gjør at vi sorterer som tall
      return (a: Country, b: Country) => sF(a['foundingYear'], b['foundingYear']);
    },
  },
]);

const tableFilter = (textSearch: string, data: Array<Country> = countries): Array<Country> => {
  if (textSearch && textSearch.trim().length > 0) {
    const search = textSearch.toLowerCase();
    data = data.filter((row) => {
      return (
        row.name.toLowerCase().includes(search) ||
        row.countryCode.toLowerCase().includes(search) ||
        row.capital.toLowerCase().includes(search) ||
        row.continent.toLowerCase().includes(search)
      );
    });
  }
  data = data.filter((row) => {
    // Russland, Tyrkia er i både Europa og Asia. Så litt avansert filtrering. De er som "Europe/Asia" og "Asia/Europe" i json-fila.
    return selectedContinents.value.some((sc) => row.continent.split('/').includes(sc));
  });
  return data;
};

const prettyPrintNumber = (number: number): string => {
  return new Intl.NumberFormat('no-NO', {
    notation: 'standard',
    maximumFractionDigits: 2,
  }).format(number);
};

const filterOpen = ref(false);

const allContinents = ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'];
const selectedContinents: Ref<Array<string>> = ref([...allContinents]);

const continents = useTemplateRef('continents-checkbox-group');
const updateContinents = () => {
  selectedContinents.value = continents.value?.selectedValues ?? [];
};

const toggleColumn = (header: TableHeader<Country>) => {
  header.hidden = !header.hidden;
  tableHeaders.value = [...tableHeaders.value];
};
</script>

<template>
  <h3 style="padding-bottom: 2rem">Nve-table</h3>
  <div class="nve-table-demo">
    <nve-accordion-item variant="secondary" :open="true">
      <div slot="summary">Slå av og på kolonner</div>
      <div class="column-toggles">
        <nve-checkbox
          v-for="col in tableHeaders"
          :key="col.key"
          :checked="!col.hidden"
          @sl-change="() => toggleColumn(col)"
        >
          {{ col.title }}
        </nve-checkbox>
      </div>
    </nve-accordion-item>
    <NveTable
      :headers="tableHeaders"
      :data="countries"
      striped
      :page-size="15"
      :initial-sort="{ field: 'name', direction: 'ASC' }"
      :filter-function="tableFilter"
      :item-id="(country: Country) => country.countryCode"
    >
      <template #filterbutton>
        <nve-button variant="ghost" @click="filterOpen = !filterOpen">
          <nve-icon slot="prefix" name="filter_alt" />
          Filtrer
        </nve-button>
      </template>
      <template #subheader>
        <Transition :duration="400" name="filter">
          <div v-if="filterOpen" class="filter-wrapper">
            <div class="filter">
              <nve-checkbox-group
                :value="selectedContinents"
                orientation="horizontal"
                :[`selectedValues`]="selectedContinents"
                ref="continents-checkbox-group"
                @input="updateContinents"
              >
                <nve-checkbox v-for="cont of allContinents" :key="cont" :value="cont">
                  {{ cont }}
                </nve-checkbox>
              </nve-checkbox-group>
            </div>
          </div>
        </Transition>
      </template>
      <template #[`item.countryCode`]="row">
        <span class="country-code">
          <img :src="`https://hatscripts.github.io/circle-flags/flags/${row.value.toLowerCase()}.svg`" width="32" />
        </span>
      </template>
    </NveTable>
  </div>
</template>

<style scoped>
.filter-wrapper {
  display: grid;
  grid-template-rows: 1fr;
  transition:
    grid-template-rows 0.3s ease-out,
    padding-block-end 0.3s ease-in-out;
  padding-block-end: var(--spacing-large);
  & .filter {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-small);
  }
  &:is(.filter-enter-from, .filter-leave-to) {
    grid-template-rows: 0fr;
    padding-block-end: 0;
  }
  &:is(.filter-leave-from, .filter-enter-to) {
    grid-template-rows: 1fr;
  }
}

.column-toggles {
  display: flex;
  gap: var(--spacing-small);
}
nve-accordion-item {
  margin-block-end: var(--spacing-large);
}
</style>
```

</CodeExamplePreview>
