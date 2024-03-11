import { css } from 'lit';


export default css`
.stepper {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

a {
  cursor: pointer;
  user-select: none;
}
.step {
  height: 200px;
}
button {
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
  padding: 20px 60px 20px 60px;
  position: relative;
}
.hidden {
  visibility: hidden;
  pointer-events: none;
}
:host {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
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