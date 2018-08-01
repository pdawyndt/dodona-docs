.. _cursusbeheer:

Cursusbeheer
============

Een :ref:`lesgever <lesgever>` kan onbeperkt :ref:`cursussen <cursus>` :ref:`aanmaken <cursus aanmaken>` en wordt automatisch ook de eerste :ref:`cursusbeheerder <cursusbeheerder>` van die cursussen. Als cursusbeheerder kan hij andere gebruikers van een cursus :ref:`aanduiden <cursusbeheerders aanduiden>` om samen met hem de cursus te :ref:`beheren <cursuseigenschappen instellen>`. Hij kan echter geen cursussen beheren die door andere lesgevers aangemaakt werden en waarvoor hij niet als cursusbeheerder werd aangeduid.

Een :ref:`cursusbeheerder <cursusbeheerder>` stippelt binnen een :ref:`cursus <cursus>` een leerpad uit met :ref:`oefeningen <oefening>` die gegroepeerd worden in :ref:`oefeningenreeksen <oefeningenreeks>`. Voor elke oefeningenreeks kan hij een :ref:`deadline <oefeningenreeks deadline>` instellen die aangeeft tot wanneer er rekening gehouden wordt met :ref:`oplossingen <oplossing>` die gebruikers :ref:`indienen <oplossing indienen>` voor de oefeningen uit de oefeningenreeks.


.. _cursus aanmaken:

Aanmaken van een cursus
-----------------------

Als lesgever maak je een nieuwe cursus aan door in het :ref:`cursusoverzicht <cursusoverzicht>` op de knop :guilabel:`nieuwe cursus` te drukken.

.. image:: images/staff.courses_new_link.nl.png

.. _cursus aanmaken formulier:

Je krijgt een formulier te zien waarin je de :ref:`cursuseigenschappen <cursuseigenschappen>` van de nieuwe cursus kunt :ref:`instellen <cursuseigenschappen instellen>`.

.. image:: images/staff.new_course.nl.png

.. TODO:screenshot-update: effectief de informatievelden van de cursus aanmaken en dan deze cursus verder gebruiken in de handleiding

.. TODO:feature-update: vervang titelbalk van cursusbeheerpagina van nieuwe cursus door "Nieuwe cursus", en voeg het academiejaar toe aan de titelbalk van cursusbeheerpagina als het om een bestaande cursus gaat. Het laatst omwille van de consistentie met de cursuspagina waarin naast de naam ook het academiejaar staat.

Druk op de afwerkknop in de rechterbovenhoek van het formulier om de nieuwe :ref:`cursus <cursus>` effectief aan te maken. Daardoor navigeer je naar de :ref:`cursuspagina` waar je kunt vaststellen dat je automatisch voor de cursus :ref:`geregistreerd <registreren>` bent en dat je :ref:`aangeduid <cursusbeheerders aanduiden>` bent als :ref:`cursusbeheerder <cursusbeheerder>` van de cursus.

.. image:: images/staff.created_course.nl.png

.. TODO:feature-missing: kopiëren van een bestaande cursus


.. _cursuseigenschappen instellen:

Instellen van cursuseigenschappen
---------------------------------

Als :ref:`cursusbeheerder <cursusbeheerder>` kan je de :ref:`eigenschappen <cursuseigenschappen>` van een bestaande :ref:`cursus <cursus>` instellen door op de editeerknop te drukken in de rechterbovenhoek van de :ref:`cursuspagina`.

.. image:: images/staff.course_edit.nl.png

.. _cursuseigenschappen:

Je krijgt een formulier te zien waarin je de volgende **cursuseigenschappen** kunt instellen:

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

    Dit informatieveld bepaalt of :ref:`niet-geregistreerde <registreren>` gebruikers al dan niet zelf naar de :ref:`cursuspagina <cursuspagina>` kunnen navigeren door de :ref:`cursus <cursus>` te :ref:`selecteren <cursus selecteren>` in het :ref:`cursusoverzicht <cursusoverzicht>`. Kies :guilabel:`Zichtbaar` of :guilabel:`Verborgen` om de cursus wel of niet wilt te laten oplijsten in het cursusoverzicht. Als je :guilabel:`Verborgen` kiest dan kunnen niet-geregistreerde gebruikers zich enkel registreren voor de cursus als je hen een :ref:`registratielink <registratielink>` bezorgt.

    .. TODO:tutorial-missing: bespreking van registratielink op de cursuspagina en instellen van een nieuwe registratielink op de cursusbeheerpagina

    .. TODO:feature-update: vervang de term "vakken" door "cursussen" in de omschrijving van dit veld op Dodona

