import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HeaderComponent } from './component/HeaderComponent';
import { MenuComponent } from './component/MenuComponent';
import { Container } from './element/Container';
import { Content } from './element/Content';
import { AboutUsPage } from './page/AboutUsPage';
import { ExtraInfoPage } from './page/ExtraInfoPage';
import { HomePage } from './page/HomePage';
import { MentorPage } from './page/MentorPage';
import { NextEditionPage } from './page/NextEditionPage';
import { WhatWeDoPage } from './page/WhatWeDoPage';
import { routes } from './routes';
import { GlobalStyle } from './style/global-style';
import { AgendaPage } from './page/AgendaPage';


export class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <GlobalStyle />
                    <Container>
                        <Content>
                            <HeaderComponent />
                        </Content>
                    </Container>
                    <Container>
                        <MenuComponent />
                        <Content>
                            <Route exact path={routes.home.url} component={ HomePage } />
                            <Route exact path={routes.whatWeDo.url} component= { WhatWeDoPage } />
                            <Route exact path={routes.nextEdition.url} component={ NextEditionPage } />
                            <Route exact path={routes.agenda.url} component={ AgendaPage } />
                            <Route exact path={routes.aboutUs.url} component={ AboutUsPage } />
                            <Route exact path={routes.extraInfo.url} component={ ExtraInfoPage } />
                            <Route exact path={routes.mentors.url} component={ MentorPage } />
                        </Content>
                    </Container>
                </React.Fragment>
            </Router>
        );
    }
}
