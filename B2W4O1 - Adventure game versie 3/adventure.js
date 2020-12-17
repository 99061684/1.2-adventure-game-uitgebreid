//https://brainly.in/question/1096434 answer crack_the_code.jpg (0-4-2)
//https://forum.cfx.re/t/standalone-datacrack-hacking-mini-game/1066972 
//http://jsfiddle.net/nEjL4/1/ 
//https://www.youtube.com/watch?v=hmE1pFma0dQ how to make a speech Recognition with javascript video. 
//https://thedarkpiano.com/dark-ambient-music some downloadable horror music
//https://www.y2mate.com/youtube/Z6ylGHfLrdI Download Video and Audio from YouTube

const game_container = document.getElementById('game-container');
const title = document.getElementById('title');
const description = document.getElementById('description');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const inventoryItem = document.getElementById('inventoryItem');
const item1 = document.getElementById('item1');

var waiting_time = document.getElementById('waiting_time');

var check_timer_element = document.getElementById('check_timer');
var span1 = document.getElementById('span1');

var game_time_number = document.getElementById('game_time_number');
var span2 = document.getElementById('span2');

var check_audio_element = document.getElementById('check_audio');
var audio_element = document.getElementById('audio');
var span3 = document.getElementById('span3');

var span4 = document.getElementById("span4");

var div_1 = document.getElementById("div_1");
var div_2 = document.getElementById("div_2");
var div_3 = document.getElementById("div_3");
var div_4 = document.getElementById("div_4");

var oppakken = {rooster:false, kaart:false, knipschaar:false, sleutel:false, code_kraken:false, camera:true};
var button_titels = {button1:"", button2:"", button3:""};
var level_onclick = {button1:"", button2:"", button3:""};
var time = 3;

//gamer timer
var game = false;
var timer_seconds = 60;
var seconds = timer_seconds;
var countdownTimer;
var check_timer = true;
var check_audio = true;

const id_select = "music_select";
const volume_slider_id = "volume_slider";

// button1.onclick = function() {change_img(2)};
// button2.onclick = function() {change_img(2)};
// button3.onclick = function() {change_img(3)};

//padding: 25px 50px 75px 100px;
    //  top padding is 25px
    //  right padding is 50px
    //  bottom padding is 75px
    //  left padding is 100px  

// inventoryItem.src = "images/crack_the_code.jpg";

//start de game
start();
console_title_onchange();

// ------- te doen. ------
//  controleren pagina's

//  ----- extra ------
//  minigame toevoegen. 


//de game start en Instructies 

function start() { //de start pagina 
    title.innerHTML = '';
    description.innerHTML = '';
    game = true;

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/escape_the_bunker.png")';

    title.style.fontFamily = "myFirstFont1, sans-serif";

    //buttons
    button_titels["button1"] = "start";
    level_onclick["button1"] = "begin_verhaal()";

    button_titels["button2"] = "Instructies";
    level_onclick["button2"] = "Instructies()";

    button_titels["button3"] = "options";
    level_onclick["button3"] = "options()";

    buttons(4, button_titels, level_onclick);    
}

function Instructies() { //de instructies pagina 
    title.innerHTML = 'Instructies game';
    description.innerHTML = "In de game krijg je meerdere keuzes door op de button te klikken ga je naar een andere pagina. In sommige pagina's kan je spullen oppakken door erop te klikken. Deze spullen kan je gebruiken in de game om nieuwe keuzes vrij te spelen of voor bijv. betere navigatie.";

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'none';
    delete_elements();

    //buttons
    button_titels["button1"] = "start";
    level_onclick["button1"] = "begin_verhaal()";

    button_titels["button2"] = "options";
    level_onclick["button2"] = "options()";

    buttons(5, button_titels, level_onclick);
}

function options() { //de options pagina 
    title.innerHTML = 'Options game';
    description.innerHTML = "Hier kan je alle speciale opties voor de game veranderen, zoals het aantal seconden waarop de game timer word gezet. Ook kan je muziek aanzetten door het een liedje te selecteren en audio aan te zetten.";

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'none';
    create_menu();

    //buttons
    button_titels["button1"] = "start";
    level_onclick["button1"] = "begin_verhaal()";

    button_titels["button2"] = "Instructies";
    level_onclick["button2"] = "Instructies()";

    buttons(5, button_titels, level_onclick);
}

//de pagina keuzes/locaties

function begin_verhaal() { //kerker cel
    title.innerHTML = 'Begin Verhaal';
    description.innerHTML = 'Je zit gevangen in een ondergrondse kamer. Het laatste wat je je herinnerd is dat een vrouw je bewusteloos had geslagen en in een busje had gegooid. Toen je wakker begon te worden hoorde je nog net dat de vrouw zei dat ze je hier ging achterlaten in deze kamer voordat ze weg ging en de deur sloot.';
    game_container.style.color = "white";

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/kerker_donker.jpg")';
    delete_elements();

    oppakken = {rooster:false, kaart:false, knipschaar:false, sleutel:false, camera:true};
    game = true;

    //start timer
    if (check_timer == true) {
        console.log(check_timer);
        clearInterval(countdownTimer);
        seconds = timer_seconds;
        countdownTimer = setInterval(GameTimer, 1000); 
    }

    //buttons
    button_titels["button1"] = "Om hulp roepen!";
    level_onclick["button1"] = "keuze_2()";

    button_titels["button2"] = "De kamer inspecteren";
    level_onclick["button2"] = "keuze_3()";

    buttons(5, button_titels, level_onclick);
}

