.. _cursusbeheer:

Cursusbeheer
============

Als :ref:`lesgever <lesgever>` kan je onbeperkt :ref:`cursussen <cursus>` :ref:`aanmaken <cursus aanmaken>` en kan je andere gebruikers aanduiden als :ref:`cursusbeheerder <cursusbeheerder>` om samen met jou een cursus te beheren.

Als :ref:`cursusbeheerder <cursusbeheerder>` stippel je binnen een :ref:`cursus <cursus>` een leerpad uit met :ref:`oefeningen <oefening>` die je groepeert in :ref:`oefeningenreeksen <oefeningenreeks>`. Voor elke oefeningenreeks kan je een :ref:`deadline <oefeningenreeks deadline>` instellen die aangeeft tot wanneer er rekening gehouden wordt met :ref:`oplossingen <oplossing>` die gebruikers indienen voor oefeningen uit de oefeningenreeks.

.. important::

    In :ref:`cursusbeheer` veronderstellen we dat de :ref:`oefeningen <oefening>` die je aan een :ref:`oefeningenreeks <oefeningenreeks>` van een :ref:`cursus <cursus>` wilt toevoegen reeds beschikbaar zijn in Dodona. In :ref:`oefeningen toevoegen` bespreken we hoe je oefeningen aan Dodona kunt toevoegen.


.. _cursus aanmaken:

Aanmaken van een cursus
-----------------------

.. _beheersrechten:
.. _beheersmenu:
.. _gebruikersoverzicht:

.. important::

    Je hebt **beheersrechten** nodig om een :ref:`cursus <cursus>` te kunnen aanmaken. Je herkent dat je beheersrechten hebt als je het **beheersmenu** (menu :guilabel:`Admin`) ziet staan links van het :ref:`gebruikersmenu <gebruikersmenu>` aan de rechterkant van de :ref:`navigatiebalk <navigatiebalk>`.

    .. TODO:screenshot-missing: screenshot van navigatiebalk waarin beheersmenu is aangeduid

    Het **gebruikersoverzicht** toont een overzicht met de gebruikersnaam, de naam, het emailadres en voortgangsstatistieken uit het :ref:`gebruikersprofiel <gebruikersprofiel>` van alle gebruikers. Navigeer naar het gebruikersoverzicht door :guilabel:`Gebruikers` te selecteren in het :ref:`beheersmenu <beheersmenu>`.

    .. TODO:screenshot-missing: screenshot van opengeklapt beheersmenu waarin het menu-item Gebruikers is aangeduid

    Gebruik de zoekbalk bovenaan het gebruikersoverzicht om te zoeken naar specifieke gebruikers op basis van een gebruikersnaam, een naam of een emailadres. Druk in het gebruikersoverzicht op de editeerknop aan de rechterkant van een student of een lesgever om naar de :ref:`profielpagina <profielpagina>` van de gebruiker te navigeren.

    .. TODO:screenshot-missing: screenshot van gebruikersoverzicht waarin zoekbalk gebruikt wordt om naar gebruikers te zoeken en editeerknop aangeduid wordt

    Met :ref:`beheersrechten <beheersrechten>` kan je andere gebruikers beheersrechten geven door het veld :guilabel:`Rechten` in te stellen op :guilabel:`Staff` in de :ref:`profielpagina <profielpagina>` van de gebruiker. Je kunt ook beheersrechten ontnemen van gebruikers met beheersrechten (inclusief jezelf) door het veld :guilabel:`Rechten` in te stellen op :guilabel:`Student` in de profielpagina van de gebruiker. In Dodona gebruiken we de term **lesgever** voor een gebruiker met beheersrechten en de term **student** voor een gebruiker zonder beheersrechten. Als :ref:`lesgever <lesgever>` bepaal je dus mee wie de andere lesgevers zijn op Dodona.

    .. TODO:screenshot-missing: screenshot van gebruikersprofiel waarin selectiemenu van eigenschap Rechten opengeklapt wordt en aangeduid is

Druk in het :ref:`cursusoverzicht <cursusoverzicht>` op de knop :guilabel:`nieuwe cursus` om een nieuwe cursus aan te maken.

.. TODO:screenshot-missing: screenshot van cursusoverzicht waarop knop "nieuwe cursus" aangeduid is

