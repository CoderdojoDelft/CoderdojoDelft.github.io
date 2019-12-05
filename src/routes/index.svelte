<script>
	import {nextEditions, nlLongDate} from './_editions.js';
	// import { getPageInfo } from '../util'

	// setPageInfo({ heading: 'Index'})
</script>

<svelte:head>
	<title>Welkom bij CoderDojo Delft!</title>
</svelte:head>
<!-- <template lang="test" some=123><div>Hey</div></template>
 --><!-- <template some=123><div>Hey2</div></template> -->
 <a href="https://opendelft.info/" target="_blank">test</a>
<h2>Welkom bij CoderDojo Delft!</h2>
<p>
	CoderDojo Delft realiseert samen met enthousiaste vrijwilligers een platform waar kinderen van 8 tot 14 jaar in een technische stad als Delft de mogelijkheid krijgen om kennis te maken met een nog ontbrekend vak in het basisonderwijs en voortgezet onderwijs: programmeren.
</p>
<p>
	Bij CoderDojo Delft leren kinderen programmeren, websites te bouwen, apps te ontwikkelen, programma’s te maken, games te maken en meer! We komen regelmatig bij elkaar om te leren programmeren, maar ook om andere deelnemers te ontmoeten. De CoderDojo is gratis bij te wonen omdat het volledig georganiseerd en begeleid wordt door vrijwilligers (mentoren).
</p>
<p>
	Een belangrijke eigenschap van een CoderDojo is dat het plaatsvindt in een openbare ruimte en voor iedereen toegankelijk is. <a href="https://opendelft.info/" target="_blank" rel="noopener noreferrer">OPEN</a> (voormalig Bibliotheek DOK Delft) is daarom de perfecte plek voor onze bijeenkomsten.
</p>

<h3>Activiteiten</h3>
{#if nextEditions.length > 0}
<p>
	We organiseren een CoderDojo op:
</p>
<p>
	<strong>{nlLongDate(nextEditions[0].date)}</strong>
</p>
<p>
	Kijk op onze pagina <a href="volgendeeditie" rel="prefetch">‘Volgende editie’</a> voor meer informatie over de komende CoderDojo!
</p>
{/if}
<p>
	Voor een overzicht van de komende CoderDojo's, kijk <a href="agenda" rel="prefetch">hier</a>.
</p>

<h3>Andere locaties</h3>
<p>
	Ook op andere plekken in Nederland zijn CoderDojo’s gestart! Geen plek meer in Delft? Meld je dan aan bij een van de andere CoderDojo’s in de buurt:
</p>
<ul>
	<li><a href="http://www.coderdojo-zoetermeer.nl/" target="_blank" rel="noopener noreferrer">CoderDojo Zoetermeer</a></li>
	<li><a href="http://www.coderdojo-westland.nl/" target="_blank" rel="noopener noreferrer">CoderDojo Westland</a></li>
	<li><a href="https://www.coderdojo-denhaag.nl/" target="_blank" rel="noopener noreferrer">CoderDojo Den Haag</a></li>
	<li><a href="https://coderdojo-rotterdam.nl/" target="_blank" rel="noopener noreferrer">CoderDojo Rotterdam</a></li>
</ul>

<h3>Thuis verder</h3>
<p>
	Als je de CoderDojo leuk vond, kun je daar natuurlijk thuis verder gaan met programmeren! We hebben een verzameling websites voor je verzameld waarmee je aan de slag kunt. Klik <a href="watwedoen" rel="prefetch">hier</a>.
</p>