function keuze_2() { //kerker cel
    title.innerHTML = 'Om hulp roepen!';
    description.innerHTML = 'je begint met roepen om hulp, maar niemand hoord je…';

    inventoryItem.style.display = "none";

    //buttons
    button_titels["button1"] = "start";
    level_onclick["button1"] = "begin_verhaal()";

    buttons(1, button_titels, level_onclick);
}

function keuze_3() { //kerker cel
    title.innerHTML = 'De kamer inspecteren';
    description.innerHTML = 'je ziet een dichte traliedeur en een tralierooster in het dak je probeerd de deur eerst, hij zit op slot… je gaat naar het tralierooster in het dak. Je ziet dat het omogelijk is om er door heen te klimmen om dat er een lange tunnel naar boven is van waarschijnlijk meer dan 7 meter. Het rooster in het dak kan je wel aanraken, je voelt dat deze los zit.';

    inventoryItem.style.display = "block";
    inventoryItem.src = "images/rooster_kerker_donker_zonder_background.png";

    //oppakken check
    inventoryItem.onclick = function (){
        oppakken["rooster"] = true;
        keuze_3(); 
    };

    if (oppakken["rooster"] == true) {
        button1.style.display = "inline-block";
    } else {
        button1.style.display = "none"; 
    }    

    //button 1
    button1.innerHTML = 'Los rooster';
    button1.onclick = function() {keuze_4()};

    //button 2
    button2.style.display = "none"; 

    //button 3
    button3.style.display = "none"; 
}

function keuze_4() { //kerker cel
    title.innerHTML = 'Rooster weg';
    description.innerHTML = 'het lukt om het rooster los te krijgen en trekt het rooster uit het dak. Waneer deze op de grond ligt trek je een stang uit het rooster, waardoor je een losse stang krijgt.';

    inventoryItem.style.display = "none";

    //buttons
    button_titels["button1"] = "met de stang de deur open proberen te krijgen";
    level_onclick["button1"] = "keuze_5()";

    button_titels["button2"] = "Door het gat in het dak klimmen";
    level_onclick["button2"] = "einde_1()";

    buttons(5, button_titels, level_onclick);
}

function keuze_5() { //de gang
    title.innerHTML = 'gang';
    description.innerHTML = 'het lukt om de stang tussen de traliedeur en de muur te zetten en breekt de deur open. Je loopt door een gang en ziet 3 deuren. ';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/bunker_gang.jpg")';

    title.style.fontFamily = "myFirstFont5, sans-serif";

    //oppakken check
    if (oppakken["kaart"] == true) {
        description.innerHTML = 'Je loopt door een gang en ziet 3 deuren. ';
        button_titels["button1"] = 'kamer 1, eet/slaapkamer';
        button_titels["button2"] = 'kamer 2, gereedschapkamer';
        button_titels["button3"] = 'kamer 3, gevangenis';
    } else {
        button_titels["button1"] = 'kamer 1';
        button_titels["button2"] = 'kamer 2';
        button_titels["button3"] = 'kamer 3';
    }

    if (oppakken["camera"] == true) {
        level_onclick["button3"] = "einde_2()";
    } else {
        level_onclick["button3"] = "keuze_8()";
    }

    //buttons
    level_onclick["button1"] = "keuze_6()";
    level_onclick["button2"] = "keuze_7()";

    buttons(4, button_titels, level_onclick);
}

function keuze_6() { //kamer 1, eet/slaapkamer
    description.innerHTML = 'je zit in een soort slaap en eet ruimte waar vroeger waarschijnlijk soldaten hebben gewoond en nu bewoond is door de vrouw die je heeft ontvoerd. Je kan de kamer doorzoeken op nuttige spullen, maar waarschijnlijk is er niet veel te vinden.';

    inventoryItem.style.display = "block";
    inventoryItem.src = "images/oorlogskaart.jpg";
    game_container.style.backgroundImage = 'url("images/bunker_kamer.jpg")';

    //oppakken check
    inventoryItem.onclick = function(){
        oppakken["kaart"] = true;
        new_window_image(1);
        inventoryItem.style.width = "initial";
        inventoryItem.style.height = "initial";
        keuze_6();  
    };

    if (oppakken["kaart"] == true) {
        title.innerHTML = 'kamer 1, eet/slaapkamer';
    } else {
        title.innerHTML = 'kamer 1';
    }

    //buttons
    button_titels["button1"] = "terug naar de gang";
    level_onclick["button1"] = "keuze_5()";

    buttons(1, button_titels, level_onclick);
}

