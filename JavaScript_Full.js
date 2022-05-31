// 1.) Alapok - Adattípusok és kommentelés


    // A.) JavaScript adat típusok: Undefined, null, boolean, string, symbol, number, object
        // Undefined - Olyan adattípus, ami még nem lett definiálva.
        // Null - 0
        // Boolean - True / false
        // Number - Szám
        // String - Szöveg típusú adat
        // Symbol - Egy egyedi primitív érték
        // Object - Többféle kulcs értéket képes tárolni

    // B.) Kommentek - A kódjainkat kommentelhetjük is, sőt ajánlott. Egy soros kommentet a "//", míg több sorosat a "/*kommenthelye*/" megoldással hozhatunk létre.

    // C.) Kiíratások - A legegyszerűbb kiíratások: console.log() -> a böngésző konzoljába írja ki // document.write() -> Egy teljesen új oldalra írat ki // Később szó lesz a HTML elemek módosításáról is, mely szintén egy kiíratási mód.




// 2.) Változók - A gép ebben tárol különböző adatokat, melyhez így hozzá tud/tudunk férni. A változó egy üres "doboz" melyet feltölthetünk különböző értékekkel.


    // A.) Változók létrehozása: 
        var myName = "János"; // A "var"-ral látrehozott változót a teljes programodban használhatod, és változtatható bárhol, bármikor. Ez egyben a veszélye is.
        let kutyaNev = "Keksz"; // A let-tel létrehozott változódat csak a létrehozás helyén használhatod.
        const csaladNev = "Példa"; // A const-tal látrehozott változót a teljes programban használhatod, de nem változtathatod meg az értékét, ezért const, azaz konstans. Ha változtatni próbálod "error"-t fog adni.
        console.log(myName);
        console.log(kutyaNev);
        console.log(csaladNev);

    // B.) Változók tárolása hozzárendelési operátorral
        var a; // Ez csak egy létrehozott változó hozzárendelt érték nélkül. Ha kiíratjuk, akkor "undefined" adattípust fogunk kapni.
        var b = 5; // Itt az egyenlőség jellel már hozzárendeltünk egy értéket a változónkhoz.
        a = 7; // Itt a korábban létrehozott "a" változónkhoz hozzárendeltük a hetet, mint értéket.
        b = a; // B-hez hozzárendeljük a-t. Milyen értéket vesz fel így b? Nos, 7-et.
        console.log(a);
        console.log(b);


    // C.) A változók Case Sensitive-ek, vagyis nagy és kisbetű érzékenyek!
        /*Deklaráció:*/ var eLsOvAlToZo;
        /* Hozzárendelés:*/ elsovaltozo = 10; // Itt, ha kiíratjuk az eLsOvAlToZo - t, akkor ReferenceErrort fogunk kapni, ugyanis a eLsOvAlToZo - Undefined, hiszen nem azt deifiniáltuk az utána következő sorban!




// 3.) Alap matematikai műveletek JavaScripttel


    // A.) Számok összeadása: A "+" operátorral adhatunk össze számokat vagy változókat:
        var sum = 10 + 3; // = 13
        console.log(sum);

    // B.) Számok kivonása: A "-" operátorral vonhatunk ki vagy változókat egymásból:
        var kivonas = 10 - 3 // = 7
        console.log(kivonas);

    // C.) Számok szorzása: A "*" operátorral szorozhatunk össze számokat vagy változókat.
        var szorzas = 8 * 10; // = 80
        console.log(szorzas);

    // D.) Számok osztása: A "/" operátorral oszthatunk számokat vagy változókat.
        var osztas = 10 / 5; // = 2
        console.log(osztas);

    // E.) Számok növelése: A "++" operátorral egyel növelhetjük a korábban már deklarált változónk értékét.  
        var noveles = 10;
        noveles++; // = 11
        console.log(noveles);

    // F.) Számok csökkentése: A "--" operátorral egyel csökkenthetjük a korábban már deklarált változónk értékét.
        var csokkentes = 10;
        csokkentes--; // = 9
        console.log(csokkentes);

    // G.) Tizedes számok: A tizedes számokat "."-tal írjuk a JavaScriptben:
        var tizedes = 0.009;
        console.log(tizedes);

    // H.) Tizedes számok szorzása: A "*" operátorral szorozhatunk össze tizedes számnokat is:
        var tizedesSzorzas = 0.2 * 0.5; // = 1
        console.log(tizedesSzorzas);

    // I.) Tizedes számok osztása: A "/" operátorral oszthatunk tizedes számokat is: 
        var tizedesOsztas = 4.4 / 2.0; // = 2.2
        console.log(tizedesOsztas);

    // J.) Maradékos osztás: A "%" operátorral maradékos osztást végezhetünk. A művelet leggyakoribb alkalmazási esete, amikor el szeretnénk dönteni, a számunk páros, vagy páratlan.
        var maradekos = 11 % 3; // = 2, hiszen 3*3 = 9, 11-9=2. 
        var parosE = 10 % 2; // = 0, vagyis a 10 páros.
        var parosEKetto = 11 % 2; // = 1, vagyis a 11 páratlan.
      

    // K.) A compound összeadás: "+=" operátor bal oldalán szerepelő változót/értéket növeljük a jobb oldalán található változóval/értékkel.
        var compOsszeadas = 9;
        compOsszeadas = compOsszeadas + 9; // Itt a = 18. Ez egy nagyon gyakori művelet, ezért van egy lényegesen egyszerűbb megoldás is erre:
        compOsszeadas += 9; // Az a változót (legyen az bármennyi, jelen esetben épp 9-nek deklaráltuk), növeljük 9-cel.


    // L.) A compound kivonás: "-=" operátor bal oldalán szereplő vátlozót/értéket csökkentjük a jobb oldalán található változóval/értékkel.
        var compKivonas = 10;
        compKivonas = compKivonas - 5; // = 5
        compKivonas -= 5; // = 5
    

    // M.) A compound szorzás: "*=" operátorral hasonlóan az előzőkhöz dolgozhatunk.


    // N.) A compund osztás: "/=" operátorral hasonlóan az előzőkhöz dolgozhatunk.




