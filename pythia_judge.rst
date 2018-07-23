.. _pythia_judge:

======
Pythia
======

Alle Pythia judges zijn in Python geschreven en delen een gemeenschappelijke
basisklasse ``Judge``. De basisklasse voor master judges heet ``MasterJudge``.
De basisklasse voor interactieve judges heet ``TestcaseJudge``. Twee generieke
interactieve judges zijn al geïmplementeerd:

 * The ``OutputJudge`` klasse implementeert een judge die de ingediende broncode
   evalueert gebaseerd op de output die naar ``stdout`` wordt geschreven
   gebaseerd op input die via ``stdin`` wordt ingelezen.
 * De ``DoctestJudge`` klasse implementeeert een judge die de ingediende
   broncode evalueert door er een serie *unit tests* op uit te voeren die
   beschreven worden aan de hand van een uitgebreide versie van het format van
   de Python ``doctest`` module.

De hiërarchie van de judge klassen die binnen het Pythia project ontwikkeld
werden is als volgt::

    Judge -> MasterJudge
          -> TestcaseJudge -> OutputJudge
                           -> DoctestJudge

Algemene instellingen
#####################

De volgende instellingen kunnen zowel voor de output judge als voor de doctest
judge gebruikt worden. Instellingen die specifiek zijn aan een judge zullen
hierna apart behandeld worden in :ref:`output_judge` en :ref:`doctest_judge`.

``time limit``
  Deze instelling geeft de tijdslimiet aan als een natuurlijk getal in seconden.

``continue upon wrong answer``
  Boolean die aangeeft of er moet verdergegaan worden met het uitvoeren van
  testen wanneer er een fout antwoord gegenereerd wordt. Standaard ``true``.

``continue upon failure``
  Boolean die aangeeft er er moet verdergegaan worden met het uitvoeren van
  testen wanneer een runtime error optreedt.

``tab name``
  String die de naam aangeeft van de tab in de feedback. Namen van tabs worden
  ook blootgesteld aan de vertalingen die door de judge worden uitgevoerd maar
  alle types van names worden los vertaald, wat betekent dat namen van functies,
  methodes, klassen en sleutelwoordargmenten als tokens gedetecteerd worden.

.. _output_judge:

Output judge
############

De normale werking van de judge bestaat per geüploade testcase uit een aantal
stappen:

 * Parsen van de invoer en verwachte uitvoer in samenhangende blokken
 * Per blok wordt uitvoer gegenereerd aan de hand van de ingediende code en de
   invoer uit het blok.
 * De verwachte en gegenereerde uitvoer per blok worden met elkaar vergeleken.

Als er fouten (of runtime-errors/time limit exceeded) tegengekomen worden stopt
de judge daar en wordt feedback teruggegeven (in de vorm van een tabel met
aangeduide verschillen tussen verwachte en gegenereerde uitvoer). Als
daarentegen alle blokken correct waren, wordt ook nog eens voor de volledige
input gekeken of de gegeneerde output overeenkomt met de verwachte uitvoer en
wordt daarna feedback teruggegeven over deze laatste vergelijking.

De default werking van de judge kan veranderd worden aan de hand van een aantal
parameters. Deze moeten toegevoegd worden aan het bestand met verwachte uitvoer
na één enkele regel die enkel bestaat uit koppeltekens (minstens 3).

Paramaters om de werking van de judge aan te passen
"""""""""""""""""""""""""""""""""""""""""""""""""""

``python input without prompt``
  Boolean die aangeeft of de prompt van de ingebouwde functies ``input`` en
  ``raw_input`` naar standaard uitvoer moeten geschreven worden of niet.
  Standaard ``false`` (waarbij het prompt dus **wel** naar standaard uitvoer
  geschreven wordt).

``block count``
  String die aangeeft hoeveel blokken input de judge mag verwachten.

   * ``one`` (standaard): De input wordt als één blok beschouwd
   * ``multi``\ : De input bestaat uit een aantal blokken na elkaar (waardoor
     bij bepaalde vragen maar 1 testcase met meerdere testinputs nodig is).
   * ``first line``\ : De eerste regel van de invoer geeft het aantal blokken aan
   * ``ends with <string>``\ : De invoer wordt afgesloten met een regel die
     gelijk is aan ``<string>``. Dus als bijvoorbeeld ``ends with STOP``
     ingesteld wordt moet de invoer afgesloten worden met een regel die enkel
     ``STOP`` bevat.

``input block size``
  String die aangeeft hoe elk blok uit de invoer er uit ziet.

   * ``first line`` (standaard): De eerste regel van het blok geeft aan hoeveel
     regels er daarna nog in het blok komen; deze eerste regel maakt ook deel
     uit van de invoer die door de ingediende code moet verwerkt worden.
   * ``ends with <string>``: Elk blok wordt afgesloten met een regel die gelijk
     is aan ``<string>``. Als er geen string wordt opgegeven dan wordt een lege
     regel beschouwd als terminator/separator. Als het laatste blok eindigt met
     ``<string>`` dan wordt de ``<string>`` beschouwd als terminator en maakt
     die deel uit van de eigenlijke invoer die door de ingediende code verwerkt
     moet worden. In het geval dat het laatste blok niet eindigt met
     ``<string>`` wordt ``<string>`` beschouwd als separator en maakt die geen
     deel uit van die invoer die door de ingediende code verwerkt moet worden.
   * ``<integer>``: Elk blok bestaat uit ``<integer>`` regels.

``blockwise execution``
  Boolean die aangeeft of de output bloksgewijs vergeleken moet worden of niet.
  Dit is standaard ``true`` en dan wordt er per blok uitvoer gegenereerd en
  vergeleken met de verwachte uitvoer. Als ``false`` ingesteld wordt zal er
  enkel globaal de gegenereerde en de verwachte output vergeleken worden.

Parameters om de manier van vergelijken te veranderen
"""""""""""""""""""""""""""""""""""""""""""""""""""""

