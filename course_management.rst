.. _cursus beheren:

Cursusbeheer
============

.. _cursus:
.. _oefeningenreeks:

Een **cursus** wordt :ref:`opgebouwd <leerpad uitstippelen>` als een :ref:`leerpad <leerpad>` met :ref:`oefeningen <oefeningen>` die gebundeld worden in **oefeningenreeksen**. De opeenvolging van oefeningenreeksen impliceert een mogelijke volgorde waarin :ref:`cursusgebruikers <cursusgebruiker>` de oefeningen kunnen :ref:`oplossen <oplossing indienen>`.

Een :ref:`lesgever <lesgever>` kan onbeperkt :ref:`cursussen <cursus>` :ref:`aanmaken <cursus aanmaken>` en wordt automatisch ook de eerste :ref:`cursusbeheerder <cursusbeheerder>` van die cursussen. Als cursusbeheerder kan hij andere :ref:`cursusgebruikers <cursusgebruiker>` :ref:`aanduiden <cursusbeheerders aanduiden>` om samen met hem de cursus te beheren. Hij kan echter geen cursussen beheren waarvoor hij geen cursusbeheerder is.

Een :ref:`cursusbeheerder <cursusbeheerder>` :ref:`stippelt <leerpad uitstippelen>` een :ref:`leerpad <leerpad>` uit voor de :ref:`cursus <cursus>`, met :ref:`oefeningen <oefening>` die gegroepeerd worden in :ref:`oefeningenreeksen <oefeningenreeks>`. Voor elke oefeningenreeks kan hij een :ref:`deadline <oefeningenreeks deadline>` :ref:`instellen <oefeningenreeks eigenschappen instellen>` die aangeeft tot wanneer er rekening gehouden wordt met :ref:`oplossingen <oplossing>` die :ref:`ingediend <oplossing indienen>` worden voor de oefeningen uit de oefeningenreeks. Cursusgebruikers kunnen na de deadline echter onbeperkt oplossingen blijven indienen voor de oefeningen uit de oefeningenreeks en blijven daar nog steeds feedback voor ontvangen.


.. _cursus aanmaken:

Aanmaken van een cursus
-----------------------

Als :ref:`lesgever <lesgever>` kan je een nieuwe :ref:`cursus <cursus>` aanmaken door op de aanmaakknop te drukken in de rechterbovenhoek van het :ref:`cursusoverzicht <cursusoverzicht>`.

.. TODO:feature-missing: lesgevers zouden evengoed ook een nieuwe cursus kunnen aanmaken vanop hun startpagina; deze ziet er bovendien in de toekomst vrij gelijkaardig uit aan het cursusoverzicht

.. image:: images/staff.courses_new_link.nl.png

.. _cursuseigenschappen instellen:

In het paneel :guilabel:`Nieuwe cursus` stel je de :ref:`eigenschappen <cursuseigenschappen>` van de nieuwe :ref:`cursus <cursus>` in.

.. image:: images/staff.new_course.nl.png

.. TODO:feature-update: vervang titelbalk van cursusbeheerpagina van nieuwe cursus door "Nieuwe cursus", en voeg het academiejaar toe aan de titelbalk van cursusbeheerpagina als het om een bestaande cursus gaat. Het laatst omwille van de consistentie met de cursuspagina waarin naast de naam ook het academiejaar staat.

.. _cursuseigenschappen instellen annuleren:

Druk op de knop :guilabel:`Dodona` in de :ref:`navigatiebalk <navigatiebalk>` om het aanmaken van de cursus te annuleren.

.. TODO:screenshot-missing: screenshot van paneel "Nieuwe cursus" waarin de knop "Dodona" wordt aangeduid

.. _cursuseigenschappen:

Voor een :ref:`cursus <cursus>` kunnen de volgende eigenschappen ingesteld worden:

.. _cursus naam:

:guilabel:`Naam`

    De naam van de :ref:`cursus <cursus>`.

.. _cursus academiejaar:

:guilabel:`Academiejaar`

    Het academiejaar waarin de :ref:`cursus <cursus>` wordt aangeboden. Gebruik het formaat ``jjjj-jjjj`` om ervoor te zorgen dat de cursus correct gesorteerd wordt op de :ref:`startpagina <startpagina>` en in het :ref:`cursusoverzicht <cursusoverzicht>`.

     .. tip::

        Als op het platform naar een :ref:`cursus <cursus>` wordt verwezen dan wordt de :ref:`naam <cursus naam>` van de cursus altijd in één adem genoemd met het :ref:`academiejaar <cursus academiejaar>` waarin de cursus wordt aangeboden. Op die manier kunnen cursussen die jaarlijks aangeboden worden makkelijk van elkaar onderscheiden worden.

    .. TODO:feature-update: verplaats academiejaar boven lesgever, omdat de naam en het academiejaar altijd in één adem genoemd worden
    .. TODO:feature-update: vervang academiejaar (typisch voor cursusaanbod in hoger onderwijs in België) door meer generieke oplossing: optionele start- en einddatum waarbinnen de cursus wordt aangeboden; de starpagina en het cursusoverzicht kunnen dan ingedeeld worden volgens lopende cursussen, toekomstige cursussen en afgelopen cursussen; zonder startdatum wordt de cursus altijd aangeboden voor de einddatum; zonder einddatum wordt de cursus altijd aangeboden na de startdatum; zonder start- en einddatum wordt de cursus altijd aangeboden

.. _cursus lesgever:

:guilabel:`Lesgever`

    De namen van de lesgevers van de :ref:`cursus <cursus>`. Gebruik een komma om namen te scheiden als er meerdere lesgevers zijn.

    .. TODO:feature-update: Markdown toelaten zodat eventueel ook emailadressen kunnen gekoppeld worden aan de namen van de lesgevers
    .. TODO:feature-update: overwegen om cursusgebruikers te selecteren als lesgevers van een cursus; dan kunnen hun namen aan hun profielpagina gekoppeld worden

.. _cursus zichtbaarheid:

:guilabel:`Zichtbaarheid`

    De zichtbaarheid bepaalt of :ref:`niet-geregistreerde <cursus registreren>` gebruikers de :ref:`cursus <cursus>` kunnen zien. Voor deze eigenschap kunnen de volgende waarden ingesteld worden:

    .. TODO:tutorial-update: nagaan of bovenstaande geldt voor alle gebruikers of enkel voor niet-geregistreerde gebruikers

    .. _cursus zichtbaar:

    :guilabel:`Zichtbaar`

        Alle gebruikers zien de :ref:`cursus <cursus>` in het :ref:`cursusoverzicht <cursusoverzicht>`. Ze kunnen ook naar de :ref:`cursuspagina <cursuspagina>` navigeren en zich daar eventueel voor de cursus :ref:`registreren <cursus registreren>`.

    .. _cursus verborgen:

    :guilabel:`Verborgen`

        Alleen :ref:`cursusbeheerders <cursusbeheerders>` zien de :ref:`cursus <cursus>` in het :ref:`cursusoverzicht <cursusoverzicht>`. Er staat een icoontje bij om hen er op te wijzen dat andere gebruikers de cursus daar niet kunnen zien.

        .. TODO:tutorial-update: nagaan wie een verborgen cursus kan zien in het cursusoverzicht: enkel geregistreerde gebruikers? enkel cursusbeheerders? vermoedelijk zien geregistreerde gebruikers de cursus wel in hun startpagina? gebruikt die dan een token-link om naar de cursus te navigeren of wordt de vereiste voor de token-link niet gebruikt voor geregistreerde gebruikers?

        .. TODO:screenshot-missing: screenshot van verborgen cursus in het cursusoverzicht van een cursusbeheerder, waarbij het icoontje wordt aangeduid

        Alleen :ref:`geregistreerde <cursus registreren>` gebruikers kunnen naar de :ref:`cursuspagina <cursuspagina>` navigeren. :ref:`Cursusbeheerders <cursusbeheerders>` zien een duidelijke mededeling op de cursuspagina om hen er op te wijzen dat niet-geregistreerde gebruikers niet naar de cursuspagina kunnen navigeren en zich enkel voor de :ref:`cursus <cursus>` kunnen registreren als ze de :ref:`registratielink <cursus registratielink>` gebruiken.

        .. TODO:screenshot-missing: screenshot van cursuspagina voor verborgen cursus waarop cursusbeheerder een mededeling ziet

        .. TODO:screenshot-missing: screenshot van cursuspagina voor verborgen cursus waarop niet-geregistreerde gebruiker een mededeling ziet

    .. TODO:feature-update: vervang de term "vakken" door "cursussen" in de omschrijving van dit veld op Dodona

.. _cursus registratie:
.. _cursus registratieprocedure:

:guilabel:`Registratie`

    Deze :ref:`cursuseigenschap <cursuseigenschappen>` bepaalt de **registratieprocedure** waarmee gebruikers zich voor de :ref:`cursus <cursus>` kunnen :ref:`registreren <cursus registreren>`:

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
        - alle gebruikers kunnen zich :ref:`registreren <cursus registreren>` voor de :ref:`cursus <cursus>` zonder expliciete goedkeuring van een :ref:`cursusbeheerder <cursusbeheerder>`

      * - :guilabel:`Gemodereerd`
        - gemodereerd
        - alle gebruikers kunnen een :ref:`registratieverzoek <registratieverzoek>` :ref:`indienen <registratieverzoek indienen>` voor de :ref:`cursus <cursus>` maar zijn pas :ref:`geregistreerd <cursus registreren>` als een :ref:`cursusbeheerder <cursusbeheerder>` hun registratieverzoek heeft :ref:`goedgekeurd <registratieverzoek goedkeuren>`

      * - :guilabel:`Gesloten`
        - gesloten
        - gebruikers kunnen zich niet meer :ref:`registreren <cursus registreren>` voor de :ref:`cursus <cursus>`

          .. TODO:feature-update: vervang de term "vakken" door "cursussen" in de omschrijving van dit veld op Dodona

    .. important::

        Als je deze :ref:`cursuseigenschap <cursuseigenschap>` aanpast dan blijven bestaande :ref:`registraties <cursus registreren>` voor de :ref:`cursus <cursus>` gelden en blijven openstaande :ref:`registratieverzoeken <registratieverzoek>` voor de cursus bestaan.

    .. TODO:feature-update: bijkomende mogelijkheden voorzien, bijvoorbeeld selectief automatisch goedkeuren van alle gebruikers van bepaalde instellingen; op die manier kan je die cursus openzetten voor bepaalde instellingen en registratieverzoeken van andere gebruikers modereren

.. _markdown:
.. _cursus beschrijving:

:guilabel:`Beschrijving`

    Een optionele beschrijving die bovenaan de :ref:`cursuspagina <cursuspagina>` wordt weergegeven. Voor het opmaken van de beschrijving kan je gebruikmaken van :ref:`Markdown <markdown>`.

    .. important::

        De beschrijving van eigenschappen die aangeduid worden met het Markdown-logo kan geschreven worden met behulp van `Markdown <https://en.wikipedia.org/wiki/Markdown>`_. Dodona maakt voor de weergave van Markdown gebruik van `kramdown <https://kramdown.gettalong.org>`_ waardoor heel wat uitbreidingen van de standaard Markdown ondersteund worden.

.. _cursus token:
.. _cursus registratielink:

:guilabel:`Registratielink`

    Bij het :ref:`aanmaken <cursus aanmaken>` van de :ref:`cursus <cursus>` werd automatisch een **token** gegenereerd. Zonder dit token kunnen :ref:`niet-geregistreerde <cursus registreren>` gebruikers de :ref:`cursuspagina <cursuspagina>` van een :ref:`verborgen <cursus verborgen>` cursus niet zien en zich daar dus ook niet registreren.

    .. TODO:screenshot-missing: screenshot dat aangeeft wat er gebeurt als een niet-geregistreerde gebruiker geen of een ongeldig token gebruikt om naar de cursuspagina te navigeren

    .. _cursus registratielink gebruiken:

    Daarom zit het :ref:`token <cursus token>` vervat in een **registratielink** waarmee alle gebruikers naar de :ref:`cursuspagina <cursuspagina>` kunnen navigeren en waarmee de :ref:`registratieprocedure <cursus registratieprocedure>` automatisch wordt opgestart voor niet-geregistreerde gebruikers.

    .. TODO:screenshot-missing: screenshot van niet-geregistreerde gebruiker waarvoor automatisch de registratieprocedure voor de cursus wordt opgestart bij gebruik van de registratielink

    .. TODO:feature-update: niet-geregistreerdee cursusgebruikers zouden ook een stub op de cursuspagina kunnen te zien krijgen, met de mogelijkheid om die te ontsluiten door het token in te vullen; na het invullen van het token (of bij gebruik van de tokenlink) wordt de cursuspagina wel weergegeven (moet dan in cookies opgeslagen worden, zodat gebruiker die niet telkens opnieuw moet invullen). Gebruiken van tokenlink heeft dan hetzelfde effect als het invullen van het token bij de stub van de cursus

    .. _cursus registratielink kopiëren:

    Als :ref:`cursusbeheerder <cursusbeheerder>` krijg je de verantwoordelijkheid om de :ref:`registratielink <cursus registratielink>` enkel te delen met :ref:`niet-geregistreerde <cursus registreren>` gebruikers die zich voor een :ref:`verborgen <cursus verborgen>` :ref:`cursus <cursus>` mogen :ref:`registreren <cursus registreren>`. Druk op de kopieerknop naast de registratielink om de registratielink naar het klembord te kopiëren.

    .. TODO:feature-update: eigenlijk zou dit een "geheime registratielink" moeten heten, met de opties om er enkel een "geheime link" of enkel een "registratielink" van te maken, en ook om de taal uit de link te schrappen indien je die niet wilt opleggen aan de gebruikers die je uitnodigt

    .. TODO:screenshot-missing: screenshot van cursuseigenschappen van een verborgen cursus, waarbij de kopieerknop naast registratielink wordt aangeduid

    .. _cursus token vernieuwen:
    .. _cursus registratielink vernieuwen:

    Druk op de vernieuwknop naast de :ref:`registratielink <cursus registratielink>` om de :ref:`cursus <cursus>` opnieuw te :ref:`verbergen <cursus verborgen>` nadat de registratielink gedeeld werd. Daardoor wordt een nieuw :ref:`token <cursus token>` gegenereerd en wordt het oude token onbruikbaar gemaakt. De registratielink wordt meteen ook aangepast aan het nieuwe token.

    .. TODO:screenshot-missing: screenshot van formulier waarop eigenschappen van cursus worden ingesteld, waarbij vernieuwknop naast registratielink wordt aangeduid