function keuze_7() { //kamer 2, gereedschapkamer
    description.innerHTML = 'je zit in een ruimte vol met gereedschap en een radio. Ook zie je dat er een trap is naar boven. Je probeert de radio, maar deze is kapot. Het meeste gereedschap is niet echt bruikbaar, maar misschien ligt er nog iets nuttigs bij. Je kan de kamer doorzoeken op nuttige spullen.';

    inventoryItem.src = "images/schaar_zonder_achtergrond_klein.png";
    inventoryItem.style.display = "block";
    game_container.style.backgroundImage = 'url("images/bunker_kamer_gereedschap.jpg")';
    
    //oppakken check
    if (oppakken["kaart"] == true) {
        title.innerHTML = 'kamer 2, gereedschapkamer';
        button_titels["button2"] = 'trap omhoog naar de machinekamer';
    } else {
        title.innerHTML = 'kamer 2';
        button_titels["button2"] = 'trap omhoog';
    }

    inventoryItem.onclick = function (){
        oppakken["knipschaar"] = true;
        keuze_7();
    };

    if (oppakken["knipschaar"] == true) {
        inventoryItem.style.display = "none";
    } else {
        inventoryItem.style.display = "block";
    }

    //buttons
    button_titels["button1"] = "terug naar de gang";
    level_onclick["button1"] = "keuze_5()";

    level_onclick["button2"] = "keuze_9()";

    buttons(5, button_titels, level_onclick);
}

function keuze_8() { //kamer 3, gevangenis (met camera uit)
    description.innerHTML = 'Je gaat de kamer in en kijkt om je heen. De kamer ziet eruit als een gevangenis, er staan cellen aan beiden kanten van de kamer. Je loopt rond in de kamer als je een camera aan de muur ziet, hij staat uit. Snel ren je de gevangenis door naar het eind van de kamer. Je ziet een deur die je opent. Zie je een kamer met een bunker deur zoals bij een onderzeeër en een deur in de zijkant van de kamer';

    game_container.style.backgroundImage = 'url("images/gevangenis_met_cellen.jpg")';   
    
    //oppakken check
    if (oppakken["kaart"] == true) {
        title.innerHTML = 'kamer 3, gevangenis';
    } else {
        title.innerHTML = 'kamer 3';
    }

    //buttons
    button_titels["button1"] = "open de deur in de zijkant";
    level_onclick["button1"] = "einde_3()";

    button_titels["button2"] = "Open de bunker deur rechtdoor";
    level_onclick["button2"] = "Win_Einde_1()";

    buttons(5, button_titels, level_onclick);
}

function keuze_9() { //machinekamer (vanuit gereedschapkamer)
    title.innerHTML = 'machinekamer ingang';
    description.innerHTML = 'je komt in een grote ruimte met een aantal machines, in de machine kamer zijn 4 deuren: 1 links onderaan de trap en 1 links bovenaan de trap, 1 rechts en 1 in de muur met een bord uitgang erbij. Bovenaan de trap staat een elektriciteits kast.  ';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/machine_kamer_bunker.jpg")';   

    //buttons
    button_titels["button1"] = "Terug naar de gereedschapkamer";
    level_onclick["button1"] = "keuze_7()";

    button_titels["button2"] = "Naar links gaan";
    level_onclick["button2"] = "keuze_9_1()";

    button_titels["button3"] = "door de deur aan de rechterkant gaan";
    level_onclick["button3"] = "einde_3()";

    buttons(4, button_titels, level_onclick);
}

function keuze_9_1() { //machinekamer (links)
    title.innerHTML = 'machinekamer links';
    description.innerHTML = 'Er zijn 3 deuren links 2 op de begane grond, 1 daarvan heeft een bord met uitgang erbij. bovenaan de trap is ook een deur, waar ook een elektriciteits kast hangt.';

    game_container.style.backgroundImage = 'url("images/machine_kamer_bunker.jpg")';   

    //buttons
    button_titels["button1"] = "Terug gaan naar de ingang";
    level_onclick["button1"] = "keuze_9()";

    button_titels["button2"] = "De trap omhoog";
    level_onclick["button2"] = "keuze_9_3()";

    button_titels["button3"] = "De deuren beneden gaan bekijken";
    level_onclick["button3"] = "keuze_9_2()";

    buttons(4, button_titels, level_onclick);
}

