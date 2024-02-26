import { css } from 'lit';

/**
 * Stiler til nve-stepper
 */
export default css`
.stepper {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Sørger for at innhold som går ut over ikke vises */

}

a {
  cursor: pointer;
  user-select: none;
}
.step {
  height: 200px;
}
button {
  margin: 20px;
  z-index: 2;
  user-select: none;
}

.scroll-menu {
  display: flex;
  align-items: center;
  overflow-x: hidden;
}

.flex-container {
  display: flex;
  padding: 20px 40px 20px 40px;
  position: relative;
}
.hidden {
  visibility: hidden;
  pointer-events: none;
}

.scroll-button.prev {
  background: linear-gradient(
    to right,
    #ffffff,
    #ffffff 60%,
    transparent 100%
  );
  padding: 20px 80px 20px 20px;
  margin: 0 60px;
  position: absolute;
  z-index: 1;
  left: 0;
}
.scroll-button.next {
  background: linear-gradient(
    to left,
    #ffffff,
    #ffffff 60%,
    transparent 100%
  );
  padding: 20px 80px 20px 80px;
  position: absolute;
  z-index: 1;
  right: 0;
}
`;