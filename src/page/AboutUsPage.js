import React, { Component } from 'react';

import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { PageTitle } from '../element/PageTitle';

export class AboutUsPage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>Over ons</PageTitle>
                <PageBody>
                    <p>CoderDojo Delft is opgericht eind 2015 door Koen en Judith en organiseert sinds die tijd iedere maand een gratis bijeenkomst om kinderen tussen 7 en 14 jaar kennis te laten maken met programmeren. Voor meer informatie wat Coderdojo is zie <a href="https://coderdojo.nl/informatie/over-coderdojo" target="_blank" rel="noopener noreferrer">https://coderdojo.nl/informatie/over-coderdojo</a></p>
                    <p>Coderdojo is niet alleen om kennis te maken met programmeren &#8211; ook kinderen die de eerste stappen al gezet hebben zijn welkom om hun skills verder uit te breiden!</p>

                    <p>Sinds januari 2020 vallen we onder DOK Delft en is CoderDojo Delft uitgegroeid tot een groep van meer dan 18 enthousiaste mentoren is het stokje van Koen en Judith overgenomen. Heb je vragen? We zijn te bereiken op <a href="mailto:info@coderdojo-delft.nl">info@coderdojo-delft.nl</a></p>
                </PageBody>
            </Page>
        );
    }
}
