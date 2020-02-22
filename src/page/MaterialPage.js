import React, { Component } from 'react';

import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { PageTitle } from '../element/PageTitle';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export class MaterialPage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>Aan de slag!</PageTitle>
                <PageBody>
                    <Tabs>
                        <TabList>
                            <Tab>Scratch</Tab>
                            <Tab>Python</Tab>
                            <Tab>HTML</Tab>
                            <Tab>Microbit/Arduino</Tab>
                            <Tab>3D printer</Tab>
                            <Tab>Boeken</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Scratch opdrachten</h2>
                            <p>Hieronder vind je links naar de opdrachten die we voor Scratch gebruiken. Je kunt dus thuis gewoon verder werken of aan iets nieuws beginnen!</p>
                        </TabPanel>
                        <TabPanel>
                            Python opdrachten
                        </TabPanel>
                        <TabPanel>
                            Website maken
                        </TabPanel>
                        <TabPanel>
                            Microbit/Arduino
                        </TabPanel>
                        <TabPanel>
                            3D printer / ThinkerCad
                        </TabPanel>
                        <TabPanel>
                            Leuke programmeerboeken
                        </TabPanel>
                    </Tabs>

                </PageBody>
            </Page>
        )
    }
}