// 4.) String változók


    // A.) String változó deklarálása - A string, vagyis szöveg értékkel rendelkező váltoinkat ', " , és ` jelek közé írhatjuk, ezzel jelezve, hogy stringről van szó.
        var vezetekNev = "Példa";
        var keresztNev = 'János';
        var szuletesiHely = `Budapest`; // Fontos, hogy azzal a jellel zárjuk a stringet, amivel a deklarációt megkezdtük!
      

    // B.) Idézőjelek használata a stringeken belül - Ha idézőjeleket szeretnénk használni a stringen belül az alábbi módon kell megoldani: 
        var idezoJelesString = "Én egy \" idézőjeles \" string vagyok!"; // A stringen belül használni kívánt idézőjelek elé egy "altgr+q" backslash jelet teszünk, ezzel jelezve a JS-nek, hogy ez NEM a string végét jelző "!
     

    // C.) Idézőjelek használata a stringeken belül 2. - Van egy az előzőnél egyszerűbb módszer is:
        var idezoJelesStringMaskepp = 'Én egy "idézőjeles" string vagyok!' // Egyszerűen nem dupla idézőjellel kezdjük és zárjuk magát a stringet, így a duplát használhatjuk ott, ahol akartuk.
      

    // D.) Egyéb "escape" megoldások használata - 
        /*
            \' - Single qoute
            \" - Double quote
            \\ - Back slash
            \n - Új sor
            \r - return, vagyis új sor
            \t - tab
            \b - backspace
            \f - form feed - Vagyis új oldal kezdése
        */
       
            
    // E.) Stringek összefűzése - Össze is fűzhetünk stringeket. Ezt az összeadásból ismert "+" operátorral tehetjük meg.
        var osszefuzottString = "Ez egy " + "összefűzott string"; // Kiíratáskor: "Ez egy összefűzött string"
        

    // F.) Stringek összefűzése "+=" operátorral - Stringeket egyszerűbben is összefűzhetünk a += operátorral:
        var elsoString = "Ez egy ";
        elsoString += "+= operátorral összefűzött string."; // Kiíratva: "Ez egy += operátorral összefűzött string."
        

    // G.) Stringek és változók összefűzése - változókat és stringeket szabadon fűzhetünk egybe az alábbi módon:
        var kutyamNeve = "Kira";
        var valtozosString = "Az én kutyám neve " + kutyamNeve + " aki 9 éves lesz."; // Kiíratva: Az én kutyám neve Kira aki 9 éves lesz.
        

    // H.) Változókban tárolt stringek össezfűzése a += operátorral: 
        var kezdoSzo = "Kódolni ";
        var hozzafuzott = "szuper dolog!";
        kezdoSzo += hozzafuzott; // Kiíratva: Kódolni szuper dolog! - Ahogy eddig is a += operátor bal oldalán található értéket növeltük a jobb oldalán tlaálható értékkel.
        

    // I.) Egy string hosszának megállapítása - Sokszor szeretnénk egy string pontos hosszát megállapítani, ezt így tehetjük meg: 
        var vezetekNevHossza = 0;
        var vezetekNev = "Példa";
        vezetekNevHossza = vezetekNev.length; // Kiíratva: 9-et kapunk, mert a .length property hozzáfűzésével az adott változóhoz, ez megadja a string hosszát.
        

    // J.) Bracket, azaz [kapcsos zárójel] használata egy string n-edik karakterének megtalálására -
        var elsoBetu = ""; // Létrehoztunk egy üres változót elsoBetu néven
        var keresztNev = "János" // Létrehozzuk a keresztNev változót melynek a "Szabolcs" stringet adjuk értékként.
        elsoBetu = keresztNev[0]; // A JavaScript 0 indexelésű nyelv, vagyis nem 1-től, hanem 0-tól kezdi a számolást, így a [0]. indexű karakterünk lesz az ELSŐ karakter, vagyis az "S"


    // K.) A stringek karakterei nem változtathatóak egyesével!
        var str = "Jello world";
        str[0] = "H"; // Így errort fogunk kapni, mivel maga a karakter nem változtatható.
        str = "Hello world"; // Ahhoz, hogy megváltoztassuk a hibát, a teljes stringet újra kell definiálnunk!


    // L.) A string utolsó karakterének megtalálása 
        var keresztNev = "Gábor";
        var utolsoKarakter = keresztNev[keresztNev.length - 1]; // Kiíratva: "r". Miért a -1? Mint tudjuk a JS 0, indexelésű, vagyis a pontos hosszból 1-et ki kell vonnunk, hogy megkapjuk az utolsó karaktert, legyen a string bármilyen hosszú is!




