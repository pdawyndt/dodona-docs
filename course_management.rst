.. _cursusbeheer:

Cursusbeheer
============

.. _cursus:
.. _oefeningenreeks:

Een **cursus** vormt een leerpad van :ref:`oefeningen` die gebundeld worden in **oefeningenreeksen**. De opeenvolging van oefeningenreeksen impliceert een mogelijke volgorde waarin :ref:`cursusgebruikers <cursusgebruiker>` de oefeningen kunnen :ref:`oplossen <oplossing indienen>`.

Een :ref:`lesgever <lesgever>` kan onbeperkt :ref:`cursussen <cursus>` :ref:`aanmaken <cursus aanmaken>`. Hij wordt automatisch ook de eerste :ref:`cursusbeheerder <cursusbeheerder>` van een nieuwe cursus. Als cursusbeheerder kan hij andere :ref:`cursusgebruikers <cursusgebruiker>` :ref:`aanduiden <cursusbeheerders aanduiden>` om samen met hem de cursus te beheren. Hij kan echter geen cursussen beheren waarvoor hij geen cursusbeheerder is.

Een :ref:`cursusbeheerder <cursusbeheerder>` stippelt binnen een :ref:`cursus <cursus>` een leerpad uit met :ref:`oefeningen <oefening>` die gegroepeerd worden in :ref:`oefeningenreeksen <oefeningenreeks>`. Voor elke oefeningenreeks kan hij een :ref:`deadline <oefeningenreeks deadline>` instellen die aangeeft tot wanneer er rekening gehouden wordt met :ref:`oplossingen <oplossing>` die cursusgebruikers :ref:`indienen <oplossing indienen>` voor de oefeningen uit de oefeningenreeks. Cursusgebruikers kunnen na de deadline echter onbeperkt oplossingen blijven indienen voor de oefeningen uit de oefeningenreeks en blijven daar nog steeds feedback voor ontvangen.


.. _cursus aanmaken:

Aanmaken van een cursus
-----------------------

Als :ref:`lesgever <lesgever>` maak je een nieuwe :ref:`cursus <cursus>` aan door op de aanmaakknop te drukken in de rechterbovenhoek van het :ref:`cursusoverzicht <cursusoverzicht>`.

.. image:: images/staff.courses_new_link.nl.png

.. _cursus aanmaken formulier:

Je krijgt een formulier te zien waarin je de :ref:`cursuseigenschappen <cursuseigenschappen>` van de nieuwe cursus kunt :ref:`instellen <cursuseigenschappen instellen>`.

.. image:: images/staff.new_course.nl.png

.. TODO:feature-update: vervang titelbalk van cursusbeheerpagina van nieuwe cursus door "Nieuwe cursus", en voeg het academiejaar toe aan de titelbalk van cursusbeheerpagina als het om een bestaande cursus gaat. Het laatst omwille van de consistentie met de cursuspagina waarin naast de naam ook het academiejaar staat.

Druk op de afwerkknop in de rechterbovenhoek van het formulier om de nieuwe :ref:`cursus <cursus>` effectief aan te maken. Daardoor navigeer je naar de :ref:`cursuspagina` waar je kunt vaststellen dat je automatisch voor de cursus :ref:`geregistreerd <registreren>` bent en dat je :ref:`aangeduid <cursusbeheerders aanduiden>` bent als :ref:`cursusbeheerder <cursusbeheerder>` van de cursus.

.. image:: images/staff.created_course.nl.png

.. TODO:feature-missing: kopiëren van een bestaande cursus


.. _cursuseigenschappen instellen:

Instellen van cursuseigenschappen
---------------------------------

Als :ref:`cursusbeheerder <cursusbeheerder>` kan je de :ref:`eigenschappen <cursuseigenschappen>` van een bestaande :ref:`cursus <cursus>` instellen door op de bewerkknop te drukken in de rechterbovenhoek van de :ref:`cursuspagina <cursuspagina>`.

.. image:: images/staff.course_edit.nl.png

.. _cursuseigenschappen:

Je krijgt een formulier te zien waarin je de volgende **cursuseigenschappen** kunt instellen:

.. _cursuseigenschap naam:

:guilabel:`Naam`

    De naam van de :ref:`cursus <cursus>`.

.. _cursuseigenschap lesgever:

