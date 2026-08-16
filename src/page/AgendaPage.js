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
                        Coderdojo Delft wordt georganiseerd op 3 verschillende locaties in Delft. De Dojo's worden georganiseerd op de volgende vaste dagen:
                        <ol>
                            <li>DOK in OPEN: 4e zaterdag van de maand van 14.00 tot 16.00</li>
                            <li>DOK Voorhof: 2e zaterdag van de maand van 14.00 tot 16.00</li>
                            <li>DOK Tanthof: 3e zaterdag van de maand van 10.30 tot 12.30</li>
                        </ol>
                    <br></br>
                        Af en toe wijken we hier vanaf als dit door feestdagen anders niet uitkomt - we organizeren soms ook Dojo's andere locaties.
                        In de zomervakantie komen de Dojo's mogelijk te vervallen.
                    </p>
                    <ol>
                        {nextEditions.map((edition, index) => {
                            return (
                                <li key={index}>{edition.displayDate} {edition.where} {edition.special}</li>
                            )
                        })}
                    </ol>
                    <br></br>
                    <p>Je kunt je vanaf de zondag 2 weken voor de Dojo <a href="https://www.dok.info/jeugdjongeren/Jeugd9-14jr/coderdojo.html" target="_blank" rel="noopener noreferrer">hier</a> aanmelden.</p>
                </PageBody>
            </Page>
        );
    }
}
