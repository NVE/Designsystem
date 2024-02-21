
  import { html } from 'lit';

  /**
 * Demonstrasjon av nve-search
 */
/**
 * Metoden for å teste custom validering
 * @param e event
 * @returns
 */

const mockupData = [
  "Amina",
  "Marcin",
  "Jørgen",
  "Knut",
  "Henning",
  "Khoi"
]

document.addEventListener("DOMContentLoaded", function() {
  const nveSearch = document.getElementById("nveSearch") as HTMLElement;
  const nveMenu = document.querySelector("nve-menu") as HTMLElement;

  nveSearch?.addEventListener("input",function(){
    updateDropdownMenu(nveSearch, nveMenu);
  } );
})


const updateDropdownMenu = (nveSearch: HTMLElement, nveMenu: HTMLElement) => {
  nveMenu.innerHTML = '';
  
  const searchInputValue = nveSearch.value.toLowerCase();
  console.log("searchInputValue", searchInputValue)

  const filteredData = searchInputValue ? mockupData.filter(item => item.toLowerCase().includes(searchInputValue)) : [];

  // Create and append new menu items
  filteredData.forEach(itemText => {
    const menuItem = document.createElement('nve-menu-item');
    menuItem.textContent = itemText;
    nveMenu.appendChild(menuItem);
  });
  //selectedSaksbehandler.value = (event.target as HTMLInputElement).value;
};


const table = html`
<hr />
<h3 id="nve-search">nve-search</h3>
<table class="demo">
<thead>
      <tr>
        <th></th>
        <th>default</th>
        <th>grey</th>
        <th>grey-outlined</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>Med ikon:</td>
        <td>
          <nve-search placeholder="Søk">
            <nve-icon name="search" slot="prefix"></nve-icon>
          </nve-search>
        </td>
        <td>
          <nve-search placeholder="Søk" variant="grey">
            <nve-icon name="search" slot="prefix"></nve-icon>
          </nve-search>
        </td>
        <td>
          <nve-search id="nveSearch" placeholder="Søk" variant="grey-outlined">
            <nve-icon name="search" slot="prefix"></nve-icon>
          </nve-search>
          <nve-menu>
          </nve-menu>
        </td>
      </tr>
      <tr>
        <td>Uten ikon:</td>
        <td>
          <nve-search placeholder="Søk">
          </nve-search>
       </td>
       <td>
          <nve-search placeholder="Søk" variant="grey">
          </nve-search>
        </td>
        <td>
          <nve-search placeholder="Søk" variant="grey-outlined">
          </nve-search>
        </td>
      </tr>
    </tbody>
</table>`
  export default table;