// vi bruker material ikoner istedenfor shoelace sine bootsrap ikoner der hvor 'system' ikoner brukes i shoelace komponenter
// shoelace anbefaler at man oppdaterer alle system ikoner hvis man vil ha sine egne, for å unngå konflikter, eller at
// noen ikoner mangles fordi registerIconLibrary overtar alle shoelace sine system ikoner.
// https://shoelace.style/components/icon#customizing-the-system-library
// dette scriptet kalles i index.ts
import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';

interface Icons {
  [name: string]: string;
}

const icons: Icons = {
  caret: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15.375L6 9.37501L7.4 7.97501L12 12.575L16.6 7.97501L18 9.37501L12 15.375Z" fill="currentColor"/>
    </svg>
  `,
  check: `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97501L20.1501 7.40001L9.5501 18Z" fill="currentColor"/>
  </svg>
  `,
  'chevron-down': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z"/></svg>
  `,
  'chevron-left': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z"/></svg>
  `,
  'chevron-right': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg>
  `,
  'chevron-up': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-554 283-357l-43-43 240-240 240 240-43 43-197-197Z"/></svg>
  `,
  copy: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
    </svg>
  `,
  'eye-slash': `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/>
    </svg>
  `,
  eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z"/>
    </svg>
  `,
  'grip-vertical': `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"/>
    </svg>
  `,
  indeterminate: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -48 48 48"><path d="M12-22v-6h24v6H12Z" fill="currentColor"/></svg>
  `,
  'person-fill': `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
    </svg>
  `,
  'play-fill': `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/>
    </svg>
  `,
  'pause-fill': `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/>
    </svg>
  `,
  radio: `
  <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g fill="currentColor">
      <circle cx="8" cy="8" r="3.42857143"></circle>
    </g>
  </g>
</svg>
  `,
  'x-lg': `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </svg>
  `,
  /* Clear-ikon for input, select. Merk at denne er kun en x uten sirkel rundt, i motsetning til shoelace sin */
  'x-circle-fill': `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.0625 15L5 13.9375L8.9375 10L5 6.0625L6.0625 5L10 8.9375L13.9375 5L15 6.0625L11.0625 10L15 13.9375L13.9375 15L10 11.0625L6.0625 15Z" fill="currentcolor" />
    </svg>
  `,
};

export { icons, registerIconLibrary };
