import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

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
import { MaterialPage } from './page/MaterialPage';
import { routes } from './routes';
import './style/main.css';
import { AgendaPage } from './page/AgendaPage';

export const App = () => {
    return (
        <HashRouter>
            <Container>
                <Content>
                    <HeaderComponent />
                </Content>
            </Container>
            <Container>
                <MenuComponent />
                <Content>
                    <Routes>
                        <Route path={routes.home.url} element={<HomePage />} />
                        <Route path={routes.whatWeDo.url} element={<WhatWeDoPage />} />
                        <Route path={routes.nextEdition.url} element={<NextEditionPage />} />
                        <Route path={routes.agenda.url} element={<AgendaPage />} />
                        <Route path={routes.aboutUs.url} element={<AboutUsPage />} />
                        <Route path={routes.extraInfo.url} element={<ExtraInfoPage />} />
                        <Route path={routes.mentors.url} element={<MentorPage />} />
                        <Route path={routes.material.url} element={<MaterialPage />} />
                    </Routes>
                </Content>
            </Container>
        </HashRouter>
    );
};