Druk op de afwerkknop in de rechterbovenhoek van het paneel :guilabel:`Nieuwe cursus` om het :ref:`aanmaken <cursus aanmaken>` van een :ref:`cursus <cursus>` met de opgegeven :ref:`eigenschappen <cursuseigenschappen>` effectief door te voeren.

.. TODO:screenshot-missing: screenshot van paneel "Nieuwe cursus" waarin de afwerkknop wordt aangeduid

Na het aanmaken van de nieuwe cursus navigeer je naar de :ref:`cursuspagina`, waar je kunt vaststellen dat je automatisch :ref:`geregistreerd <cursus registreren>` bent als :ref:`cursusgebruiker <cursusgebruiker>` en dat je :ref:`aangeduid <cursusbeheerders aanduiden>` bent als :ref:`cursusbeheerder <cursusbeheerder>`.

.. image:: images/staff.created_course.nl.png

.. TODO:feature-missing: kopiëren van een bestaande cursus

.. TODO:tutorial-missing: gebruikers herkennen dat ze een cursus kunnen beheren als ze het icoontje van cursusbeheerder zien staan in het kaartje van de cursus op hun startpagina of in het cursusoverzicht


.. _cursus bewerken:

Bewerken van een cursus
-----------------------

.. _cursuseigenschappen aanpassen:

Als :ref:`cursusbeheerder <cursusbeheerder>` kan je de :ref:`eigenschappen <cursuseigenschappen>` van een :ref:`cursus <cursus>` aanpassen door op de bewerkknop te drukken in de rechterbovenhoek van de :ref:`cursuspagina <cursuspagina>`.

.. TODO:screenshot-missing: screenshot van cursuspagina waarop de bewerkknop wordt aangeduid

.. _cursuseigenschappen aanpassen annuleren:

Druk op de :ref:`cursus <cursus>` in de :ref:`navigatiebalk <navigatiebalk>` om het aanpassen te annuleren.

.. TODO:screenshot-missing: screenshot van cursus bewerken waarbij de cursus in de navigatiebalk wordt aangeduid

.. _cursuseigenschappen aanpassen afwerken:

Druk na het aanpassen op de afwerkknop in de rechterbovenhoek van het paneel om de nieuwe :ref:`cursuseigenschappen <cursuseigenschappen>` effectief in te stellen.

.. image:: images/staff.course_edit_submit_link.nl.png

.. TODO:feature-update: de term "registration link" is niet vertaald naar "registratielink" op het formulier waar de cursuseigenschappen kunnen ingesteld worden

Na het :ref:`aanpassen <cursuseigenschappen aanpassen>` navigeer je terug naar de :ref:`cursuspagina` waar de nieuwe :ref:`cursuseigenschappen <cursuseigenschappen>` onmiddellijk van toepassing zijn.

.. image:: images/staff.course_after_edit.nl.png


.. _registratielink:
.. _cursusgebruikers uitnodigen:

Uitnodigen van cursusgebruikers
-------------------------------

Bij het :ref:`aanmaken <cursus aanmaken>` van een :ref:`cursus <cursus>` wordt automatisch een **registratielink** gegenereerd. Als afschermingsmechanisme bevat de registratielink een token dat gebruikers nodig hebben om toegang te krijgen tot de cursus als die door een cursusbeheerder verborgen werd. Zonder dit token kunnen ze niet :ref:`navigeren <cursus navigeren>` naar de :ref:`cursuspagina <cursuspagina>`.

.. TODO:screenshot-missing: screenshot van de cursuspagina van een gesloten cursus die bezocht wordt zonder token

Als :ref:`cursusbeheer <cursusbeheerder>` kan je de :ref:`registratielink <registratielink>` delen om gebruikers uit te nodigen om zich voor de cursus te :ref:`registreren <cursus registreren>`. Als gebruikers de registratielink volgen dan :ref:`navigeren <cursus navigeren>` ze rechtstreeks naar de cursus zonder dat ze die zelf moeten :ref:`zoeken <cursus zoeken>` in het :ref:`cursusoverzicht <cursusoverzicht>`. Als ze nog niet geregistereerd waren dan krijgen ze bovendien meteen een verzoek om de zich voor de cursus te registreren.

.. TODO:screenshot-missing: screenshot van registratieverzoek dat gebruiker te zien krijgt als hij de registratielink volgt voor een cursus waarvoor hij nog niet geregistreerd was

Als :ref:`cursusbeheer <cursusbeheerder>` vind je de :ref:`registratielink <registratielink>` bovenaan de :ref:`cursuspagina <cursuspagina>`.

.. image:: images/staff.registration_link.nl.png

.. _registratielink kopiëren:

Druk op de kopieerknop naast de :ref:`registratielink <registratielink>` om de registratielink naar het klembord te kopiëren.

.. image:: images/staff.registration_link_copy.nl.png

.. _registratielink vernieuwen:

Een :ref:`verborgen <cursus zichtbaarheid>` :ref:`cursus <cursus>` kan enkel gevonden worden door gebruikers die de :ref:`registratielink <registratielink>` kennen. Nadat de registratielink gedeeld werd kan je bij het :ref:`instellen <cursuseigenschappen instellen>` van de :ref:`eigenschappen <cursuseigenschappen>` van de cursus echter een nieuwe registratielink laten genereren om daarmee de cursus opnieuw te verbergen. Druk daarvoor op de vernieuwknop naast de registratielink.

.. image:: images/registration_link_renew.nl.png

.. TODO:feature-update: omdat de identifiers oplopend genummerd worden en ook gebruikt worden in de URL van een cursus, is het vrij eenvoudig om verborgen cursussen te vinden; heeft het vernieuwen van een registratielink dan wel zin als een manier om de cursus opnieuw te verbergen? ofwel mis ik nog iets om te begrijpen waardoor het opnieuw genereren van de registratielink de cursus opnieuw verbergt


.. _cursusgebruiker:
.. _cursusgebruikersoverzicht:
.. _cursusgebruikers beheren:

Beheren van cursusgebruikers
----------------------------

Als :ref:`cursusbeheerder <cursusbeheerder>` van een :ref:`cursus <cursus>` zie je onderaan de :ref:`cursuspagina <cursuspagina>` een **cursusgebruikersoverzicht** waarin de gebruikersnaam, de naam, het emailadres en :ref:`voortgangsstatistieken <cursusgebruiker voortgangsstatistieken>` opgelijst worden uit het :ref:`gebruikersprofiel <gebruikersprofiel>` van alle **cursusgebruikers**. Dit zijn alle gebruikers die ooit voor de cursus :ref:`geregistreerd <cursus registreren>` geweest zijn of die ooit een :ref:`registratieverzoek <registratieverzoek>` voor de cursus ingediend hebben.

.. image:: images/staff.course_users.nl.png

.. TODO:tutorial-missing: uitleggen van de betekenis van de voortgangsstatistieken

.. _cursus beheersrechten icoontje:
.. _cursusgebruiker voortgangsstatistieken:

Het :ref:`zoeken <gebruiker zoeken>`, :ref:`selecteren <gebruiker selecteren>` en :ref:`bewerken <gebruikersprofiel bewerken>` van gebruikers verloopt op dezelfde manier als in het :ref:`gebruikersoverzicht <gebruikersoverzicht>`. Naast de gebruikelijke :ref:`icoontjes <gebruiker beheersrechten icoontje>` die de lesgevers en beheerders aangeven, gebruikt het :ref:`cursusgebruikersoverzicht <cursusgebruikersoverzicht>` een bijkomend icoontje om de cursusbeheerders aan te geven.

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
    - alle :ref:`cursusgebruikers <cursusgebruiker>` die :ref:`geregistreerd <cursus registreren>` zijn voor de :ref:`cursus <cursus>`

  * - :guilabel:`Uitgeschreven`
    - alle :ref:`cursusgebruikers <cursusgebruiker>` die ooit :ref:`geregistreerd <cursus registreren>` waren voor de :ref:`cursus <cursus>`, maar die ondertussen :ref:`uitgeschreven <cursus uitschrijven>` zijn voor de cursus

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
    - goedkeuren van het :ref:`registratieverzoek <registratieverzoek>` dat door de gebruiker werd :ref:`ingediend <registratieverzoek indienen>`, waardoor de gebruiker :ref:`geregistreerd <cursus registreren>` wordt voor de cursus

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

Onder de :ref:`geregistreerde <cursus registreren>` gebruikers van een :ref:`cursus <cursus>` onderscheiden we studenten en **cursusbeheerders**, waarbij enkel cursusbeheerders een bestaande cursus kunnen beheren. De lesgever die de cursus heeft aangemaakt wordt automatisch geregistreerd voor de cursus en wordt meteen ook de eerste cursusbeheerder ervan. Lesgevers kunnen echter geen cursussen beheren waarvoor ze geen cursusbeheerder zijn.

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


.. _leerpad:
.. _leerpad weergave:
.. _leerpad uitstippelen:

Uitstippelen van een leerpad
----------------------------

Als :ref:`cursusbeheerder <cursusbeheerder>` kan je voor de :ref:`cursus <cursus>` een **leerpad** uitstippelen dat weergegeven wordt onder de hoofding :guilabel:`Oefeningenreeksen` op de :ref:`cursuspagina <cursuspagina>`. Het leerpad bestaat uit een opeenvolging van :ref:`oefeningenreeksen <oefeningenreeks>`.

.. TODO:feature-update: overwegen op de hoofding "Oefeningenreeksen" op de cursuspagina te vervangen door de term "Leerpad"


.. _oefeningenreeks toevoegen:

Toevoegen van oefeningenreeksen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Druk in het :ref:`leerpad <leerpad>` op de knop :guilabel:`REEKS TOEVOEGEN` om een nieuwe oefeningenreeks aan het leerpad toe te voegen.

.. TODO:screenshot-missing: screenshot van cursuspagina waarop al een aantal oefeningenreeksen te zien zijn, en waar de knop "REEKS TOEVOEGEN" wordt aangeduid

.. _oefeningenreeks eigenschappen instellen:

In het paneel :guilabel:`Nieuwe oefeningenreeks` stel je de :ref:`eigenschappen <oefeningenreeks eigenschappen>` van de nieuwe :ref:`oefeningenreeks <oefeningenreeks>` in.

.. TODO:feature-update: vervang de titel "Reeks aanmaken" door de titel "Nieuwe oefeningenreeks"

.. TODO:screenshot-missing: screenshot van formulier "Nieuwe oefeningenreeks"

.. _oefeningenreeks eigenschappen instellen annuleren:

Druk op de :ref:`cursus <cursus>` in de :ref:`navigatiebalk <navigatiebalk>` om het :ref:`toevoegen <oefeningenreeks toevoegen>` van de oefeningenreeks te annuleren.

.. TODO:screenshot-missing: screenshot van formulier voor nieuwe oefeningenreeks waarin de cursus in navigatiebalk wordt aangeduid

.. _oefeningenreeks eigenschappen:

Voor een :ref:`oefeningenreeks <oefeningenreeks>` kunnen de volgende eigenschappen ingesteld worden:

.. TODO:feature-update: cursus waaraan een oefeningenreeks gekoppeld is kan op dit moment nog ingesteld worden, maar dat zou niet mogen; deze eigenschap kan eventueel wel read-only weergegeven worden in het formulier zodat je ziet aan welke cursus de reeks gekoppeld is

.. _oefeningenreeks naam:

:guilabel:`Naam`

    De naam van de :ref:`oefeningenreeks <oefeningenreeks>`. Binnen een :ref:`leerpad <leerpad>` kunnen verschillende oefeningenreeksen dezelfde naam hebben. Het is echter aangeraden om alle oefeningenreeksen van het leerpad een unieke naam te geven.

.. _oefeningenreeks deadline:

:guilabel:`Deadline`

    Een optionele deadline die aangeeft tot wanneer er rekening gehouden wordt met :ref:`oplossingen <oplossing>` die :ref:`ingediend <oplossing indienen>` worden voor :ref:`oefeningen <oefening>` uit de :ref:`oefeningenreeks <oefeningenreeks>`. :ref:`Cursusgebruikers <cursusgebruiker>` kunnen na de deadline onbeperkt oplossingen blijven indienen voor oefeningen uit de oefeningenreeks en blijven daar nog steeds een beoordeling en feedback voor ontvangen. Er wordt met deze oplossingen echter geen rekening meer gehouden bij het bepalen van hun :ref:`indienstatus <oefeningenreeks oefening indienstatus>` voor oefeningen uit de oefeningenreeks.

    Zonder deadline wordt er blijvend rekening gehouden met :ref:`oplossingen <oplossing>` die :ref:`cursusgebruikers <cursusgebruiker>` :ref:`indienen <oplossing indienen>` bij het bepalen van hun :ref:`indienstatus <oefeningenreeks oefening indienstatus>` voor :ref:`oefeningen <oefening>` uit de :ref:`oefeningenreeks <oefeningenreeks>`.

    .. important::

        Als de deadline aangepast wordt dan krijgen cursusgebruikers meteen een :ref:`indienstatus <oefeningenreeks oefening indienstatus>` voor oefeningen uit de oefeningenreeks die aangepast is aan de nieuwe deadline.

    Klik op het invulveld of druk op de kalenderknop om de datum en het tijdstip van de deadline in te stellen. Selecteer de deadline in de :ref:`tijdzone <gebruikersprofiel tijdzone>` die je hebt :ref:`ingesteld <gebruikersprofiel instellen>` in je :ref:`gebruikersprofiel <gebruikersprofiel>`. Andere gebruikers krijgen de deadline te zien in de tijdzone die ze in hun gebruikersprofiel hebben ingesteld.

    .. TODO:screenshot-missing: screenshot van uitgeklapte date picker waarbij de kalenderknop wordt aangeduid

    Druk op de verwijderknop om een ingestelde deadline te wissen.

    .. TODO:screenshot-missing: screenshot van ingestelde deadline waarbij de verwijderknop wordt aangeduid

.. _oefeningenreeks zichtbaarheid:

:guilabel:`Zichtbaarheid`

    De zichtbaarheid bepaalt of gebruikers de :ref:`oefeningenreeks <oefeningenreeks>` kunnen zien. Voor deze eigenschap kunnen de volgende waarden ingesteld worden:

    .. _oefeningenreeks zichtbaarheid open:

    :guilabel:`Open`

        Alle gebruikers zien de oefeningenreeks in het :ref:`leerpad <leerpad>`.

    .. _oefeningenreeks zichtbaarheid verborgen:

    :guilabel:`Verborgen`

        .. _oefeningenreeks weergave verborgen:

        Alleen :ref:`cursusbeheerders <cursusbeheerder>` zien de :ref:`oefeningenreeks <oefeningenreeks>` in het :ref:`leerpad <leerpad>`. Er staat een duidelijke mededeling bij om hen er op te wijzen dat andere gebruikers de oefeningenreeks enkel kunnen zien als ze de :ref:`geheime link <oefeningenreeks geheime link>` gebruiken.

        .. TODO:screenshot-missing: screenshot van weergave van verborgen oefeningenreeks voor een cursusbeheerder, waarop de mededeling wordt aangeduid

    .. _oefeningenreeks zichtbaarheid gesloten:

    :guilabel:`Gesloten`

        .. _oefeningenreeks weergave gesloten:

        Alleen :ref:`cursusbeheerders <cursusbeheerder>` zien de :ref:`oefeningenreeks <oefeningenreeks>` in het :ref:`leerpad <leerpad>`. Er staat een duidelijke mededeling bij om hen er op te wijzen dat andere gebruikers de oefeningenreeks daar niet kunnen zien.

    .. TODO:screenshot-missing: screenshot van weergave van gesloten oefeningenreeks voor een cursusbeheerder, waarop de mededeling wordt aangeduid

.. _oefeningenreeks token:
.. _oefeningenreeks geheime link:

:guilabel:`Geheime link`

    Bij het :ref:`aanmaken <oefeningenreeks aanmaken>` van de :ref:`oefeningenreeks <oefeningenreeks>` werd automatisch een **token** gegenereerd. Als de oefeningenreeks :ref:`verborgen <oefeningenreeks zichtbaarheid verborgen>` werd dan kunnen gebruikers de oefeningenreeks enkel zien door het token te gebruiken.

    .. TODO:feature-update: overwegen om al een token te genereren op het moment dat het aanmaken van een cursus geïnitieerd wordt; dan kan de geheime link meteen weergegeven worden in het paneel "Nieuwe cursus"
    .. TODO:feature-update: inconsistentie tussen de "registratielink" voor cursussen die genereerd wordt op het moment dat de cursus aangemaakt en de "geheime link" voor oefeningenreeksen die aangemaakt wordt op het moment dat de oefeningenreeks op verborgen gezet wordt; oplossing voor cursussen lijkt beter, omdat het token behouden blijft als de zichtbaarheid van de cursus aangepast wordt en expliciet opnieuw kan gegenereerd worden; nu gaat bij het (tijdelijk) aanpassen van de zichtbaarheid van een cursus het token verloren; op die manier staat de geheime link ook altijd op het formulier en kunnen we die hier ook beter bespreken

    .. _oefeningenreeks geheime link kopiëren:

    Het token zit vervat in de **geheime link** voor de oefeningenreeks. Als :ref:`cursusbeheerder <cursusbeheerder>` krijg je de verantwoordelijkheid om de geheime link enkel te delen met andere gebruikers die de oefeningenreeks mogen zien. Druk op de kopieerknop naast de geheime link om de geheime link naar het klembord te kopiëren.

    .. TODO:screenshot-missing: screenshot van formulier waarop eigenschappen van oefeningenreeks worden ingesteld, waarbij kopieerknop naast geheime link wordt aangeduid

    .. _oefeningenreeks geheime link gebruiken:

    Als :ref:`cursusgebruikers <cursusgebruiker>` de :ref:`geheime link <oefeningenreeks geheime link>` van een :ref:`verborgen <oefeningenreeks zichtbaarheid verborgen>` :ref:`oefeningenreeks <oefeningenreeks>` gebruiken dan krijgen ze de oefeningenreeks toch te zien.

    .. TODO:screenshot-missing: screenshot van cursusgebruiker die verborgen oefeningenreeks zichtbaar gemaakt heeft met behulp van de geheime link

    .. TODO:feature-update: cursusgebruikers zouden initieel ook een stub voor de oefeningenreeks kunnen te zien krijgen, met de mogelijkheid om die te ontsluiten door het token in te vullen; na het invullen van het token (of bij gebruik van de tokenlink) wordt de oefeningenreeks wel weergegeven op de cursuspagina (moet dan in cookies opgeslagen worden, zodat gebruiker die niet telkens opnieuw moet invullen). Gebruiken van geheime link heeft dan hetzelfde effect als het invullen van het token bij de stub van de oefeningenreeks

    .. _oefeningenreeks token vernieuwen:
    .. _oefeningenreeks geheime link vernieuwen:

    Druk op de vernieuwknop naast de :ref:`geheime link <oefeningenreeks geheime link>` om de :ref:`oefeningenreeks <oefeningenreeks>` opnieuw te :ref:`verbergen <cursus zichtbaarheid verborgen>` nadat de geheime link gedeeld werd. Daardoor wordt een nieuw :ref:`token <oefeningenreeks token>` gegenereerd voor de oefeningenreeks en wordt het oude token onbruikbaar gemaakt. De geheime link wordt meteen ook aangepast aan het nieuwe token.

    .. TODO:screenshot-missing: screenshot van formulier waarop eigenschappen van oefeningenreeks worden ingesteld, waarbij vernieuwknop naast geheime link wordt aangeduid

    Als :ref:`cursusgebruikers <cursusgebruiker>` naar een :ref:`verborgen <oefeningenreeks zichtbaarheid verborgen>` :ref:`oefeningenreeks <oefeningenreeks>` navigeren zonder het nieuwste :ref:`token <oefeningenreeks token>` te gebruiken, dan krijgen ze de oefeningenreeks niet te zien.

    .. TODO:screenshot-missing: screenshot dat aangeeft wat er gebeurt als een cursusgebruiker een ongeldig token gebruikt

.. _oefeningenreeks beschrijving:

:guilabel:`Beschrijving`

    Een optionele beschrijving die gebruikers te zien krijgen bij de weergave van de oefeningenreeks in het :ref:`leerpad <leerpad>`. Voor het opmaken van de beschrijving kan je gebruikmaken van :ref:`Markdown <markdown>`.

Druk op de afwerkknop in de rechterbovenhoek van het paneel :guilabel:`Nieuwe oefeningenreeks` om de nieuwe :ref:`oefeningenreeks <oefeningenreeks>` effectief aan het :ref:`leerpad <leerpad>` :ref:`toe te voegen <oefeningenreeks toevoegen>`.

.. TODO:screenshot-missing: screenshot van formulier voor nieuwe cursus waarin de afwerkknop wordt aangeduid

Na het afwerken navigeer je naar de :ref:`weergave <oefeningenreeks weergeven>` van de :ref:`oefeningenreeks <oefeningenreeks>` in het :ref:`leerpad <leerpad>`. Daarbij zie je dat de nieuwe oefeningenreeks aan de bovenkant van het leerpad toegevoegd werd. Op die manier wordt het leerpad in omgekeerde chronologische volgorde (eerste oefeningenreeks onderaan) aangeboden op de cursuspagina.