:guilabel:`Lesgever`

    De namen van de lesgevers van de :ref:`cursus <cursus>`. Gebruik een komma om namen te scheiden als er meerdere lesgevers zijn.

    .. TODO:feature-update: Markdown toelaten zodat eventueel ook emailadressen kunnen gekoppeld worden aan de namen van de lesgevers
    .. TODO:feature-update: overwegen om cursusgebruikers te selecteren als lesgevers van een cursus; dan kunnen hun namen aan hun profielpagina gekoppeld worden

.. _cursuseigenschap academiejaar:

:guilabel:`Academiejaar`

    Het academiejaar waarin de :ref:`cursus <cursus>` wordt aangeboden. Gebruik het formaat ``jjjj-jjjj`` om ervoor te zorgen dat de cursus correct gesorteerd wordt op de :ref:`startpagina <startpagina>` en in het :ref:`cursusoverzicht <cursusoverzicht>`. Op Dodona wordt de naam van een cursus altijd in één adem genoemd met het academiejaar waarin de cursus wordt aangeboden.

    .. TODO:feature-update: verplaats academiejaar boven lesgever, omdat de naam en het academiejaar altijd in één adem genoemd worden
    .. TODO:feature-update: vervang academiejaar (typisch voor cursusaanbod in hoger onderwijs in België) door meer generieke oplossing: optionele start- en einddatum waarbinnen de cursus wordt aangeboden; de starpagina en het cursusoverzicht kunnen dan ingedeeld worden volgens lopende cursussen, toekomstige cursussen en afgelopen cursussen; zonder startdatum wordt de cursus altijd aangeboden voor de einddatum; zonder einddatum wordt de cursus altijd aangeboden na de startdatum; zonder start- en einddatum wordt de cursus altijd aangeboden

.. _cursuseigenschap zichtbaarheid:

:guilabel:`Zichtbaarheid`

    Deze :ref:`cursuseigenschap <cursuseigenschappen>` bepaalt of :ref:`niet-geregistreerde <registreren>` gebruikers zelf de :ref:`cursus <cursus>` kunnen :ref:`selecteren <cursus selecteren>` in het :ref:`cursusoverzicht <cursusoverzicht>`. Kies :guilabel:`Zichtbaar` of :guilabel:`Verborgen` als je de cursus wel of niet wilt laten oplijsten in het cursusoverzicht. Als je :guilabel:`Verborgen` kiest dan kunnen gebruikers zich enkel voor de cursus registreren als je hen :ref:`uitnodigt <cursusgebruikers uitnodigen>` met een :ref:`registratielink <registratielink>`.

    .. TODO:tutorial-update: hier moet uitleg die correspondeert met de bescherming om naar een cursus te navigeren zonder tokenlink
    .. TODO:tutorial-update: wie kan de cursus wel/niet zien in het cursusoverzicht? kunnen lesgevers verborgen cursussen zien?
    .. TODO:tutorial-update: verborgen cursussen vereisen een token om naar de cursuspagina te kunnen navigeren; zonder dit token wordt een waarschuwing getoond die we hier ook moeten omschrijven; dit token zit bijvoorbeeld in de registratielink
    .. TODO:feature-update: vervang de term "vakken" door "cursussen" in de omschrijving van dit veld op Dodona

.. _registratieprocedure:
.. _cursuseigenschap registratie:

:guilabel:`Registratie`

    Deze :ref:`cursuseigenschap <cursuseigenschappen>` bepaalt de **registratieprocedure** waarmee gebruikers zich voor de :ref:`cursus <cursus>` kunnen :ref:`registreren <registreren>`:

    .. _open registratieprocedure:
    .. _gemodereerde registratieprocedure:
    .. _gesloten registratieprocedure:

    .. list-table::
      :header-rows: 1

      * - optie
        - registratieprocedure
        - beschrijving


      * - :guilabel:`Open`
        - open
        - alle gebruikers kunnen zich :ref:`registreren <registreren>` voor de :ref:`cursus <cursus>` zonder expliciete goedkeuring van een :ref:`cursusbeheerder <cursusbeheerder>`


      * - :guilabel:`Gemodereerd`
        - gemodereerd
        - alle gebruikers kunnen een :ref:`registratieverzoek <registratieverzoek>` :ref:`indienen <registratieverzoek indienen>` voor de :ref:`cursus <cursus>` maar zijn pas :ref:`geregistreerd <registreren>` als een :ref:`cursusbeheerder <cursusbeheerder>` hun registratieverzoek heeft :ref:`goedgekeurd <registratieverzoek goedkeuren>`


      * - :guilabel:`Gesloten`
        - gesloten
        - gebruikers kunnen zich niet meer :ref:`registreren <registreren>` voor de :ref:`cursus <cursus>`

          .. TODO:feature-update: vervang de term "vakken" door "cursussen" in de omschrijving van dit veld op Dodona

    .. important::

        Als je deze :ref:`cursuseigenschap <cursuseigenschap>` aanpast dan blijven bestaande :ref:`registraties <registreren>` voor de :ref:`cursus <cursus>` gelden en blijven openstaande :ref:`registratieverzoeken <registratieverzoek>` voor de cursus bestaan.

    .. TODO:feature-update: bijkomende mogelijkheden voorzien, bijvoorbeeld selectief automatisch goedkeuren van alle gebruikers van bepaalde instellingen; op die manier kan je die cursus openzetten voor bepaalde instellingen en registratieverzoeken van andere gebruikers modereren

