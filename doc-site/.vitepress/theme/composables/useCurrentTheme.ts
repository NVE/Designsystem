import { ref } from 'vue';

export enum Theme {
  NVE = 'nve',
  VARSOM = 'varsom',
}
export const currentTheme = ref<Theme>(Theme.NVE);

export function useCurrentTheme() {
  const changeCurrentTheme = (theme: Theme) => {
    currentTheme.value = theme;
  };

  return {
    currentTheme,
    changeCurrentTheme,
  };
}
