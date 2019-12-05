import editions from './_editions.json';

function minus2weeks(date) {
	return new Date(date.getTime() - 2 * 7 * 24 * 60 * 60 * 1000);
}

export function nlLongDate(date) {
	return date.toLocaleDateString('nl-NL', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
}

export let nextEditions = (editions
	).map(
		({date, eventbrite}) => ({
			date: new Date(date + 'T14:00'),
			registrationDate: minus2weeks(new Date(date + 'T12:00')),
			eventbrite,
		})
	).filter(
		({date}) => date.getTime() > Date.now()
	).sort(
		(a, b) => a.date.getTime() - b.date.getTime()
	);

export let nextEdition = nextEditions.length > 0 && nextEditions[0];