function keuze_9_2() { //machinekamer (links begane grond)
    title.innerHTML = 'machinekamer links begane grond';
    description.innerHTML = 'Er zijn 2 deuren, 1 rechtvoor je en 1 aan de zijkant met een bord met uitgang erbij.';

    game_container.style.backgroundImage = 'url("images/machine_kamer_bunker.jpg")';   
    
    //oppakken check
    if (oppakken["camera"] == true) {
        level_onclick["button2"] = "einde_4()";
    } else {
        level_onclick["button2"] = "keuze_12()";
    }

    if (oppakken["sleutel"] == true) {
        level_onclick["button3"] = "Win_Einde_2()";
    } else {
        level_onclick["button3"] = "keuze_13()";
    }

    if (oppakken["kaart"] == true) {
        button_titels["button2"] = 'Door de deur naar de office';
    } else {
        button_titels["button2"] = 'Door de deur recht voor je';
    }

    //button 2 
    button2.style.display = "inline-block";

    //button 3
    button3.innerHTML = 'Door de deur met uitgang erbij';
    button3.style.display = "inline-block";

    //buttons
    button_titels["button1"] = "Terug gaan naar de ingang";
    level_onclick["button1"] = "keuze_9()";

    button_titels["button3"] = "Door de deur met uitgang erbij";

    buttons(4, button_titels, level_onclick);
}

function keuze_9_3() { //machinekamer (met knipschaar links trap omhoog)
    title.innerHTML = 'machinekamer links trap omhoog';

    game_container.style.backgroundImage = 'url("images/machine_kamer_bunker.jpg")';    
    
    //buttons
    button_titels["button1"] = "De trap omlaag";
    level_onclick["button1"] = "keuze_9_2()";

    button_titels["button3"] = "De deuren beneden gaan bekijken";
    level_onclick["button3"] = "keuze_12()";

    buttons(7, button_titels, level_onclick);

    //oppakken check
    if (oppakken["knipschaar"] == true) {
        description.innerHTML = 'Bovenaan de trap staat een elektriciteits kast, je kan deze niet openmaken. De draden die eruit lopen zou je misschien wel kunnen doorknippen met een knipschaar. Ook zou je de deur door kunnen gaan naast de elektriciteits kast. ';
        button2.style.display = "inline-block";
        button2.onclick = function() {
            oppakken["camera"] = false;
            alert("camera's zijn uitgeschakeld.");
        };
    } else {
        description.innerHTML = 'Bovenaan de trap staat een elektriciteits kast, je kan deze niet openmaken. De draden die eruit lopen zou je misschien wel kunnen doorknippen met een knipschaar, maar deze heb je helaas niet bij je. Ook zou je de deur door kunnen gaan naast de elektriciteits kast. ';
        button2.style.display = "none";
    }

    if (oppakken["kaart"] == true) {
        button_titels["button3"] = 'door de deur naar de locker room gaan';
    } else {
        button_titels["button3"] = 'door de deur naast de elektriciteits kast gaan';
    }

    //button 2 
    button2.innerHTML = 'draden doorknippen';

}

function keuze_11() { //office (met camera uit)
    title.innerHTML = 'office';
    description.innerHTML = 'Je gaat de kamer in en kijkt om je heen. De kamer ziet eruit als een office, er staat een computer en een kastje. Je loopt rond in de kamer om te kijken of je iets bruikbaars ziet als je een camera aan de muur ziet hangen… gelukkig staat het lampje uit wat betekent dat hij niet aan staat. je ademt opgelucht uit. Je ziet niks beruikbaars in de kamer. ';
    
    game_container.style.backgroundImage = 'url("images/office_prison.jpg")';    

    //buttons
    button_titels["button1"] = "Terug naar de machinekamer";
    level_onclick["button1"] = "keuze_9_2()";

    buttons(1, button_titels, level_onclick);
}
 
function keuze_12() { //locker room
    title.innerHTML = 'locker room';

    //buttons
    button_titels["button1"] = "Terug naar de machinekamer";
    level_onclick["button1"] = "keuze_9_2()";

    buttons(1, button_titels, level_onclick);
    
    //oppakken check
    if (oppakken["code_kraken"] == true) {
        //sleutel kan opgepakt worden
        description.innerHTML = '';
        inventoryItem.style.display = "inline-block";
        inventoryItem.src = "images/sleutel.jpg";

        inventoryItem.onclick = function (){
            oppakken["sleutel"] = true;
            inventoryItem.style.display = "none";
        };
        game_container.style.backgroundImage = 'url("images/leeg_open_kluisje.jpg")'; 

        button2.style.display = "none";
    } else {
        //kluis is dicht en sleutel kan niet opgepakt worden. wel kan code kraken worden gedaan. 

        //moet nog code schrijven.
        inventoryItem.style.display = "none";
        game_container.style.backgroundImage = 'url("images/kleine_kleedkamer.jpg")'; 
        description.innerHTML = 'Je kijkt om het muurtje bij de ingang de kamer in en ziet dat het een lockerroom is. Langs de muren staan kluisjes. Je voelt aan een aantal kleusjes of deze open kunnen, maar deze zitten allemaal op slot. Net voordat je weg wilt gaan zie je een brief hangen met een gecodeerde code en loopt ernaartoe.';  
        
        button2.style.display = "inline-block";
    }

    //button 2 
    button2.innerHTML = 'code kraken';
    button2.onclick = function() {code_kraken()};

    //button 3
    button3.style.display = "none";
}

