import { ref } from 'vue';

export enum Theme {
  NVE = 'nve',
  VARSOM = 'varsom',
}
export const currentTheme = ref<Theme>(Theme.NVE);
export const themeLocalStorageVariable = 'currenttheme';

export function useCurrentTheme() {
  const changeCurrentTheme = (theme: Theme) => {
    localStorage.setItem(themeLocalStorageVariable, theme);
    currentTheme.value = theme;
  };

  return {
    currentTheme,
    changeCurrentTheme,
  };
}
