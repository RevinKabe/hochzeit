# Alina & Kevin – unsere Hochzeit

Eine responsive, statische Hochzeitseinladung für den **17. Dezember 2026 um 12:30 Uhr** im **Römer, Frankfurt am Main**.

Website: https://revinkabe.github.io/hochzeit/

## Inhalte ändern

- `index.html`: Namen, Texte, Uhrzeit, Dresscode und Links.
- `styles.css`: Farben, Schrift und Gestaltung für Smartphone und Desktop.
- `hochzeit.ics`: Kalendereintrag mit Beginn um 12:30 Uhr in Frankfurt (11:30 UTC). Eine Endzeit ist nicht festgelegt. Die bestehende Ereignis-ID bleibt zur Wiedererkennung bei erneuten Importen erhalten.
- `script.js`: Tages-Countdown für die Zeitzone Europe/Berlin.
- `assets/roemer.jpg`: Foto des Trauorts.

Für das spätere Paarfoto kann in `index.html` der Block `.portrait` durch ein Bild ersetzt werden. Die umliegende Gestaltung und das Datumssiegel können bleiben. Den Alternativtext anpassen und in `styles.css` für das Foto feste Proportionen sowie `object-fit: cover` setzen. Alina steht in allen sichtbaren Namensnennungen vor Kevin.

## Lokal ansehen

`index.html` direkt im Browser öffnen. Es werden keine Pakete, kein Build und keine API-Schlüssel benötigt. Für einen lokalen Webserver kann `node tools/preview.mjs` verwendet werden; anschließend http://127.0.0.1:4173 öffnen.

## GitHub Pages

Unter **Settings → Pages** die Quelle **Deploy from a branch**, Branch **main** und Ordner **/ (root)** auswählen. Änderungen auf `main` werden automatisch veröffentlicht.

Die Website und das Repository sind öffentlich. Die gesetzte `noindex`-Angabe bittet Suchmaschinen, die Seite nicht zu indexieren; sie ist kein Zugangsschutz. Die Website verwendet keine Analysewerkzeuge, Cookies oder extern geladenen Schriften. Karten werden erst über einen externen Link geöffnet. Der Hostinganbieter kann Zugriffsdaten verarbeiten.

## Bildnachweis

Die Schrift **Cormorant Garamond** von Christian Thalmann wird lokal aus `assets/fonts/` geladen. Quelle: [Google Fonts](https://github.com/google/fonts/tree/main/ofl/cormorantgaramond). Lizenz: SIL Open Font License 1.1, siehe `assets/fonts/OFL.txt`.

**Frankfurter Römer.jpg** von [Thomas Wolf](https://commons.wikimedia.org/wiki/User:Der_Wolf_im_Wald), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Frankfurter_R%C3%B6mer.jpg), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Originaldatei: https://upload.wikimedia.org/wikipedia/commons/c/c3/Frankfurter_R%C3%B6mer.jpg. Die Darstellung wird per CSS zugeschnitten und farblich angepasst; die angepasste Bilddarstellung steht unter derselben Lizenz. Die Lizenz gilt für das Foto, nicht automatisch für den übrigen Website-Inhalt.

Offizielle Informationen zum Veranstaltungsort: [Stadt Frankfurt – Trausaal Römer](https://frankfurt.de/service-und-rathaus/verwaltung/aemter-und-institutionen/standesamt/trausaele_2/trausaal-roemer).
