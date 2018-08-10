.. _oefeningen beheren:

Oefeningen beheren
==================

.. _oefening:

Een **oefening** bestaat uit een opdracht waarvoor :ref:`oplossingen <oplossing>` kunnen :ref:`ingediend <oplossing indienen>` worden en is gekoppeld aan een :ref:`judge <judge>` die de ingediende oplossingen automatisch kan beoordelen en van feedback voorzien. In dit hoofdstuk bespreken we de specificatie voor het opstellen van oefeningen. Deze specificatie legt vast hoe de opdracht van een oefening moet beschreven worden en hoe de automatische beoordeling voor een oefening moet geconfigureerd worden. De specificatie voor het schrijven van judges voor Dodona wordt besproken in :ref:`oplossingen automatisch beoordelen`.

Het opstellen van :ref:`oefeningen <oefening>` gebeurt niet in Dodona, maar in externe `Git <https://nl.wikipedia.org/wiki/Git_(software)>`_ `repositories <https://en.wikipedia.org/wiki/Repository_(version_control)>`_ die aan Dodona gekoppeld worden. Elke Git repository wordt extern beheerd door één of meer personen, kan meerdere oefeningen bevatten en synchroniseert elke wijziging aan de oefeningen automatisch met Dodona. Dit zorgt ervoor dat grote collecties oefeningen eenvoudig kunnen beheerd worden, dat individuele oefeningen eenvoudig kunnen aangepast worden en dat wijzigingen meteen zichtbaar zijn op Dodona.