function keuze_13() { //de bunker kluis deur (zonder sleutel)
    title.innerHTML = 'de bunker kluis deur uitgang';
    description.innerHTML = 'Je komt in een lange gang en loopt naar het einde, daar ga je een kamer in aan de zijkant. Voor je staat een gigantische kluis deur. Je probeert de deur te openen, maar deze zit op slot. Je bedenkt dat de sleutel waarschijnlijk ergens in de bunker ligt.';

    game_container.style.backgroundImage = 'url("images/kluisdeur.jpg")';  
    
    //buttons
    button_titels["button1"] = "Terug naar de machinekamer";
    level_onclick["button1"] = "keuze_9_2()";

    buttons(1, button_titels, level_onclick);
}

//de slechte eindes 

function einde_1() {
    title.innerHTML = 'naar boven klimmen door het dakrooster';
    description.innerHTML = 'Terwijl je probeert door het dak te klimmen lukt het om de eerste paar meters omhoog te komen door je armen en benen tegen de muren aan te zetten. Je ziet dat zodra je halverwege bent dat je al erg hoog zit doordat je achterom kijkt verlies je het grip van je arm en val je met je hoofd naarbeneden tegen de grond. De klap is hard genoeg om je te doden en je ziet dat het wit word voor je ogen.';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/game_over.png")';
    clearInterval(countdownTimer);

    //buttons
    button_titels["button1"] = "start";
    level_onclick["button1"] = "begin_verhaal()";

    buttons(1, button_titels, level_onclick);
}

function einde_2() {
    title.innerHTML = 'gevangenis camera';
    description.innerHTML = 'Je gaat de kamer in en kijkt om je heen. De kamer ziet eruit als een gevangenis, er staan cellen aan beiden kanten van de kamer. Je loopt rond in de kamer als je een raar geluid hoort… Je kijkt naar de plek waar het geluid vandaan komt en ziet dat een camera je aan het volgen is. Snel ren je de gevangenis door naar het eind van de kamer. Je ziet een deur die je opent. Aan de andere kant zie je de vrouw staan die je ontvoerd heeft met een masker op en een geweer in haar handen. Voordat je kan vluchten schiet de vrouw je dood….';
    game_container.style.color = "black";
    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/camera.png")';
    clearInterval(countdownTimer);

    //time out
    var timer = setTimeout(function(){  
        game_container.style.backgroundImage = 'url("images/game_over.png")';
        game_container.style.color = "white";
    }, 1500);

    //buton 1
    button1.innerHTML = 'start';
    button1.onclick = function() {
        clearTimeout(timer); 
        begin_verhaal();        
    };

    //buton 2
    button2.style.display = "none"; 
    //buton 3
    button3.style.display = "none"; 
}

function einde_3() {
    title.innerHTML = 'ontvoerder';
    description.innerHTML = 'Je opent de deur naar de kamer en kijkt om je heen. De kamer ziet eruit als een recreatiekamer en op de bank zit de vrouw die je ontvoerde met een masker op tv te kijken. Ze kijkt je aan en richt een geweer op jou. Voordat je kan vluchten schiet de vrouw je dood….';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/ontvoerder.png")';
    clearInterval(countdownTimer);

    //time out
    var timer = setTimeout(function(){  
        game_container.style.backgroundImage = 'url("images/game_over.png")';
    }, 1500);

    //buton 1
    button1.innerHTML = 'start';
    button1.onclick = function() {
        clearTimeout(timer);
        begin_verhaal();
    };
    
    //buton 2
    button2.style.display = "none"; 
    //buton 3
    button3.style.display = "none"; 
}

function einde_4() {
    title.innerHTML = 'ontvoerder';
    description.innerHTML = 'Je gaat de kamer in en kijkt om je heen. De kamer ziet eruit als een office, er staat een computer en een kastje. Je loopt rond in de kamer om te kijken of je iets bruikbaars ziet als je een camera aan de muur ziet hangen met het lampje aan… Je opent de deur van de kamer om weg te gaan en aan de andere kant zie je de vrouw staan die je ontvoerd heeft met een masker op en een geweer in haar handen. Voordat je kan vluchten schiet de vrouw je dood….';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/ontvoerder.png")';
    clearInterval(countdownTimer);

    var timer = setTimeout(function(){  
        game_container.style.backgroundImage = 'url("images/game_over.png")';
    }, 1500);

    //buton 1
    button1.innerHTML = 'start';
    button1.onclick = function() {
        clearTimeout(timer);
        begin_verhaal();
    };

    //buton 2
    button2.style.display = "none"; 
    //buton 3
    button3.style.display = "none"; 
}

function einde_5() { //out of time
    title.innerHTML = 'out of time';
    description.innerHTML = 'De vrouw die je heeft ontvoerd ziet dat je bent ontsnapt uit je kerker cel. De vrouw die je ontvoerde sluit alle uitgangen af en gaat naar je opzoek. Na een tijdje heeft ze je gevonden en staat voor je met een masker op en een geweer in haar handen. Voordat je kan vluchten schiet de vrouw je dood….';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/ontvoerder.png")';

    var timer = setTimeout(function(){  
        game_container.style.backgroundImage = 'url("images/game_over.png")';
    }, 1500);

    //buton 1
    button1.innerHTML = 'start';
    button1.onclick = function() {
        clearTimeout(timer);
        clearInterval(countdownTimer);
        seconds = timer_seconds;
        begin_verhaal();
    };

    //buton 2
    button2.style.display = "none"; 
    //buton 3
    button3.style.display = "none"; 
}

