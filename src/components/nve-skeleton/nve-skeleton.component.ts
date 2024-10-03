
  import { customElement, property } from 'lit/decorators.js';
  import { INveComponent } from '@interfaces/NveComponent.interface';
  import styles from './nve-skeleton.styles';
  import SlSkeleton from '@shoelace-style/shoelace/dist/components/skeleton/skeleton.js';
/**
 * Skeletons  brukes til å gi en visuell representasjon av hvor innholdet til slutt vil bli tegnet.
 */
  @customElement('nve-skeleton')
  export default class NveSkeleton extends SlSkeleton implements INveComponent {

  @property({reflect: true, type: String}) testId: string | undefined = undefined;

  static styles = [
    SlSkeleton.styles,
    styles];

  constructor() {
    super();
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-skeleton': NveSkeleton;
  }
}