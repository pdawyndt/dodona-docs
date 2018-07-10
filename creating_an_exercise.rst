.. _creating_an_exercise:

==================
Een oefening maken
==================

Alle oefeningen in Dodona komen van een git repository. Ook lege repositories
kunnen :ref:`toegevoegd worden aan Dodona <adding_a_repository>` maar om de
oefeningen correct te identificeren en parsen moet de repository aan een
:ref:`voorgedefinieerde structuur <predefined_structure>` voldoen.

.. _adding_a_repository:

Een repository toevoegen
------------------------

Om oefeningen aan Dodona toe te voegen moet je eerst een git repository
aanmaken. Dit kan je doen op de `UGent GitHub <https://github.ugent.be>`_ of op
de `publieke GitHub <https://github.com>`_.

Daarna is het belangrijk om de account van Dodona toe te voegen als
*collaborator* aan je repository. Op de UGent GitHub is dat **SA-GithubDodona**
en op de publieke GitHub is dat **dodona-server**.

De volgende stap is de repository op Dodona registreren. Alle medewerkers op
Dodona hebben een "Repositories" link in hun "Admin" dropdown. Dit brengt je
naar een overzicht van de repositories die Dodona gebruikt als bronnen voor
oefeningen. Klik op de ``+`` knop om een nieuwe repository toe te voegen.

Geef een naam, de git clone url en de standaard :ref:`judge <list_of_judges>` in
en klik op de knop rechtsboven om een nieuwe repository toe te voegen.

Als laatste moet je op GitHub een *webhook* instellen. De URL hiervoor kan je
vinden op de detailpagina van je repository op Dodona. De *webhook* instellen
kan je doen in de instellingen van he repository op GitHub.

Klik tenslotte nog eens op "Alle oefeningen herwerken". Zo ben je zeker dat er
geen oefeningen gemist zijn tussen het moment dat je de respository toevoegde en
de *webhook* instelde.

