import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PageTitle } from '../element/PageTitle';
import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { nextEdition } from '../content/editions';
import { routes } from '../routes';

export class NextEditionPage extends Component {
    noDojos() {
        return (
            <React.Fragment>
                <h2>Op dit moment is er nog geen nieuwe dojo gepland.</h2>
                <p>Voor een overzicht van de komende CoderDojo's, kijk <Link to={routes.agenda.url}>hier</Link>.</p>
            </React.Fragment>
        );
    }

    dojos() {
        return (
            <React.Fragment>
                <h2>{nextEdition.displayDate}</h2>
                <p>De volgende CoderDojo in Delft wordt georganiseerd op {nextEdition.displayDate}. De CoderDojo vindt plaats in OPEN – de vernieuwde plaats van Bibliotheek DOK Delft en VAK delft (Vesteplein 100). We zullen op de dag zelf de plaats duidelijk aangeven.</p>
                <p>De link om in te schrijven vind je onder aan deze pagina. De inschrijving gaat open op {nextEdition.registrationStart} om 12:00 (’s middags) –  Wees er snel bij!</p>
                <p>Voor een overzicht van de komende CoderDojo's, kijk <Link to={routes.agenda.url}>hier</Link>.</p>
                <h3>Wat gaan we doen?</h3>
                <ul>
                    <li>Scratch</li>
                    <li>Microbit</li>
                    <li>Arduino</li>
                    <li>Python</li>
                    <li>Websites</li>
                </ul>
                <p>Kortom, je mag komen met elk project waar je eerder aan gewerkt hebt. Ben je nog nooit geweest? Dan hebben we opdrachten voor je klaarliggen en helpen we je op weg. Maar je mag natuurlijk ook zelf iets verzinnen. Misschien kun je alvast een karakter tekenen voor in een spel dat je wilt maken, of een filmpje zoeken voor een website die je wilt maken.</p>
                <p><Link to={routes.whatWeDo.url}>Hier</Link> vind je meer details over wat je op een CoderDojo kunt doen.</p>
                <h3>Waar?</h3>
                <p>De CoderDojo vindt plaats bij OPEN (Vesteplein 100).</p>
                <h3>Hoe laat?</h3>
                <p>De CoderDojo is van 14:00 tot 16:00 uur. In deze tijd kun je zelf lekker aan de slag. Aan het einde maken we een rondje, zodat je ook aan de anderen kunt laten zien wat je gemaakt hebt!</p>
                <h3>Ouders</h3>
                <p>We vinden het erg fijn als ouders actief meehelpen, zeker voor de jongere kinderen (minimaal 8 jaar). Ouders kunnen ondertussen ook gebruik maken van de faciliteiten van de bibliotheek. Er is beperkt zitplek voor ouders aan de tafels van de kinderen.</p>
                <h3>Wat moet ik meenemen?</h3>
                <ul>
                    <li>Een werkende laptop*</li>
                    <li>Een 3-uurtje &#8211; wij zorgen voor een pakje drinken</li>
                    <li>Een goed humeur!</li>
                </ul>
                <p><em>*) Zorg dat je laptop minimaal over WiFi, een browser (Chrome / Firefox) beschikt. Vergeet ook je oplader niet. Wij kunnen helaas niet alle kinderen helpen om alles werkend te krijgen dus wij vertrouwen erop dat alles werkt bij binnenkomst! Zorg er ook voor dat er een e-mailadres beschikbaar is om een account aan te kunnen maken voor online programma’s.</em></p>
                <p>We hebben een beperkt aantal laptops te leen. Laat het ons via het inschrijfformulier weten als je daarvan gebruik wilt maken.</p>
                <h3>Inschrijven</h3>
                <p>Voor deze Dojo hebben we maar beperkt plek! Er is ruimte voor een maximaal aantal deelnemers. Elke deelnemer heeft zijn eigen ticket nodig, en je kunt maximaal twee tickets reserveren. Als de plekken voor deze CoderDojo bezet zijn, kun je je naam op de wachtlijst zetten, we nemen dan contact met je op zodra er een plek vrijkomt. Laat het ons dus ook weten als je verhinderd bent.</p>
                <p>Vanaf januari 2020 wordt de inschrijving verzorgt door DOK. <a href={nextEdition.registrationUrl} target="_blank" rel="noopener noreferrer">Klik hier</a> om naar de inschrijvingspagina te gaan.</p>
                <p><i>Is de Dojo vol, of kun je niet op die dag? Je kunt ook kijken of er plek is bij een CoderDojo in de buurt: <a href="http://www.coderdojo-zoetermeer.nl" target="_blank" rel="noopener noreferrer">CoderDojo Zoetermeer</a>,  <a href="http://www.coderdojo-denhaag.nl" target="_blank" rel="noopener noreferrer">CoderDojo Den Haag</a> of <a href="http://www.coderdojo-rotterdam.nl" target="_blank" rel="noopener noreferrer">CoderDojo Rotterdam</a>.</i></p>
            </React.Fragment>
        );
    }

    render() {
        let content;

        console.log(nextEdition)

        if (nextEdition) {
            content = this.dojos();
        } else {
            content = this.noDojos();
        }

        return (
            <Page>
                <PageTitle>Volgende editie</PageTitle>
                <PageBody>
                    {content}
                </PageBody>
            </Page>
        );
    }
}
