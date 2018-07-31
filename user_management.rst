.. _gebruikersbeheer:

Gebruikersbeheer
================

.. _gebruiker:
.. _student:
.. _lesgever:
.. _beheerder:

Alle **gebruikers** kunnen zich :ref:`aanmelden <aanmelden>` en hun :ref:`gebruikersprofiel <gebruikersprofiel>` beheren. Voor het uitvoeren van sommige acties heb je echter bijkomende :ref:`beheersrechten <beheersrechten>` nodig. Onder gebruikers onderscheiden we daarom **studenten**, **lesgevers** en **beheerders** afhankelijk van de :ref:`beheersrechten <beheersrechten>` die ze gekregen hebben voor Dodona. Als :ref:`beheerder <beheerder>` bepaal je mee wie de andere beheerders zijn. Als :ref:`lesgever <lesgever>` of als :ref:`beheerder <lesgever>` bepaald je mee wie de andere lesgevers zijn.

.. _beheersmenu:

.. tip::

    Je herkent dat je lesgever of beheerder bent als je het **beheersmenu** (menu :guilabel:`Admin`) ziet staan links van het :ref:`gebruikersmenu <gebruikersmenu>` aan de rechterkant van de :ref:`navigatiebalk <navigatiebalk>`.

    .. TODO:screenshot-missing: screenshot van navigatiebalk waarin beheersmenu is aangeduid

.. important::

    Onder :ref:`geregistreerde <registreren>` gebruikers van een :ref:`cursus <cursus>` onderscheiden we studenten en :ref:`cursusbeheerders <cursusbeheerder>` afhankelijk van de beheersrechten die ze gekregen hebben voor de cursus. Binnen een cursus kunnen sommige acties enkel door cursusbeheerders uitgevoerd worden. In :ref:`cursusbeheer` bespreken we hoe de gebruikers van een cursus beheerd worden.

.. TODO:tutorial-update: lijkt eventueel aangewezen om informatie over aanmelden, afmelden, natuurlijke taal instellen en gebruikersprofiel bewerken naar dit hoofdstuk te verplaatsen; valt nog te bekijken of het instellen van het gebruikersprofiel niet moet gediversifieerd worden tussen studenten en lesgevers


.. _gebruiker selecteren:

Navigeren naar een gebruiker
----------------------------

Als :ref:`lesgever <lesgever>` navigeer je naar het :ref:`gebruikersoverzicht <gebruikersoverzicht>` door :guilabel:`Gebruikers` te selecteren in het :ref:`beheersmenu <beheersmenu>` aan de rechterkant van de :ref:`navigatiebalk <navigatiebalk>`.

.. TODO:screenshot-missing: screenshot van opengeklapt beheersmenu waarin het menu-item Gebruikers is aangeduid

.. _gebruikersoverzicht:

In het **gebruikersoverzicht** vind je een lijst met de gebruikersnaam, de naam, het emailadres en voortgangsstatistieken uit het :ref:`gebruikersprofiel <gebruikersprofiel>` van alle gebruikers. Vóór elke gebruiker in de lijst staat ook een :ref:`icoontje <beheersrechten icoontje>` dat correspondeert met de :ref:`beheersrechten <beheersrechten>` die de gebruiker :ref:`gekregen <beheersrechten toewijzen>` heeft.

.. TODO:screenshot-missing: screenshot van gebruikersoverzicht

Gebruik de zoekbalk bovenaan het :ref:`gebruikersoverzicht <gebruikersoverzicht>` om te zoeken naar specifieke gebruikers op basis van een gebruikersnaam, een naam of een emailadres.

.. TODO:screenshot-missing: screenshot van gebruikersoverzicht waarin zoekbalk gebruikt wordt om naar gebruikers te zoeken

Druk op de gebruikersnaam van een gebruiker om naar de :ref:`profielpagina <profielpagina>` van de gebruiker te navigeren.

.. TODO:screenshot-missing: screenshot van gebruikersoverzicht met verwijzing naar naam van gebruiker


.. _gebruikersprofiel bewerken:

Bewerken van het gebruikersprofiel
----------------------------------

Als lesgevers kan je het :ref:`gebruikersprofiel <gebruikersprofiel>` van studenten en andere lesgevers bewerken. Daarvoor druk je op de editeerknop aan de rechterbovenkant van de :ref:`profielpagina <profielpagina>` van een gebruiker om het :ref:`gebruikersprofiel <gebruikersprofiel>` te bewerken.

.. TODO:screenshot-missing: screenshot van profielpagina waarin de editeerknop wordt aangeduid