Moet ik mijn repository *private* of *public* maken?
""""""""""""""""""""""""""""""""""""""""""""""""""""

Dit mag je zelf kiezen. Houd er wel rekening mee dat als je bijvoorbeeld
voorbeeldoplossingen bij de oefeningen plaatst of als je de oefeningen voor
examens gebruikt dat je de repository dan beter *private* maakt. Anders
kunnen studenten de repository vinden en deze oplossingen of oefeningen
bekijken.

.. _predefined_structure:

Structuur van de repository
---------------------------

In de repository mag je de mappen zelf organiseren zoals je wil. Om een map te
markeren als een map waar een oefening in zit moet je er een ``config.json``
bestand in plaatsen. Mappen waar oefeningen in zitten hebben een vaste
structuur:

``config.json``
  Dit bestand bevat de :ref:`configuratie <exercise_configuration>` specifiek
  voor de oefening. Deze configuratie zal samengeritsd worden met alle
  ``dirconfig.json`` bestanden in de oudermappen (tot aan de wortel van de
  repository) om de complete configuratie van de oefening te vormen.

``description``
  Deze map bevat de files die
  :ref:`de oefening beschrijven <describing_an_exercise>` en enkele (optionele
  mappen).

  ``media``
    Deze map bevat statische bestanden die vrij toegankelijk zijn op de
    webserver (handig om bijvoorbeeld afbeeldingen in te voegen in de
    beschrijving van de oefening).
  ``boilerplate``
    Deze map bevat standaardtekst die automatisch in de indienomgeving geplaatst
    wordt wanneer de oefening op de site geladen wordt. Deze files zijn van de
    vorm ``boilerplate.<lang>`` (bijvoorbeeld ``boilerplate.en`` of
    ``boilerplate.nl``). Hiermee kan je commentaar of namen in de taal van de
    gebruiker zetten. Het bestand ``boilerplate`` (zonder taal extensie) wordt
    gebruikt wanneer de gevraagde taal niet beschikbaar is.

``evaluation``
  De inhoud van deze map zal beschikbaar gesteld worden aan de judge (dus
  bijvoorbeeld de testcode).

``workdir``
  Deze map is optioneel. De inhoud zal beschikbaar gemaakt worden aan de
  ingediende code (door ze in de huidige map te plaatsen tijdens de uitvoering).

Alle mappen en bestanden naast deze zullen door Dodona genegeerd worden, dus je
mag zelf zoveel bestanden als je wil toevoegen (behalve bestanden die
``config.json`` heten, aangezien oefeningen in oefeningen niet toegelaten zijn).
Dit kan je gebruiken om bijvoorbeeld een voorbeeldoplossingen bij elke oefening
te plaatsen.

Een voorbeeld van een geldige structuur kan hier gevonden worden:

.. code-block:: text

   +-- README.md                      # Beschrijft de repository
   +-- dirconfig.json                 # Gedeelde configuratie voor alle oefeningen in deze repository
   +-- week01                         # Oefeningen kunnen bijvoorbeeld per week opgedeeld worden
   |   +-- intsum                     # Korte naam voor de oefening
   |   |   +-- config.json            # Configuratie voor de oefening
   |   |   +-- evaluation             #
   |   |   |   `-- intsum_test.hs     # Een Haskell test bestand
   |   |   +-- description            #
   |   |   |   +-- description.nl.md  # De beschrijving in het Nederlands
   |   |   |   +-- description.en.md  # De beschrijving in het Engels
   |   |   |   +-- media              #
   |   |   |   |   `-- some_image.png # Een afbeelding die in de beschrijving gebruikt wordt
   |   |   |   `-- boilerplate        #
   |   |   |       +-- boilerplate    # Default standaardtekst
   |   |   |       `-- boilerplate.en # Standaardtekst in het Engels
   |   |   `-- workdir                #
   |   |       `-- intlines.txt       # Een bestand beschikbaar voor de code van de student
   |   :
   :

.. _exercise_configuration:

Configuratie
------------

Het configuratie bestand van een oefening moet de volgende velden bevatten:

``description``
  Een JSON object met drie velden:

  ``difficulty``
    Een numerieke inschatting van de moeilijkheid van de oefening.

  ``handler``
    Momenteel is hier enkel ``default`` als waarde mogelijk.

  ``names``
    Een JSON object met ``en`` en/of ``nl`` als keys. De values zijn de naam van
    de oefening in de verschillende talen.

``evaluation``
  Een JSON object met vier velden:

  ``handler``
    De naam van de judge gebruikt voor de evaluatie.

  ``time_limit``
    Een geheel getal dat de maximale tijd aanduid om de evaluatie te draaien.

  ``memory_limit``
    Een geheel getal dat het maximale geheugen in bytes aanduid dat gebruikt mag
    worden tijdens de evaluatie.

  ``network_enabled``
    Een (optionele) boolean die aanduid of het netwerk ingeschakeld moet zijn.
    Standaard is de waarde ``false``.

``programming_language``
  Een string die de programmeertaal aangeeft. Dit wordt momenteel enkel gebruikt
  voor syntax highlighting.

``submission``
  Een object dat de specificatie voor de indienprocedure voorstelt. Dit wordt
  momenteel nog niet gebruikt.

  ``handler``
    Naam van de handler voor het indienen.

  ``size_limit``
    Een geheel getal dat de maximale grootte van ingediende code in bytes
    voorstelt.

  ``supported_programming_languages``
    Een lijst van strings die de aanvaardbare programmeertalen voorstellen. (Of
    een enkele string als er maar één aanvaardbare programmeertaal is.)

``visibility``
  Oftewel ``"open"`` of ``"closed"``. Als de waarde ``"open"`` is kan iedereen
  de oefening vinden door er naar te zoeken. Als de waarde ``"closed"`` is, is
  de oefening enkel beschikbaar via eenlink er naar toe.

.. _describing_an_exercise:

Beschrijving
------------

Beschrijvingen van oefeningen worden gerenderd met `Bootstrap
<http://getbootstrap.com/>`_ CSS, componenten en JavaScript. Beschrijvingen
kunnen op twee manieren geschreven worden: in HTML of in Markdown. Dodona
gebruikt `kramdown syntax <http://kramdown.gettalong.org/syntax.html>`_ voor
Markdown documenten. Zie het `Markdown cheatsheet
<https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#html>`_ voor
basis Markdown formatting.

Hieronder volgt een lijst van standaard features die voorkomen in beschrijvingen
van oefeningen. Volg deze instructies om de features een consistente Dodona
stijl te geven.

Afbeeldingen
````````````

Dodona installeert automatisch lightbox ondersteuning op alle afbeeldingen in de beschrijving. Het is mogelijk om een caption te specifiëren voor een afbeelding en om een alternatieve bron in te stellen die in de lightbox getoond zal worden.

HTML
  Een caption kan ingesteld worden met het ``data-caption`` attribuut. Als er geen ``data-caption`` attribuut is zal Dodona als caption de eerste waarde van de volgende attributen nemen: ``alt`` en ``src``.

  .. code-block:: html

     <img src="image.jpg" data-caption="Caption onder de afbeelding" title="Caption onder de afbeelding" alt="Caption onder de afbeelding" />

  Een alternatieve bron voor een hoge-resolutie versie van de afbeelding kan
  toegevoegd worden via het ``data-large`` attribuut. Deze versie zal getoond
  worden in de lightbox in plaats van de afbeelding die inline in de
  beschrijving getoond wordt.

  .. code-block:: html

     <img src="image.jpg" data-large="large-image.jpg"/>

Markdown
  Om via markdown een caption in te stellen kan ook het ``data-caption``
  attribuut gebruikt worden. Als dit niet aanwezig is zal Dodona kijken naar de
  eerste waarde van de volgende attributen: ``title text`` en ``alt text``. In
  de *inline style* ziet dat er zo uit:

  .. code-block:: text

     ![alt text](image.jpg "title text"){:data-caption="Caption onder de afbeelding"}

  Of in *reference style*:

  .. code-block:: text

     ![alt text][my-image]
     [my-image]: image.jpg "title text"
     {:data-caption="Caption onder de afbeelding"}

  Een alternatieve bron voor een hoge-resolutie versie van de afbeelding kan
  weer toegevoegd worden via het ``data-large`` attribuut. In de *inline style* ziet dat er zo uit:

  .. code-block:: text

     ![alt text](image.jpg "title text"){:data-large="large-image.jpg"}

  Of in *reference style*:

  .. code-block:: text

     ![alt text][my-image]
     [my-image]: image.jpg "title text"
     {:data-large="large-image.jpg"}

Tabellen
````````

HTML
  In HTML voeg je best de volgende *classes* toe aan je tabel: ``table``,
  ``table-striped`` en ``table-condensed``. Zo kan je ervan uitgaan dat er voor
  je tabel dezelfde stijl gebruikt wordt als in de rest van Dodona. Dit ziet er
  dan zo uit:

  .. code-block:: html

     <table class="table table-striped table-condensed">
         <thead>
             <tr>
                 <th>...</th>
                 <th>...</th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>...</td>
                 <td>...</td>
             </tr>
             <tr>
                 <td>...</td>
                 <td>...</td>
             </tr>
         </tbody>
     </table>

Markdown
  In Markdown kan je een tabel schrijven zoals je gewoon bent:

  .. code-block:: text

     |-----------------+------------+-----------------+----------------|
     | Default aligned |Left aligned| Center aligned  | Right aligned  |
     |-----------------|:-----------|:---------------:|---------------:|
     | First body part |Second cell | Third cell      | fourth cell    |
     | Second line     |foo         | **strong**      | baz            |
     | Third line      |quux        | baz             | bar            |
     |-----------------+------------+-----------------+----------------|
     | Second body     |            |                 |                |
     | 2 line          |            |                 |                |
     |=================+============+=================+================|
     | Footer row      |            |                 |                |
     |-----------------+------------+-----------------+----------------|

Gecentreerde groepen
````````````````````

Media (afbeeldingen, tabellen, videos, ...) in een groep worden naast elkaar
getoond met wat spacing ertussen en de groep wordt gecentreerd.

HTML
  Om dit in HTML te gebruiken plaats je de elementen die je in de groep wilt in
  een ``div`` met de ``dodona-centered-group`` *class*. Dit ziet er als volgt
  uit:

  .. code-block:: html

     <div class="dodona-centered-group">
       <img src="image1.jpg" title="title text 1" alt="alt text 1" />
       <img src="image2.jpg" title="title text 2" alt="alt text 2" />
       <img src="image3.jpg" title="title text 3" alt="alt text 3" />
     </div>

Markdown
  In Markdown kunnen we dit oplosson met `Inline Attribute Lists
  <http://kramdown.gettalong.org/syntax.html#inline-attribute-lists>`_, een
  kramdown feature. Dit ziet er dan als volgt uit:

  .. code-block:: text

     {: .dodona-centered-group}
     ![alt text 1](image1.jpg "title text 1")
     ![alt text 2](image1.jpg "title text 2")

YouTube
```````
Om een YouTube-filmpje te embedden moet je eerst de embed code halen op YouTube. Dit zal iets van de volgende vorm zijn:

.. code-block:: html

   <iframe width="560" height="315" src="https://www.youtube.com/embed/lRKriSNJlyg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

HTML
  Om dit te gebruiken in HTML gebruik je best een gecentreerde groep:

  .. code-block:: html

     <div class="dodona-centered-group">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/lRKriSNJlyg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
     </div>

Markdown
  In Markdown kan je gewoon HTML embedden. Dit kan dus gelijkaardig aan het HTML voorbeeld:

  .. code-block:: text

     {: .dodona-centered-group}
     <iframe width="560" height="315" src="https://www.youtube.com/embed/lRKriSNJlyg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Blockquotes
```````````
HTML
  In HTML moet je geen speciale dingen doen om blockquotes te gebruiken. Dit kan met andere woorden gewoon zo:

  .. code-block:: html

     <blockquote>
       Blockquotes are very handy in email to emulate reply text.
       This line is part of the same quote.
     </blockquote>

Markdown
  Ook in Markdown is het gebruik van blockquotes zeer gemakkelijk:

  .. code-block:: text

     > Blockquotes are very handy in email to emulate reply text.
     > This line is part of the same quote.

Code snippets
`````````````
HTML
  Om broncode te tonen in de beschrijving maak je best gebruik van de
  ``highlighter-rouge``, ``language-<lang>`` en ``highlight`` *classes*. Hierbij
  moet je ``<lang>`` vervangen door de naam van de programmeertaal waarvoor je
  syntax highlighting wilt. Dus bijvoorbeeld ``language-python`` voor Python.
  Schrijf je HTML als volgt:

  .. code-block:: html

     <div class="highlighter-rouge language-<lang>">
       <pre class="highlight">
         <code>
         # source code comes here
         </code>
       </pre>
     </div>

  Om een voorbeeld input te tonen kan je gewoon gebruikmaken van het ``pre``
  element. Dus als volgt:

  .. code-block:: html

     <pre>Sample text here...</pre>

Markdown
  Om in markdown syntax highlighting te krijgen kan je gewoon gebruik maken van
  de standaard manier om dit in markdown te doen:

  .. code-block:: text

     ```lang
     # source code comes here
     ```

  Vergeet niet om ``lang`` te vervangen door de naam van de programmeertaal
  waarvoor je syntax highlighting wilt.

Wiskundige snippets
```````````````````
HTML
  Om in HTML mooi gerenderde wiskunde te krijgen wordt gebruik gemaakt van `MathJax <https://www.mathjax.org/>`_.

  Om inline wiskunde te renderen kan dit als volgt:

  .. code-block:: html

     <p>
       tekst $$ valide LaTeX $$ tekst
     </p>

  Om de wiskunde in een apart blok te renderen kan dit op twee manieren:

  .. code-block:: html

     <p>
       tekst \[ valide LaTeX \] tekst
     <p>

  of

  .. code-block:: html

     <p>
       tekst $$\begin valide LaTeX$$ tekst
     </p>

  Deze laatste methode zal enkel als blok gerenderd worden wanneer de LaTeX met ``\begin`` begint.

Markdown
  Om in Markdown inline wiskunde te renderen kan dit als volgt:

  .. code-block:: text

     tekst $$ valide LaTeX $$ meer tekst

  Om de wiskunde als blok te renderen in Markdown kan dit als volgt:

  .. code-block:: text

     tekst
     $$
     valide LaTeX
     $$
     meer tekst

Callouts
````````

Callouts zijn enkel mogelijk in HTML. Dit kan als volgt:

.. code-block:: html

   <div class="callout callout-info">
     <h4>Titel</h4>
     <p>Tekst</p>
   </div>

In plaats van ``callout-info`` kan ook ``callout-warning`` en ``callout-danger`` gebruikt worden.
Je kan deze HTML natuurlijk gewoon in je Markdown plaatsen om hetzelfde effect te creëren.
