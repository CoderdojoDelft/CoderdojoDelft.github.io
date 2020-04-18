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
                    <p><b>In verband met het Corona-virus kunnen we tot 1 juni geen normale dojo aanbieden. Maar dat betekent niet dat jullie ons de komende maanden helemaal moeten missen.</b></p>
                    <p><b>Op 28 maart hebben we een kleine pilot online dojo gehouden en iedereen was enthousiast! De geplande Coderdojo's van april en mei zullen daarom online worden aangeboden. Inschrijven gaat zoals gebruikelijk via de website van DOK.</b></p>
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