``comparison``
  String die aangeeft hoe de gegenereerde en de verwachte uitvoer vergeleken moet worden

   * ``exact match``: De twee output moeten exact gelijk zijn.
   * ``ignore extra whitespace`` (standaard): De verwachte en gegenereerde
     uitvoer moeten gelijk zijn, maar opeenvolgende witruimtekarakters worden
     gereduceerd tot één enkel witruimtekarakter.
   * ``ignore whitespace``: De verwachte en gegenereerde uitvoer moeten gelijk
     zijn maar witruimte wordt genegeerd voor de vergelijking.

``ignore fp rounding``
  Bepaalt hoe floating point getallen vergeleken worden.

  * ``default``: Getallen worden karakter per karakter vergeleken en moeten in
    alle karakters overeenstemmen.
  * ``getal <e>``: De getallen :math:`n` en :math:`m` zijn gelijk als :math:`|n-m| < 10^e`; met
    andere woorden als :math:`e = -2` moeten de twee getallen gelijk zijn tot op twee
    cijfers na de komma.

``case sensitive``
  Boolean die aangeeft of er bij de vergelijking van de gegenereerde en de
  verwachte uitvoer rekening gehouden moet worden met het verschil tussen
  hoofdletters en kleine letters. Standaard ``true``.

``field order sensitive``
  Boolean die aangeeft of er bij de vergelijking van de gegenereerde en de
  verwachte uitvoer rekening gehouden moet worden met de volgorde van de velden
  op een regel. Standaard ``true``.

``field separator``
  Veldscheidingsteken dat gebruikt wordt voor de ``field order sensitive``
  instelling. Standaard wordt een opeenvolgende reeks witruimtekarakters als
  veldscheidingsteken gebruikt.

``line order sensitive``
  Boolean die aangeeft of er bij de vergelijking van de gegenereerde en de
  verwachte uitvoer rekening gehouden moet worden met de volgorde van de regels.
  Standaard ``true``.


Definiëren van een eigen evaluatie functie
""""""""""""""""""""""""""""""""""""""""""

In het bestand met verwachte uitvoer is er ook de mogelijkheid om een eigen
functie te definiëren die evalueert of de oplossing juist of fout is. Deze
functie moet als argumenten de verwachte en gegenereerde uitvoer ontvangen en op
basis daarvan ``True`` of ``False`` teruggeven naargelang de correctheid.

In het volgende voorbeeld wordt er per lijn een andere toegelaten floating point marge gebruikt::

    2.04e+13
    136.365577302
    68.1827886512
    ---------
    <DEFINITION>
    def customEvaluate(expected_output, generated_output):
        if len(generated_output) != 3:
             return False
        ignore_rounding = [9, -2, -2]
        for i, rounding in zip([0, 1, 2], ignore_rounding):
            if abs(float(expected_output[i].strip('\n')) - float(generated_output[i])) > 10 ** rounding:
                return False
        return True
    </DEFINITION>


Voorbeeld 1
"""""""""""

Bij opgave `Dierenriem <https://dodona.ugent.be/nl/exercises/1178427390/>`_
schrijft de ingezonden code voor een datum (op 2 regels) het juiste sterrenbeeld
uit (op 1 regel). We gebruiken ``block count: multi`` om meerdere testen te
kunnen definiëren in één bestand.

Input bestand (``0.in``)::

    1
    januari
    12
    november
    23
    april
    25
    december

Output bestand (``0.out``)::

    Steenbok
    Schorpioen
    Stier
    Steenbok
    ---------------------------------------------------------
    python input without prompt: true
    block count: multi
    input block size: 2
    output block size: 1
    blockwise execution: true
    continue upon wrong answer: false

Voorbeeld 2
"""""""""""

Bij opgave `Delers <https://dodona.ugent.be/nl/exercises/1581119193/>`_ moeten
voor een gegeven getal alle delers uitgeschreven worden. Opnieuw kan hier
gebruik gemaakt worden van ``block count: multi``. Deze keer wordt de verwachte
uitvoer beëindigd door een lege regel (``ouptut block size: ends with``).

Input bestand (``0.in``)::

  298
  299

Output bestand (``0.out``)::

  1
  2
  149
  298

  1
  13
  23
  299

  ---------------------------------------------
  python input without prompt: true
  block count: multi
  input block size: 1
  output block size: ends with
  blockwise execution: true
  continue upon wrong answer: false

.. _doctest_judge:

Doctest judge
#############
