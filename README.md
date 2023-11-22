Hei.
Prosjekt importerer shoelace npm pakke, bruker ikke shoelace cdn.
Kjør npm run dev for utvikling.
For å starte storybook kjør npm run storybook. Man trenger ikke å bygge først (kan være at det må fikses senere hvis det trengs).
Styling på knappene er ikke helt ferdig (se f.eks. rammer når man hover over).
Etter et forsøk på mappinga av ds tokene til shoelace tokene, foreslår jeg at vi bruker kun våre tokene uten mapping. Det
blir alt for forvirrende men også ikke fungerer helt bra, siden noen tokene overskriver hverandre og fargene vil ikke passe akkurat som i nve sitt ds. Det er også veldig enkelt å style utvidet komponenter for man må ikke style shadow domen men kjøre styling direkte på klassene til komponentene. Akkurat nå så er styling på knappen i nve-button.ts men kan flyttes til separat style fil.
Har man lyst til å teste en komponent via index.html må man huske å legge til script tag med komponenten som f.eks. <script type="module" src="/src/nve-button.ts"></script>
