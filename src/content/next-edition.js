export const nextEditions = ((today) => {
    const editions = [
        {
            date: new Date(2019, 11, 21),
            displayDate: 'zaterdag 21 december 2019',
            registrationStart: 'zondag 8 december 2019',
            registrationUrl: '//eventbrite.nl/tickets-external?eid=57044489604'
        },
        {
            date: new Date(2020, 0, 25),
            displayDate: 'zaterdag 25 januari 2020',
            registrationStart: 'zondag 12 januari 2020',
            registrationUrl: 'https://dok.op-shop.nl/793/coderdojo/25-01-2020'
        },
        {
            date: new Date(2020, 1, 22),
            displayDate: 'zaterdag 22 februari 2020',
            registrationStart: 'zondag 9 februari 2020',
            registrationUrl: 'https://www.dok.info/jeugd/coderdojo.html'
        },
        {
            date: new Date(2020, 2, 28),
            displayDate: 'zaterdag 28 maart 2020',
            registrationStart: 'zondag 15 maart 2020',
            registrationUrl: 'https://www.dok.info/jeugd/coderdojo.html'
        },
        {
            date: new Date(2020, 3, 25),
            displayDate: 'zaterdag 25 april 2020',
            registrationStart: 'zondag 12 april 2020',
            registrationUrl: 'https://www.dok.info/jeugd/coderdojo.html'
        },
        {
            date: new Date(2020, 4, 23),
            displayDate: 'zaterdag 23 mei 2020',
            registrationStart: 'zondag 10 mei 2020',
            registrationUrl: 'https://www.dok.info/jeugd/coderdojo.html'
        },
        {
            date: new Date(2020, 5, 27),
            displayDate: 'zaterdag 27 juni 2020',
            registrationStart: 'zondag 14 juni 2020',
            registrationUrl: 'https://www.dok.info/jeugd/coderdojo.html'
        },
        {
            date: new Date(2020, 6, 25),
            displayDate: 'zaterdag 25 juli 2020',
            registrationStart: 'zondag 12 juli 2020',
            registrationUrl: 'https://www.dok.info/jeugd/coderdojo.html'
        },
        {
            date: new Date(2020, 7, 22),
            displayDate: 'zaterdag 22 augustus 2020',
            registrationStart: 'zondag 9 augustus 2020',
            registrationUrl: 'https://www.dok.info/jeugd/coderdojo.html'
        },
        {
            date: new Date(2020, 8, 26),
            displayDate: 'zaterdag 26 september 2020',
            registrationStart: 'zondag 13 september 2020',
            registrationUrl: 'https://www.dok.info/jeugd/coderdojo.html'
        },
        {
            date: new Date(2020, 9, 24),
            displayDate: 'zaterdag 24 oktober 2020',
            registrationStart: 'zondag 11 okotber 2020',
            registrationUrl: 'https://www.dok.info/jeugd/coderdojo.html'
        },
        {
            date: new Date(2020, 10, 28),
            displayDate: 'zaterdag 28 november 2020',
            registrationStart: 'zondag 15 november 2020',
            registrationUrl: 'https://www.dok.info/jeugd/coderdojo.html'
        },
        {
            date: new Date(2020, 11, 19),
            displayDate: 'zaterdag 19 december 2020',
            registrationStart: 'zondag 3 december 2020',
            registrationUrl: 'https://www.dok.info/jeugd/coderdojo.html'
        },
    ].filter((edition) => {
        return edition.date.getTime() > today.getTime();
    }).sort((a, b) => {
        if (a.date.getTime() < b.date.getTime()) {
            return -1;
        }

        return 1;
    });

    return editions;
})(new Date());

export const nextEdition = ((today) => {
    return nextEditions.filter((edition) => {
        return edition.date.getTime() > today.getTime();
    }).shift();
})(new Date());
