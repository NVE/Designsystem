/** Sammenligner både primitiver og objekter. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function deepCompare(a: any, b: any) {
  if (a === b) return true;

  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
    return false;
  }

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepCompare(a[key], b[key])) return false;
  }

  return true;
}
