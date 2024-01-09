// Oppdatere bolske properites på liste av nodes av samme type
export default function toggleBooleanAttrOnListOfNodes<T extends Element>(
  componentsToUpdate: Array<T>,
  property: boolean,
  propertyString: string
) {
  if (property) {
    componentsToUpdate.forEach((ch) => {
      ch.toggleAttribute(propertyString, true);
    });
  } else {
    componentsToUpdate.forEach((ch) => {
      ch.toggleAttribute(propertyString, false);
    });
  }
}
