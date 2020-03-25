import React, { Component } from 'react';
import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { PageTitle } from '../element/PageTitle';


export class RemotePage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>CoderDojo op afstand</PageTitle>
                <PageBody>
                <p>In verband met het Corona-virus kunnen we tot 1 juni geen normale dojo aanbieden. Maar dat betekent niet dat jullie ons de komende maanden niet helemaal te missen. We zijn heel druk bezig met het opzetten van onze eerste online dojo.</p>

                <p>Op 28 maart draaien we een kleine pilot, zodat we zelf ook kunnen uitzoeken hoe dit werkt. De voor april en mei geplande CoderDojo's zullen online worden aangeboden.</p>

                <p>Na de pilot zullen we hier informatie toevoegen over de online dojo's.</p>
                </PageBody>
            </Page>
        );
    }
}