.. _cursus registratie:

:guilabel:`Registratie`

    Dit informatieveld bepaalt of en hoe gebruikers zich voor de :ref:`cursus <cursus>` kunnen :ref:`registreren <registreren>`:

    .. list-table::
      :header-rows: 1

      * - registratie
        - betekenis

      * - :guilabel:`Open`
        - alle gebruikers kunnen zich voor de :ref:`cursus <cursus>` :ref:`registreren <registreren>` zonder expliciete goedkeuring van een :ref:`cursusbeheerder <cursusbeheerder>`

      * - :guilabel:`Gemodereerd`
        - alle gebruikers kunnen een :ref:`registratieverzoek <registratieverzoek>` :ref:`indienen <registratieverzoek indienen>` voor de :ref:`cursus <cursus>` maar zijn pas geregistreerd als een :ref:`cursusbeheerder <cursusbeheerder>` hun registratieverzoek heeft :ref:`goedgekeurd <registratieverzoek goedkeuren>`

      * - :guilabel:`Gesloten`
        - geen enkele gebruikers kan zich nog voor de :ref:`cursus <cursus>` :ref:`registreren <registreren>`

          .. TODO:feature-update: vervang de term "vakken" door "cursussen" in de omschrijving van dit veld op Dodona

    .. important::

        Als je dit informatieveld aanpast dan blijven bestaande :ref:`registraties <registreren>` voor de :ref:`cursus <cursus>` gelden en blijven openstaande :ref:`registratieverzoeken <registratieverzoek>` voor de cursus bestaan.

    .. TODO:feature-update: bijkomende mogelijkheden voorzien, bijvoorbeeld selectief automatisch goedkeuren van alle gebruikers van bepaalde instellingen; op die manier kan je die cursus openzetten voor bepaalde instellingen en registratieverzoeken van andere gebruikers modereren

.. _cursus beschrijving:

