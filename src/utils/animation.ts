/**
 * Animerer et HTML-element med gitte keyframes og animasjonsvalg. Tatt fra shoelace sin repo.
 *
 * @param el - Elementet som skal animeres.
 * @param keyframes - En liste med keyframes som definerer animasjonen.
 * @param options - (Valgfritt) Innstillinger for animasjonen, som varighet og easing.
 * @returns En Promise som løses når animasjonen er ferdig eller avbrutt.
 * @throws Kaster feil hvis varigheten er satt til Infinity.
 */
export function animateTo(el: HTMLElement, keyframes: Keyframe[], options?: KeyframeAnimationOptions) {
  return new Promise((resolve) => {
    if (options?.duration === Infinity) {
      throw new Error('Promise-based animations must be finite.');
    }

    const animation = el.animate(keyframes, {
      ...options,
      duration: prefersReducedMotion() ? 0 : (options?.duration ?? 300), //0.3 ms som standard
    });

    animation.addEventListener('cancel', resolve, { once: true });
    animation.addEventListener('finish', resolve, { once: true });
  });
}

/** Sjekker om bruker foretrekker redusert bevegelse så at vi ikke viser raske animasjoner på skjermen
 * @returns Sant om bruker foretrekker redusert bevegelse, ellers usant hvis ikke.
 */
export function prefersReducedMotion(): boolean {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  return query.matches;
}
