const editions = require('./editions.json');

function minus2weeks(datestr) {
    return new Date(datestr.getTime() - 13 * 24 * 60 *60 * 1000)
}


function nlLongDate(date) {
    return date.toLocaleDateString('nl-NL', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
}

function nlShortDate(date) {
    let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    let yyyy = date.getFullYear();
    return (dd + "-" + MM + "-" + yyyy);
}

export let nextEditions = (editions
    ).map(
        ({datestr, urlNr}) => ({
            date: new Date(datestr + 'T15:00'),
            registrationStart: nlLongDate(minus2weeks(new Date (datestr + 'T12:00'))),
            urlNr,
            registrationUrl: 'https://dok.op-shop.nl/'+ urlNr +'/online-coderdojo/' + nlShortDate(new Date (datestr)),
            displayDate: nlLongDate(new Date(datestr))
        })
    ).filter(
        ({date}) => date.getTime() > Date.now()
    ).sort(
        (a, b) => a.date.getTime() - b.date.getTime()
    );

export let nextEdition = nextEditions.length > 0 && nextEditions[0]