//de goede eindes 

function Win_Einde_1() {
    title.innerHTML = 'win einde 1, onsnapt';
    description.innerHTML = 'Je opent de deur en ziet dat deze uitkomt in een kleine kamer met een andere deur. Je loopt rechtdoor en opent de volgende deur. Deze komt buiten uit in een bos. Je rent snel door het bos weg en vind na stuk rennen een tankstation waar je om hulp vraagt. Zij bellen de politie en de politie brengt je thuis. De vrouw die je had ontvoerd werd een paar dagen later opgepakt door de politie.';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/metaaldeur_bunker.jpg")';
    clearInterval(countdownTimer);
    game = false;
    timer = false;

    //time out
    var timer = setTimeout(function(){  
        game_container.style.backgroundImage = 'url("images/verscholen_bunker.jpg")';
    }, 2000);

    button1.innerHTML = 'start';
    button1.onclick = function() {
        clearTimeout(timer);
        begin_verhaal();
    };

    button2.style.display = "none"; 
    button3.style.display = "none"; 
}

function Win_Einde_2() {
    title.innerHTML = 'win einde 2, onsnapt';
    description.innerHTML = 'Je komt in een lange gang en loopt naar het einde, daar ga je een kamer in aan de zijkant. Voor je staat een gigantische kluis deur je opent de deur met de sleutel en ziet dat deze uitkomt in in een bos. Je rent snel door het bos weg en vind na een stuk rennen een tankstation waar je om hulp vraagt. Zij bellen de politie en de politie brengt je thuis. De vrouw die je had ontvoerd werd een paar dagen later opgepakt door de politie.';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/kluisdeur.jpg")';
    clearInterval(countdownTimer);
    game = false;
    timer = false;

    //time out
    var timer = setTimeout(function(){  
        game_container.style.backgroundImage = 'url("images/bunker_ingang.jpg")';
    }, 2000);

    button1.innerHTML = 'start';
    button1.onclick = function() {
        clearTimeout(timer);
        begin_verhaal();
    };

    button2.style.display = "none"; 
    button3.style.display = "none"; 
}

//minigames, code kraken en andere functies

function code_kraken() {
    title.innerHTML = 'code_kraken';
    description.innerHTML = 'kraak de code en druk daarna op de knop code invoeren, voer de code daarna in. Als de img niet goed te lezen is dan kan je er op klikken voor een betere afbeelding.';

    inventoryItem.style.display = "block";
    inventoryItem.src = "images/crack_the_code2.png";
    inventoryItem.style.width= 100+"px";
    inventoryItem.style.height= 100+"px";

    inventoryItem.onclick = function (){
        new_window_image(0);
    };

    game_container.style.backgroundImage = 'url("images/crack_the_code.png")';

    //button 1
    button1.innerHTML = 'stoppen met code kraken';
    button1.onclick = function() {
        keuze_12();
        inventoryItem.style.width = "initial";
        inventoryItem.style.height = "initial";
    };
    
    //button 2
    button2.innerHTML = 'code invoeren';
    button2.onclick = function() {
        var ans = prompt("voer hier de code in...", "000");

        if(ans == "042") {
            oppakken["code_kraken"] = true;
            alert("code is goed, stop met code kraken.");
        } else {
            alert("code is fout");
        }

    };

    //button 3
    button3.style.display = "none"; 
}

function new_window_image(img) {
    if (img == 0) {
        var largeImage = document.getElementById('inventoryItem');
        
    } else if(img == 1){
        var url_before = inventoryItem.getAttribute('src');
        inventoryItem.src = "images/plattegrond.png";
        var largeImage = document.getElementById('inventoryItem');
    }

    largeImage.style.display = 'block';
    largeImage.style.width= 100+"px";
    largeImage.style.height= 100+"px";
    var url=largeImage.getAttribute('src');
    window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');

    inventoryItem.src = url_before;
}

function buttons(button, button_titels, level_onclick) {
    //4 = alle buttons
    //5 = 1 en 2
    //6 = 2 en 3
    //7 = 1 en 3
    if (button == 1 || button == 4 || button == 5 || button == 7) {
        button1.innerHTML = button_titels["button1"];
        button1.setAttribute("onclick", level_onclick["button1"]);
        // button1.onclick = function() {level_onclick["button1"];};
        button1.style.display = "inline-block";

    }
    if (button == 2 || button == 4 || button == 5 || button == 6) {
        button2.innerHTML = button_titels["button2"];
        button2.setAttribute("onclick", level_onclick["button2"]);
        // button2.onclick = function() {level_onclick["button2"];};
        button2.style.display = "inline-block";

    }
    if (button == 3 || button == 4 || button == 6 || button == 7) {
        button3.innerHTML = button_titels["button3"];
        button3.setAttribute("onclick", level_onclick["button3"]);
        // button3.onclick = function() {level_onclick["button3"]};
        button3.style.display = "inline-block";
    } 

    display_none(button);
}

