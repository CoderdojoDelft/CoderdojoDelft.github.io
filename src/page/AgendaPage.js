import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PageTitle } from '../element/PageTitle';
import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { nextEditions } from '../content/editions';
import { routes } from '../routes';

export class AgendaPage extends Component {
    render() {
        let warning = {
            color: '#b30000',
            'font-weight': '800',
            'font-size': '16px'
        }
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
                    <p style={warning}>In verband met het Coronavirus en de daarvoor getroffen maatregelen, zal de op 28 maart geplande CoderDojo helaas niet doorgaan.</p>
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
