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
                            <Tab><h3>HTML</h3></Tab>
                            <Tab><h3>Microbit/Arduino</h3></Tab>
                            <Tab><h3>3D printer</h3></Tab>
                            <Tab><h3>Websites/boeken</h3></Tab>
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

                            <p><b>Meer: </b>Kijk voor grote verzamelingen met opdracht ook op het tabblad 'Websites/boeken'!</p>
                        </TabPanel>
                        <TabPanel>
                            <h2>Python opdrachten</h2>
                            <p>Python is een programmeertaal die je voor bijna alles kunt gebruiken. Je kunt er mee rekenen, tekenen, spelletjes maken, zelfs Instagram is ermee gemaakt!</p>
                            <p>Als je veel met Python wilt gaan doen, kun je het op je computer installeren. Maar dat gaat helaas niet altijd even gemakkelijk.<br></br>Gelukkig zijn er ook website waarop je in Python kunt programmeren. Bij CoderDojo Delft gebruiken we meestal <a href="https://repl.it/languages/python3" target="_blank" rel="noopener noreferrer">repl.it</a>. In de opdrachten kun je soms ook <a href="https://trinket.io/" target="_blank" rel="noopener noreferrer">trinket.io</a> tegenkomen. Dit is ook een prima website.</p>
                            <p>Goed om te weten: wij gebruiken altijd Python versie 3.X.</p>

                            <h4>Nummer raden</h4>
                            <p>Leer de basisbegrippen van Python en maak je eerste spelletje! Kun jij het getal raden? Van <a href="https://drive.google.com/file/d/0B5ue9rJQ-LwBaVprWVBkSzVFUDA/view" target="_blank" rel="noopener noreferrer">de beschrijving</a> kun je kaart 1 overslaan, want we gaan Python niet installenren (zie hierboven). En helaas staat er een foutje in de code bij punt 2 op kaart 3. Kun jij die vinden?</p>
                            
                            <h4>Palindromen zoeken</h4>
                            <p>Palindromen zijn woorden die van achter naar voren gelezen hetzelfde zijn als wanneer je ze gewoon leest. Lepel is bijvoorbeeld een palindroom. Met <a href="https://drive.google.com/file/d/0B5ue9rJQ-LwBdGFVeFpHQW5QZFU/view">deze opdracht</a> leer je hoe je zulke woorden kunt vinden in een lange lijst met woorden.</p>

                            <h4>Tekenen met Turtle</h4>
                            <p>Automatisch mooie figuren tekeken. Dit heb je vast wel eens gedaan in Scratch. Leer <a href="https://drive.google.com/file/d/0B1R4ph67gGq2MGlPX24wdmM0SGM/edit"target="_blank" rel="noopener noreferrer">hier</a> hoe je dat doet!</p>

                            <p><b>Meer: </b>Kijk voor grote verzamelingen met opdracht ook op het tabblad 'Websites/boeken'!</p>
                        </TabPanel>
                        <TabPanel>
                            <h2>Website maken</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Microbit/Arduino</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>3D printer / ThinkerCad</h2>
                        </TabPanel>
                        <TabPanel>
                            <h3>Websites met veel projecten</h3>
                        
                            <h4>Raspberry Pi Foundation</h4>
                            <p>Deze organisatie werkt wereldwijd en heeft een steeds groeiende verzameling Scratch opdrachten. En een groot aantal daarvan is ook in het Nederlands vertaald. Kijk <a href="https://projects.raspberrypi.org/nl-NL/projects" target="_blank"rel="noopener noreferrer">hier</a> eens als je iets nieuws zoekt. Houd de website in de gaten, er komt regelmatig iets nieuws bij.</p>
                            
                            <h4>CoderDojo Zoetermeer</h4>
                            <p>De CoderDojo van Zoetermeer heeft een hele verzameling Scratch opdrachten. En ze delen ze met iedereen via <a href="https://drive.google.com/drive/folders/0B-NwRJ9NsROUdk9iVTJaSzBldDA" target="_blank"rel="noopener noreferrer">Google Drive</a>.</p>

                            <h3>Programmeerboeken</h3>
                            <p>Op internet is natuurlijk ontzettend veel informatie te vinden over programmeren en vind je ook allerlei leuke opdrachten. Maar er zijn ook een aantal leuke boeken met opdracten en uitleg. Bij DOK kun je ook veel vinden, in een boekenkast vlakbij de CoderDojo. Superhandig!</p>



                            <ul>
                                <li>
                                    Booek 1
                                </li>
                            </ul>
                        </TabPanel>
                    </Tabs>

                </PageBody>
            </Page>
        )
    }
}