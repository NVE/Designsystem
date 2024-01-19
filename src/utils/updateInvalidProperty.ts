/** Oppdatere bolske properites på en list av samme type nodes f.eks i sjekkboksen setter man disabled i sjekkboksgruppen
 * denne funksjonen toggler disabled på alle sjekkbokser som er barn til sjekkboksgruppen */
export default function toggleBooleanAttrOnListOfNodes<T extends Element>(
  componentsToUpdate: T[],
  isProperty: boolean,
  propertyName: string
) {
  componentsToUpdate.forEach((ch) => {
    ch.toggleAttribute(propertyName, isProperty);
  });
}
