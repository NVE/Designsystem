<PageHeader title="For designere" imagePath="designer" pageLevel=2></PageHeader>

## Hvordan skrive commit-meldinger

I designsystemet bruker vi **Conventional Commits** for å holde endringer ryddige, sporbare og enkle å automatisere. Dette gjelder også endringer som kommer fra Figma / Token Studio.

Når commit-meldingene ikke følger denne standarden, må utviklere manuelt endre dem før PR-en kan merges. For å unngå dette ber vi designere følge retningslinjene under.

<nve-message-card label="Merk" size="compact">Breaking changes skal vurderes av en utvikler.</nve-message-card>

### Format

Slik skriver du commit-meldingene:

```
type(scope): kort beskrivelse på norsk
```

**Type**: Velg en av følgende:

- `fix` – når det er oppdatering på en eksisterende token
- `feat` – når nye tokens er innført

**Scope**: Bruk alltid `tokens`.

**Eksempel**:

```
feat(tokens): legge til tokens for bakgrunnsfarger
```

Gjerne se dokumentasjon under [Contributing](https://github.com/NVE/Designsystem?tab=contributing-ov-file#-conventional-commits) i GitHub også.

## Hvorfor er dette viktig?

Når man endrer token-verdier må vi også oppdatere CSS-filene. I dag skjer det automatisk i PR-en. Hvis conventional commit er korrekt brukt, kan vi publisere designsystem-pakken umiddelbart med oppdatert CSS, slik at endringene raskt når produksjon.

Hvis en conventional commit mangler eller har feil syntaks, vil bygg og publisering feile. En utvikler må da rette commit-meldingen manuelt, noe som gir ekstraarbeid og forsinker leveransen.