Als alternatief kan je in het :ref:`gebruikersoverzicht` ook drukken op de editeerknop aan de rechterkant van een gebruiker om naar het :ref:`gebruikersprofiel <gebruikersprofiel>` van de gebruiker te bewerken.

.. TODO:screenshot-missing: screenshot van gebruikersoverzicht waarin editeerknop aangeduid wordt


.. _beheersrechten toewijzen:

Toewijzen van beheersrechten
----------------------------

Als lesgever zie je aan het informatieveld :guilabel:`Rechten` op de :ref:`profielpagina <profielpagina>` van een gebruiker welke :ref:`beheersrechten <beheersrechten>` aan haar toegewezen werden.

.. TODO:screenshot-missing: screenshot van profielpagina waarin beheersrechten aangewezen worden

.. _beheersrechten:

Aan gebruikers kunnen de volgende **beheersrechten** toegewezen worden:

.. list-table::
  :header-rows: 1

  * - naam
    - icoontje
    - permissies

  * - :guilabel:`Student`
    - .. image::
    - studenten kunnen hun :ref:`gebruikersprofiel <gebruikersprofiel>` :ref:`bewerken <gebruikersprofiel bewerken>`, kunnen zich :ref:`registreren <registreren>` voor :ref:`cursussen <cursus>` en kunnen :ref:`oplossingen <oplossing>` :ref:`indienen <oplossing indienen>` voor :ref:`oefeningen <oefening>`

  * - :guilabel:`Staff`
    - .. image::
    - lesgevers krijgen alle permissies van studenten en kunnen bovendien ook lesgevers aanduiden, het :ref:`gebruikersprofiel <gebruikersprofiel>` van studenten en lesgevers :ref:`bewerken <gebruikersprofiel bewerken>`, :ref:`cursussen <cursus>` :ref:`aanmaken <cursus aanmaken>`, :ref:`oefeningen <oefening>` :ref:`toevoegen <oefening toevoegen>` en :ref:`judges <judge>` :ref:`toevoegen <judge toevoegen>`

      .. TODO:feature-update: misschien zouden lesgevers enkel de rechten mogen instellen van studenten en lesgevers en mogen enkel cursusbeheerders gebruikers beheren die voor hun cursussen geregistreerd zijn
      .. TODO:feature-update: zoek vertaling van de rol "Staff" in het nederlands; op basis van de handleiding komt de term "lesgever" in aanmerking om deze rol te beschrijven; die naam staat tegenover de rol "student"

  * - :guilabel:`Zeus`
    - .. image::
    - beheerders krijgen alle permissies van lesgevers en cursusbeheerders en kunnen bovendien ook alle beheersrechten (inclusief cursusbeheerders) toewijzen, het :ref:`gebruikersprofiel <gebruikersprofiel>` van alle gebruikers :ref:`bewerken <gebruikersprofiel bewerken>`, alle :ref:`cursussen <cursus>` :ref:`bewerken <cursus bewerken>`, alle :ref:`oefeningen <oefening>` :ref:`bewerken <oefening bewerken>` en alle :ref:`judges <judge>` :ref:`bewerken <judge bewerken>`

      .. TODO:tutorial-update: nagaan of beheerders effectief cursussen, oefeningen en judges kunnen bewerken; vraag is of dit logisch is als ze geen toegang hebben tot de repo
      .. TODO:feature-update: kies meer generieke naam voor "Zeus"; op basis van de handleiding komt de term "beheerder" in aanmerking om deze rol te beschrijven; de naam staat tegenover de rol "lesgever"

.. TODO:screenshot-missing: screenshot van icoontjes voor gebruikersrechten toevoegen

Als je het :ref:`gebruikersprofiel <gebruikersprofiel>` van een gebruiker :ref:`bewerkt <gebruikersprofiel bewerken>` dan kan je daar de :ref:`beheersrechten <beheersrechten>` van de gebruiker instellen. Als lesgever kan je enkel de beheersrechten :guilabel:`Student` en :guilabel:`Staff` toekennen aan gebruikers (inclusief jezelf). Op die manier kan je een gebruiker promoveren tot :ref:`lesgever <lesgever>` of degraderen tot :ref:`student <student>`.

.. TODO:screenshot-missing: screenshot van bewerken van gebruikersprofiel waarin selectiemenu van eigenschap Rechten opengeklapt wordt en aangeduid is

.. important::

    Als je jezelf als lesgever degradeert tot student, dan kan je jezelf daarna niet terug promoveren tot lesgever.

.. TODO:feature-update: zoek vertaling van de rol "Staff" in het nederlands; op basis van de handleiding komen de termen "beheerder" of "lesgever" in aanmerking om deze rol te beschrijven; de laatste staat beter tegenover de rol "student", de eerste is de meer generieke naam voor die rol