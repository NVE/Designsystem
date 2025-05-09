<template>
  <nve-button v-if="!openInNewTab" variant="secondary" @click="navigateTo(URL)">{{ text }}</nve-button>
  <nve-button v-if="openInNewTab" variant="secondary" @click="openINewTab(URL)"
    >{{ text }}
    <nve-icon name="open_in_new" slot="suffix"></nve-icon>
  </nve-button>
</template>

<script setup lang="ts">
type Props = {
  URL: string;
  text: string;
  openInNewTab?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  openInNewTab: false,
});

const { text, openInNewTab, URL } = props;

const navigateTo = (route) => {
  // TODO improve this with maybe a router-link component to avoid hardcoding the base url
  window.location.href = route;
};

const openINewTab = (url) => {
  window.open(url, '_blank');
};
</script>

<style scoped></style>