Je krijgt de :ref:`cursusbeheerpagina <cursusbeheerpagina>` te zien waarin je de :ref:`cursuseigenschappen <cursuseigenschappen>` van de nieuwe cursus kunt instellen.

.. TODO:screenshot-missing: screenshot van cursusbeheerspagina van een nieuwe cursus

.. TODO:feature-update: vervang titelbalk van cursusbeheerpagina van nieuwe cursus door "Nieuwe cursus", en voeg het academiejaar toe aan de titelbalk van cursusbeheerpagina als het om een bestaande cursus gaat. Het laatst omwille van de consistentie met de cursuspagina waarin naast de naam ook het academiejaar staat.

Druk op de afwerkknop in de rechterbovenhoek van de :ref:`cursusbeheerpagina <cursusbeheerpagina>` om effectief de :ref:`cursus <cursus>` aan te maken. Je komt automatisch op :ref:`cursuspagina` van de nieuwe cursus terecht, waar je kan vastsellen dat je meteen ook als de eerste :ref:`cursusbeheerder <cursusbeheerder>` van de cursus bent aangeduid.

.. TODO:screenshot-missing: screenshot van cursuspagina van nieuw aangemaakte cursus met één gebruiker die ook de cursusbeheerder is

.. TODO:feature-missing: kopiëren van een bestaande cursus


.. _cursusbeheerpagina:
.. _cursuseigenschappen instellen:

Instellen van cursuseigenschappen
---------------------------------

Als :ref:`cursusbeheerder <cursusbeheerder>` kan je op de **cursusbeheerpagina** de :ref:`eigenschappen <cursuseigenschappen>` van een :ref:`cursus <cursus>` instellen. Je navigeert automatisch naar de cursusbeheerpagina als je een nieuwe cursus :ref:`aanmaakt <cursus aanmaken>` of je kunt zelf naar de cursusbeheerpagina van een bestaande cursus navigeren door op de editeerknop te drukken in de rechterbovenhoek van de :ref:`cursuspagina`.

.. TODO:screenshot-missing: screenshot van cursusbeheerspagina van een bestaande cursus

.. _cursuseigenschappen:

Op de :ref:`cursusbeheerpagina <cursusbeheerpagina>` kan je de volgende **cursuseigenschappen** instellen:

.. _cursus naam:

:guilabel:`Naam`

    De naam van de cursus.

.. _cursus lesgever:

:guilabel:`Lesgever`

    De namen van de lesgevers van de cursus. Gebruik een komma om namen te scheiden als er meerdere lesgevers zijn.

    .. TODO:feature-update: Markdown toelaten zodat eventueel ook emailadressen kunnen gekoppeld worden aan de namen van de lesgevers
    .. TODO:feature-update: overwegen om cursusgebruikers te selecteren als lesgevers van een cursus; dan kunnen hun namen aan hun profielpagina gekoppeld worden

.. _cursus academiejaar:

:guilabel:`Academiejaar`

    Het academiejaar waarin de cursus wordt aangeboden. Gebruik het formaat ``jjjj-jjjj`` om ervoor te zorgen dat de cursus correct gesorteerd wordt op de :ref:`startpagina` en in het :ref:`cursusoverzicht`. Op Dodona wordt de naam van een cursus altijd in één adem genoemd met het academiejaar waarin de cursus wordt aangeboden.

    .. TODO:feature-update: verplaats academiejaar boven lesgever, omdat de naam en het academiejaar altijd in één adem genoemd worden
    .. TODO:feature-update: vervang academiejaar (typisch voor cursusaanbod in hoger onderwijs in België) door meer generieke oplossing: optionele start- en einddatum waarbinnen de cursus wordt aangeboden; de starpagina en het cursusoverzicht kunnen dan ingedeeld worden volgens lopende cursussen, toekomstige cursussen en afgelopen cursussen; zonder startdatum wordt de cursus altijd aangeboden voor de einddatum; zonder einddatum wordt de cursus altijd aangeboden na de startdatum; zonder start- en einddatum wordt de cursus altijd aangeboden

.. _cursus zichtbaarheid:

:guilabel:`Zichtbaarheid`

    xxx

    .. TODO:tutorial-missing: besprerking van registratielink op de cursuspagina en instellen van een nieuwe registratielink op de cursusbeheerpagina

    .. TODO:feature-update: op Dodona staat dat de inhoud van een zichtbare cursus toegankelijk is voor iedereen, maar dat is niet zo; de omschrijving en oefeningenreeksen zijn enkel zichtbaar voor geregistreerde gebruikers of voor cursussen die werken met open registratie

