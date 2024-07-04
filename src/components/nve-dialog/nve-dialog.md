```html:preview
 <nve-button onclick="this.nextElementSibling.show()" class="open-dialog">Vis dialogen</nve-button>
 <nve-dialog label="label">
  Innhold
  <div slot="footer">
    <nve-button onclick="this.parentElement.parentElement.hide()">Lukk</nve-button>
  </div>
 </nve-dialog>
```