function display_none(button) {
    if (button == 2 || button == 3 || button == 6) {
        button1.style.display = "none";

    }
    if (button == 1 || button == 3 || button == 7) {
        button2.style.display = "none";

    } 
    if (button == 1 || button == 2 || button == 5) {
        button3.style.display = "none";
    } 
}

function console_title_onchange() {
    var oldTitle = document.getElementById('title').innerHTML;
    window.setInterval(function()
    {
        if (document.getElementById('title').innerHTML !== oldTitle)
        {
            console.log(title.innerHTML);
        }
        oldTitle = document.getElementById('title').innerHTML;
    }, 100); //check every 100ms
}

//create element functies
function create_element(element_create, id, type, value) {
    var element = document.createElement(element_create);
    if (type != "") {
        element.setAttribute("type", type);
    }
    if (value != "") {
        element.value = value;
    }
    element.id = id;    
    game_container.appendChild(element);
}

function create_span(text, id, id_appendChild) {
    var x = document.createElement("SPAN");
    x.id = id; 
    var t = document.createTextNode(text);
    x.appendChild(t);
    if (id_appendChild != "") {
        var element = document.getElementById(id_appendChild);
        x.appendChild(element);
    }
    game_container.appendChild(x);
}

function create_audio(id, src, autoplay, loop) {
    var x = document.createElement("AUDIO");
    x.id = id; 
    x.setAttribute("src", src);
    if (autoplay == true) {
        x.autoplay = true;
    } else {
        x.autoplay = false;
    }

    if (loop == true) {
        x.loop = true;
    } else {
        x.loop = false;
    }
  
    game_container.appendChild(x);
}

function create_checkbox_span(element_create, id1, type, value, text, id2, id_appendChild, checked1) { //create checkbox en span
    create_element(element_create, id1, type, value);
    create_span(text, id2, id_appendChild);

    
    if (id1 == "check_timer") {
        var element_check = check_timer_element;
        check = check_timer;
    } else {
        var element_check = check_audio_element;
        check = check_audio;
    }

    element_check = document.getElementById(id1); 
    element_check.checked = checked1;

    if (id1 == "check_timer") {
        check_timer = document.getElementById(id1).checked;

        element_check.addEventListener('change', function() {
            check_timer = document.getElementById(id1).checked;
            console.log(check_timer);
        });
    }

    if (id2 == "span1") {
        span1 = document.getElementById('span1');
    } else {
        span3 = document.getElementById('span3');
    }
}

function create_select_input(id) { 
    var sel = document.createElement("Select"); 
    sel.setAttribute("id", id);

    game_container.appendChild(sel); 
} 

function create_slider(id_slider, min, max, value, step) {
    var slider = document.createElement('input');
    slider.id = id_slider;
    slider.type = 'range';
    slider.min = min;
    slider.max = max;
    slider.value = value;
    slider.step = step;
    game_container.appendChild(slider);
}

function create_select_option_input(id_appendChild, value, text) { 
    var opt = document.createElement("option"); 
    opt.setAttribute("value", value); 
    var nod = document.createTextNode(text); 

    opt.appendChild(nod);

    document.getElementById(id_appendChild).appendChild(opt); 
} 

