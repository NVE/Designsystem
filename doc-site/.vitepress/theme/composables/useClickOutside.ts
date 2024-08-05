/** Brukes til å sjekke om man klikket utover en html element */
import { Ref, ref } from 'vue';

export default function useClickOutside(elementRef: Ref<HTMLElement | null>) {
  const isClickOutside = ref(false);

  const checkIfClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const path = e.composedPath();
    if (target && elementRef.value && !path.includes(elementRef.value)) {
      isClickOutside.value = true;
    } else {
      isClickOutside.value = false;
    }
  };

  return { isClickOutside, checkIfClickOutside };
}
