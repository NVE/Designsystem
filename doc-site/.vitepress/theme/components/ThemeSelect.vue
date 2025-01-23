<template>
  <div
    tabindex="0"
    @click="toggleMenu"
    @keyup.enter="toggleMenu"
    role="button"
    ref="selectTheme"
    class="select-wrapper"
  >
    <div class="divider"></div>
    <div class="select-button">
      <img :src="`/assets/${currentTheme}-logo.svg`" alt="nve-logo" />
      <span :class="[isMenuOpen ? 'vpi-chevron-up' : 'vpi-chevron-down', 'text-icon']"></span>
    </div>
    <div v-if="isMenuOpen" class="menu-drop">
      <div
        tabindex="0"
        @click.stop="changeThemeAndCloseMenu(Theme.NVE)"
        @keyup.enter.stop="changeThemeAndCloseMenu(Theme.NVE)"
        class="menu-drop__button"
        role="button"
      >
        <img src="/assets/nve-logo.svg" alt="nve-logo" />
        <p>NVE</p>
      </div>
      <div
        tabindex="0"
        @click.stop="changeThemeAndCloseMenu(Theme.VARSOM)"
        @keyup.enter.stop="changeThemeAndCloseMenu(Theme.VARSOM)"
        class="menu-drop__button"
        role="button"
      >
        <img src="/assets/varsom-logo.svg" alt="nve-logo" />
        <p>Varsom</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue';
import { useCurrentTheme, Theme, themeLocalStorageVariable } from '../composables/useCurrentTheme';
import useClickOutside from '../composables/useClickOutside';

const { changeCurrentTheme, currentTheme } = useCurrentTheme();
const isMenuOpen = ref<boolean>(false);
const selectTheme = ref<HTMLElement | null>(null);
const { isClickOutside, checkIfClickOutside } = useClickOutside(selectTheme);

watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.addEventListener('click', checkIfClickOutside);
  } else {
    document.removeEventListener('click', checkIfClickOutside);
  }
});

watch(isClickOutside, (newValue) => {
  if (newValue) {
    isMenuOpen.value = false;
  }
});

const changeThemeAndCloseMenu = (theme: Theme) => {
  changeCurrentTheme(theme);
  isMenuOpen.value = false;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onBeforeMount(() => {
  const lsThemeString = localStorage.getItem(themeLocalStorageVariable);
  if (lsThemeString && Object.values(Theme).includes(lsThemeString as Theme)) {
    changeCurrentTheme(lsThemeString as Theme);
  }
});
</script>

<style scoped>
.select-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.select-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 100%;
}

.divider {
  display: block;
  margin-right: 16px;
  width: 1px;
  height: 24px;
  background-color: var(--vp-c-divider);
  content: '';
}

.menu-drop {
  position: absolute;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  top: 50px;
  right: -10px;
  width: 110px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
  transition: background-color 0.5s;
  max-height: calc(100vh - var(--vp-nav-height));
  overflow-y: auto;
}

.menu-drop__button {
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  &:hover {
    color: var(--vp-c-brand-1);
    background-color: var(--vp-c-default-soft);
  }
}
img {
  border-radius: 4px;
  width: 22px;
}

@media (max-width: 768px) {
  .divider {
    display: none;
  }
  .select-wrapper {
    padding: 12px 0;
    justify-content: left;
  }

  .select-button {
    justify-content: left;
  }

  .menu-drop {
    right: 0;
    left: 0;
  }
}
</style>