.. _cursuseigenschap beschrijving:

:guilabel:`Beschrijving`

    Een optionele beschrijving van de cursus die bovenaan de :ref:`cursuspagina` komt te staan. Voor het opmaken van de beschrijving kan je gebruik maken van `Markdown <https://en.wikipedia.org/wiki/Markdown>`_.

    .. TODO:tutorial-missing: ergens in de handleiding (inleiding) moet vermeld worden dat Dodona gebruik maakt van kramdown (https://kramdown.gettalong.org) voor het opmaken van Markdown; dan kan de Markdown-link in bovenstaande sectie vervangen worden door een link naar die sectie

.. _cursuseigenschap registratielink:

:guilabel:`Registratielink`

    Bij het :ref:`aanmaken <cursus aanmaken>` van een :ref:`cursus <cursus>` wordt automatisch een :ref:`registratielink <registratielink>` met een willekeurig token gegenereerd. Druk op de vernieuwknop naast de registratielink om de cursus opnieuw te :ref:`verbergen <cursuseigenschap zichtbaarheid>` nadat de registratielink gedeeld werd.

Druk op de afwerkknop in de rechterbovenhoek van het formulier om de :ref:`cursuseigenschappen <cursuseigenschappen>` effectief in te stellen.

.. image:: images/staff.course_edit_submit_link.nl.png

.. TODO:feature-update: de term "registration link" is niet vertaald naar "registratielink" op het formulier waar de cursuseigenschappen kunnen ingesteld worden

Daarna keer je terug naar de :ref:`cursuspagina <cursuspagina>` en worden de nieuwe :ref:`cursuseigenschappen <cursuseigenschappen>` van kracht.

.. image:: images/staff.course_after_edit.nl.png


.. _registratielink:
.. _cursusgebruikers uitnodigen:

Uitnodigen van cursusgebruikers
-------------------------------

Bij het :ref:`aanmaken <cursus aanmaken>` van een :ref:`cursus <cursus>` wordt voor de cursus automatisch een **registratielink** met een willekeurig token gegenereerd. De registratielink kan met gebruikers gedeeld worden om hen uit te nodigen om zich voor de cursus te :ref:`registreren <cursus registreren>`. Als ze de registratielink volgen dan :ref:`navigeren <cursus navigeren>` ze rechtstreeks naar de cursus zonder dat ze die zelf moeten :ref:`zoeken <cursus zoeken>` in het :ref:`cursusoverzicht <cursusoverzicht>`. Bovendien wordt de :ref:`registratieprocedure <registratieprocedure>` automatisch voor hen uitgevoerd als ze nog niet voor de cursus geregistreerd waren. Op die manier verloopt de :ref:`open <gemodereerde registratieprocedure>` registratieprocedure zelfs volledig transparant voor de uitgenodigde gebruikers.

Als :ref:`cursusbeheerder <cursusbeheerder>` vind je de :ref:`registratielink <registratielink>` bovenaan de :ref:`cursuspagina <cursuspagina>`.

.. image:: images/staff.registration_link.nl.png

.. _registratielink kopiëren:

Druk op de kopieerknop naast de :ref:`registratielink <registratielink>` om de link naar het klembord te kopiëren.

.. image:: images/staff.registration_link_copy.nl.png

.. TODO:tutorial-missing: bespreking van registratielink op de cursuspagina en instellen van een nieuwe registratielink op de cursusbeheerpagina

.. _registratielink vernieuwen:

Een :ref:`verborgen <cursuseigenschap zichtbaarheid>` :ref:`cursus <cursus>` kan enkel gevonden worden door gebruikers die de :ref:`registratielink <registratielink>` kennen. Nadat de registratielink gedeeld werd kan je bij het :ref:`instellen <cursuseigenschappen instellen>` van de :ref:`eigenschappen <cursuseigenschappen>` van de cursus echter een nieuwe registratielink laten genereren om daarmee de cursus opnieuw te verbergen. Druk daarvoor op de vernieuwknop naast de registratielink.

.. image:: images/registration_link_renew.nl.png

.. TODO:feature-update: omdat de identifiers oplopend genummerd worden en ook gebruikt worden in de URL van een cursus, is het vrij eenvoudig om verborgen cursussen te vinden; heeft het vernieuwen van een registratielink dan wel zin als een manier om de cursus opnieuw te verbergen? ofwel mis ik nog iets om te begrijpen waardoor het opnieuw genereren van de registratielink de cursus opnieuw verbergt


.. _cursusgebruiker:
.. _cursusgebruikersoverzicht:
.. _cursusgebruikers beheren:

Beheren van cursusgebruikers
----------------------------

Als :ref:`cursusbeheerder <cursusbeheerder>` van een :ref:`cursus <cursus>` zie je onderaan de :ref:`cursuspagina <cursuspagina>` een **cursusgebruikersoverzicht** waarin de gebruikersnaam, de naam, het emailadres en :ref:`voortgangsstatistieken <cursusgebruiker voortgangsstatistieken>` opgelijst worden uit het :ref:`gebruikersprofiel <gebruikersprofiel>` van alle **cursusgebruikers**. Dit zijn alle gebruikers die ooit voor de cursus :ref:`geregistreerd <registreren>` geweest zijn of die ooit een :ref:`registratieverzoek <registratieverzoek>` voor de cursus ingediend hebben.

.. image:: images/staff.course_users.nl.png

.. TODO:tutorial-missing: uitleggen van de betekenis van de voortgangsstatistieken

.. _cursusbeheersrechten icoontje:
.. _cursusgebruiker voortgangsstatistieken:

Het :ref:`zoeken <gebruiker zoeken>`, :ref:`selecteren <gebruiker selecteren>` en :ref:`bewerken <gebruikersprofiel bewerken>` van gebruikers verloopt op dezelfde manier als in het :ref:`gebruikersoverzicht <gebruikersoverzicht>`. Naast de gebruikelijke :ref:`icoontjes <beheersrechten icoontje>` die de lesgevers en beheerders aangeven, gebruikt het :ref:`cursusgebruikersoverzicht <cursusgebruikersoverzicht>` een bijkomend icoontje om de cursusbeheerders aan te geven.

.. image:: images/staff.course_users_admin.nl.png

.. TODO:update-feature: plaats icoontje van cursusbeheerders voor het icoontje van lesgevers en beheerders, omdat de sortering van gebruikers eerst gebeurt op cursusbeheerstatus, dan op beheerstatus en dan alfabetisch (op gebruikersnaam !! kan dit op naam ??)

In het :ref:`cursusgebruikersoverzicht <cursusgebruikersoverzicht>` kan je de :ref:`registratiestatus <registratiestatus>` van :ref:`cursusgebruikers <cursusgebruiker>` :ref:`aanpassen <registratiestatus aanpassen>` en :ref:`cursusbeheerders <cursusbeheerder>` :ref:`aanduiden <cursusbeheerders aanduiden>`.

.. _registratiestatus:
.. _registratiestatus aanpassen:

Aanpassen van de registratiestatus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In het :ref:`cursusgebruikersoverzicht <cursusgebruikersoverzicht>` worden de :ref:`cursusgebruikers <cursusgebruiker>` gegroepeerd op basis van hun **registratiestatus**. De cursusgebruikers van elke groep worden in een afzonderlijke tab opgelijst:

.. list-table::
  :header-rows: 1

  * - tab
    - groep

  * - :guilabel:`Geregistreerd`
    - alle :ref:`cursusgebruikers <cursusgebruiker>` die :ref:`geregistreerd <registreren>` zijn voor de :ref:`cursus <cursus>`

  * - :guilabel:`Uitgeschreven`
    - alle :ref:`cursusgebruikers <cursusgebruiker>` die ooit :ref:`geregistreerd <registreren>` waren voor de :ref:`cursus <cursus>`, maar die ondertussen :ref:`uitgeschreven <cursus uitschrijven>` zijn voor de cursus

  * - :guilabel:`Op de wachtlijst`
    - alle :ref:`cursusgebruikers <cursusgebruiker>` waarvoor er nog een :ref:`registratieverzoek <registratieverzoek>` openstaat dat wacht op :ref:`afhandeling <registratieverzoek afhandelen>` van een :ref:`cursusbeheerder <cursusbeheerder>`

.. _registratieverzoek afkeuren:
.. _registratieverzoek goedkeuren:
.. _registratieverzoeken afhandelen:

Elke tab van het :ref:`cursusgebruikersoverzicht <cursusgebruikersoverzicht>` heeft eigen actieknoppen om de :ref:`registratiestatus <registratiestatus>` van gebruikers aan te passen:

.. list-table::
  :header-rows: 1

  * - tab
    - knop
    - actie

  * - :guilabel:`Geregistreerd`
    - .. image:: images/staff_registration_icons/unregister.png
    - cursusgebruiker uitschrijven uit de cursus

      .. TODO:feature-missing: cursusbeheerders kunnen geen (andere) cursusbeheerders uitschrijven uit de cursus; is dat de bedoeling, of zou dat wel moeten kunnen zolang op die manier niet de laatste cursusbeheerder uit de cursus verdwijnt als een cursusbeheerder zichzelf uitschrijft
      .. TODO:feature-missing: als cursusbeheerder kan je enkel bestaande cursusgebruikers registreren, en heb je niet de mogelijkheid om andere gebruikers te registren voor een cursus, behalve dan het gebruikersaccount van de gebruiker overnemen en in naam van de gebruiker de registratie uitvoeren (als dit kan); dit zou eventueel een manier zijn om als cursusbeheerder een gebruiker in te schrijven voor een cursus die werkt met gesloten registratie

  * - :guilabel:`Uitgeschreven`
    - .. image:: images/staff_registration_icons/register.png
    - cursusgebruiker terug registreren voor de cursus

  * - :guilabel:`Registratieverzoeken`
    - .. image:: images/staff_registration_icons/approve.png
    - goedkeuren van het :ref:`registratieverzoek <registratieverzoek>` dat door de gebruiker werd :ref:`ingediend <registratieverzoek indienen>`, waardoor de gebruiker :ref:`geregistreerd <registreren>` wordt voor de cursus

  * - :guilabel:`Registratieverzoeken`
    - .. image:: images/staff_registration_icons/decline.png
    - afkeuren van het :ref:`registratieverzoek <registratieverzoek>` dat door de gebruiker werd :ref:`ingediend <registratieverzoek indienen>`, waardoor de gebruiker :ref:`uitgeschreven <cursus uitschrijven>` wordt uit de cursus

.. TODO:update-feature: cursusbeheerder mogelijkheid geven om een reden op te geven waarom een registratieverzoek wordt afgekeurd
.. TODO:update-feature: notification/email sturen naar de gebruiker wanneer een registratieverzoek wordt goedgekeurd/afgekeurd

.. TODO:tutorial-missing: wat zijn de regels voor het uitschrijven als de laatste cursusbeheerder zich uit een cursus wil uitschrijven

.. _cursusbeheerders aanduiden:

Aanduiden van cursusbeheerders
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. _cursusbeheerder:

Onder de :ref:`geregistreerde <registreren>` gebruikers van een :ref:`cursus <cursus>` onderscheiden we studenten en **cursusbeheerders**, waarbij enkel cursusbeheerders een bestaande cursus kunnen beheren. De lesgever die de cursus heeft aangemaakt wordt automatisch geregistreerd voor de cursus en wordt meteen ook de eerste cursusbeheerder ervan. Lesgevers kunnen echter geen cursussen beheren waarvoor ze geen cursusbeheerder zijn.

In de tab :guilabel:`Geregistreerd` van het :ref:`cursusgebruikersoverzicht <cursusgebruikersoverzicht>` kan je de volgende actieknoppen gebruiken om cursusbeheerders aan te duiden:

.. list-table::
  :header-rows: 1

  * - knop
    - actie

  * - .. image:: images/staff_registration_icons/make_course_admin.png
    - student promoveren tot cursusbeheerder

  * - .. image:: images/staff_registration_icons/make_student.png
    - cursusbeheerder degraderen tot student

.. important::

    Een :ref:`cursusbeheerder <cursusbeheerder>` die zich :ref:`uitschrijft <cursus uitschrijven>` uit een :ref:`cursus <cursus>` verliest zijn status van cursusbeheerder voor de een cursus. Om ervoor te zorgen dat een cursus altijd minstens één cursusbeheerder heeft, kan de laatste cursusbeheerder zich niet uitschrijven uit de cursus en kan hij zichzelf binnen de cursus dan ook niet degraderen tot student.

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