.. TODO:feature-missing: cursuseigenschap toevoegen die weergave van oefeningenreeksen op cursuspagina bepaalt (eerste onderaan of eerste bovenaan)
.. TODO:feature-missing: mogelijkheid aanbieden om een oefeningenreeks op een willekeurige plaats aan te maken in het leerpad (bovenaan, onderaan of in het midden), bijvoorbeeld door de knop "REEKS TOEVOEGEN" zowel bovenaan als onderaan te zetten, en tussen twee panelen de knop ook dynamisch weer te geven als er over gehooverd wordt
.. TODO:feature-missing: mogelijkheid aanbieden om oefeningenreeksen te verplaatsen binnen het leerpad

.. TODO:tutorial-missing: plaats hier de info over de manier waarop de oefeningenreeksen worden weergegeven en het feit dat je hier de oefeningenreeks kunt bewerken, oefeningen kunt koppelen, ...


.. _oefeningenreeks oefeningen:
.. _oefeningenreeks oefeningen koppelen:

Koppelen van oefeningen
^^^^^^^^^^^^^^^^^^^^^^^

Je ziet nu een uitgebreide versie van het paneel waarin je naast het :ref:`instellen <oefeningenreeks eigenschappen instellen>` van :ref:`eigenschappen <oefeningenreeks eigenschappen>` ook oefeningen kunt koppelen aan de :ref:`oefeningenreeks <oefeningenreeks>`.

.. TODO:feature-update: instellen van eigenschappen voor oefeningenreeks zou op een andere pagina moeten gebeuren dan de pagina waar er oefeningen aan de oefeningenreeks gekoppeld worden; dit kan dan later uitgebreid worden met een pagina voor de oefeningenreeks waarop de learning analytics voor de oefeningenreeks te zien zijn; dan kan deze sectie helemaal losgekoppeld worden van de vorige sectie, en kan er aangegeven worden hoe je de oefeningen van een oefeningenreeks begint te bewerken

.. important::

    We veronderstellen hier dat de :ref:`oefeningen <oefening>` die aan de :ref:`oefeningenreeks <oefeningenreeks>` moeten gekoppeld worden reeds beschikbaar zijn in Dodona. In :ref:`oefeningen toevoegen` bespreken we hoe het toevoegen van :ref:`oefeningen <oefening>` verloopt.

.. _oefeningenoverzicht:
.. _oefeningenreeks oefeningen zoeken:

Onder de hoofding :guilabel:`Oefeningen toevoegen` staat een overzicht van alle beschikbare oefeningen. Gebruik de zoekbalk om te zoeken naar specifieke :ref:`oefeningen <oefening>` op basis van een naam of een padnaam. Hierbij wordt gezocht in alle beschikbare vertalingen voor de naam van de oefeningen.

.. TODO:tutorial-update: aangeven wat er bedoeld wordt met "alle beschikbare oefeningen"

.. TODO:feature-update: verdeel alle beschikbare oefeningen over drie tabs met hoofdingen "standaard" (beschikbare oefeningen die als standaardoefeningen zijn opgenomen in de oefeningenreeks), "extra" (beschikbare oefeningen die als extra oefeningen zijn opgenomen in de oefeningenreeks)" en "beschikbaar" (beschikbare oefeningen die niet opgenomen zijn in de oefeningenreeks); op die manier is er meer ruimte om de oefeningen met wat bijkomende info weer te geven (bijvoorbeeld programmeertaal); zoek beschikbare oefeningen op in de tab "beschikbaar" en voeg die via actieknopppen toe aan de standaard of extra oefeningen; gebruik actieknoppen om oefeningen tussen de tabs te verplaatsen; gebruik dynamische queries om oefeningen aan de verschillende tabs toe te wijzen, bijvoorbeeld "alle 'Python'-oefeningen uit repository 'xxx' met tag 'lussen' of uit pad 'reeks04/moeilijk'"
.. TODO:feature-update: mogelijk bieden om te zoeken in de beschrijving van de oefening (traag, zeker als verplaatst naar bestandssysteem)

.. TODO:screenshot-missing: screenshot waarin gezocht wordt naar oefeningen

.. _oefeningenreeks oefening toevoegen:

Druk op de toevoegknop aan de rechterkant van een :ref:`oefeningen <oefening>` om de oefening aan de :ref:`oefeningenreeks <oefeningenreeks>` toe te voegen.

.. TODO:screenshot-missing: screenshot waarin het toevoegen van een oefening aan een oefeningenreeks geïllustreerd wordt

.. _oefeningenreeks oefening verwijderen:

Druk op de verwijderknop aan de rechterkant van een :ref:`oefeningen <oefening>` om de oefening uit de :ref:`oefeningenreeks <oefeningenreeks>` te verwijderen.

.. TODO:screenshot-missing: screenshot waarin het verwijderen van een oefening uit een oefeningenreeks geïllustreerd wordt

.. _oefeningenreeks oefeningen herschikken:

Gebruik de verplaatsknop aan de linkerkant van de :ref:`oefeningen <oefening>` hun volgorde aan te passen. De volgorde waarin de oefeningen gerangschikt worden, is ook de volgorde waarin de oefeningen zullen :ref:`weergegeven <oefeningenreeks weergeven>` worden in de oefeningenreeks.

.. TODO:screenshot-missing: screenshot waarin het verplaatsen van oefeningen in een oefeningenreeks geïllustreerd wordt

.. TODO:feature-missing: mogelijkheid bieden om oefeningen in een vaste volgorde aan te bieden of in een dynamische volgorde (bijvoorbeeld alfabetisch, stijgende moeilijkheidsgraad, ...)

.. _oefeningenreeks oefeningen afwerken:

Druk op de afwerkknop in de rechterbovenhoek van het paneel om de koppeling van :ref:`oefeningen <oefening>` aan de :ref:`oefeningenreeks <oefeningenreeks>` af te werken.

.. TODO:feature-update: de vorige zin zou eigenlijk moeten eindigen met "... effectief in te stellen"

.. TODO:screenshot-missing: screenshot van formulier voor het bewerken van de oefeningen van een oefeningenreeks waarin de afwerkknop wordt aangeduid

Na het afwerken navigeer je terug naar de ref:`oefeningenreeks <oefeningenreeks>` in het :ref:`leerpad <leerpad>`, waar je kunt vaststellen dat de nieuwe koppeling van de :ref:`oefeningen <oefening>` meteen van toepassing is.


.. _oefeningenreeks beheren:

Beheren van oefeningenreeksen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. _oefeningenreeks menu cursusbeheerder:

In het :ref:`menu <oefeningenreeks menu>` van :ref:`oefeningenreeksen <oefeningenreeks>` staan enkele bijkomende opties die corresponderen met acties die voorbehouden zijn voor :ref:`cursusbeheerders <cursusbeheerder>`:

.. _oefeningenreeks bewerken:
.. _oefeningenreeks eigenschappen aanpassen:

:guilabel:`Reeks bewerken`

    Toont een pagina waarop de :ref:`eigenschappen <oefeningenreeks eigenschappen>` en de :ref:`koppeling <oefeningenreeks oefeningen koppelen>` van :ref:`oefeningen <oefening>` kunnen aangepast worden.

    .. TODO:screenshot-missing: screenshot van pagina waarop instellingen van oefeningenreeks kunnen gewijzigd worden

    .. TODO:feature-update: ook hier zou het instellen van de eigenschappen en het koppelen van oefeningen moeten ontkoppeld worden

    .. _oefeningenreeks eigenschappen aanpassen annuleren:

    Druk op de :ref:`oefeningenreeks <oefeningenreeks>` in de :ref:`navigatiebalk <navigatiebalk>` om het aanpassen te annuleren.

    .. TODO:screenshot-missing: screenshot van oefeningenreeks bewerken waarbij de oefeningenreeks in de navigatiebalk wordt aangeduid

    .. _oefeningenreeks eigenschappen aanpassen afwerken:

    Druk na het aanpassen op de afwerkknop in de rechterbovenhoek van het paneel om de nieuwe :ref:`eigenschappen <oefeningenreeks eigenschappen>` effectief in te stellen.

    .. TODO:screenshot-missing: screenshot van oefeningenreeks bewerken waarbij de afwerkknop wordt aangeduid

    Na het :ref:`aanpassen <oefeningenreeks eigenschappen aanpassen>` navigeer je terug naar de :ref:`oefeningenreeks` in het :ref:`leerpad <leerpad>`, waar de nieuwe :ref:`eigenschappen <oefeningenreeks eigenschappen>` onmiddellijk van toepassing zijn.

.. _oefeningenreeks verwijderen:

:guilabel:`Reeks verwijderen`

    Verwijdert de :ref:`oefeningenreeks <oefeningenreeks>` uit het :ref:`leerpad <leerpad>` van de :ref:`cursus <cursus>`.

.. _oefeningenreeks geheime link gebruiken cursusbeheerder:

:guilabel:`Geheime link`

    Gebruikt de :ref:`geheime link <oefeningenreeks geheime link>` om naar de :ref:`oefeningenreeks <oefeningenreeks>` te :ref:`navigeren <oefeningenreeks geheime link gebruiken>`.

    .. TODO:feature-update: dit wordt overbodig als de oefeningenreeks niet op een afzonderlijke pagina wordt weergegeven, maar als de weergave van de oefeningenreeks kan ontsloten worden op de cursuspagina zelf

.. _oefeningenreeks statusoverzicht:
.. _oefeningenreeks statusoverzicht weergeven:

:guilabel:`Statusoverzicht`

    Toont een overzicht met de :ref:`indienstatus <oefeningenreeks oefening indienstatus>` van alle :ref:`cursusgebruikers <cursusgebruiker>` voor alle :ref:`oefeningen <oefening>` uit de :ref:`oefeningenreeks <oefeningenreeks>`. De indienstatus wordt in het overzicht weergegeven met de gebruikelijke :ref:`icoontjes <oefeningenreeks oefening indienstatus icoontje>`.

    .. TODO:tutorial-missing: wordt de indienstatus hier bepaald met of zonder de deadline van de oefeningenreeks in rekening te brengen; zelfde voor de selectie van de oefening waarop de indienstatus gebaseerd is

    .. TODO:screenshot-missing: screenshot van statusoverzicht

    Druk op de naam van een gebruiker om naar de profielpagina van de gebruiker te navigeren.

    .. TODO:screenshot-missing: screenshot van statusoverzicht waarop naam van gebruiker wordt aangeduid

    Druk op het :ref:`icoontje <oefeningenreeks oefening indienstatus icoontje>` van een :ref:`indienstatus <oefeningenreeks oefening indienstatus>` om naar de :ref:`oplossing <oplossing>` te navigeren die gebruikt werd om de :ref:`indienstatus <oefeningenreeks oefening indienstatus>` te bepalen (als de gebruiker effectief een oplossing heeft :ref:`ingediend <oplossing indienen>` op basis waarvan de indienstatus kon bepaald worden).

    .. TODO:screenshot-missing: screenshot van statusoverzicht waarop icoontje wordt aangeduid

    .. TODO:feature-update: naam oefening aanklikbaar maken om naar de oefeningpagina te navigeren
    .. TODO:feature-update: cursusbeheerders aanduiden met een icoontje
    .. TODO:feature-update: kolom toevoegen met # correcte oplossingen
    .. TODO:feature-update: indienstatus van gebruikers voor volledige oefeningenreeks ook weergeven (icoontje voor de gebruikers)
    .. TODO:feature-update: percentage correcte oplossingen over alle studenten heen weergeven bij oefeningen
    .. TODO:feature-update: gebruikersnaam vervangen door naam van de student
    .. TODO:feature-update: aanklikken van naam zou naar profielpagina van student moeten gaan (nu wordt pagina met oplossingen van student in deze cursus getoond)
    .. TODO:feature-update: bij elke student actieknop toevoegen om overzicht te krijgen van alle oplossingen die student in deze cursus heeft ingediend voor de oefeningen uit de oefeningenreeks
    .. TODO:feature-update: ellipsis toevoegen aan weergave van de namen van studenten en oefeningen
    .. TODO:feature-update: bij elke oefening actieknop toevoegen om overzicht te krijgen van alle oplossingen die studenten in deze cursus hebben ingediend voor deze oefening
    .. TODO:feature-update: filteroptie toevoegen: alle gebruikers die geen oplossingen ingediend hebben te verbergen
    .. TODO:feature-update: filteroptie toevoegen: cursusbeheerders verbergen
    .. TODO:feature-update: filteroptie toevoegen: wel/geen rekening houden met deadline van oefeningenreeks
    .. TODO:feature-update: sorteeroptie toevoegen: studenten alfabetisch rangschikken
    .. TODO:feature-update: sorteeroptie toevoegen: studenten rangschikken op # correcte oplossingen
    .. TODO:feature-update: propere afdrukbare versie van overzicht maken (nu al min of meer OK)

.. _oefeningenreeks oplossingen herevalueren:

:guilabel:`Oplossingen herevalueren`

    :ref:`Herevalueert <oplossing herevalueren>` alle :ref:`oplossingen <oplossing>` die binnen de :ref:`cursus <cursus>` werden :ref:`ingediend <oplossing indienen>` voor :ref:`oefeningen <oefening>` van de :ref:`oefeningenreeks <oefeningenreeks>`.

.. TODO:feature-missing: overzicht van alle oplossingen die binnen een cursus ingediend werden voor de oefeningen uit een oefeningenreeks ontbreekt in het menu van de oefeningenreeks voor de cursusbeheerder; voor de volledigheid kan deze optie toegevoegd worden; dit maak het vorige menu-item overbodig, omdat de oplossingen dan via het menu van het overzicht kunnen geherevalueerd worden


.. _oplossingen beheren:

Beheren van oplossingen
-----------------------

.. _oplossing herevalueren:

Als :ref:`cursusbeheerder <cursusbeheerder>` kan je een :ref:`oplossing <oplossing>` herevalueren als ze binnen de :ref:`cursus <cursus>` werd :ref:`ingediend <oplossing indienen>` voor een :ref:`oefening <oefening>`. Daarbij wordt het :ref:`beoordelingsproces <oplossing beoordelingsproces>` opnieuw uitgevoerd zonder dat de oplossing opnieuw ingediend wordt. Op die manier blijft het :ref:`tijdstip <oplossing tijdstip>` van indienen behouden. Als de configuratie van de :ref:`oefening <oefening>` aangepast werd sinds de vorige beoordeling van de oplossing, dan kan de :ref:`status <oplossing status>` van de oplossing wel wijzigen.