//creates the option menu
function create_menu() {
    //het kan zijn dat dit niet de makkelijkste manier is. 

    // //option menu checkbox timer
    create_checkbox_span("INPUT", "check_timer", "checkbox", "", "game timer", "span1", "check_timer");

    create_element("div", "div_1", "", "");
    span1 = document.getElementById("span1");
    div_1 = document.getElementById("div_1");
    div_1.appendChild(span1);

    // check_timer_element = document.getElementById('check_timer');

    // if (check_timer_element.checked == true) {
    //     create_element("div", "waiting_time", "", "");

    //     check_timer = true;
    // }

    // check_timer_element.addEventListener('change', function() {
    //     if (check_timer_element.checked == true) {
    //         create_element("div", "waiting_time", "", "");

    //         check_timer = true;
    //     } else {
    //         check_timer = false;
    //         delete_timer();
    //     }
    // });

    //option menu number field
    create_element("INPUT", "game_time_number", "number", 60);
    game_time_number = document.getElementById('game_time_number');

    create_span("game timer", "span2", "game_time_number");
    span2 = document.getElementById('span2');

    timer_seconds = document.getElementById("game_time_number").value;

    game_time_number.addEventListener('change', function() {
        timer_seconds = document.getElementById("game_time_number").value;
    });

    // //option menu checkbox audio
    create_checkbox_span("INPUT", "check_audio", "checkbox", "", "audio", "span3", "check_audio");

    create_element("div", "div_3", "", "");
    span3 = document.getElementById("span3");
    div_3 = document.getElementById("div_3");
    div_3.appendChild(span3);
    // create_element("INPUT", "check_audio", "checkbox", "");
    // check_audio_element = document.getElementById('check_audio');
    // check_audio_element.checked = false;

    // create_span("audio", "span3", "check_audio");
    // span3 = document.getElementById('span3');

    // check_audio_element = document.getElementById("check_audio").checked;

    // check_audio_element.addEventListener('change', function() {
    //     check_audio_element = document.getElementById("check_audio").checked;
    // });

    //option audio
    create_select_input(id_select);
    create_select_option_input(id_select, "sounds/MKTO_Classic.mp3", "MKTO classic");
    create_select_option_input(id_select, "sounds/Sandstorm.mp3", "Sandstorm");
    create_select_option_input(id_select, "sounds/Bad_Guy.mp3", "Bad_Guy");
    create_select_option_input(id_select, "sounds/bills.mp3", "Bills");
    create_select_option_input(id_select, "sounds/mr_bleu_sky.mp3", "Mr. Bleu Sky");
    create_select_option_input(id_select, "sounds/escape.mp3", "Escape horror music");

    create_slider(volume_slider_id, 0, 1, 1, 0.1);
    create_span("volume slider", "span4", volume_slider_id);

    create_element("div", "div_4", "", "");
    span4 = document.getElementById("span4");
    div_4 = document.getElementById("div_4");
    div_4.appendChild(span4);

    check_audio_element = document.getElementById('check_audio');

    if (check_audio_element.checked == true) {
        var src = document.getElementById(id_select).value;

        create_audio("audio", src, true, true);
        audio_element = document.getElementById('audio');

        volume = document.getElementById(volume_slider_id).value;

        audio_element = document.getElementById('audio');
        audio_element.volume = volume;
    }

    check_audio_element.addEventListener('change', function() {
        if (check_audio_element.checked == true) {
            src = document.getElementById(id_select).value;

            create_audio("audio", src, true, true);
            audio_element = document.getElementById('audio');

            volume = document.getElementById(volume_slider_id).value;

            audio_element = document.getElementById('audio');
            audio_element.volume = volume;
        } else {
            delete_audio();
        }
    });

    document.getElementById(id_select).addEventListener('change', function() {
        if (check_audio_element.checked == true) {
            src = document.getElementById(id_select).value;

            audio_element = document.getElementById('audio');
            audio_element.src = src;
        }
    });
    document.getElementById(volume_slider_id).addEventListener('change', function() {
        if (check_audio_element.checked == true) {
            volume = document.getElementById(volume_slider_id).value;

            audio_element = document.getElementById('audio');
            audio_element.volume = volume;
        }
    });
        
    // game_time_number = document.getElementById('game_time_number');

    // create_span("game timer", "span2", "game_time_number");
    // span2 = document.getElementById('span2');

    // timer_seconds = document.getElementById("game_time_number").value;

    // game_time_number.addEventListener('change', function() {
    //     timer_seconds = document.getElementById("game_time_number").value;
    // });
}

//delete elements functie
function delete_elements() { //delete all elements in the menu
    if (span1 != null) {
        span1.remove();
    }
    if (check_timer_element != null) {
        check_timer_element.remove();
    }
    if (span2 != null) {
        span2.remove();
    }
    if (game_time_number != null) {
        game_time_number.remove();
    }
    if (check_audio_element != null) {
        check_audio_element.remove();
    }
    if (span3 != null) {
        span3.remove();
    }
    if (document.getElementById(id_select) != null) {
        document.getElementById(id_select).remove();
    }
    if (span4 != null) {
        span4.remove();
    }
    if (div_3 != null) {
        div_3.remove();
    }
    if (div_4 != null) {
        div_4.remove();
    }
}

function delete_timer() { //delete all elements in the menu
    waiting_time = document.getElementById('waiting_time');
    if (waiting_time != null) {
        waiting_time.remove();
    }
}

function delete_audio() {
    if (audio_element != null) {
        audio_element.remove();
    }
}

//timer functies
function GameTimer() { //zorgt ervoor dat de game timer aftelt
    if (check_timer) {
        create_element("div", "waiting_time", "", "");
        var minutes = Math.round((seconds - 30) / 60);
        var remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
        }
        document.getElementById('waiting_time').innerHTML = minutes + ":" + remainingSeconds;
        if (check_timer == false) {
            clearInterval(countdownTimer);
        } else if(seconds == 0) {
            game = false;
            einde_5();
            clearInterval(countdownTimer);
        } else {
            seconds--;
        }
    }
    
}

// function vraagtimerseconden() { //vraagt het aantal seconden van de game timer (word niet meer gebruikt)
//     var geantwoord = true;
//     while (geantwoord) {
//         timer_seconds = parseInt(prompt("op hoeveel seconden wil je de game over timer zetten?", "60"));
//         if (isNaN(timer_seconds)) {
//             alert("Wat ingevoerd is is geen nummer.");
//         } else {
//             geantwoord = false;
//         }
//     }
// }
