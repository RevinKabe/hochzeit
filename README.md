# Alina & Kevin – unsere Hochzeit

Eine responsive, statische Hochzeitseinladung für den **17. Dezember 2026 um 12:30 Uhr** im **Römer, Frankfurt am Main**.

Website: https://revinkabe.github.io/hochzeit/

## Inhalte ändern

- `index.html`: Namen, Texte, Uhrzeit, Dresscode und Links.
- `styles.css`: Farben, Schrift und Gestaltung für Smartphone und Desktop.
- `hochzeit.ics`: Kalendereintrag mit Beginn um 12:30 Uhr in Frankfurt (11:30 UTC). Eine Endzeit ist nicht festgelegt. Die bestehende Ereignis-ID bleibt zur Wiedererkennung bei erneuten Importen erhalten.
- `script.js`: Tages-Countdown für die Zeitzone Europe/Berlin.
- `assets/roemer.jpg`: Foto des Trauorts.
- `assets/alina-kevin.png`: Euer unverändertes Paarfoto (1500 × 2000 Pixel).

Das Paarfoto sitzt vollständig innerhalb des bogenförmigen Rahmens. Die Klasse `.couple-photo` bewahrt das Seitenverhältnis mit `width: 100%`, `height: auto` und `object-fit: contain`. Das Foto wird weder beschnitten noch gezoomt oder von Text überlagert. Bei einem späteren Fotoaustausch dessen natürliche Maße und den Alternativtext aktualisieren; kein `object-fit: cover` verwenden. Alina steht in allen sichtbaren Namensnennungen vor Kevin.

## Lokal ansehen

`index.html` direkt im Browser öffnen. Es werden keine Pakete, kein Build und keine API-Schlüssel benötigt. Für einen lokalen Webserver kann `node tools/preview.mjs` verwendet werden; anschließend http://127.0.0.1:4173 öffnen.

## GitHub Pages

Unter **Settings → Pages** die Quelle **Deploy from a branch**, Branch **main** und Ordner **/ (root)** auswählen. Änderungen auf `main` werden automatisch veröffentlicht.

Die Website verwendet keine Analysewerkzeuge, Cookies oder extern geladenen Schriften. Karten werden erst über einen externen Link geöffnet. Der Hostinganbieter kann Zugriffsdaten verarbeiten.

## Crawler und Privatsphäre

Die Website und das Repository sind derzeit öffentlich. Die HTML-Metadaten bitten unterstützende Suchmaschinen, die Seite nicht zu indexieren, keine Textauszüge und keine Bildvorschauen anzuzeigen. `no-referrer` verhindert, dass die Browser-Anfragen an andere Seiten die Adresse der Einladung als Referrer mitsenden.

Die Datei **https://revinkabe.github.io/robots.txt** bittet alle regelkonformen Crawler, `/hochzeit/` und die zugehörigen Dateien nicht abzurufen. Andere Projektseiten bleiben unberührt. Die aktive Datei wird im Hilfs-Repository [RevinKabe/revinkabe.github.io](https://github.com/RevinKabe/revinkabe.github.io) verwaltet; `privacy/host-robots.txt` ist die lokale Referenzkopie. Bei Änderungen beide Kopien aktualisieren. Eine Datei unter `/hochzeit/robots.txt` würde nicht als robots.txt dieses Hosts gelten.

Diese Regeln sind **kein Zugangsschutz**. Bots können sie ignorieren; die Quelldateien und die Git-Historie dieses öffentlichen Repositorys bleiben lesbar. Für tatsächliche Vertraulichkeit müssen sowohl Website-Inhalte und Downloads als auch das Quell-Repository geschützt werden. Bereits angefertigte Kopien lassen sich damit nicht zurückholen.

`robots.txt` verhindert bei unterstützenden Bots das Abrufen der Inhalte. Dadurch können diese Bots auch das HTML-`noindex` nicht neu auslesen. Bereits bekannte URLs können deshalb weiterhin ohne Inhalt als Verweis erscheinen; Crawling-Sperre und Entfernung aus einem Suchindex sind unterschiedliche Vorgänge.

Quellen: [robots.txt richtig veröffentlichen](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt), [Grenzen von robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro), [noindex und Crawling](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

## Bildnachweis

Die Schrift **Cormorant Garamond** von Christian Thalmann wird lokal aus `assets/fonts/` geladen. Quelle: [Google Fonts](https://github.com/google/fonts/tree/main/ofl/cormorantgaramond). Lizenz: SIL Open Font License 1.1, siehe `assets/fonts/OFL.txt`.

**Frankfurter Römer.jpg** von [Thomas Wolf](https://commons.wikimedia.org/wiki/User:Der_Wolf_im_Wald), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Frankfurter_R%C3%B6mer.jpg), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Originaldatei: https://upload.wikimedia.org/wikipedia/commons/c/c3/Frankfurter_R%C3%B6mer.jpg. Die Darstellung wird per CSS zugeschnitten und farblich angepasst; die angepasste Bilddarstellung steht unter derselben Lizenz. Die Lizenz gilt für das Foto, nicht automatisch für den übrigen Website-Inhalt.

Offizielle Informationen zum Veranstaltungsort: [Stadt Frankfurt – Trausaal Römer](https://frankfurt.de/service-und-rathaus/verwaltung/aemter-und-institutionen/standesamt/trausaele_2/trausaal-roemer).
