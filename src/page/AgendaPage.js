import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PageTitle } from '../element/PageTitle';
import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { nextEditions } from '../content/editions';
import { routes } from '../routes';

export class AgendaPage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>Agenda</PageTitle>
                <PageBody>
                    <h2>Komende Dojo's</h2>
                    <p>
                        Coderdojo Delft wordt georganiseerd op de 4e zaterdag van de maand.
                        Af en toe wijken we hier vanaf als dit door feestdagen anders niet uitkomt.
                        In de zomervakantie komen de Dojo's mogelijk te vervallen.
                    </p>
                    <p><b>In verband met het Corona-virus kunnen we tot 1 juni geen normale dojo aanbieden. Maar dat betekent niet dat jullie ons de komende maanden niet helemaal te missen. We zijn heel druk bezig met het opzetten van onze eerste online dojo.</b></p>
                    <p><b>Op 28 maart draaien we een kleine pilot, zodat we zelf ook kunnen uitzoeken hoe dit werkt. De voor april en mei geplande CoderDojo's zullen online worden aangeboden.</b></p>
                    <p>Hieronder vind je een overzicht van de komende edities:</p>
                    <ol>
                        {nextEditions.map((edition, index) => {
                            return (
                                <li key={index}>{edition.displayDate}</li>
                                )
                            })}
                    </ol>
                    <br></br>
                    <p>Je kunt je vanaf de zondag 2 weken voor de Dojo <Link to={routes.nextEdition.url}>hier</Link> aanmelden.</p>
                </PageBody>
            </Page>
        );
    }
}
