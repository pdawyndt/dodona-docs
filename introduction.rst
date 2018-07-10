.. _introduction:

=========
Inleiding
=========

Dodona is een online leerplatform dat aan de Universiteit Gent wordt ontwikkeld
en gebruikt met het oog op het automatiseren van de *feedback loop* voor
complexe opdrachten met open antwoorden, waarbij we in eerste instantie focussen
op programmeeropdrachten. Specifiek aan dit soor opdrachten is dat het antwoord
doorgaans niet bestaat uit de oplossing van een bepaald probleem, maar uit de
implementatie in programmacode van een generieke methode (een algoritme) om een
bepaald soort problemen op te lossen. Dit maakt dat het beoordelen van de
ingediende oplossingen een stuk complexer is dan bij vragen met een vast
antwoord (bv. bij *multiple choice* examens) maar het biedt ook twee belangrijke
voordelen ten opzichte van algemene vragen met een open antwoord:

 #. omdat de oplossing bestaat uit een generieke procedure onder de vorm van
    uitvoerbare code, kan de correctheid van verschillende componenten van die
    code getest worden door de oplossingsmethode toe te passen op een groot
    aantal testvoorbeelden (*unit testing* en *integration testing*)
 #. er kan niet enkel getest worden of de oplossingsmethode telkens een correct
    antwoord oplevert, maar ook een aantal intrinsieke kwaliteiten van de
    oplossingsmethode of de implementatie kunnen getest worden (bv. via tijds-
    en geheugenmetingen of via statische analyse van de broncode)

Op die manier kan er gericht feedback gegeven worden op basis van een
beoordeling van de kwaliteit van de ingediende oplossingen. Om dit te kunnen
realiseren werd Dodona opgezet als een generiek raamwerk waaraan specifieke
workflows kunnen toegevoegd worden voor automatische beoordeling van opdrachten
in verschillende programmeertalen of platformen (databanken, web, mobile, ...).
Lesgevers kunnen eigen uitvoeringsomgevingen definiëren onder de vorm van
*Docker containers*, waarin zelfgedefinieerde scripts worden uitgevoerd die de
workflow vastleggen om ingediende oplossingen te beoordelen (de zogenaamde
*judges*). Het definiëren van judges en oefeningen -- die voor hun automatische
beoordeling gebruikmaken van deze judges -- gebeurt via *GitHub repositories*
die automatisch gesynchroniseerd worden met de webapplicatie. Dit zorgt ervoor
dat judges en oefeningen eenvoudig kunnen aangepast worden, en dat de
wijzigingen meteen zichtbaar zijn op de Dodona website.

Door het automatiseren van de *feedback loop* kan Dodona niet enkel ingezet
worden bij de beoordeling van evaluaties en examens (summatief toetsen), maar
ook tijdens oefensessies of voor huistaken (formatief toetsen). Studenten kunnen
doorlopend oplossingen indienen voor hun opdrachten, totdat ze die tot een goed
einde hebben gebracht (longitudinaal toetsen). Het grote leereffect zit hem net
in het feit dat Dodona voortdurend feedback blijft geven op de weg die leidt van
een initieel ingediende oplossing tot een oplossing die als volledig correct
beoordeeld wordt.

