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
.. _lesgever:
.. _student:
.. _gebruikersoverzicht:

.. important::

    Je hebt **beheersrechten** nodig om een :ref:`cursus <cursus>` te kunnen aanmaken. Je herkent dat je beheersrechten hebt als je het **beheersmenu** (menu met naam :guilabel:`Admin`) ziet staan links van het :ref:`gebruikersmenu <gebruikersmenu>` aan de rechterkant van de :ref:`navigatiebalk <navigatiebalk>`. In Dodona gebruiken we de term **lesgever** voor een gebruiker met beheersrechten en de term **student** voor een gebruiker zonder beheersrechten.

    Het **gebruikersoverzicht** toont een overzicht met de gebruikersnaam, de naam, het emailadres en voortgangsstatistieken uit het :ref:`gebruikersprofiel <gebruikersprofiel>` van alle gebruikers. Navigeer naar het gebruikersoverzicht door :guilabel:`Gebruikers` te selecteren in het :ref:`beheersmenu <beheersmenu>`. Gebruik de zoekbalk bovenaan het gebruikersoverzicht om te zoeken naar specifieke gebruikers op basis van een gebruikersnaam, een naam of een emailadres. Druk in het gebruikersoverzicht op de editeerknop aan de rechterkant van een student of een lesgever om naar de :ref:`profielpagina <profielpagina>` van de gebruiker te navigeren.

    Met beheersrechten kan je andere gebruikers beheersrechten geven door het veld :guilabel:`Rechten` in te stellen op :guilabel:`Staff` in de :ref:`profielpagina <profielpagina>` van de gebruiker. Je kunt ook beheersrechten ontnemen van gebruikers met beheersrechten (inclusief jezelf) door het veld :guilabel:`Rechten` in te stellen op :guilabel:`Student` in de profielpagina van de gebruiker.


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

Een reeks toevoegen
-------------------

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

Studenten automatisch laten registreren
---------------------------------------

Op Dodona kan je het proces voor studenten om zich te in te schrijven op je
cursus vergemakkelijken. Als je hen een speciale link geeft zullen ze op het
moment dat ze die volgen automatisch ingeschreven worden in je cursus. Deze link
kan je op de cursuspagina vinden.

.. image:: registration-link.nl.png