:guilabel:`Beschrijving`

    Een optionele beschrijving van de cursus die bovenaan de :ref:`cursuspagina` komt te staan. Voor het opmaken van de beschrijving kan je gebruik maken van `Markdown <https://en.wikipedia.org/wiki/Markdown>`_.

    .. TODO:tutorial-missing: ergens in de handleiding (inleiding) moet vermeld worden dat Dodona gebruik maakt van kramdown (https://kramdown.gettalong.org) voor het opmaken van Markdown; dan kan de Markdown-link in bovenstaande sectie vervangen worden door een link naar die sectie

Druk op de afwerkknop in de rechterbovenhoek van het formulier om de cursuseigenschappen effectief in te stellen.

.. TODO:screenshot-missing: screenshot van formulier met cursuseigenschappen met aanduiding van afwerkknop

.. TODO:feature-update: de term "registration link" is niet vertaald naar "registratielink" op het formulier waar de cursuseigenschappen kunnen ingesteld worden

Daarna keer je terug naar de :ref:`cursuspagina <cursuspagina>` en worden de nieuwe :ref:`cursuseigenschappen <cursuseigenschappen>` van kracht.

.. TODO:screenshot-missing: screenshot van cursuspagina na bijwerken


.. _cursusgebruikers:
.. _cursusgebruikersoverzicht:
.. _cursusgebruikers beheren:

Beheren van cursusgebruikers
----------------------------

Als :ref:`cursusbeheerder <cursusbeheerder>` van een :ref:`cursus <cursus>` vind je onderaan de :ref:`cursuspagina <cursuspagina>` een **cursusgebruikersoverzicht** waarin de gebruikersnaam, de naam, het emailadres en voortgangsstatistieken opgelijst worden uit het :ref:`gebruikersprofiel <gebruikersprofiel>` van alle **cursusgebruikers**. Dit zijn alle gebruikers die ooit voor de cursus :ref:`geregistreerd <registreren>` geweest zijn of die ooit een :ref:`registratieverzoek <registratieverzoek>` voor de cursus ingediend hebben.

.. TODO:screenshot-missing: screenshot van cursusgebruikersoverzicht

.. TODO:tutorial-missing: uitleggen van de betekenis van de voortgangsstatistieken

.. _cursusbeheersrechten icoontje:

Het zoeken van, navigeren naar en bewerken van gebruikers verloopt op dezelfde manier als in het :ref:`gebruikersoverzicht <gebruikersoverzicht>`. Naast de gebruikelijke :ref:`icoontjes <beheersrechten icoontje>` die de lesgevers en beheerders aangeven, gebruikt het :ref:`cursusgebruikersoverzicht <cursusgebruikersoverzicht>` een bijkomend icoontje om de cursusbeheerders aan te geven.

.. TODO:screenshot-missing: screenshot met verwijzing naar het icoontje van cursusbeheerders

.. TODO:update-feature: plaats icoontje van cursusbeheerders voor het icoontje van lesgevers en beheerders, omdat de sortering van gebruikers eerst gebeurt op cursusbeheerstatus, dan op beheerstatus en dan alfabetisch (op gebruikersnaam !! kan dit op naam ??)

In het :ref:`cursusgebruikersoverzicht <cursusgebruikersoverzicht>` kan je :ref:`cursusbeheerders <cursusbeheerder>` :ref:`aanduiden <cursusbeheerders aanduiden>` en de registratie van gebruikers :ref:`beheren <gebruikersregistratie beheren>`, inclusief het :ref:`afhandelen <registratieverzoeken afhandelen>` van openstaande :ref:`registratieverzoeken <registratieverzoek>`.

.. _gebruikersregistratie beheren:

Beheren van gebruikersregistratie
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Het :ref:`cursusgebruikersoverzicht <cursusgebruikersoverzicht>` lijst alle :ref:`cursusgebruikers <cursusgebruiker>` op een aantal tabs:

.. list-table::
  :header-rows: 1

  * - tab
    - bevat

  * - :guilabel:`Geregistreerd`
    - alle gebruikers die voor de :ref:`cursus <cursus>` :ref:`geregistreerd <registreren>` zijn

  * - :guilabel:`Uitgeschreven`
    - alle gebruikers die ooit voor de :ref:`cursus <cursus>` :ref:`geregistreerd <registreren>` waren, maar die ondertussen :ref:`uitgeschreven <uitschrijven>` zijn

  * - :guilabel:`Registratieverzoeken`
    - alle gebruikers waarvoor nog een :ref:`registratieverzoek <registratieverzoek>` openstaat voor de :ref:`cursus <cursus>` dat wacht op :ref:`afhandeling <registratieverzoek afhandelen>` van een :ref:`cursusbeheerder <cursusbeheerder>`

.. _registratieverzoeken afhandelen:

Elke tab heeft afzonderlijke actieknoppen om de registratie van gebruikers te beheren:

.. list-table::
  :header-rows: 1

  * - tab
    - knop
    - actie

  * - :guilabel:`Geregistreerd`
    - .. image::
    - student uitschrijven uit de cursus; cursusbeheerders kunnen geen andere cursusbeheerders uitschrijven uit een cursus

  * - :guilabel:`Uitgeschreven`
    - .. image::
    - alle gebruikers die ooit voor de :ref:`cursus <cursus>` :ref:`geregistreerd <registreren>` waren, maar die ondertussen :ref:`uitgeschreven <uitschrijven>` zijn

  * - :guilabel:`Registratieverzoeken`
    - .. image::
    - goedkeuren van het :ref:`registratieverzoek <registratieverzoek>` waardoor de gebruiker :ref:`geregistreerd <registreren>` wordt voor de cursus

  * - :guilabel:`Registratieverzoeken`
    - .. image::
    - afkeuren van het :ref:`registratieverzoek <registratieverzoek>` waardoor de gebruiker :ref:`uitgeschreven <uitschrijven>` wordt voor de cursus

.. TODO:screenshot-missing: screenshot van cursusgebruikersoverzicht met aanduiding van actieknoppen voor het beheren van gebruikersregistratie

.. TODO:update-feature: cursusbeheerder mogelijkheid geven om een reden op te geven waarom een registratieverzoek wordt afgekeurd
.. TODO:update-feature: notification/email sturen naar de gebruiker wanneer een registratieverzoek wordt goedgekeurd/afgekeurd

.. TODO:tutorial-missing: wat zijn de regels voor het uitschrijven als de laatste cursusbeheerder zich uit een cursus wil uitschrijven

.. _registratielink gebruiken:

Gebruiken van een registratielink
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Op Dodona kan je het proces voor studenten om zich te in te schrijven op je
cursus vergemakkelijken. Als je hen een speciale link geeft zullen ze op het
moment dat ze die volgen automatisch ingeschreven worden in je cursus. Deze link
kan je op de cursuspagina vinden.

.. image:: registration-link.nl.png

.. _cursusbeheerders aanduiden:

Aanduiden van cursusbeheerders
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. _cursusbeheerder:

Onder de :ref:`geregistreerde <registreren>` gebruikers van een :ref:`cursus <cursus>` onderscheiden we studenten en **cursusbeheerders**, waarbij enkel de cursusbeheerders een bestaande cursus kunnen beheren. De lesgever die de cursus heeft aangemaakt wordt automatisch geregistreerd voor de cursus en wordt meteen ook de eerste cursusbeheerder ervan. Lesgevers kunnen echter geen cursussen beheren waarvoor ze geen cursusbeheerder zijn.

In de tab :guilabel:`Geregistreerd` van het :ref:`cursusgebruikersoverzicht <cursusgebruikersoverzicht>` kan je de volgende actieknoppen gebruiken om cursusbeheerders aan te duiden:

.. list-table::
  :header-rows: 1

  * - knop
    - actie

  * - .. image::
    - student promoveren tot cursusbeheerder

  * - .. image::
    - cursusbeheerder degraderen tot student

.. TODO:screenshot-missing: screenshot van cursusgebruikersoverzicht met aanduiding van actieknoppen voor aanduiden van cursusbeheerders

.. import::

    Een :ref:`cursusbeheerder <cursusbeheerder>` die zich :ref:`uitschrijft <uitschrijven>` uit een :ref:`cursus <cursus>` verliest zijn status van cursusbeheerder voor de een cursus. Om ervoor te zorgen dat een cursus altijd minstens één cursusbeheerder heeft, kan de laatste cursusbeheerder zich niet uitschrijven uit de cursus en kan hij zichzelf binnen de cursus dan ook niet degraderen tot student.

.. TODO:update-feature: het bovenstaande statement is op dit moment niet het geval voor wat betreft het feit dat een cursusbeheerder zijn status verliest als hij zich uitschrijft in Dodona, maar dat zou wel zo moeten zijn

.. TODO:feature-update: verhuis overzicht en beheer van cursusgebruikers naar de cursusbeheerspagina


.. _oefeningenreeksen beheren:

Beheren van oefeningenreeksen
-----------------------------

.. TODO:feature-missing: mogelijkheid aanbieden om oefeningenreeksen te beheren op de cursuspagina (toevoegen, verwijderen, verplaatsen van oefeningenreeksen en bewerken van individuele oefeningenreeksen)

.. important::

    In :ref:`cursusbeheer` veronderstellen we dat de :ref:`oefeningen <oefening>` die aan een :ref:`oefeningenreeks <oefeningenreeks>` van een :ref:`cursus <cursus>` toegevoegd worden reeds beschikbaar zijn in Dodona. In :ref:`oefeningen toevoegen` bespreken we hoe oefeningen aan Dodona toegevoegd worden.


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


.. TODO:feature-missing: toekennen van labels aan gebruikers binnen de cursus
.. TODO:feature-missing: learning analytics van gebruikers binnen de cursus
