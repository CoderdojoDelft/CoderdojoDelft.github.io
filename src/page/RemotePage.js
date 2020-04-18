import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { PageTitle } from '../element/PageTitle';
import { routes } from '../routes';


export class RemotePage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>CoderDojo op afstand</PageTitle>
                <PageBody>
                <p>In verband met het Corona-virus kunnen we tot 1 juni geen normale dojo aanbieden. Maar dat betekent niet dat jullie ons de komende maanden helemaal moeten missen.</p>
                
                <p>Op 28 maart hebben we een kleine pilot online dojo gehouden en iedereen was enthousiast! De geplande Coderdojo's van april en mei zullen daarom online worden aangeboden. Hieronder vind je hoe en ook een aantal spelregels om goed samen te kunnen werken online.</p>
                
                <p>De online CoderDojo wordt gehouden via Jitsi. Dit is een Open Source video/chat platform, dat voor de CoderDojo gehost wordt door het bedrijf van mentor Ruben.</p>
                <p>In deze omgeving kunnen we videobellen en kan iedereen zijn scherm delen met de groep. Tijdens het werken aan de opdrachten (in kleine groepjes) is het de bedoeling dat de ninja's hun scherm delen, zodat de mentoren makkelijk mee kunnen kijken. De mentoren hebben de webcam aanstaan.</p>
                <p>Na een korte introductie wordt er in verschillende chatrooms aan opdrachten gewerkt. Dit om zo aan iedereen uitleg te kunnen geven, zonder dat iedereen er last van heeft. Ninja's in dezelfde room werken aan eenzelfde soort opdracht. In elke chatroom zijn altijd minstens twee mentoren aanwezig. Aan het eind van de dojo komen we weer samen in één room en kan iedereen laten zien wat hij/zij gemaakt heeft.</p>

                <h2>Meedoen</h2>
                <p>Je kunt je op de gebruikelijke manier inschrijven voor de dojo. Kijk hiervoor bij <Link to={routes.nextEdition.url}>'Volgende editie'</Link>. Eén of twee dagen voor de CoderDojo ontvang je dan de link naar de CoderDojo-chat op Jitsi, het programma, opdrachten om uit te kiezen en wat regels en tips.</p>
                <p>Het volgende is belangrijk als je mee wilt doen aan een online CoderDojo:</p>
                <ul>
                    <li>Je heb een goede internetverbinding nodig.</li>
                    <li>Het is handig als je vooraf een opdracht uitzoekt en evt. uitprint. Een lijstje met mogelijke opdrachten krijg je per mail.</li>
                </ul>

                <p>Het is allemaal een beetje anders dan anders, maar hopen je zo ook online een leuke en leerzame middag te geven!</p>

                </PageBody>
            </Page>
        );
    }
}