.. TODO:feature-missing: een oefening zou generiek moeten kunnen vastleggen i) hoe de opdracht van de oefening beschreven wordt (laat gegeneerde opdrachten toe), ii) hoe oplossingen voor de opdracht er uitzien en hoe ze kunnen ingediend worden (laat generieke indienscenario's toe) en iii) hoe ingediende oplossingen kunnen beoordeeld en van feedback voorzien worden (lijkt nu al vrij generiek te zijn, behalve dan misschien dat de feedback-spec te eng is en dat er nog interventie nodig is om Dockers op te laden)

.. _repository:

Een :ref:`lesgever <lesgever>` kan oefeningen uit een externe Git repository publiceren op Dodona. Daarvoor moet hij Dodona aanhaken aan de externe Git repository en Dodona de toestemming geven om de externe Git repository te beheren. Als de externe Git repository een collectie oefeningen bevat die gestructureerde is volgens de daarvoor vastgelegde specificatie, dan worden de oefeningen daardoor beschikbaar op Dodona. Een collectie oefeningen die op deze manier gepubliceerd wordt, noemen we kortweg een **repository**.

.. TODO:feature-update: aangezien de term "repository" beladen is, zouden we beter zoeken naar een specifiekere term voor een "collectie oefeningen uit een externe git repository die aan Dodona gekoppeld is"

.. TODO:feature-missing: alle Dodona-objecten die geconfigureerd worden in externe repositories zouden gebruik kunnen maken van een generieke "repository"-component die deels instaat voor het interne beheer van de objecten (koppeling van beheerders); dit zou op termijn ook moeten toelaten op cursussen aan git repo's te haken

.. Een :ref:`lesgever <lesgever>` kan alle beschikbare oefeningen op Dodona beheren. Voorlopig ga ik hier over zwijgen, want dit zou enkel moeten kunnen als hij beheerder is van de repository waaruit de oefeningen komen.

.. TODO:feature-missing: het beheren van repositories en oefeningen in Dodona moet fijnmaziger gemaakt worden, en zou analoog kunnen gebeuren aan het beheren van cursussen; lesgevers kunnen repositories aanhaken, worden er meteen voor geregistreerd en als beheerder aangeduid; ze kunnen ook andere beheerders aanduiden voor de repository; een beheerder bepaalt welke andere gebruikers en welke cursussen gebruik kunnen maken van de oefeningen uit de repository (dit kan niet afzonderlijk voor de oefeningen uit de repository)

.. Lesgevers kunnen oefeningen toevoegen en delen

.. Het definiëren van judges en oefeningen – die voor hun automatische beoordeling gebruikmaken van deze judges – gebeurt via GitHub repositories die automatisch gesynchroniseerd worden met de webapplicatie.


.. note: Om oefeningen aan Dodona toe te voegen moet je `git <https://git-scm.org>`_ gebruiken. Als je hier weinig of geen ervaring mee hebt lees je best `dit boek <https://git-scm.com/book>`_. Vooral hoofdstukken 1, 2 en 6 zijn hierbij nuttig.

.. Alle oefeningen in Dodona komen van een git repository. Ook lege repositorie kunnen :ref:`toegevoegd worden aan Dodona <adding_a_repository>` maar om de oefeningen correct te identificeren en parsen moet de repository aan een :ref:`voorgedefinieerde structuur <predefined_structure>` voldoen.

.. _repository aanmaken:
.. _oefeningen publiceren:

Publiceren van een collectie oefeningen
---------------------------------------

Als :ref:`lesgever <lesgever>` kan je een collectie oefeningen publiceren die opgesteld zijn in een externe Git repository. Dit kan enkel als je de nodige beheersrechten hebt voor de externe Git repository die toelaten om Dodona aan te haken en om Dodona schrijfrechten te kunnen geven.

.. note::

    We gaan er hier van uit dat de collectie oefeningen die je wilt publiceren opgesteld is in een externe Git repository waarvoor je de nodige beheersrechten hebt.

    Als je nog moet beginnen met het opstellen van de oefeningen dan maak je daar in eerste instantie een nieuwe Git repository voor aan. Een lege Git repository geldt immers als geldige collectie zonder oefeningen. Verderop bespreken we hoe een collectie oefeningen moet georganiseerd worden en hoe oefeningen moeten opgesteld worden.

.. tip::

    In onderstaande screencast tonen we hoe je letterlijk in een paar klikken een nieuwe Git repository kunt aanmaken op `GitHub <https://github.com>`_. Raadpleeg de `GitHub documentatie <https://guides.github.com/>`_ om meer te leren over het configureren en beheren van repositories op GitHub.

    .. image:: create-repository.gif

Voor het publiceren van een collectie oefeningen maakt het niet uit of je eerst alle oefeningen opstelt in een externe Git repository en ze pas daarna publiceert, of dat je start met het publiceren van een collectie zonder oefeningen die je daarna stelselmatig aanvult met nieuwe oefeningen. Na het publiceren worden alle wijzigingen aan de collectie immers meteen ook doorgevoerd in Dodona. Onder wijzigingen aan de collectie verstaan we hierbij het reorganiseren van de collectie, het toevoegen van nieuwe oefeningen aan de collectie, het aanpassen van bestaande oefeningen uit de collectie en het verwijderen van oefeningen uit de collectie.

Onderstaand schema omschrijft het scenario als de collectie oefeningen gewijzigd wordt in de externe Git repository:

    .. TODO:feature-update: reorganiseren van de collectie kan op dit moment nog niet, maar zou wel moeten kunnen
    .. TODO:feature-update: verwijderen van oefeningen uit een collectie wordt op dit moment nog niet ideaal opgevangen; over dit scenatio moet nog verder nagedacht worden

.. image:: images/exercise_update_from_git.png

1. Een externe beheerder `commit <https://git-scm.com/book/nl/v2/Git-Basics-Wijzigingen-aan-de-repository-vastleggen>`_  (Git lingo voor vastleggen van wijzigingen) of `pusht <https://git-scm.com/book/nl/v2/Git-Basics-Werken-met-remotes>`_  (Git lingo voor uploaden) wijzigingen aan de collectie oefeningen in de externe Git repository.

2. Dodona wordt op de hoogte gebracht van de wijzigingen als gevolg van het aanhaken aan de externe Git repository.

3. Dodona `pullt <https://git-scm.com/book/nl/v2/Git-Basics-Werken-met-remotes>`_ (Git lingo voor downloaden) de gewijzigde collectie oefeningen en maakt de nieuwe versie beschikbaar.

4. Bij het verwerken van wijzigingen aan de collectie oefeningen kan het gebeuren dat Dodona er zelf ook wijzigingen aan doorvoert, bijvoorbeeld door er informatie voor intern beheer aan toe te voegen. In dat geval `pusht <https://git-scm.com/book/nl/v2/Git-Basics-Werken-met-remotes>`_ Dodona deze wijzigingen naar de externe Git repository.

Onderstaand schema omschrijft het scenario als de collectie oefeningen gewijzigd wordt in Dodona:

.. image:: images/exercise_update_from_dodona.png

1. Een gebruiker wijzigt de collectie oefeningen in Dodona.

2. Dodona `pusht <https://git-scm.com/book/nl/v2/Git-Basics-Werken-met-remotes>`_ de gewijzigde collectie oefeningen naar de externe Git repository.

Op het einde van beide scenario's is de meest recente versie van de collectie oefeningen zowel beschikbaar op Dodona als in de externe Git repository. Om deze scenario's te realiseren moet je de volgende stappen uitvoeren.

.. TODO:feature-missing: als we op termijn overwegen om oefeningen rechtreeks aan Dodona toe te voegen via de web interface, dan zouden we dit kunnen doen in lokale Git repositories (op de Dodona servers) waarvoor we de repositorybeheerders een clone URL aanbieden zodat ze de repo daar ook kunnen klonen (desnoods enkel pull, maar indien ook push dan is GitHub als tussenstation niet langer nodig maar dan zijn we wel een hosting-platform geworden)


Toegangsrechten geven aan Dodona
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

De laatste twee stappen van het eerste scenario en de laatste stap van het tweede scenario vereisen dat Dodona collecties oefeningen moet kunnen **pullen** van en **pushen** naar de externe Git repository. Dodona maakt hiervoor gebruik van `het SSH protocol <https://git-scm.com/book/nl/v2/Git-op-de-server-De-protocollen>`_ voor Git. Het instellen van SSH toegangsrechten is afhankelijk van de manier waarop de externe Git repository gehost wordt:

`GitHub <https://github.com>`_

    Dodona heeft een GitHub account met gebruikersnaam ``dodona-server`` en naam ``Dodona Server``. Voeg deze account toe als **collaborator** aan de externe Git repository. Onderstaande screencast toont hoe je dit kan doen.

    .. image:: add-dodona-to-repository.gif

    .. TODO:screenshot-update: vervang voorgaande screencast door een screencast voor GitHub

`GitHub@UGent <https://github.ugent.be>`_

    De procedure is dezelfde als voor `GitHub <https://github.com>`_, behalve dat Dodona op GitHub@UGent account heeft met gebruikersnaam ``SA-GithubDodona`` en naam ``Dodona Server``.

.. TODO:feature-update: moeten we ook niet de publieke SSH sleutel van Dodona beschikbaar stellen, zodat een alternatieve methode om Dodona toegang te geven aan de repository erin bestaat dat men een "git" gebruiker aanmaakt op de machine waarop de repository staat en de publieke SSH sleutel van Dodona toevoegt aan het ~/.ssh/authorized_keys bestand van die "git" gebruiker (https://git-scm.com/book/nl/v2/Git-op-de-server-Git-op-een-server-krijgen).

.. TODO:tutorial-missing: contact opnemen met team Dodona om alternatieven te laten opzetten op aanvraag

.. tip::

    **Moet ik een Git repository publiek maken om oefeningen te publiceren op Dodona?**

    De scenario's om een collectie oefeningen te synchroniseren tussen een externe Git repository en Dodona vereisen niet dat je de externe Git repository publiek moet maken. Dat is zelfs helemaal niet aangewezen als je eigen voorbeeldoplossingen mee opslaat in de repository of als je de oefeningen afgeschermd wil publiceren op Dodona.


.. _repository aanmaken:

Aanmaken van een repository
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. TODO:tutorial-update: Evert sprak hier over het "registreren van de externe Git repository op Dodona", dus nog overwegen om dit terminologie over te nemen
.. De volgende stap is de repository op Dodona registreren. Alle medewerkers op Dodona hebben een "Repositories" link in hun "Admin" dropdown. Dit brengt je naar een overzicht van de repositories die Dodona gebruikt als bronnen voor oefeningen. Klik op de ``+`` knop om een nieuwe repository toe te voegen.

.. _repositoriesoverzicht:

Nadat Dodona SSH toegang gekregen heeft tot de externe Git repository, kan je als :ref:`lesgever <lesgever>` de externe Git repository koppelen aan Dodona. Selecteer :guilabel:`Repositories` in het :ref:`beheersmenu <beheersmenu>` om naar het **repositoriesoverzicht** te navigeren.

.. TODO:tutorial-update: nagaan of het meervoud van "repository" in het Nederlands "repository's" is of "repositories" (in de Nederlandstalige versie van Pro Git wordt "repositories" gebruikt; op Dodona wordt "repository's" gebruikt in het menu en "repositories" in de titelbalk van het repositoryoverzicht

.. TODO:screenshot-missing: screenshot waarin aangeduid wordt hoe je naar het repositoriesoverzicht kan navigeren via het beheersmenu.

Het :ref:`repositoriesoverzicht <repositoriesoverzicht>` toont een overzicht van alle beschikbare repositories.

.. TODO:tutorial-missing: hier nog aangeven hoe het repositoriesoverzicht er uitziet en hoe je naar een repository kan navigeren
.. TODO:feature-missing: zoekfunctionaliteit toevoegen aan dit overzicht

.. TODO:screenshot-missing: screenshot van het repositoriesoverzicht

Druk op de aanmaakknop in de rechterbovenhoek van het :ref:`repositoriesoverzicht <repositoriesoverzicht>` om een nieuwe repository aan te maken.

.. TODO:screenshot-missing: screenshot van het repositoriesoverzicht waarin de aanmaakknop wordt aangeduid

In het paneel :guilabel:`Nieuwe repository` stel je de eigenschappen van de nieuwe repository in.

.. TODO:screenshot-missing: screenshot van de pagina waarop de eigenschappen van de repository ingesteld worden.

Druk op de knop :guilabel:`Dodona` in de :ref:`navigatiebalk` om het aanmaken van de nieuwe :ref:`repository <repository>` te annuleren.

.. TODO:screenshot-missing: screenshot van de pagina waarop de eigenschappen van de repository ingesteld worden, en waarin Dodona aangeduid wordt in de navigatiebalk

Voor een :ref:`repository <repository>` kunnen de volgende eigenschappen ingesteld worden:

:guilabel:`Naam`

    Een naam voor de collectie oefeningen op Dodona.

:guilabel:`SSH URL`

    De `URL <https://nl.wikipedia.org/wiki/Uniform_Resource_Locator>`_ waar Dodona via `SSH <https://nl.wikipedia.org/wiki/Secure_Shell>`_ toegang krijgt tot de externe git repository.

    .. TODO:feature-update: zouden we deze eigenschap niet beter hernoemen naar "SSH URL"; dit is ook hoe ze door GitHub genoemd worden (https://help.github.com/enterprise/2.12/user/articles/which-remote-url-should-i-use/#cloning-with-ssh-urls)
    .. TODO:feature-update: wordt er een check uitgevoerd om ervoor te zorgen dat dezelfde git repo niet tweemaal gekoppeld wordt aan Dodona? we zouden in ieder geval kunnen controleren dat de SSH URL uniek is, en misschien moeten we ook een policy uitwerken rond het koppelen van meerdere branches van dezelfde repo (al lijkt dit wel een optie die zou moeten kunnen); als een repo oefeningen bevat waarvan de ID al in gebruik is in een andere repo, dan zouden we die oefeningen ook niet kunnen aanmaken (en een mail sturen naar de commiter dat er oefeningen zijn met ongeldige IDs); het niet aanmaken van een oefening met een ongeldige ID zou een algemene strategie kunnen zijn, in plaats van

    .. tip::

        In onderstaande screencast tonen we hoe je letterlijk in een paar klikken een nieuwe git repository kunt aanmaken op `GitHub <https://github.com>`_. Raadpleeg de `GitHub documentatie <https://guides.github.com/>`_ om meer te leren over het configureren en beheren van repositories op GitHub.

        .. image:: add-dodona-to-repository.gif

:guilabel:`Standaard judge`

    De :ref:`judge <judge>` die standaard gekoppeld wordt aan alle oefeningen in de :ref:`repository <repository>`. Selecteer de judge uit de lijst van beschikbare judges.

    .. TODO:feature-missing: dit zou uitgebreid moeten worden naar alle standaardinstellingen voor oefeningen in de repository, waardoor deze instellingen best ook ondergebracht worden onder een afzonderlijke hoofding
    .. TODO:feature-missing: als de repository al een dodona.json heeft in de root van de repository --- en dat kunnen we op dit moment nog niet weten --- dan moeten we ervoor zorgen dat die niet overschreven wordt; het lijkt dus aangewezen om de defaults pas in te stellen in een tweede stap, nadat de repo aan Dodona werd gekoppeld maar voordat de collectie oefeningen uit de repository verwerkt wordt (dit laatste wordt beïnvloed door de default-instellingen in de root)
    .. TODO:feature-missing: het selecteren van een judge moet op termijn uitgebreid worden met betere functionaliteit voor het zoeken naar een judge
    .. TODO:feature-missing: voeg een beschrijving voor de collectie oefeningen

    Een **oefening** bestaat uit een opdracht waarvoor :ref:`oplossingen <oplossing>` kunnen :ref:`ingediend <oplossing indienen>` worden en is gekoppeld aan een :ref:`judge <judge>` die de ingediende oplossingen automatisch kan beoordelen en van feedback voorzien.

Druk op de afwerkknop in de rechterbovenhoek van het paneel :guilabel:`Nieuwe repository` om het aanmaken van een repository met de opgegeven eigenschappen effectief door te voeren. Dit heeft als gevolg dat stappen (3) en (4) van het eerste scenario uitgevoerd worden, waardoor de collectie oefeningen uit de externe Git repository gepubliceerd wordt op Dodona.

.. TODO:screenshot-missing: screenshot van nieuw aangemaakte repository waarin de collectie oefeningen zichtbaar zijn

.. TODO: tutorial-missing: omschrijven hoe de nieuw aangemaakte repository weergegeven wordt op Dodona

.. TODO: tutorial-missing: "troubleshooting" informatie van de boodschap die getoond als Dodona niet de nodige toegangsrechten heeft om te pullen van en te pushen naar de git repo


.. _repository aanhaken:

Aanhaken aan een repository
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. TODO: tutorial-update: is dit specifiek voor GitHub, of is er een generieke manier om een notificatie te krijgen van git repo's; ik vermoed dat dit wel iets anders is dan `Git Hooks <https://git-scm.com/book/nl/v2/Git-aanpassen-Git-Hooks>`_

Om geïnformeerd te blijven over wijzigingen aan de collectie oefeningen die doorgevoerd worden in een externe Git repository, maakt Dodona gebruik van `Git Hooks <https://git-scm.com/book/nl/v2/Git-aanpassen-Git-Hooks>`_. Bij het aanmaken van een nieuwe repository werd een specifieke *webhook* gegenereerd waarvan je de URL kan zien in de weergave van de repository.

.. TODO:screenshot-missing: screenshot van nieuw aangemaakte repository waarin de webhook wordt aangeduid

Druk op de kopieerknop naast de *hook* om de *hook* naar het klembord te kopiëren.

.. TODO:screenshot-missing: screenshot van nieuw aangemaakte repository waarin de kopieerknop naast de webhook wordt aangeduid

Het installeren van de *hook* is afhankelijk van de manier waarop de externe Git repository gehost wordt:

`GitHub <https://github.com>`_

    Voeg de *hook* toe als `webhook <https://developer.github.com/webhooks/>`_ aan de GitHub repository. Onderstaande screencast toont hoe je dit kan doen.

    .. TODO:screenshot-missing: screencast van het instellen van een webhook op GitHub

.. tip::

    Druk voor de zekerheid op de knop :guilabel:`Alle oefeningen herwerken` in de weergave van de repository als de mogelijkheid bestaat dat de externe Git repository gewijzigd werd tussen het :ref:`aanmaken <aanmaken>` en het :ref:`aanhaken <aanhaken>`. Hierdoor worden stappen (3) en (4) van het eerste scenario uitgevoerd worden, waardoor de recentste versie van de collectie oefeningen uit de externe Git repository gepubliceerd wordt op Dodona.


.. _structuur van een repository:
.. _collectie oefeningen organiseren:

Organiseren van een collectie oefeningen
----------------------------------------

.. warning::

   Denk op voorhand goed na over hoe je je repository wil organiseren. Dodona
   kan er namelijk (nog) niet mee om dat oefeningen verplaatst of verwijderd
   worden.

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
    Deze map bevat statische bestanden die toegankelijk zijn op de webserver
    (handig om bijvoorbeeld afbeeldingen in te voegen in de beschrijving van de
    oefening). De bestanden zijn even toegankelijk als de oefening, dus als de
    oefening niet toegankelijk is voor studenten zullen deze bestanden dat ook
    niet zijn.
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

.. TODO:feature-discuss: public folder

.. _oefening opstellen:

Opstellen van een oefening
--------------------------

Het configuratie bestand van een oefening moet de volgende velden bevatten:

``description``
  Een JSON object met drie velden:

  ``difficulty``
    Een optionele numerieke inschatting van de moeilijkheid van de oefening.

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
  Oftewel ``"open"``, ``"hidden"`` of ``"closed"``. Als de waarde ``"open"`` is
  kan iedereen de oefening vinden door er naar te zoeken. Als de waarde
  ``"hidden"`` is, is de oefening enkel beschikbaar via een link er naar toe.
  Als de waarde ``"closed"`` is kunnen enkel medewerkers van Dodona de oefening
  bekijken.

.. _describing_an_exercise:

Beschrijven van de opdracht
---------------------------

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
""""""""""""

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
""""""""

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
""""""""""""""""""""

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
"""""""
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
"""""""""""
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
"""""""""""""
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
"""""""""""""""""""
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
""""""""

Callouts zijn enkel mogelijk in HTML. Dit kan als volgt:

.. code-block:: html

   <div class="callout callout-info">
     <h4>Titel</h4>
     <p>Tekst</p>
   </div>

In plaats van ``callout-info`` kan ook ``callout-warning`` en ``callout-danger``
gebruikt worden. Je kan deze HTML natuurlijk gewoon in je Markdown plaatsen om
hetzelfde effect te creëren. Je moet dan wel het volledig element in HTML
schrijven.

.. TODO:feature-discuss: aangeven hoe je een deel van de omschrijving kan verbergen in de afdrukbare versie van een oefening of ze daar net zichtbaar te maken (bv. videofragment vervangen door afbeelding)



Voorbeeld
"""""""""

Markdown

  .. code-block:: text

     Schrijf een natuurlijk getal op een blaadje papier:

     > 886328712442992

     Tel het aantal even en oneven cijfers, en ook het totaal aantal cijfers:

     > 10 5 15

     Vorm een nieuw getal door de cijfers van de voorgaande dree getallen samen te voegen:

     > 10515

     Voor dezelfde procedure nogmaals uit op het bekomen getal:

     > 1 4 5 ⟶ 145

     En blijf dit herhalen:

     > 1 2 3 ⟶ 123

     Je zal finaal altijd bij het getal 123 uitkomen.

     <div class="callout callout-info">
          <h4>Opmerking</h4>
          <p>Bij het toepassen van de procedure om het volgende getal te bepalen,
            dien je de voorloopnullen te laten vallen als er geen even cijfers in
            het getal staan. Als we bijvoorbeeld vertrekken van het getal 111, dan
            bepalen we het volgende getal als</p>
          <blockquote>0 3 3 &#10230; 33 (en niet 033)</blockquote>
          <p>Dat maakt een verschil omdat 33 geen even cijfers heeft (en bij een
            volgende toepassing van de procedure 22 oplevert) en 033 wel een even
            cijfer heeft (en bij een volgende toepassing van de procedure 123 zou
            opleveren).</p>
     </div>


    ### Opgave

     * Schrijf een functie `evenOneven` waaraan een getal $$n \in \mathbb{N}$$
       moet doorgegeven worden. De functie moet een tuple met twee natuurlijke
       getallen teruggeven, die repectievelijk aangeven hoeveel even en oneven
       cijfers er in $$n$$ voorkomen.
     * Schrijf een functie `volgende` waaraan een getal $$n \in \mathbb{N}$$
       moet doorgegeven worden. De functie moet het getal teruggeven dat men
       bekomt door de procedure uit de inleiding eenmaal toe te passen op $$n$$.
     * Schrijf een functie `stappen` waaraan een getal $$n \in \mathbb{N}$$ moet
       doorgegeven worden. De functie moet teruggeven hoe vaak we de procedure
       uit de inleiding moeten toepassen voor we 123 bekomen, als we beginnen
       bij $$n$$.

    ### Voorbeeld

    ```python
    >>> evenOneven(886328712442992)
    (10, 5)
    >>> evenOneven(10515)
    (1, 4)
    >>> evenOneven(145)
    (1, 2)

    >>> volgende(886328712442992)
    10515
    >>> volgende(10515)
    145
    >>> volgende(145)
    123

    >>> stappen(886328712442992)
    3
    >>> stappen(1217637626188463187643618416764317864)
    4
    >>> stappen(0)
    2
    >>> stappen(1)
    5
    ```

HTML

  .. code-block:: html

     <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
      </head>
      <body>
        <p>Schrijf een natuurlijk getal op een blaadje papier:</p>
        <blockquote>886328712442992</blockquote>
        <p>Tel het aantal even en oneven cijfers, en ook het totaal aantal cijfers:</p>
        <blockquote>10 5 15</blockquote>
        <p>Vorm een nieuw getal door de cijfers van de voorgaande drie getallen
          samen te voegen:</p>
        <blockquote>10515</blockquote>
        <p>Voer dezelfde procedure nogmaals uit op het bekomen getal:</p>
        <blockquote>1 4 5 &#10230; 145</blockquote>
        <p>En blijf dit herhalen:</p>
        <blockquote>1 2 3 &#10230; 123</blockquote>
        <p>Je zal finaal altijd bij het getal 123 uitkomen.</p>
        <div class="callout callout-info">
          <h4>Opmerking</h4>
          <p>Bij het toepassen van de procedure om het volgende getal te bepalen,
            dien je de voorloopnullen te laten vallen als er geen even cijfers in
            het getal staan. Als we bijvoorbeeld vertrekken van het getal 111, dan
            bepalen we het volgende getal als</p>
          <blockquote>0 3 3 &#10230; 33 (en niet 033)</blockquote>
          <p>Dat maakt een verschil omdat 33 geen even cijfers heeft (en bij een
            volgende toepassing van de procedure 22 oplevert) en 033 wel een even
            cijfer heeft (en bij een volgende toepassing van de procedure 123 zou
            opleveren).</p>
        </div>
        <h3>Opgave</h3>
        <ul>
          <li>
            <p>Schrijf een functie <samp>evenOneven</samp> waaraan een getal $$n
              \in \mathbb{N}$$ moet doorgegeven worden. De functie moet een tuple
              met twee natuurlijke getallen teruggeven, die respectievelijk aangeven
              hoeveel even en oneven cijfers er in $$n$$ voorkomen.</p>
          </li>
          <li>
            <p>Schrijf een functie <samp>volgende</samp> waaraan een getal $$n \in
              \mathbb{N}$$ moet doorgegeven worden. De functie moet het getal
              teruggeven dat men bekomt door de procedure uit de inleiding eenmaal
              toe te passen op $$n$$.</p>
          </li>
          <li>
            <p>Schrijf een functie <samp>stappen</samp> waaraan een getal $$n \in
              \mathbb{N}$$ moet doorgegeven worden. De functie moet teruggeven hoe
              vaak we de procedure uit de inleiding moeten toepassen vooraleer we
              het getal 123 bekomen, als we beginnen bij $$n$$.</p>
          </li>
        </ul>
        <h3>Voorbeeld</h3>
        <div class="highlighter-rouge language-python">
          <div class="syntax">
            <pre><span class="gp">&gt;&gt;&gt; </span><span class="n">evenOneven</span><span
    class="p">(</span><span class="mi">886328712442992</span><span class="p">)</span>
    <span class="go">(10, 5)</span>
    <span class="gp">&gt;&gt;&gt; </span><span class="n">evenOneven</span><span class="p">(</span><span
    class="mi">10515</span><span class="p">)</span>
    <span class="go">(1, 4)</span>
    <span class="gp">&gt;&gt;&gt; </span><span class="n">evenOneven</span><span class="p">(</span><span
    class="mi">145</span><span class="p">)</span>
    <span class="go">(1, 2)</span>

    <span class="gp">&gt;&gt;&gt; </span><span class="n">volgende</span><span class="p">(</span><span
    class="mi">886328712442992</span><span class="p">)</span>
    <span class="go">10515</span>
    <span class="gp">&gt;&gt;&gt; </span><span class="n">volgende</span><span class="p">(</span><span
    class="mi">10515</span><span class="p">)</span>
    <span class="go">145</span>
    <span class="gp">&gt;&gt;&gt; </span><span class="n">volgende</span><span class="p">(</span><span
    class="mi">145</span><span class="p">)</span>
    <span class="go">123</span>

    <span class="gp">&gt;&gt;&gt; </span><span class="n">stappen</span><span class="p">(</span><span
    class="mi">886328712442992</span><span class="p">)</span>
    <span class="go">3</span>
    <span class="gp">&gt;&gt;&gt; </span><span class="n">stappen</span><span class="p">(</span><span
    class="mi">1217637626188463187643618416764317864</span><span class="p">)</span>
    <span class="go">4</span>
    <span class="gp">&gt;&gt;&gt; </span><span class="n">stappen</span><span class="p">(</span><span
    class="mi">0</span><span class="p">)</span>
    <span class="go">2</span>
    <span class="gp">&gt;&gt;&gt; </span><span class="n">stappen</span><span class="p">(</span><span
    class="mi">1</span><span class="p">)</span>
    <span class="go">5</span>
    </pre></div>
        </div>
      </body>
    </html>

Dit ziet er dan uiteindelijk als volgt uit:

.. image:: description-example.nl.png