// 5.) Tömbök


    // A.) A tömbökben több különböző adatot tudunk egy helyen tárolni.
        var elsoTomb = ["Peti", 29]; // A tömbök mindig "[" kezdődnek és "]" zárulnak, és a benne szereplő adatok ,-vel vannak elválasztva. A elemeik bármilyen adattípusuak lehetnek!


    // B.) Egymásba illesztett tömbök. - A tömbjeinken belülre helyezhetünk több másik tömböt is.
        var masodikTomb = [["Zsuzsi", 27], ["Roland", 56], ["András", 27]]; // A fő tömbbön belüli tömböket is ,-vel választjuk el, mint a bennük szereplő adatokat.
        

    // C.) Hozzáférés tömbök adataihoz indexekkel - A tömbjeinkbe rejtett adatokat indexekkel érhetjük el!
        var harmadikTomb = [50, 60, 70];
        var harmadikTombAdat = harmadikTomb[0]; // A tömbünk, 0. indexű (azaz első) elemét akartuk meghatározni, tehát kiíratva: 50.
        

    // D.) Tömbünk adatainak módosítása indexxel - Ellentétben a stringekkel az indexekkel módosíthatjuk a tömbünk adatait is!
        var negyedikTomb = [14, 500, 345, 67];
        negyedikTomb[3] = 99; // a tömbünk 3. indexű (azaz 4.) elemét módosítottuk 99-re, így a tömbünk most így néz ki: [14, 500, 345, 99]
        

    // E.) Hozzáférés összetett tömbök adataihoz indexekkel - A tömbökön belüli tömbök adataihoz is hozzá tudunk férni az indexekkel! 
        var otodikTomb = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]]; // Egy háromrétegű tömb
        var otodikElsoTombAdat = [0][0]; // Ez a fő tömb 0. indexű (azaz első) elemének -> [1,2,3], a 0. indexű (azaz első) elemét, vagyis az "1"-et fogja meghatározni!
        /*Találjuk meg meg a 8-as számot! A fő tömb 2 indexű (azaz 3.) elemének 1 indexű (azaz 2.) elemét keressük, tehát: */ var otodikTombMasodikAdat = [2][1]; // = 8


    // F.) Tömbök manipulálása a push() funkcióval - A push() funkcióval hozzáadhatunk tömbjeinkhez adatot, illetve más tömböket is. Mivel a push() egy funkció így a feltöltendő elemeket mindig a () közé kell írnunk!
        var hatodikTomb = ["John", 24, "kutya"];
        hatodikTomb.push(56); // Tömbünkhöz hozzáadtuk az "56"-ot. Így a tömbünk így néz ki: ["John", 24, "kutya", 56]
        hatodikTomb.push(["cica", 3]); // Tömbünkhöz most hozzáadtunk egy másik tömböt. Íme: ["John", 24, "kutya", 56, ["cica", 3]]


    // G.) Tömbök manipulálása a pop() funkcióval - A pop() funkcióval eltávolíthatjuk a tömbünk UTOLSÓ elemét.
        var hetedikTomb = [1, 2, 3];
        var eltavolitottUtolsoAdat = hetedikTomb.pop(); // Az eltávolított adatunkat a eltavolitottUtolsoAdat változóba tároljuk a láthatóságért. Így az eltavolitottUtolsoAdat = 3, míg a hetedikTomb = [1,2]!


    // H.) Tömbök manipulálása a shift() funkcióval - A shift() funkcióval eltávolíthatjuk a tömbünk ELSŐ elemét.
        var nyolcadikTomb = ["Gyula", 25, ["cica"]];
        var eltavolitottElsoAdat = nyolcadikTomb.shift(); // eltavolitottElsoAdat = "Gyula" , míg a nyolcadikTomb = [25, ["cica"]]
        

    // I.) Tömbök manipulálása az unshift() funkcióval - Az unshift() funkció hasonlít a push() funkcióhoz, csak itt a tömb elejére és nem a végére illesztjük be az adatot
        var kilencedikTomb = ["Imre", 40, "kutya", "ház"];
        kilencedikTomb.unshift("Boldogság"); // A klinecedikTomb most így néz ki: ["Boldogság", "Imre", 40, "kutya", "ház"]
        
    


