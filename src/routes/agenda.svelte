<script>
	import { nextEditions, nlLongDate } from './_editions.js';
	// import { setPageInfo } from '../util'
	// setPageInfo({ heading: 'Agenda'})
</script>

<svelte:head>
	<title>Agenda</title>
</svelte:head>

<h2>Komende Dojo's</h2>
<p>
    Coderdojo Delft wordt georganiseerd op de 4e zaterdag van de maand.
    Af en toe wijken we hier vanaf als dit door feestdagen anders niet uitkomt.
    In de zomervakantie is er geen Dojo.
</p>
<p>
	Hieronder vind je een overzicht van de komende edities:
</p>
<ol>
{#each nextEditions as {date}}
	<li>{nlLongDate(date)}</li>
{:else}
	<li class="emptylist">Op dit moment is er nog geen nieuwe dojo gepland.</li>
{/each}
</ol>
<br>
<p>
	Je kunt je vanaf de zondag 2 weken voor de Dojo <a href="volgendeeditie" rel="prefetch">hier</a> aanmelden.
</p>
