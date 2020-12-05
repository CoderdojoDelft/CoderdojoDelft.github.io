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
                    <p>In verband met COVID-19 kunnen we de dojo's helaas niet altijd in OPEN aanbieden. Wanneer dat niet kan, zal de dojo online gehouden moeten worden. Of de dojo online is of bij OPEN, staat vermeld bij de aanmelding.</p>
                    <p>Hieronder vind je een overzicht van de komende edities:</p>
                    <ol>
                        {nextEditions.map((edition, index) => {
                            return (
                                <li key={index}>{edition.displayDate} {edition.special}</li>
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