// 6.) Funkciók (Függvények)


    // A funkciók komplett részfeladatokat láthatnak el, és lehetővé teszik, hogy többször is felhasználhassunk bizonyos kódjainkat.
    // A funkciók alapszintaxisa a következő: / function funkcioNeve () { kód helye }; /
    // A funkciónk meghívásának módja: funkcioNeve();
    // FONTOS! Ha egy változót egy funkción belül hoztunk létre, akkor az a változó CSAK a funkción belül fog létezni, így a funkciónk kívül nem tudunk vele dolgozni!


    // A.) Egy egyszerű funkció létrehozása, mely kiíratja a konzolba, hogy Hello világ!
        function elsoFunction() {
            console.log("Hello világ!")
        };
        
        elsoFunction(); // Funkciónk meghívása, azaz lefuttatása
        

    // B.) Értékek átadása funkcióink részére paraméterekkel - funkciónk neve mögötti ()-be kerühetnek a paraméterek. Ezek azok az információk melyekkel a funkció dolgozni fog.
        function parameteresFunkcio(a, b) { //Előre megadjuk, hogy paramétereink most "a" és a "b" lesznek (bármilyen név adható), melyek meghíváskor szabadon behelyettesíthetőek valamilyen értékkel
            console.log(a - b);             //A funkciónk futtatandó kód részében elvégeztetjük ezt az egyszerű kivonást a két kezelendő paraméteren.
        };

        parameteresFunkcio(10, 5);          // Meghívjuk a funkciónkat 10 és 5 paraméterekkel (a=10, b=5). Lefut a kód és megkapjuk az eredményt, mely kiíratva: 5
        

    // C.) Global és Local változók 
        var ruha = "Póló"; // Létrehoztunk egy ruha változót Póló értékkel. Mivel ez a funkción kívül van, egy /Global/ változó, kódunkban bárhol elérhető, kezelhető.

        function viselet() { //Létrehozunk egy funkciót
            var ruha = "Nadrág"; //Melyben deklarálunk egy változót szintén ruha névvel. Mivel ez egy funkción belül van, így /Local/ csak itt elérhető, de itt felülírja a /Globalt/!
            console.log(ruha) //A funkcióban kiíratjuk a ruha változót.
        };
        console.log(ruha); // Ebben az esetben a /Global/ változót íratjuk ki tehát amit látni fogunk a konzolban: Póló
        viselet(); // Ebben az esetben lefuttatjuk a funkciónkat, ami kiíratja a benne található /Local/ változót, tehát amit látni fogunk a konzolban: Nadrág
        

    // D.) Visszatérés egy értékkel a funkciónkból a "Return" paranccsal 
        function pluszKetto(szam) {  // Létrehozzuk a pluszKetto funkciónkat, mely a "szam" paramétert fogja kezelni.
            return szam + 2;         // A függvényünk feladata, hogy hozzáadjon 2-t a kapott "szam" paraméterhez, és visszatérjen vele.
        }
        console.log(pluszKetto(2));  // Meghívjuk függvényünket, melyben a "szam" paraméter most 2. Így a függvény lefutás után a "4" értékkel fog "visszatérni".
        

    // E.) Az "undefined" visszatérési érték funkcióknál - 
        //Ha nem deklaráljuk a visszatérés kérését (return), akkor a funkciónk "undefined" értékkel fog visszatérni!
        var osszeg = 0;
        function pluszHarom() {
            osszeg += 3;        // Mivel nem kérünk visszatérést,
        };
        pluszHarom();           // a függvény meghívásakor "undefined" értéket fogunk kapni.
        

    // G.) Hozzárendelés visszatérési értékkel - A függvényt magát hozzárendelhetjük egy változóhoz, így a függvény lefutásával a visszatérési értéket ebben a változóban fogjuk tárolni!
        let changed = 0;
        function change(num) {
            return (num + 5) / 3;
        }

        changed = change(5);
    

    // H.) Stand in line - A számítógép sorrendben tárolja az adatokat. A sorrend végéhez hozzáadhatunk adatokat, vagy elis vehetünk az elejéről.
        function nextInLine(arr, item) {  // A nextInLine funkciónak átadjuk a testArr tömböt, és az elemet, amit hozzá szeretnénk adni a sor végéhez
            arr.push(item); //a push metódussal elvégezzük a hozzáadást
            return arr.shift; // Majd a funkció a shift-tel eltávolítja az első elemet, és az lesz a visszatérési értékünk.
        }

        let testArr = [1, 2, 3, 4, 5]; 

        console.log("Before: " + JSON.stringify(testArr)); // A JSON.stringify stringgé alakítja a "testArr" tömb elemeit, és kiíratjuk azt. [1,2,3,4,5]
        console.log(nextInLine(testArr, 6));  // Meghívjuk a megírt funkciót a "testArr" tömbre, és megadjuk a 6-ot mint értéket amit hozzá szeretnénk adni. A funkció visszatérési értéke az egy lesz, hiszen a shiftet adtuk meg return értéknek
        console.log("After: " + JSON.stringify(testArr)); // A függvény lefutása után ismét kiíratjuk a stringgé alakított tömbónket, mely így már a következő lesz: [2,3,4,5,6]




    // 7.) Vezérlési szerkezetek és összehasonlítás operátorokkal

        
        //A.) Boolean adatípus - True vagy false értéket vehet fel. Igen/nem kapcsoló gyakrolatilag. Nem használunk idézőjelet! 
            function ezEgyFalseBoolean() {
                return false; //false, azaz hamis értékkel tér vissza
            }

            function ezEgyTrueBoolean() {
                return true; // true, azaz igaz értékkel tér vissza
            }
                
            
        // B.) Kondicionális logika If statementtel - Az If statmentet döntéshozásra használhatjuk a kódunkban
            function trueOrFalse(isItTrue) { 
                if (isItTrue) {  // Ha a zárójelen belüli változó true, vagyis igaz értéket vesz fel
                    return "Yes, it is true!"; // Akkor a kapcsos zárójelen belüli kódunk fog lefutni, vagyis kiírja, hogy "igen, ez igaz"!
                }
                return "No, it's false!"; //Minden más esetben, vagyis itt, ha a zárójelen belüli értékét false, vagyis hamis értéket vesz fel, akkor a kapcsos zárójelen kívüli kód fog lefutni, és kiírja, hogy "nem, nem igaz!"
            }
                
            
        // C.) Összehasonlítás az "Equal (=)" operátorral - FONTOS! = érték hozárendelés, == érték egyenlőség, === érték ÉS típus egyenlőség
            function testEqual(val) { // a "testEqual" függvény kap egy "val" nevű változót, amivel dolgozik
                if (val == 12) {  //Amennyiben a "val" egyenlő 12-vel
                    return "Yes it's equal!"; // A függvény kiírja, az "Igen, egyenlő" stringet.
                }
                return "No, it's not equal!"; // Minden más esetben a "Nem, nem egyenlő" stringet fogja kiírni.
                }
            console.log(testEqual(10)); // A függvényünk a 12 number típusú változót kapta, ami nem egyenlő 10-zel, így a "No, it's not equal!" string kerül kiíratásra


        // D.) Összehasonlítás "Strict (===)"" egyenlőség operátorral
            function testStrict(val) { // A "testStrict" függvényünk kap egy "val" néven deklarált adatot, amivel dolgozhat
                if (val === 12 ) {  //Ha, a deklarált adat értéke ÉS típusa is megegyezik 12-vel, vagyis 12 ÉS Number típusú
                    return "Equal"; //Akkor, és csak akkor tér vissza az "Equal" stringgel.
                }
                return "Not equal"; //Minden más esetben "Not equal" stringgel fog visszatérni
            }
            console.log(testStrict(12)); //Visszatérési érték: "Equal". Miért? Mert 12 ÉS Number típus
            console.log(testStrict("12")); //Visszatérési érték: "Not equal". Miért? Mert ugyan a JS számmá konvertálta és az értéke 12, de konvertálni kellett, hiszen eredeti típusa: String!
            

        // E.) Összehansolítás a "Not equal (!=)" operátorral - érték összehasonlítás tagadó operátorral
            function testNotEqual(val) {
                if (val != 12) { 
                    return "Not equal"; 
                }
                return "Equal"; 
            }
            console.log(testNotEqual(11)); 


        // F.) Összehasonlítás a "Strict not equal (!==)" operátorral - Típus ÉS érték összehasonlítás tagadó operátorral
            function strictNotEqual(val) {
                if (val !== 12) {
                    return "Strictly not equal";
                }
                return "Equal";
            }
                        
            console.log(strictNotEqual('12'));
            console.log(strictNotEqual(12));
            

        // G.) Összehasonlítás logikai "Nagyobb" operátorral 
            function testGreaterThan(val) { 
                if (val > 100) {
                    return "Over 100";
                }
            
                if (val > 10) {
                    return "Over 10";
                }
            
                    return "10 or under";
            }

            console.log(testGreaterThan(10));


        // H.) Összehasonlítás "Nagyobb vagy egyenlő" operátorral 
            function testGreaterOrEq(val) {
                if (val >= 20) {
                    return "20, or over ";
                }

                if (val >= 10) {
                    return "10, or over";
                }
            
                return "Less than 10";
            }
                    
            console.log(testGreaterOrEq(15));
            

        // I.) Összehasonlítás "Kisebb vagy egyenlü" operátorral 
            function testLessOrEq(val) {
                if (val <= 20) {
                    return "20, or less";
                }

                if (val <= 10) {
                    return "10, or less";
                }
            
                return "Less than 10";
            }
            console.log(testLessOrEq(13));
            

        // J.) Összehasonlítás logikai "ÉS (&&)" operátorral
            function testLogicalAnd(val) {
                if (val <= 50 && val >= 25) {
                    return "Yes";
                }
                return "No";
            }
            console.log(testLogicalAnd(40));
            console.log(testLogicalAnd(9));


        // K.) Összehasonlítás logikai "Vagy (||)" operátorral
            function testLogicalOr(val) {
                if (val < 10 || val > 20) {
                    return "Outside";
                }
                return "Inside";
            } 
            console.log(testLogicalOr(13));
            console.log(testLogicalOr(34));
            

        // L.) Else statementek - Ha megvalósul az "If" állítása, úgy az "If" - en belüli kód fut le, minden más esetben az "else" -en belüli fut le.
            function testElseStatement(val) {
                if (val > 5) {
                    return "Bigger";
                } else {
                    return "5 or smaller";
                            }
            }
            console.log(testElseStatement(34));
            console.log(testElseStatement(4));
            

        // M.) "Else if" statementek - Több "if" statment helyes használata
            function testElseIf(val) {
                if (val < 5) {  //Ha kisebb, mint 5 
                    return "Smaller than 5";
                } else if (val > 10) { //Vagy nagyobb mint 10
                    return "Bigger than 10";
                } else { //Minden más esetben pedig... FONTOS: else if használatakor minden esetben kell egy végső "else" eset.
                    return "Between 5 and 10";
                            }
            }
            console.log(testElseIf(2));
            console.log(testElseIf(12));
            console.log(testElseIf(6));
            
            //Ezekben az "else if-es" elágazásos esetekben nagyon fontos a sorrend- Ha az első "if" eset teljesül a program kilép, és a többi feltételes esetet már le sem futtatja!
                // Golf játék kód "elseif" gyakorlásra: 
                    let names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double bogey", "Go home"]
                    function golfScore(par, strokes) {
                        if (strokes == 1) {
                            return names[0];
                        } else if (strokes <= par - 2) {
                            return names[1];
                        } else if (strokes == par - 1) {
                            return names[2];
                        } else if (strokes == par) {
                            return names[3];
                        } else if (strokes == par + 1) {
                            return names[4];
                        } else if (strokes == par + 2) {
                            return names[5];
                        } else if (strokes >= par + 3) {
                            return names[6];
                        }

                    } 
                    console.log(golfScore(3, 6));
                    console.log(golfScore(3, 2));
                    console.log(golfScore(7, 3));


        // N.) Switch statement - az else if helyett használható eseti elágazás:
            function caseInSwitch(val) {
                let answer = "";
                switch (val) {
                    case 1:     // case és a konkrét érték amit vizsgálok. A switch case-jei (===) operátorként működnek, tehát értéket ÉS típust is vizsgál.
                        answer = "alpha"; // mi történjen ha az eset teljesül
                        break;      // és break, hogy a program kilépjen az eset teljesülése után, másképp lefutna az összes többi eset is amit nem szeretnénk
                    case 2:
                        answer = "beta";
                        break;
                    case 3:
                        answer = "gamma";
                        break;
                    case 4:
                        answer = "delta";
                        break;
                    default:         // a "default" eset az "else" statementnek felel meg, vagyis minden olyan esetnek amit nem definiáltunk "case"-szel.
                        answer = "else";
                        break;

                }
                return answer;      //végül a függvényünk térjen vissza a teljesült esettel.
            }
            console.log(caseInSwitch(2));
            console.log(caseInSwitch(3));
            console.log(caseInSwitch("kecske"));

            //N.1.) Több switch eset egyszerre kezelése:
                function sequentialSizes(val) {
                    let answer = "";
                    switch (val) {
                        case 1:
                        case 2:
                        case 3:
                            answer = "low";
                            break;
                        case 4:
                        case 5:
                        case 6:
                            answer = "mid";
                            break;
                        case 7:
                        case 8:
                        case 9:
                            answer = "high";
                            break;
                    }
                    return answer;
                } 
                console.log(sequentialSizes(3));
                console.log(sequentialSizes(6));
                console.log(sequentialSizes(7));
                console.log(sequentialSizes(9));
                

        // O.) Boolean értékek kinyerése function-okból 
            function isLess(a, b) {
                /*if (a < b) {
                    return true;
                } else {
                    return false;
                }
                A fenti if statment-es megoldás helyett az egyszerűsítés jegyében kiírhatjuk így is:*/
                return a < b;
            }
            console.log(isLess(5, 10));
            console.log(isLess(10, 5));
            

        // P.) Korai érték kinyerés a "function"-ból
            function abTest(a, b) {
                if (a < 0 || b < 0) { // Ha az "if" statmentre érvényes feltételnek megfelelnek a kapott adatok, akkor hamarabb kilép és nem folytatja a function további feladatait
                    return undefined; 
                }

                return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2)); //Ha az "if" statmentben lefektetett feltételeknek nem felel meg a kapott adat, úgy lefuttatja az itt írt kódot
            }
            console.log(abTest(2, 2));
            console.log(abTest(-2, 3));
            console.log(abTest(3, -2));
            

    

    // 8.) Objektumok
            
            
            // Az objektumok hasonlóak a tömbökhöz, ám indexek helyett itt property-ken keresztül érhetjük el az adatainkat
            // {} közé kerülnek az objektum elemei, és , -vel választjuk el őket
            // "property" : value 
            // A value lehet string, number, akár tömbök is, vagyis minden JavaScript adattípus
            
            let kutya = {
                "name": "Kira",
                "legs": 4,
                "tails": 1,
                "friends": ["everything"]
            };
        

        // A.) Hozzáférés az Object-ek Property-jéhez a "." módszerrel
            let testObj = {
                "sapka": "baseball",
                "felso": "póló",
                "cipo": "sport"
            };

            let sapkaValue = testObj.sapka;
            let cipoValue = testObj.cipo;
            console.log(sapkaValue);
            console.log(cipoValue);
            

        // B.) Hozzáférés az Object-ek Property-jéhez a "[]" módszerrel - Bármikor használható, de ha a property-ben "szóköz" van akkor KÖTELEZŐ
            let testObjKetto = {
                "egy foetel": "hamburger",
                "a koret": "zoldseg",
                "az ital": "cola"
            };

            let foetelValue = testObjKetto["egy foetel"];
            let italValue = testObjKetto['az ital'];
            console.log(foetelValue);
            console.log(italValue);


        // C.) Hozzáférés az Object-ek Property-jéhez változókkal
            let testObjHarom = {
                7: "Ronaldo",
                10: "Messi",
                1: "Allison"
            };

            let playerNumber = 10;
            let player = testObjHarom[playerNumber];
            console.log(player);
            

        // D.) Objektum Property-jeinek módosítása "." módszerrel 
            let resztvevo = {
                "nev": "Janos",
                "kor": 20,
                "tanfolyam": "Front-end",
            };

            resztvevo.tanfolyam = "Back-end";
            console.log(resztvevo.tanfolyam);
            

        // E.) Property hozzáadása egy Objektumhoz "." és "[]" módszerekkel
            //E.1.)
                let kutyam = {
                    "nev": "Kira",
                    "fajta": "Keverék",
                    "kor": 9
                };
                
                console.log(kutyam);
                kutyam.suly = 22;
                console.log(kutyam);
            //E.2.)
                let auto = {
                    "márka": "Mitsubishi",
                    "cm3": 1600,
                    "szín": "kék"
                };
                
                console.log(auto);
                auto['kor'] = 16;
                console.log(auto);


        // F.) Property-k törlése az objektumból
            let jatekos = {
                "neve": "Minta Péter",
                "mezszam": 10,
                "eletkora": 20,
                "magassag": 180
            };

            console.log(jatekos);
            delete jatekos.magassag;
            console.log(jatekos);


        // G.) Objektum használata keresésre - Az objektumok adattárolási tulajdonságait akár if/switch esetek helyett is használhatjuk keresési célra
            function objLookup(val) {
                let result = "";
                let lookup = {
                    "alpha": "Adams",
                    "bravo": "Boston",
                    "charlie": "Chicago",
                    "delta": "Denver"
                };
            
                result = lookup[val];
                return result;
            };

            console.log(objLookup("alpha"));
            console.log(objLookup("delta"));


        // H.) Property létezésének ellenőrzése, és értékének kiíratása
            let lakas = {
                "konyha": 15,
                "haloszoba": 20,
                "eloszoba": 7
            };

            function objEllenorzo(keresendoProp) {
                if (lakas.hasOwnProperty(keresendoProp)) { //a hasOwnProperty beépített függvény fogja ellenőrizni a ()-be írt keresett value jelenlétét az objektum property-jei között
                    return lakas[keresendoProp];
                } else {
                    return "Not found";
                }
            };

            console.log(objEllenorzo("gyerekszoba"));
            console.log(objEllenorzo("konyha"));
            

        // I.) Komplex objektumok manipulálása
            let myMusic = [
                {
                    "artist": "Billy Joel",
                    "title": "Piano Man",
                    "release_year": 1973,
                    "formats": [
                        "CD",
                        "8T",
                        "LP"
                    ],
                    "gold": true
                },
                {
                    "artist": "Beau Charles",
                    "title": "Cereal Man",
                    "release_year": 2003,
                    "formats": [
                        "YouTube Video"
                    ]
                }
            ];
            

        // J.) Hozzáférés többrétegű objektumok elemeihez
            let tarolo = {
                "auto": {
                    "belter": {
                        "kesztyu tarto": "zsebkendo",
                        "utasUles": "cigi"
                    },
                    "kulter": {
                        "csomagtarto": "takaro"
                    }
                }
            };

            let belterTartalom = tarolo.auto.belter;
            console.log(belterTartalom);
            let kesztyuTartoTartalom = tarolo.auto.belter["kesztyu tarto"];
            console.log(kesztyuTartoTartalom);
            

        // K.) Hozzáférés többrétű Tömbök elemeihez
            let myPlants = [
                {
                    type: "flowers",
                    list: [
                        "rose",
                        "tulip",
                        "dandelion"
                    ]
                },
                {
                    type: "trees",
                    list: [
                        "fir",
                        "pine",
                        "birch"
                    ]
                }
            ];
            
            let secondTree = myPlants[1].list[1];
            console.log(secondTree);
            



    // 9.) Iterálások ciklusokkal

    
            // A ciklusokkal ugyanazt a kódot lefutatthatjuk egymás után többször is.

        // A.) Iterálás While ciklussal
            let whileArray = [];
            let i = 0;
            while (i < 5) {
                whileArray.push(i);
                i++;
            }

            console.log(whileArray);
            

        // B.) Iterálás for ciklussal
            let forArray = [];

            for (let i = 0; i < 5; i++){
                forArray.push(i);
            };
            console.log(forArray);
            
            //B.)1.) - Páratlan számok iterálása for ciklussal
                let parosFor = [];

                for (let i = 0; i < 20; i += 2) {
                    parosFor.push(i);
                }
                console.log(parosFor);
                
            //B.)2.) - Visszaszámlálás For ciklussal
                let visszaFor = [];
                            
                for (let i = 20; i > 0; i -= 2) {
                    visszaFor.push(i);
                }
                console.log(visszaFor);
                

        // C.) Végigiterálás egy tömbön For ciklussal
            let tombonForral = [2, 3, 4, 5, 6, 8, 9, 3, 12];
            let tombonForralOsszeg = 0;
                        
            for (let i = 0; i < tombonForral.length; i++){
                tombonForralOsszeg += tombonForral[i];
            }
            
            console.log(tombonForralOsszeg);