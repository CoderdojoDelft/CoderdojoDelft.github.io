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
                    Hier komt de tekst
                </PageBody>
            </Page>
        );
    }
}
