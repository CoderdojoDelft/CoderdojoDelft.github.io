import React, { Component } from 'react';

import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { PageTitle } from '../element/PageTitle';

export class WhatWeDoPage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>Wat doen we?</PageTitle>
                <PageBody>
                <p>Bij CoderDojo gaan we programmeren, maar dat had je waarschijnlijk al begrepen. Er zijn verschillende dingen die je kunt doen. Hieronder vind je een overzichtje. Met meteen wat links, waarmee je ook thuis aan de slag kunt.</p>
                <p>Iedereen tussen de 8 en 14 is welkom. Als je nog nooit geprogrammeerd hebt, hebben we een verzameling opdrachten liggen en helpen we je op weg. En misschien heb je zelf al een idee van iets wat je graag wilt maken. Ook daarmee kunnen we je helpen. En heb je al veel ervaring, maar wil je nog meer leren? Ook dan ben je welkom, we helpen je graag!</p>
                <h3>Scratch</h3>
                <p>Scratch is een geweldige tool om te beginnen met programmeren. Met Scratch programmeer je je eigen interactieve verhalen, spellen en animaties. Ga naar <a href="http://scratch.mit.edu" target="_blank" rel="noopener noreferrer">scratch.mit.edu</a> om een eigen project te starten.</p>
                <p>De TU Delft heeft een online cursus gemaakt voor Scratch. Hiremee leer je in 6 weken precies hoe Scratch werkt. Deze cursus vind je op <a href="https://www.edx.org/course/scratch-programmeren-voor-kinderen-8" target="_blank" rel="noopener noreferrer">edX</a></p>
                <p>In de verzameling links onderaan deze pagina, vind je veel Scratch voorbeelden</p>
                <h3>3D printer (ThinkerCAD)</h3>
                <p>Helaas is onze 3D printer op dit moment stuk. We zijn aan het nadenken of we een nieuwe gaan aanschaffen. We houden jullie op de hoogte!</p>
                {/* <p>We hebben een 3D printer waarop je je eigen ontwerpen kunt printen! Een ontwerp kun je maken met <a href="https://www.tinkercad.com/" target="_blank" rel="noopener noreferrer">TinkerCad</a>. Een goede handeleiding vind je <a href="https://coderdojo-nijmegen.nl/wp-content/uploads/2015/07/tinkercad_guide_nl.pdf" target="_blank" rel="noopener noreferrer">hier</a>. Als je Engels kunt, kun je ook de tutorial in TinkerCad volgen.</p>
                <p>Als je je ontwerp als .OBJ of .STL bestand opslaat (onder de knop 'Export'), dan kun je het bij de CoderDojo laten printen.</p> */}
                <h3>Websites maken (HTML)</h3>
                <p>Tijdens de CoderDojo kun je een website bouwen die ook echt online te zien is. Dit doen we op <a href="http://neocities.org" target="_blank" rel="noopener noreferrer">Neocities</a>. De sushi met instructies vind je <a href="https://coderdojodelft.gitbooks.io/beginner-html-css-sushi-nl/content/nl/" target="_blank" rel="noopener noreferrer">hier</a>.</p>
                <h3>Python</h3>
                <p>Python is de programmeertaal waarmee een groot deel van FaceBook is gemaakt. En dat klinkt misschien heel ingewikkeld, maar je kunt het zelf ook leren. Om er eens aan te proeven is het het handigst om een account aan te maken op <a href="https://www.pythonanywhere.com/" target="_blank"  rel="noopener noreferrer">Python Anywhere</a>. Als je ermee verder wilt, kun je beter Python <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">downloaden</a> en installeren.</p>
                <p>Instructies om met Python te beginnen, vind je <a href="https://drive.google.com/open?id=0B5ue9rJQ-LwBaVprWVBkSzVFUDA" target="_blank" rel="noopener noreferrer">hier</a> en <a href="https://drive.google.com/open?id=0B5ue9rJQ-LwBdGFVeFpHQW5QZFU" target="_blank" rel="noopener noreferrer">hier</a>.</p>
                <h3>Minicomputers</h3>
                <p>We hebben een aantal minicomputers die je kunt programmeren. Dit zijn Arduino's, micro:bits en de Makey Makey. Dit zijn bordjes met een paar poorten en knoppen waarop je bijvoorbeeld een spelletje kunt programmeren.</p>
                <p>Als je thuis een Arduino hebt, kun je leren hoe je hiermee iets maakt op <a href="https://arduino-lessen.nl/" target="_blank" rel="noopener noreferrer">Arduino lessen</a></p>
                <p>Voor de micro:bit hebben we een voorbeeld van het spel <a href="https://coderdojodelft.gitbooks.io/sushi_microbit_meteors/content/nl/" target="_blank" rel="noopener noreferrer">Meteor</a>, wat je ook zonder mirco:bit al kunt maken op <a href="https://makecode.microbit.org/" target="_blank" rel="noopener noreferrer">de micro:bit website</a>.</p>
                <h3>CodeCombat</h3>
                <p>Op CodeCombat leer je een programmeertaal door een spel te spelen. Je kunt je aansluiten bij onze clan. Klik op  <a href="https://codecombat.com/clans/56cd5e28a046201f001ddfe1" target="_blank" rel="noopener noreferrer">deze link</a> om je aan te melden.</p>
                <h3>Websites met divers materiaal</h3>
                <ul>
                    <li><a href="https://drive.google.com/drive/folders/0B-NwRJ9NsROUbnByYlgyOHgxUFE" target="_blank" rel="noopener noreferrer">CoderDojo Zoetermeer</a> heeft een verzameling opdrachten op Google Drive staan</li>
                    <li><a href="https://projects.raspberrypi.org/nl-NL/projects" target="_blank" rel="noopener noreferrer">Raspberry Pi</a> heeft een groeiende verzameling van Scratch, HTML/CSS en Python opdrachten.</li>
                    <li><a href="http://kata.coderdojo.com/wiki/KataDutch" target="_blank" rel="noopener noreferrer">CoderDojo Kata</a> heeft ook een verzameling van allerlei opdrachten.</li>
                </ul>
                </PageBody>
            </Page>
        )
    }
}