import React, { Component } from 'react';

import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { PageTitle } from '../element/PageTitle';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export class MaterialPage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>Aan de slag!</PageTitle>
                <PageBody>
                    <Tabs>
                        <TabList>
                            <Tab><h3>Scratch</h3></Tab>
                            <Tab><h3>Python</h3></Tab>
                            <Tab><h3>Microbit/Arduino</h3></Tab>
                            <Tab><h3>Van alles wat</h3></Tab>
                            <Tab><h3>Boeken</h3></Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Scratch opdrachten</h2>
                            <p>Hieronder vind je links naar de opdrachten die we voor Scratch gebruiken. Je kunt dus thuis gewoon verder werken of aan iets nieuws beginnen!</p>
                            <p>De hieronder vermelde materialen zijn ontwikkeld door verschillende CoderDojo-groepen in Nederland en België.</p>
                            <h3>Beginnen met Scratch</h3>
                            <p>Om te beginnen met Scratch hoef je niets te installeren, het staat online. Ga naar <a href="http://scratch.mit.edu" target="_blank" rel="noopener noreferrer">de website van Scratch</a> . De eerste keer moet je een gebruikersnaamm aanmaken (vraag je ouders je te helpen). Daarmee kun je daarna weer inloggen en al je oude projecten zien.</p>

                            <h3>Je eerste project</h3>

                            <h4>De Draak</h4>
                            <p>De draak is verdwaald in de stad. Er komt een bus langs. Kun jij de draak de passagiers laten schrikken? <a href="https://drive.google.com/file/d/0B-5aZIp2Sz0yVUVKYTQ0cVQ1b3c/view" target="_blank" rel="noopener noreferrer">Hier</a> vind je de beschrijving.</p>

                            <h4>Spooky spel (De heks)</h4>
                            <p>Rondvliegen als een heks en punten krijgen van de vleermuizen. Maar pas op, soms nemen ze punten af...<br></br>Je vindt de beschrijving <a href="http://www.codekids.nl/scratch-spooky-spel-3-0-voor-coderdojo/" target="_blank"rel="noopener noreferrer">hier</a>. De sprite van de heks uit de vorige versie van Scratch kun je hier ook vinden. Open een nieuw project met het bestand dat je op de site kunt downloaden.</p>

                            <h4>Analoge klok</h4>
                            <p>Maak je eigen klok! <a href="https://drive.google.com/drive/folders/1Q_wJ2WQjFax9Ecx3nwR_hJ6DGu2U2cRI">Hier</a> vind je de beschrijving en een aantal sprites om mee te beginnen</p>
                            
                            <h4>Maanlander (50 jaar maanlanding 2019)</h4>
                            <p>Op 20 juli 1969 zette Neil Armstrong de eerste stap op de maan. Maak nu je eigen maanlandingsspel! <a href="https://coderdojodelft.gitbooks.io/scratch-moonhack-2019/content/nl/" target="_blank"rel="noopener noreferrer">Hier</a> vind je de beschrijving.</p>

                            <h4>Pong</h4>
                            <p>Pong is één van de allereerste computerspellen dat werd gemaakt. En het is nog steeds leuk! En je kunt het zelf maken met <a href="https://drive.google.com/file/d/0B-5aZIp2Sz0yRUFRVkFYZzdXRlU/view"target="_blank"rel="noopener noreferrer">deze</a> uitleg.</p>

                            <h4>Muziek maken</h4>
                            <p>Houd je van muziek en speel je zelf een instrument? Ook van je computer kun je een muziekinstrument maken! Hiervoor gebruik je de Muziek-uitbreiding van Scratch. <a href="https://drive.google.com/file/d/1uuPJ-wixa6pC3rImci5FzTGXpNuFgE2C/view" target="_blank"rel="noopener noreferrer">Deze instructie</a> legt je uit hoe je dat doet</p>

                            <h3>Iets moeilijker</h3>
                            <h4>Racebaan</h4>
                            <p>Al heel lang worden er autorace spelletjes gespeeld op de computer. Maak je eigen racespel met <a href="https://drive.google.com/file/d/0B-5aZIp2Sz0yY0JocVk5bnRieWM/view" target="_blank"rel="noopener noreferrer">deze uitleg</a>.</p>
                            
                            <h4>Flappy bird</h4>  
                            <p>Je bent een vogel, maar valt langzaam naar beneden. Blijf vliegen en ontwijk ondertussen allelei obstakels. Maak dit superspannende spel <a href="http://scratchweb.nl/sites/default/files/bijlage/Scratchweb/Leskaart%20Flappy%20Bird.pdf" target="_blank"rel="noopener noreferrer">zo</a></p>  

                            <h4>Snake</h4>
                            <p>Snake was een superpopulair spelletje op de oude Nokia telefoons. Je ouders kennen het vast. Maak dit spel voor hen behulp van <a href="http://scratchweb.nl/sites/default/files/bijlage/Scratchweb/Leskaart%20Snake_0.pdf" target="_blank"rel="noopener noreferrer">dit voorbeeld</a>.</p>

                            <p><b>Meer: </b>Kijk voor grote verzamelingen met opdracht ook op het tabblad <i>Van alles wat</i>!</p>
                        </TabPanel>
                        <TabPanel>
                            <h2>Python opdrachten</h2>
                            <p>Python is een programmeertaal die je voor bijna alles kunt gebruiken. Je kunt er mee rekenen, tekenen, spelletjes maken, zelfs Instagram is ermee gemaakt!</p>
                            <p>Als je veel met Python wilt gaan doen, kun je het op je computer installeren. Maar dat gaat helaas niet altijd even gemakkelijk.<br></br>Gelukkig zijn er ook website waarop je in Python kunt programmeren. Bij CoderDojo Delft gebruiken we meestal <a href="https://repl.it/languages/python3" target="_blank" rel="noopener noreferrer">repl.it</a>. In de opdrachten kun je soms ook <a href="https://trinket.io/" target="_blank" rel="noopener noreferrer">trinket.io</a> tegenkomen. Dit is ook een prima website.</p>
                            <p>Goed om te weten: wij gebruiken altijd Python versie 3.X.</p>

                            <h4>Nummer raden</h4>
                            <p>Leer de basisbegrippen van Python en maak je eerste spelletje! Kun jij het getal raden? Van <a href="https://drive.google.com/file/d/0B5ue9rJQ-LwBaVprWVBkSzVFUDA/view" target="_blank" rel="noopener noreferrer">de beschrijving</a> kun je kaart 1 overslaan, want we gaan Python niet installeren (zie hierboven). En helaas staat er een foutje in de code bij punt 2 op kaart 3. Kun jij die vinden?</p>
                            
                            <h4>Palindromen zoeken</h4>
                            <p>Palindromen zijn woorden die van achter naar voren gelezen hetzelfde zijn als wanneer je ze gewoon leest. Lepel is bijvoorbeeld een palindroom. Met <a href="https://drive.google.com/file/d/0B5ue9rJQ-LwBdGFVeFpHQW5QZFU/view">deze opdracht</a> leer je hoe je zulke woorden kunt vinden in een lange lijst met woorden.</p>

                            <h4>Tekenen met Turtle</h4>
                            <p>Automatisch mooie figuren tekeken. Dit heb je vast wel eens gedaan in Scratch. Leer <a href="https://drive.google.com/file/d/0B1R4ph67gGq2MGlPX24wdmM0SGM/edit" target="_blank" rel="noopener noreferrer">hier</a> hoe je dat doet!</p>

                            <p><b>Meer: </b>Kijk voor grote verzamelingen met opdracht ook op het tabblad <i>Van alles wat</i>!</p>
                        </TabPanel>
                        <TabPanel>
                            <h2>Microbit/Arduino</h2>
                            <p>Programmeren kun je doen op je eigen laptop, maar je kunt ook kleine computertjes. Bij de CoderDojo hebben we een paar verschillende soorten liggen.</p>

                            <h3>Micro:bit</h3>
                            <p>De Micro:bit is door de Britse BBC ontwikkeld voor het onderwijs. Het is een kleine, krachtige computer met twee knoppen, 5x5 LED lampjes, een bewegingssensor en enkele aansluiting om andere sensoren uit te sluiten. Als je thuis geen Micro:bit hebt, kun je alsnog hier code voor schrijven. Op <a href="https://makecode.microbit.org/" target="_blank" rel="noopener noreferrer">deze website</a> kun je op dezelfde manier code schrijven als in Scratch en testen op de gesimuleerde micro:bit naast de code. Op de CoderDojo kun je dan je code naar de Micro:bit zelf sturen.</p>

                            <h4>Meteoren schieten</h4>
                            <p><a href="https://coderdojodelft.gitbooks.io/sushi_microbit_meteors/content/nl/" target="_blank" rel="noopener noreferrer">Hier</a> vind je de beschrijving van het spel Meteors. De meteoren vallen steeds sneller naar beneden. Wie haalt de highscore?</p>

                            <h4>Les-programma</h4>
                            <p>Ga je voor de eerste keer programmeren op de Micro:bit of heb je al ervaring? <a href="https://www.micro-bit.nl/lesmateriaal" target="_blank" rel="noopener noreferrer">Hier</a> vind je een hele verzameling opdrachten die steeds iets moeilijker worden.</p>

                            <h2>Arduino</h2>
                            <p>De Arduino is een wat uitgebreidere mini-computer als de Micro:bit. Dit betekent ook, dat het daarom wat moeilijker kan zijn om er mee te beginnen. We hebben een aantal Arduino's met verschillende sensoren liggen waarmee je aan de slag kunt.</p>

                            <h4>Arduino lessen</h4>
                            <p>Op de website <a href="https://arduino-lessen.nl/" target="_blank" rel="noopener noreferrer">Arduino lessen</a> staan 36 video-lessen om aan de slag te gaan met de Arduino. Elke les leer je iets meer over welke sensoren er zijn, hoe je ze aansluit en hoe je ze kunt programmeren.</p> 
                        </TabPanel>
                        <TabPanel>
                            <h2>Van alles wat</h2>

                            <h3>3D printer / TinkerCad</h3>
                            <p><i>Let op: op dit moment is de 3D printer van CoderDojo helaas kapot en kan die niet gebruikt worden tijdens de CoderDojo.</i></p>

                            <p>We hebben een eenvoudige 3D-printer waarop je kleine dingen kunt printen. Hiervoor kun je in <a href="https://www.tinkercad.com/" target="_blank" rel="noopener noreferrer">TinkerCad</a>. Dit kun je tijdens de CoderDojo doen. Maar als je hier thuis al mee wilt beginnen, vind je <a href="http://coderdojo-nijmegen.nl/wp-content/uploads/2015/07/tinkercad_guide_nl.pdf"target="_blank" rel="noopener noreferrer">hier</a> een goede beschrijving. Je kunt ook e tutorial volgen die verschijnt als je inlogt.</p>

                            <h3>Website maken</h3>
                            <p>Maak je eigen website en laat die aan iedereen zien! We hebben <a href="https://coderdojodelft.gitbooks.io/beginner-html-css-sushi-nl/content/nl/"target="_blank" rel="noopener noreferrer">een beschrijving</a> die uitlegt hoe je dat doet.<br></br>We maken gebruiken van de online omgeving <a href="https://neocities.org/" target="_blank" rel="noopener noreferrer">neocities</a>. Hiermee kun je je website maken en staat hij ook meteen online, zodat je hem aan iedereen kunt laten zien!</p>

                            <h3>Allerlei opdrachten</h3>
                            <p>Er zijn een heleboel websites en CoderDojo's die allerlei materiaal hebben gemaakt vom te leren programmeren. Hieronder vind je er een aantal waarvan wij ook gebruik maken.</p>
                        
                            <h4>Raspberry Pi Foundation</h4>
                            <p>Deze organisatie werkt wereldwijd en heeft een steeds groeiende verzameling Scratch opdrachten. En een groot aantal daarvan is ook in het Nederlands vertaald. Kijk <a href="https://projects.raspberrypi.org/nl-NL/projects" target="_blank"rel="noopener noreferrer">hier</a> eens als je iets nieuws zoekt. Houd de website in de gaten, er komt regelmatig iets nieuws bij.</p>
                            
                            <h4>CoderDojo Zoetermeer</h4>
                            <p>De CoderDojo van Zoetermeer heeft een hele verzameling Scratch opdrachten. En ze delen ze met iedereen via <a href="https://drive.google.com/drive/folders/0B-NwRJ9NsROUdk9iVTJaSzBldDA" target="_blank"rel="noopener noreferrer">Google Drive</a>.</p>

                            <h4>CoderdDojo Nijmegen</h4>
                            <p>Ook de CoderDojo Nijmegegen heeft een <a href="https://coderdojonijmegen.github.io" target="_blank"rel="noopener noreferrer"> vezameling oefeningen</a> waar je mee aan de slag kunt.</p>
                        </TabPanel>
                        <TabPanel>
                            <h2>Programmeerboeken</h2>
                            <p>Op internet is natuurlijk ontzettend veel informatie te vinden over programmeren en vind je ook allerlei leuke opdrachten. Maar er zijn ook een aantal leuke boeken met opdrachten en uitleg. Bij DOK kun je ook veel vinden, in een boekenkast vlakbij de CoderDojo op Metropolis. Superhandig!</p>
                            <p>Hieronder een kleine selectie van wat je er zoal kunt vinden:</p>
                            <ul>
                              <li><a href="https://ct.dok.info/main.php?action=titel&bibtiseq=1000122/" target="_blank"rel="noopener noreferrer">Programmeren voor kinderen</a> (Carol Vorderman)</li>
                              <li><a href="https://ct.dok.info/main.php?action=titel&bibtiseq=1047489" target="_blank"rel="noopener noreferrer"> Beginnen met programmeren met Scratch en Python</a> (Marc Scott)</li>

                              <li><a href="https://ct.dok.info/main.php?action=titel&bibtiseq=1038355" target="_blank"rel="noopener noreferrer">Stap voor stap: programmeren kun je leren</a> (Max Wainewright)</li>
                            </ul>
                            <ul>
                                <li><a href="https://ct.dok.info/main.php?action=titel&bibtiseq=961528" target="_blank"rel="noopener noreferrer">Leren programmeren met Scratch</a> (Ron Ford)</li>
                                <li><a href="https://ct.dok.info/main.php?action=titel&bibtiseq=1101862" target="_blank"rel="noopener noreferrer">Doe meer met Scratch</a> (Majed Marjo)</li>
                                <li><a href="https://ct.dok.info/main.php?action=titel&bibtiseq=1082040" target="_blank"rel="noopener noreferrer">Spelenderwijs programmeren met Scratch</a> (Al Sweigart)</li>
                            </ul>
                            <ul>
                                <li><a href="https://ct.dok.info/main.php?action=titel&bibtiseq=1032632" target="_blank"rel="noopener noreferrer">Programmeren met Python</a> (Jason R. Briggs)</li>
                                <li><a href="https://ct.dok.info/main.php?action=titel&bibtiseq=1076698" target="_blank"rel="noopener noreferrer">Python programmeren voor kinderen</a> (Carol Vorderman)</li>
                                <li><a href="https://ct.dok.info/main.php?action=titel&bibtiseq=1095632" target="_blank"rel="noopener noreferrer">Python Games programmeren voor kinderen</a> (Craig Steele)</li>
                                <li><a href="https://ct.dok.info/main.php?action=titel&bibtiseq=1055724" target="_blank"rel="noopener noreferrer">Projects/Scratch programmeren voor kinderen</a> (Jon Woodcock)</li>
                            </ul>
                        </TabPanel>
                    </Tabs>

                </PageBody>
            </Page>
        )
    }
}