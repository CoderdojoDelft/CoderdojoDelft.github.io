import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { PageTitle } from '../element/PageTitle';
import { nextEdition } from '../content/editions';
import { routes } from '../routes';

export class HomePage extends Component {
    render() {
        let upcoming;
        let warning = {
            color: '#b30000',
            'font-weight': '800',
            'font-size': '16px'
        }

        if (nextEdition) {
            upcoming = (
                <React.Fragment>
                    <p>We organiseren een CoderDojo op:</p>
                    <p><strong>{nextEdition.displayDate}</strong></p>
                    <p>Kijk op onze pagina <Link to={routes.nextEdition.url}>‘Volgende editie’</Link> voor meer informatie over de komende CoderDojo!</p>
                </React.Fragment>
            );
        }

        return (
            <Page>
                <PageTitle>Welkom bij CoderDojo Delft!</PageTitle>
                <PageBody>
                    <h2>Welkom bij CoderDojo Delft!</h2>
                    <p>CoderDojo Delft realiseert samen met enthousiaste vrijwilligers een platform waar kinderen van 8 tot 14 jaar in een technische stad als Delft de mogelijkheid krijgen om kennis te maken met een nog ontbrekend vak in het basisonderwijs en voortgezet onderwijs: programmeren.</p>
                    <p>Bij CoderDojo Delft leren kinderen programmeren, websites te bouwen, apps te ontwikkelen, programma’s te maken, games te maken en meer! We komen regelmatig bij elkaar om te leren programmeren, maar ook om andere deelnemers te ontmoeten. De CoderDojo is gratis bij te wonen omdat het volledig georganiseerd en begeleid wordt door vrijwilligers (mentoren).</p>
                    <p>Een belangrijke eigenschap van een CoderDojo is dat het plaatsvindt in een openbare ruimte en voor iedereen toegankelijk is. <a href="https://opendelft.info/">OPEN</a> (voormalig Bibliotheek DOK Delft) is daarom de perfecte plek voor onze bijeenkomsten.</p>
                    <h3>Activiteiten</h3>
                    <p style={warning}>In verband met het Coronavirus en de daarvoor getroffen maatregelen, zal de op 28 maart geplande CoderDojo helaas niet doorgaan.</p>
                    <p>Kijk op onze nieuwe pagina <Link to={routes.material.url}>'Aan de slag'</Link> voor leuke opdrachten om thuis mee aan de slag te gaan.</p>
                    {upcoming}
                    <p>Voor een overzicht van de komende CoderDojo's, kijk <Link to={routes.agenda.url}>hier</Link>.</p>
                    <h3>Andere locaties</h3>
                    <p>Ook op andere plekken in Nederland zijn CoderDojo’s gestart! Geen plek meer in Delft? Meld je dan aan bij een van de andere CoderDojo’s in de buurt:</p>
                    <ul>
                        <li><a href="http://www.coderdojo-zoetermeer.nl/" target="_blank" rel="noopener noreferrer">CoderDojo Zoetermeer</a></li>
                        <li><a href="http://www.coderdojo-denhaag.nl/" target="_blank" rel="noopener noreferrer">CoderDojo Den Haag</a></li>
                        <li><a href="http://coderdojo-rotterdam.nl/" target="_blank" rel="noopener noreferrer">CoderDojo Rotterdam</a></li>
                    </ul>
                    <h3>Thuis verder</h3>
                    <p>Als je de CoderDojo leuk vond, kun je daar natuurlijk thuis verder gaan met programmeren! We hebben een verzameling websites voor je verzameld waarmee je aan de slag kunt. Klik  <Link to={routes.whatWeDo.url}>hier</Link>.</p>
                </PageBody>
            </Page>
        );
    }
}