Druk op de herhaalknop in de rechterbovenhoek van de :ref:`feedbackpagina <feedbackpagina>` om de :ref:`oplossing <oplossing>` te :ref:`herevalueren <oplossing herevalueren>`.

.. TODO:screenshot-missing: weergave van feedbackpagina waarop de herhaalknop wordt aangeduid

    .. important::

        Bij het :ref:`herevalueren <oplossingen herevalueren>` krijgen :ref:`oplossingen <oplossing>` een lagere prioriteit in de :ref:`wachtrij <oplossing wachtrij>` dan oplossingen die nieuw :ref:`ingediend <oplossing indienen>` worden. Op die manier ondervindt het beoordelen van oplossingen die gebruikers indienen minimale vertaging, maar kan het herevalueren wel langer duren.

        Gebruikers krijgen geen melding van het platform als hun :ref:`oplossingen <oplossing>` :ref:`geherevalueerd <oplossingen herevalueren>` worden. Als je beslist om oplossingen te herevalueren, is het belangrijk om gebruikers te informeren dat er zowel wijzigingen kunnen zijn van de :ref:`status <oplossing status>` van :ref:`oplossingen <oplossing>` die ze vroeger :ref:`ingediend <oplossing indienen>` hebben als van hun :ref:`indienstatus <oefeningenreeks oefening indienstatus>` voor :ref:`oefeningen <oefening>` in de :ref:`oefeningenreeksen <oefeningenreeks>` van de cursus.

.. _cursusbeheerder oplossingen overzicht:

.. TODO:feature-missing: link in sidebar die overzicht geeft van alle oplossingen die ingediend werden (bij cursusgebruikers zijn dit hun eigen oplossingen over alle cursussen heen, bij cursusbeheerders wordt dit aangevuld met oplossingen van alle gebruikers van cursussen die ze beheren; bij zeus zijn dit alle oplossingen)
.. TODO:feature-missing: link in navigatiebalk van cursus die overzicht geeft van alle oplossingen die in cursus ingediend werden (bij cursusgebruikers zijn dit enkel hun eigen oplossingen)
.. TODO:feature-missing: link in menu van oefeningenreeks die overzicht geeft van alle oplossingen die ingediend werden voor oefeningen uit de oefeningenreeks (bij cursusgebruikers zijn dit enkel hun eigen oplossingen); duid op één of andere manier aan welke oefeningen voor/na de deadline werden ingediend, bijvoorbeeld door oplossingen die na de deadline ingediend werden in het grijs te zetten
.. TODO:feature-update: link aan rechterkant van oefening in oefeningenreeks die overzicht geeft van alle oplossingen die ingediend werden voor die oefening (bij cursusgebruikers zijn dit enkel hun eigen oplossingen); duid op één of andere manier aan welke oefeningen voor/na de deadline werden ingediend, bijvoorbeeld door oplossingen die na de deadline ingediend werden in het grijs te zetten

Als :ref:`cursusbeheerder <cursusbeheerder>` zie je de oplossingen van alle :ref:`cursusgebruikers <cursusgebruiker>` in elk overzicht van :ref:`oplossingen <oplossing>` die :ref:`ingediend <oplossing indienen>` werden binnen de :ref:`cursus <cursus>`. Daarom bevat het overzicht een extra kolom met de naam van de gebruiker die de :ref:`oplossing <oplossing>` heeft :ref:`ingediend <oplossing indienen>`. Druk op de naam van de gebruiker om naar het :ref:`gebruikersprofiel <gebruikersprofiel>` te navigeren.

.. TODO:screenshot-missing: weergave van overzicht van oplossingen waarin de naam van de gebruiker wordt aangeduid

.. TODO:feature-update: vervang de gebruikersnaam in het overzicht door de naam van de gebruiker; eigenlijk kunnen we in alle overzichten de gebruikersnamen vervangen door de namen van de gebruikers (met ellipsis bij de weergave); op die manier worden gebruikersnamen vermoedelijk niet meer gebruikt in Dodona, wat natuurlijke evolutie is van de migratie naar meerdere identity providers; gebruikersnamen hebben immers enkel lokaal binnen de onderwijs- of onderzoeksinstelling een betekenis; elke object (gebruiker, cursus, oefeningenreeks, oplossing (met icoontje)) zou een korte omschrijving moeten hebben op basis van de eigenschappen (bv. naam, academiejaar, ...) die kan gebruikt worden om naar het object te linken en die een link toevoegt naar het object als de gebruiker gemachtigd is om het te zien

Als je gebruikmaakt van de zoekbalk aan de bovenkant van het :ref:`overzicht <cursusbeheerder oplossingen overzicht>` om te zoeken naar specifieke :ref:`oplossingen <oplossing>`, dan wordt ook gezocht op de :ref:`naam <gebruiker eigenschappen>` van gebruikers.

.. TODO:screenshot-missing: weergave van overzicht van oplossingen uit een cursus waarin de zoekbalk gebruikt wordt om te zoeken naar oplossingen met de naam van een gebruiker

.. TODO:feature-update: nagaan of zowel op gebruikersnaam als op de naam van de gebruiker gezocht wordt

.. _cursusbeheerder oplossingen overzicht menu:

Het overzicht heeft nu ook een :ref:`menu <oefeningenreeks menu>` met filters en acties die voorbehouden zijn voor :ref:`cursusbeheerders <cursusbeheerder>`:

.. TODO:feature-update: term "Filter opties" moet in één woord geschreven worden; kan misschien beperkt worden tot "Filters" omwille van de consistentie, want anders zou er ook moeten staan "Actie-opties"
.. TODO:feature-update: menu met filteropties en acties wordt maar deels weergegeven als er bijvoorbeeld nog geen oplossingen ingediend zijn voor de oefening; Z-level van menu verhogen

.. _cursusbeheerder oplossingen overzicht filter recentste correcte:

:guilabel:`Meest recente correcte oplossing per gebruiker` (filter)

    Beperkt het overzicht tot de meest recente correcte oplossing per gebruiker.

    .. TODO:feature-missing: waarom ook geen filter voor meest recente oplossing per gebruiker (niet noodzakelijk correct); op zich lijkt de filter die nu aangeboden wordt een vrij vreemde keuze als enige filter
    .. TODO:feature-missing: waarom ook niet oplossingen voor de deadline van de oefeningenreeks wegfilteren
    .. TODO:feature-missing: zorg ervoor dat de filtercriteria weergegeven worden bovenaan een overzicht; een aantal filtercriteria zullen vastliggen door de actie die naar het overzicht geleid heeft; daarbovenop kan de gebruiker bijkomende filters toepassen die mee in het filtergedeelte aangeboden worden; de zoekbalk kan dan mee opgenomen worden in het filtergedeelte; filteropties moeten dan niet meer via het menu aangeboden worden

.. _cursusbeheerder oplossingen herevalueren:

:guilabel:`Oplossingen herevalueren` (actie)

    Herevalueert alle :ref:`oplossingen <oplossing>` uit het overzicht.

.. TODO:feature-missing: toekennen van labels aan gebruikers binnen de cursus of binnen het plaform
.. TODO:feature-missing: learning analytics van gebruikers binnen de cursus