.. _cursus registratie:

:guilabel:`Registratie`

    xxx

.. _cursus beschrijving:

:guilabel:`Beschrijving`

    xxx

Druk op de afwerkknop in de rechterbovenhoek van de :ref:`cursusbeheerpagina <cursusbeheerpagina>` om de cursuseigenschappen effectief in te stellen.

Daarna keer je terug naar de :ref:`cursuspagina <cursuspagina>` en worden de nieuwe :ref:`cursuseigenschappen <cursuseigenschappen>` van kracht.

.. TODO:feature-missing: mogelijkheid aanbieden om oefeningenreeksen te beheren op de cursuspagina (toevoegen, verwijderen, verplaatsen van oefeningenreeksen en bewerken van individuele oefeningenreeksen)
.. TODO:feature-update: de term "registration link" is niet vertaald naar "registratielink" op de cursusbeheerpagina


.. _cursusgebruikers beheren:

Beheren van cursusgebruikers
----------------------------

.. TODO:feature-update: verhuis overzicht en beheer van cursusgebruikers naar de cursuspagina

Om een cursus aan te maken moet je als medewerker geregistreerd staan binnen
Dodona. Ga naar de cursussen pagina (via de knop "Meer cursussen..."
linksonderaan je homepagina). Klik daar op de ``+`` knop rechtsbovenaan de
lijst.

Vul nu de naam van de cursus (best de naam van het vak waarvoor de cursus
gebruikt zal worden), je eigen naam (en evt. de naam van je medelesgevers) en
het academiejaar waarin de cursus gebruikt zal worden. Het academiejaar vul je
best als ``jjjj-jjjj`` in, zodat je cursus juist gesorteerd wordt in de lijst
van cursussen.

Verder moet je ook de zichtbaarheid van je vak instellen. Als
"Zichtbaar" wordt ingesteld kan iedereen de cursus vinden via het
cursusoverzicht. Als "Verborgen" wordt ingesteld zal de cursus niet opduiken in
het cursusoverzicht maar zal je een speciale link moeten sturen naar al je
studenten waarmee ze dan automatisch geregistreerd zullen worden op de cursus.

Daarnaast kan je ook kiezen welke studenten zich mogen registreren voor de
cursus. Bij "Open" registratie wordt elke registratie automatisch geaccepteerd.
Bij "Gemodereerd" zal een cursusbeheerder elke student die een registratie
aanvraagt moeten toelaten of afwijzen. Bij "Gesloten" zal geen enkele student
zich kunnen registreren.

In het vak Beschrijving kan je HTML of Markdown schrijven. Zie
:ref:`describing_an_exercise` voor documentatie over wat je hierin allemaal kan
doen.

De kleur van de cursus bepaalt met welke kleur je cursus op de homepagina van je
studenten getoond zal worden.


.. _oefeningenreeksen beheren:

Beheren van oefeningenreeksen
-----------------------------

Wanneer je de cursus aangemaakt hebt zal je naar de cursuspagina gebracht
worden. Daar kan je bij oefeningenreeksen nu een reeks toevoegen via de ``+``
helemaal rechts bij de titel. Geef hier een naam in voor de reeks, een optionele
deadline, de zichtbaarheid en een beschrijving.

Als je de reeks aanmaakt zal je op dezelfde pagina blijven. Je kan nu onderaan
oefeningen aan de reeks toevoegen. Zie :ref:`creating_an_exercise` om nieuwe
oefeningen aan Dodona toe te voegen.

Let er op bij het toevoegen van reeksen dat een nieuwe reeks telkens boven de
bestaande reeksen zal toegevoegd worden en dat er momenteel nog geen manier
bestaan om de reeksen te herordenen.


Werken met een registratielink
------------------------------

Op Dodona kan je het proces voor studenten om zich te in te schrijven op je
cursus vergemakkelijken. Als je hen een speciale link geeft zullen ze op het
moment dat ze die volgen automatisch ingeschreven worden in je cursus. Deze link
kan je op de cursuspagina vinden.

.. image:: registration-link.nl.png

.. TODO:feature-missing: toekennen van labels aan gebruikers binnen de cursus
.. TODO:feature-missing: learning analytics van gebruikers binnen de cursus
