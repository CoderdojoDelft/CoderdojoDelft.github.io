import React, { Component } from 'react';

import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { PageTitle } from '../element/PageTitle';

export class MaterialPage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>Leuke opdrachten</PageTitle>
                <PageBody>
                    <p>Hier vind je links naar de opdrachten die we tijdens de Coderdojo gebruiken.</p>
                </PageBody>
            </Page>
        )
    }
}