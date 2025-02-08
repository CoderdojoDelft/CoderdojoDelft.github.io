import React, { Component } from 'react';
import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { PageTitle } from '../element/PageTitle';


export class MentorPage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>Mentor worden?</PageTitle>
                <PageBody>
                    <p>Zonder vrijwilligers geen CoderDojo! Er komt veel kijken bij de organisatie van een CoderDojo. We draaien op de inzet van vrijwilligers(mentoren) die graag hun kennis delen of hun tijd willen inzetten om kinderen verder te helpen.</p>
                    <p>Weet je veel van programmeren en vind jij het leuk om kennis over te dragen? Meld je dan aan als mentor! Ook als je niet direct technisch onderlegd bent, kun je veel voor ons doen:</p>
                    <ul>
                        <li>Kinderen begeleiden met hun uitdagingen</li>
                        <li>Nieuwe workshops bedenken, maken en geven</li>
                        <li>Achter de schermen innovatieve dingen bedenken voor de Dojo</li>
                    </ul>
                    <h3>Wat vragen we van een vrijwilliger?</h3>
                    <ul>
                        <li>Je hebt affiniteit met programmeren, maar hoeft zeker geen programmeur te zijn!</li>
                        <li>Je kunt met enige regelmaat aanwezig zijn bij een Dojo (deze organiseren we elke maand, meestal op de 4e zaterdag)</li>
                        <li>Je bent in bezit van een VOG of kan er een aanvragen. In de meeste gevallen vergoeden we de kosten.</li>
                        <li>Je gaat akkoord met ons <a href="/doc/Protocol_Veiligheid.pdf" target="_blank" rel="noopener noreferrer">Protocol Veiligheid CoderDojo Nederland</a> en onze <a href="/doc/Vrijwilligers_Overeenkomst.pdf" target="_blank" rel="noopener noreferrer">Vrijwilligers Overeenkomst</a></li>
                        <li>Vanaf januari 2020 vallen we onder DOK Delft. Voor meer informatie, zie de <a href="https://www.dok.info/over-dok/vrijwilligers.html">website van DOK Delft</a>.</li>
                    </ul>
                    <h3>Aanmelden</h3>
                    <p>Heb jij ook nog eens veel geduld en ben je kindvriendelijk?</p>
                    <h2>mail naar <a href="mailto:info@coderdojo-delft.nl">info@coderdojo-delft.nl</a></h2>
                </PageBody>
            </Page>
        );
    }
}
