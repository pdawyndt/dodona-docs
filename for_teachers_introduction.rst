.. _for_teachers_introduction:

Inleiding
=========

Als lesgever kan je onbeperkt cursussen aanmaken op Dodona, en binnen die
cursussen kan je een leerpad uitstippelen met verschillende oefeningenreeksen.
Voor het toevoegen van oefeningen die op een automatische manier de ingediende
oplossingen testen en van feedback voorzien, heb je een aantal verschillende
opties:

 1. oefeningen selecteren die andere lesgevers opgesteld en gedeeld hebben
 2. zelf oefeningen opstellen en delen op basis van een bestaande judge
 3. zelf een nieuwe judge met bijbehorende oefeningen ontwikkelen en delen

Elke mogelijkheid uit bovenstaande lijst vraagt telkens meer inspanning, maar
geeft hem telkens ook meer flexibiliteit om de oefeningen naar je hand te
zetten. De meeste lesgevers beginnen dan ook eenvoudigweg met het toevoegen van
bestaande oefeningen aan hun cursussen, vooraleer ze zelf oefeningen en judges
beginnen op te stellen. We gaan hieronder wat meer in detail in op de
verschillende mogelijkheden.

Oefeningen selecteren die andere lesgevers opgesteld en gedeeld hebben
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

Dit is de eenvoudigste en snelste manier om als lesgever aan de slag te gaan met
Dodona. Je bent letterlijk binnen de tien minuten klaar met het aanmaken van een
nieuwe cursus met tien oefeningenreeksen die elk zes bestaande oefeningen bevatten,
indien de selectie van de oefeningen reeds gebeurd is. In dit geval dien je dus
uitsluitend tijd te spenderen aan het selecteren van oefeningen die geschikt
zijn voor je doelgroep en die je beoogde doelstellingen onderbouwen. Daarbij is
het aangewezen dat je ook zelf de oefeningen oplost (en indient in Dodona), of
de voorbeeldoplossingen en bijkomende informatie bekijkt die gedeeld werden door
de lesgever die de oefeningen heeft opgesteld. Dodona biedt nu reeds
ondersteuning voor het zoeken en delen van oefeningen binnen de leeromgeving,
maar de bestaande functionaliteit zal verder geoptimaliseerd worden om in te
spelen op een groeiend aantal oefeningen en lesgevers.

Door op deze manier te beginnen werken, bouw je als lesgever ervaring op met de
online leeromgeving Dodona en krijgt je voeling met wat het betekent om
studenten op een geautomatiseerde manier feedback te geven op de door hen
ingediende oplossingen. Voorwaarde is uiteraard wel dat je in Dodona oefeningen
vindt die je aan je studenten wil voorleggen. Anders moet je gebruik maken van
de aanvullende mogelijkheid om zelf oefeningen toe te voegen aan Dodona, en deze
ook met je collega’s te delen.

Meer informatie over het maken van een cursus kan je
:ref:`hier <creating_a_course>` vinden.

Zelf oefeningen toevoegen en delen op basis van een bestaande judge
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

Oefeningen worden opgesteld in een (open of gesloten) GitHub repository die na
elke wijziging automatisch gesynchroniseerd wordt met Dodona. De manier waarop
ingediende oefeningen voorzien worden van automatische feedback wordt volledig
bepaald door de judge (een script of een reeks scripts die instaan voor het
geven van automatische feedback op een de ingediende oplossing) waaraan je de
oefeningen koppelt. Het vraagt wat inspanning om je initieel in te werken in de
judge en te leren hoe je testgevallen kan opstellen (of automatisch genereren).
Wat wel en niet kan hangt ook helemaal af van de voorzieningen die de judge je
biedt. 

Voor educatieve doeleinden kan je onbeperkt open of gesloten repositories
aanmaken op GitHub, wat tal van voordelen biedt bij het opstellen, delen en
beheren van je eigen oefeningen. Je blijft eigenaar van de oefeningen die je
opstelt, kiest zelf met wie je je oefeningen deelt en kan organisaties aanmaken
in GitHub voor je school, scholengroep of vereniging. Je hebt verschillende
mogelijkheden om je oefeningen te delen (lezen of schrijven) en kan andere
lesgevers uitnodigen om feedback te geven op hun oefeningen. Wijzingen aan de
oefeningen worden automatisch gesynchroniseerd met Dodona door het instellen van
een *webhook*, maar de oefeningen kunnen ook nog steeds buiten de context van
Dodona gebruikt worden. Op Dodona kan je instellen of de oefeningen zichtbaar
zijn voor studenten (oefeningen die nog niet afgewerkt zijn of die deel uitmaken
van een examen worden typisch pas na verloop van tijd zichtbaar voor studenten).
Je kan er ook de toegankelijkheid van je cursussen beheren (cursussen met
auteursrechtelijk beschermde oefeningen uit handboeken mogen typisch niet
publiek gedeeld worden).

Meer informatie over het maken van oefeningen en hoe je ze toevoegt aan Dodona
kan je :ref:`hier <creating_an_exercise>` vinden.

Zelf nieuwe judges ontwikkelen
""""""""""""""""""""""""""""""

Is er nog geen judge voorhanden die ondersteuning biedt voor de programmeertaal
of het platform waarmee je wil werken, dan biedt Dodona de mogelijk om zelf een
judge te ontwikkelen. Judges worden opgesteld in een GitHub repository, en na
een commit automatisch gesynchroniseerd op Dodona. Hoe de beoordeling van
ingediende oplossingen gebeurt heb je volledig zelf in handen. The sky is the
limit. Via het aanmaken van een docker container kan je zelf de omgeving bepalen
waarin het uitvoeren en beoordelen van de ingediende oplossingen moet gebeuren.
Er zijn geen beperkingen op hoe geavanceerd je een judge kan uitbouwen, maar
meestal begin je met een eenvoudig prototype (bijvoorbeeld gebaseerd op een
bestaand testframework voor de programmeertaal waarvoor oplossingen zullen
ingediend worden). Dit prototype kan je gaandeweg verder laten evolueren op
basis van noden die groeien of nieuwe uitdagingen die je zelf wil aangaan.

Meer informatie over het schrijven van een judge kan je
:ref:`hier <creating_a_judge>` vinden.
