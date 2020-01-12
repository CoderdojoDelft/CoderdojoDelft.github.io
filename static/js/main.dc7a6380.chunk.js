(this["webpackJsonpcoderdojodelft.github.io"]=this["webpackJsonpcoderdojodelft.github.io"]||[]).push([[0],{27:function(e,n,t){e.exports=t(38)},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(19),l=t.n(o),i=t(4),d=t(5),m=t(7),c=t(6),s=t(8),u=t(41),h=t(24),p=t(2),g=t(3),j={black:"#000000"},k={charcoal:"#444444"},f={smoke:"#f0f0f0",white:"#ffffff"},b={selective:"#fab800"},w=992,v=950,E=660,D="0",z="4px",y="8px",O="16px",x="32px",C="64px",W={n0:"48px",n1:"24px",n2:"20px",n3:"15px"},_={n0:1,n1:1.4};function S(){var e=Object(p.a)(["\n    display: block;\n    width: 100%;\n    max-width: 570px;\n    height: auto;\n"]);return S=function(){return e},e}function V(){var e=Object(p.a)(["\n    display: block;\n    padding: 0 ","\n    \n    @media only screen and (min-width: ","px) {\n        padding: 0 ","\n    }\n"]);return V=function(){return e},e}var A=g.b.a(V(),y,w,x),B=g.b.img(S());function U(){return r.a.createElement("header",null,r.a.createElement(A,{href:"/"},r.a.createElement(B,{src:"/img/logo.png",alt:"Coder Dojo Delft"})))}var K=t(12),M=t(40),N=t(22);function H(){var e=Object(p.a)(["\n    display: inline-block;\n    \n    svg {\n        width: 100%;\n        height: auto;\n    }\n"]);return H=function(){return e},e}var I=g.b.span(H());function T(e){var n="normal"===e.size?24:48,t="normal"===e.size?24:48;return r.a.createElement(I,{style:{width:"".concat(n,"px"),height:"".concat(t,"px")},dangerouslySetInnerHTML:{__html:N[e.name].toSVG()}})}var J={home:{url:"/",title:"Home",weight:0},whatWeDo:{url:"/watwedoen",title:"Wat doen we?",weight:10},nextEdition:{url:"/volgendeeditie",title:"Volgende editie",weight:20},agenda:{url:"/agenda",title:"Agenda",weight:30},aboutUs:{url:"/overons",title:"Over ons",weight:40},extraInfo:{url:"/extrainfo",title:"Extra info",weight:50},mentors:{url:"/mentoren",title:"Mentor worden",weight:60}};function F(){var e=Object(p.a)(["\n    position: absolute;\n    right: 0;\n    top: 0;\n    display: block;\n    margin: ",";\n    cursor: pointer;\n    \n    @media only screen and (min-width: ","px) {\n        display: none;\n    }\n"]);return F=function(){return e},e}function P(){var e=Object(p.a)(["\n    position: absolute;\n    right: 0;\n    top: 0;\n    display: block;\n    margin: ",";\n    cursor: pointer;\n    \n    @media only screen and (min-width: ","px) {\n        display: none;\n    }\n"]);return P=function(){return e},e}function Z(){var e=Object(p.a)(["\n    display: inline-block;\n    padding: "," ",";\n    color: ",";\n    font-family: 'Bebas Neue W01 Regular';\n    font-size: ",";\n    line-height: ",";\n    text-decoration: none;\n    text-align: right;\n    \n    &:hover,\n    &.active {\n        background-color: ",";\n        color: ",";\n    }\n    \n    @media only screen and (min-width: ","px) {\n        font-size: ",";\n    }\n"]);return Z=function(){return e},e}function L(){var e=Object(p.a)(["\n    padding: "," ",";\n    \n    @media only screen and (min-width: ","px) {\n        padding: "," "," "," ",";\n    }\n"]);return L=function(){return e},e}function R(){var e=Object(p.a)(["\n    @media only screen and (max-width: ","px) {\n        position: fixed;\n        left: 0;\n        top: 0;\n        width: 100vw;\n        height: 100vh;\n        background-color: ",";\n        display: none;\n        overflow: auto;\n        \n        &.open {\n            display: block;\n        }\n    }\n    \n    @media only screen and (min-width: ","px) {\n        flex-shrink: 0;\n        flex-grow: 1;\n        margin-right: ",";\n        text-align: right;\n    }\n"]);return R=function(){return e},e}var q=g.b.nav(R(),w-1,f.white,w,y),G=g.b.ul(L(),C,O,w,y,D,y,y),Q=Object(g.b)(M.a)(Z(),z,y,j.black,W.n0,_.n0,b.selective,f.white,w,W.n1),X=g.b.a(P(),x,w),Y=g.b.a(F(),x,w),$=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(m.a)(this,Object(c.a)(n).call(this,e))).state={menuOpen:!1},t.handleClose=t.handleClose.bind(Object(K.a)(t)),t.handleOpen=t.handleOpen.bind(Object(K.a)(t)),t}return Object(s.a)(n,e),Object(d.a)(n,[{key:"handleClose",value:function(){this.setState({menuOpen:!1})}},{key:"handleOpen",value:function(){this.setState({menuOpen:!0})}},{key:"render",value:function(){var e=Object.keys(J).sort((function(e,n){return J[e].weight<J[n].weight?-1:J[e].weight>J[n].weight?1:0}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{onClick:this.handleOpen},r.a.createElement(T,{name:"three-bars",size:"large"})),r.a.createElement(q,{className:this.state.menuOpen?"open":"close"},r.a.createElement(X,{onClick:this.handleClose},r.a.createElement(T,{name:"x"})),r.a.createElement(G,{onClick:this.handleClose},e.map((function(e,n){return r.a.createElement("li",{key:n},r.a.createElement(Q,{exact:!0,to:J[e].url,activeClassName:"active"},J[e].title))})))))}}]),n}(a.Component);function ee(){var e=Object(p.a)(["\n    width: 100%;\n    \n    @media only screen and (min-width: ","px) {\n        display: flex;\n        justify-content: flex-end;\n        margin: 0 auto;\n        width: ","px;\n    }\n"]);return ee=function(){return e},e}var ne=g.b.div(ee(),w,v);function te(){var e=Object(p.a)(["\n    width: 100%;\n    \n    @media only screen and (min-width: ","px) {\n        width: ","px;\n    }\n"]);return te=function(){return e},e}var ae=g.b.div(te(),w,E);function re(){var e=Object(p.a)(["\n    padding: ",";\n"]);return re=function(){return e},e}var oe=g.b.article(re(),y);function le(){var e=Object(p.a)(["\n    padding: ",";\n    background-color: ",";\n    box-shadow: 10px 5px 5px red;\n    font-size: ",";\n    font-family: Arial, Helvetica, Tahoma, san-serif;\n    line-height: ","\n    color: ",";\n    border-radius: 3px;\n    box-shadow: 0 8px 6px -6px ",";\n    \n    h2 {\n        font-size: ",";\n        font-family: 'Bebas Neue W01 Regular';\n    }\n    \n    h3 {\n        font-size: ",";\n        font-family: 'Bebas Neue W01 Regular';\n    }\n      \n    h2,\n    h3 {\n        padding: "," "," ",";\n    }\n    \n    p,\n    ul {\n        padding: "," "," ",";\n    }\n    \n    b,\n    strong {\n        font-weight: bold;\n    }\n    \n    i,\n    em {\n        font-style: italic;\n    }\n    \n    a {\n        color: ",";\n        text-decoration: underline;\n    }\n    \n    ul {\n        padding-left: 15px;\n        list-style-type: disc;\n    }\n"]);return le=function(){return e},e}var ie=g.b.div(le(),O,f.white,W.n3,_.n1,k.charcoal,k.charcoal,W.n1,W.n2,D,D,z,D,D,O,k.charcoal);function de(){var e=Object(p.a)(["\n    padding: "," ",";\n    margin: 0 0 ",";\n    background-color: ",";\n    color: ",";\n    font-family: 'Bebas Neue W01 Regular';\n    font-size: ",";\n    line-height: ",";\n    border-radius: 3px;\n    box-shadow: 0 8px 6px -6px ",";\n"]);return de=function(){return e},e}var me,ce=g.b.h1(de(),y,O,O,b.selective,f.white,W.n1,_.n0,k.charcoal),se=function(e){function n(){return Object(i.a)(this,n),Object(m.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(oe,null,r.a.createElement(ce,null,"Over ons"),r.a.createElement(ie,null,r.a.createElement("p",null,"CoderDojo Delft is opgericht eind 2015 door Koen en Judith en organiseert sinds die tijd iedere maand een gratis bijeenkomst om kinderen tussen 7 en 14 jaar kennis te laten maken met programmeren. Voor meer informatie wat Coderdojo is zie ",r.a.createElement("a",{href:"https://coderdojo.nl/informatie/over-coderdojo",target:"_blank",rel:"noopener noreferrer"},"https://coderdojo.nl/informatie/over-coderdojo")),r.a.createElement("p",null,"Coderdojo is niet alleen om kennis te maken met programmeren \u2013 ook kinderen die de eerste stappen al gezet hebben zijn welkom om hun skills verder uit te breiden!"),r.a.createElement("p",null,"Inmiddels is CoderDojo Delft uitgegroeid tot een groep van meer dan 10 enthousiaste mentoren is het stokje van Koen en Judith overgenomen. Heb je vragen? We zijn te bereiken op ",r.a.createElement("a",{href:"mailto:info@coderdojo-delft.nl"},"info@coderdojo-delft.nl"))))}}]),n}(a.Component),ue=t(18),he=function(e){function n(){return Object(i.a)(this,n),Object(m.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(oe,null,r.a.createElement(ce,null,"Extra informatie"),r.a.createElement(ie,null,r.a.createElement("p",null,"Weet je niet zo goed waar je moet beginnen? Kijk dan even naar deze veelgestelde vragen.",r.a.createElement("br",null),"Kom je er nog steeds niet uit? Neem dan gerust contact met ons op: ",r.a.createElement("a",{href:"mailto:info@coderdojo-delft.nl"},"info@coderdojo-delft.nl"),"."),r.a.createElement("h2",null,"Ik ben nog nooit naar CoderDojo geweest."),r.a.createElement("p",null,"Voor alles is er een eerste keer! De dojo is voor iedereen toegankelijk. De beste manier om kennis te leren maken is om gewoon een keer langs te komen. Zorg wel dat je je eerst registreert voordat je komt."),r.a.createElement("h2",null,"Kan ik zomaar naar CoderDojo komen?"),r.a.createElement("p",null,"Nee, om er voor te zorgen dat we niet over onze capaciteit gaan en een goede administratie van aanwezigen hebben moet iedereen zich registreren om deel te kunnen nemen aan een CoderDojo."),r.a.createElement("h2",null,"Voor welke leeftijd is CoderDojo?"),r.a.createElement("p",null,"De maximum leeftijd die wij hanteren is 14 jaar. De minimumleeftijd is afhankelijk van het thema van de bijeenkomst. Normaal gesproken is de minimumleeftijd die wij adviseren 8 jaar. Als je 7 jaar bent en je wilt toch graag komen, dan mag dat, maar alleen als er altijd een ouder aanwezig is voor begrijpend lezen en schrijven."),r.a.createElement("h2",null,"Wat doen kinderen bij CoderDojo?"),r.a.createElement("p",null,"Bij CoderDojo zijn we altijd bezig met techniek of ontwikkeling van competenties die nodig zijn in het beroepsveld. Daarnaast worden kinderen ook \u2018mediawijs\u2019 gemaakt waardoor ze leren omgaan met internet en techniek. Wij stimuleren onderzoekend en exploratief gedrag en sporen alle kinderen aan om hun interesses te volgens en elkaar nieuwe dingen te leren."),r.a.createElement("h2",null,"Is CoderDojo geschikt voor mijn kind?"),r.a.createElement("p",null,"Wij verwelkomen iedereen! Echter merken we dat vooral kinderen die interesse hebben in techniek blijven hangen en het naar hun zin hebben. We behandelen steeds een ander onderwerp, dus kijk samen met je zoon / dochter naar het onderwerp om te kijken of ze het interessant vinden om hier meer over te leren."),r.a.createElement("h2",null,"Hoe kan ik mijn kind inschrijven?"),r.a.createElement("p",null,"Voor elke dojo (datum en vestiging) moet afzonderlijk geregistreerd worden. Er is ruimte voor een maximaal aantal deelnemers. Elke deelnemer heeft zijn eigen ticket nodig, en je kunt maximaal twee tickets reserveren. Als je als groep een CoderDojo wil doen, neem dan liever eerst contact met ons op (",r.a.createElement("a",{href:"mailto:info@coderdojo-delft.nl"},"info@coderdojo-delft.nl"),")."),r.a.createElement("h2",null,"Ik heb me aangemeld, maar ik kan toch niet komen, wat nu?"),r.a.createElement("p",null,"Heb je een ticket en kun je toch niet komen, laat het ons dan zo snel mogelijk weten via ",r.a.createElement("a",{href:"mailto:info@coderdojo-delft.nl"},"info@coderdojo-delft.nl"),". We kunnen dan weer iemand anders blij maken. "),r.a.createElement("h2",null,"Moet ik al mijn kinderen apart inschrijven?"),r.a.createElement("p",null,"Ja, om er voor te zorgen dat we niet over onze capaciteit gaan en een goede administratie van aanwezigen hebben, moet iedereen zich registreren om deel te kunnen nemen aan een CoderDojo."),r.a.createElement("h2",null,"Wat moet ik meenemen?"),r.a.createElement("p",null,"Elk kind moet een eigen laptop hebben, je kunt geen tablet zoals een iPad gebruiken.  Zorg er voor dat de laptop werkt, kan opladen en verbinding kan maken met draadloos internet! Zorg ook dat je kind de nodige wachtwoorden heeft om software te kunnen installeren of indien nodig instellingen te kunnen wijzigen. We hebben een klein aantal laptops te leen voor kinderen zonder laptop."),r.a.createElement("h2",null,"Ik ben bij CoderDojo geweest en wil nu thuis verder, hoe ga ik te werk?"),r.a.createElement("p",null,"In het overzicht van ",r.a.createElement(ue.a,{to:J.whatWeDo.url},"wat we doen")," staan ook tips over hoe je thuis aan de slag kunt.")))}}]),n}(a.Component),pe=(me=new Date,[{date:new Date(2019,11,21),displayDate:"zaterdag 21 december 2019",registrationStart:"zondag 8 december 2019",registrationUrl:"//eventbrite.nl/tickets-external?eid=57044489604"},{date:new Date(2020,0,25),displayDate:"zaterdag 25 januari 2020",registrationStart:"zondag 12 januari 2020",registrationUrl:"https://dok.op-shop.nl/793/coderdojo/25-01-2020"},{date:new Date(2020,1,22),displayDate:"zaterdag 22 februari 2020",registrationStart:"zondag 9 februari 2020",registrationUrl:"https://www.dok.info/jeugd/coderdojo.html"},{date:new Date(2020,2,28),displayDate:"zaterdag 28 maart 2020",registrationStart:"zondag 15 maart 2020",registrationUrl:"https://www.dok.info/jeugd/coderdojo.html"},{date:new Date(2020,3,25),displayDate:"zaterdag 25 april 2020",registrationStart:"zondag 12 april 2020",registrationUrl:"https://www.dok.info/jeugd/coderdojo.html"},{date:new Date(2020,4,23),displayDate:"zaterdag 23 mei 2020",registrationStart:"zondag 10 mei 2020",registrationUrl:"https://www.dok.info/jeugd/coderdojo.html"},{date:new Date(2020,5,27),displayDate:"zaterdag 27 juni 2020",registrationStart:"zondag 14 juni 2020",registrationUrl:"https://www.dok.info/jeugd/coderdojo.html"},{date:new Date(2020,6,25),displayDate:"zaterdag 25 juli 2020",registrationStart:"zondag 12 juli 2020",registrationUrl:"https://www.dok.info/jeugd/coderdojo.html"},{date:new Date(2020,7,22),displayDate:"zaterdag 22 augustus 2020",registrationStart:"zondag 9 augustus 2020",registrationUrl:"https://www.dok.info/jeugd/coderdojo.html"},{date:new Date(2020,8,26),displayDate:"zaterdag 26 september 2020",registrationStart:"zondag 13 september 2020",registrationUrl:"https://www.dok.info/jeugd/coderdojo.html"},{date:new Date(2020,9,24),displayDate:"zaterdag 24 oktober 2020",registrationStart:"zondag 11 okotber 2020",registrationUrl:"https://www.dok.info/jeugd/coderdojo.html"},{date:new Date(2020,10,28),displayDate:"zaterdag 28 november 2020",registrationStart:"zondag 15 november 2020",registrationUrl:"https://www.dok.info/jeugd/coderdojo.html"},{date:new Date(2020,11,19),displayDate:"zaterdag 19 december 2020",registrationStart:"zondag 3 december 2020",registrationUrl:"https://www.dok.info/jeugd/coderdojo.html"}].filter((function(e){return e.date.getTime()>me.getTime()})).sort((function(e,n){return e.date.getTime()<n.date.getTime()?-1:1}))),ge=function(e){return pe.filter((function(n){return n.date.getTime()>e.getTime()})).shift()}(new Date),je=function(e){function n(){return Object(i.a)(this,n),Object(m.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e;return ge&&(e=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"We organiseren een CoderDojo op:"),r.a.createElement("p",null,r.a.createElement("strong",null,ge.displayDate)),r.a.createElement("p",null,"Kijk op onze pagina ",r.a.createElement(ue.a,{to:J.nextEdition.url},"\u2018Volgende editie\u2019")," voor meer informatie over de komende CoderDojo!"))),r.a.createElement(oe,null,r.a.createElement(ce,null,"Welkom bij CoderDojo Delft!"),r.a.createElement(ie,null,r.a.createElement("h2",null,"Welkom bij CoderDojo Delft!"),r.a.createElement("p",null,"CoderDojo Delft realiseert samen met enthousiaste vrijwilligers een platform waar kinderen van 8 tot 14 jaar in een technische stad als Delft de mogelijkheid krijgen om kennis te maken met een nog ontbrekend vak in het basisonderwijs en voortgezet onderwijs: programmeren."),r.a.createElement("p",null,"Bij CoderDojo Delft leren kinderen programmeren, websites te bouwen, apps te ontwikkelen, programma\u2019s te maken, games te maken en meer! We komen regelmatig bij elkaar om te leren programmeren, maar ook om andere deelnemers te ontmoeten. De CoderDojo is gratis bij te wonen omdat het volledig georganiseerd en begeleid wordt door vrijwilligers (mentoren)."),r.a.createElement("p",null,"Een belangrijke eigenschap van een CoderDojo is dat het plaatsvindt in een openbare ruimte en voor iedereen toegankelijk is. ",r.a.createElement("a",{href:"https://opendelft.info/"},"OPEN")," (voormalig Bibliotheek DOK Delft) is daarom de perfecte plek voor onze bijeenkomsten."),r.a.createElement("h3",null,"Activiteiten"),e,r.a.createElement("p",null,"Voor een overzicht van de komende CoderDojo's, kijk ",r.a.createElement(ue.a,{to:J.agenda.url},"hier"),"."),r.a.createElement("h3",null,"Andere locaties"),r.a.createElement("p",null,"Ook op andere plekken in Nederland zijn CoderDojo\u2019s gestart! Geen plek meer in Delft? Meld je dan aan bij een van de andere CoderDojo\u2019s in de buurt:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.coderdojo-zoetermeer.nl/",target:"_blank",rel:"noopener noreferrer"},"CoderDojo Zoetermeer")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.coderdojo-westland.nl/",target:"_blank",rel:"noopener noreferrer"},"CoderDojo Westland")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.coderdojo-denhaag.nl/",target:"_blank",rel:"noopener noreferrer"},"CoderDojo Den Haag")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://coderdojo-rotterdam.nl/",target:"_blank",rel:"noopener noreferrer"},"CoderDojo Rotterdam"))),r.a.createElement("h3",null,"Thuis verder"),r.a.createElement("p",null,"Als je de CoderDojo leuk vond, kun je daar natuurlijk thuis verder gaan met programmeren! We hebben een verzameling websites voor je verzameld waarmee je aan de slag kunt. Klik  ",r.a.createElement(ue.a,{to:J.whatWeDo.url},"hier"),".")))}}]),n}(a.Component),ke=function(e){function n(){return Object(i.a)(this,n),Object(m.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(oe,null,r.a.createElement(ce,null,"Mentor worden?"),r.a.createElement(ie,null,r.a.createElement("p",null,"Zonder vrijwilligers geen CoderDojo! Er komt veel kijken bij de organisatie van een CoderDojo. We draaien op de inzet van vrijwilligers(mentoren) die graag hun kennis delen of hun tijd willen inzetten om kinderen verder te helpen."),r.a.createElement("p",null,"Weet je veel van programmeren en vind jij het leuk om kennis over te dragen? Meld je dan aan als mentor! Ook als je niet direct technisch onderlegd bent, kun je veel voor ons doen:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Kinderen begeleiden met hun uitdagingen"),r.a.createElement("li",null,"Nieuwe workshops bedenken, maken en geven"),r.a.createElement("li",null,"Achter de schermen innovatieve dingen bedenken voor de Dojo")),r.a.createElement("h3",null,"Wat vragen we van een vrijwilliger?"),r.a.createElement("ul",null,r.a.createElement("li",null,"Je hebt affiniteit met programmeren, maar hoeft zeker geen programmeur te zijn!"),r.a.createElement("li",null,"Je kunt met enige regelmaat aanwezig zijn bij een Dojo (deze organiseren we elke maand, meestal op de 4e zaterdag)"),r.a.createElement("li",null,"Je bent in bezit van een VOG of kan er een aanvragen. In de meeste gevallen vergoeden we de kosten."),r.a.createElement("li",null,"Je gaat akkoord met ons ",r.a.createElement("a",{href:"/doc/Protocol_Veiligheid.pdf",target:"_blank",rel:"noopener noreferrer"},"Protocol Veiligheid CoderDojo Nederland")," en onze ",r.a.createElement("a",{href:"/doc/Vrijwilligers_Overeenkomst.pdf",target:"_blank",rel:"noopener noreferrer"},"Vrijwilligers Overeenkomst")),r.a.createElement("li",null,"Vanaf januari 2020 vallen we onder DOK Delft. Voor meer informatie, zie de ",r.a.createElement("a",{href:"https://www.dok.info/over-dok/vrijwilligers.html"},"website van DOK Delft"),".")),r.a.createElement("h3",null,"Aanmelden"),r.a.createElement("p",null,"Heb jij ook nog eens veel geduld en ben je kindvriendelijk?"),r.a.createElement("h2",null,r.a.createElement("a",{href:"https://docs.google.com/forms/d/1MFSfIiJ98OUiN8yZC5_GIxQKEZeeM4Q1jDVstpo31RA/viewform?c=0&w=1&usp=mail_form_link",target:"_blank",rel:"noopener noreferrer"},"Meld je aan!"))))}}]),n}(a.Component),fe=function(e){function n(){return Object(i.a)(this,n),Object(m.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(d.a)(n,[{key:"noDojos",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Op dit moment is er nog geen nieuwe dojo gepland."),r.a.createElement("p",null,"Voor een overzicht van de komende CoderDojo's, kijk ",r.a.createElement(ue.a,{to:J.agenda.url},"hier"),"."))}},{key:"dojos",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,ge.displayDate),r.a.createElement("p",null,"De volgende CoderDojo in Delft wordt georganiseerd op ",ge.displayDate,". De CoderDojo vindt plaats in OPEN \u2013 de vernieuwde plaats van Bibliotheek DOK Delft en VAK delft (Vesteplein 100). We zullen op de dag zelf de plaats duidelijk aangeven."),r.a.createElement("p",null,"De link om in te schrijven vind je onder aan deze pagina. De inschrijving gaat open op ",ge.registrationStart," om 12:00 (\u2019s middags) \u2013  Wees er snel bij!"),r.a.createElement("p",null,"Voor een overzicht van de komende CoderDojo's, kijk ",r.a.createElement(ue.a,{to:J.agenda.url},"hier"),"."),r.a.createElement("h3",null,"Wat gaan we doen?"),r.a.createElement("ul",null,r.a.createElement("li",null,"Scratch"),r.a.createElement("li",null,"Microbit"),r.a.createElement("li",null,"Arduino"),r.a.createElement("li",null,"Python"),r.a.createElement("li",null,"Websites"),r.a.createElement("li",null,"3D printer")),r.a.createElement("p",null,"Kortom, je mag komen met elk project waar je eerder aan gewerkt hebt. Ben je nog nooit geweest? Dan hebben we opdrachten voor je klaarliggen en helpen we je op weg. Maar je mag natuurlijk ook zelf iets verzinnen. Misschien kun je alvast een karakter tekenen voor in een spel dat je wilt maken, of een filmpje zoeken voor een website die je wilt maken."),r.a.createElement("p",null,r.a.createElement(ue.a,{to:J.whatWeDo.url},"Hier")," vind je meer details over wat je op een CoderDojo kunt doen."),r.a.createElement("h3",null,"Waar?"),r.a.createElement("p",null,"De CoderDojo vindt plaats bij OPEN (Vesteplein 100)."),r.a.createElement("h3",null,"Hoe laat?"),r.a.createElement("p",null,"De CoderDojo is van 14:00 tot 16:00 uur. In deze tijd kun je zelf lekker aan de slag. Aan het einde maken we een rondje, zodat je ook aan de anderen kunt laten zien wat je gemaakt hebt!"),r.a.createElement("h3",null,"Ouders"),r.a.createElement("p",null,"We vinden het erg fijn als ouders actief meehelpen, zeker voor de jongere kinderen (minimaal 8 jaar). Ouders kunnen ondertussen ook gebruik maken van de faciliteiten van de bibliotheek. Er is beperkt zitplek voor ouders aan de tafels van de kinderen."),r.a.createElement("h3",null,"Wat moet ik meenemen?"),r.a.createElement("ul",null,r.a.createElement("li",null,"Een werkende laptop*"),r.a.createElement("li",null,"Een 3-uurtje \u2013 wij zorgen voor een pakje drinken"),r.a.createElement("li",null,"Een goed humeur!")),r.a.createElement("p",null,r.a.createElement("em",null,"*) Zorg dat je laptop minimaal over WiFi, een browser (Chrome / Firefox) beschikt. Vergeet ook je oplader niet. Wij kunnen helaas niet alle kinderen helpen om alles werkend te krijgen dus wij vertrouwen erop dat alles werkt bij binnenkomst! Zorg er ook voor dat er een e-mailadres beschikbaar is om een account aan te kunnen maken voor online programma\u2019s.")),r.a.createElement("p",null,"We hebben een beperkt aantal laptops te leen. Laat het ons via het inschrijfformulier weten als je daarvan gebruik wilt maken."),r.a.createElement("h3",null,"Inschrijven"),r.a.createElement("p",null,"Voor deze Dojo hebben we maar beperkt plek! Er is ruimte voor een maximaal aantal deelnemers. Elke deelnemer heeft zijn eigen ticket nodig, en je kunt maximaal twee tickets reserveren. Als de plekken voor deze CoderDojo bezet zijn, kun je je naam op de wachtlijst zetten, we nemen dan contact met je op zodra er een plek vrijkomt. Laat het ons dus ook weten als je verhinderd bent."),r.a.createElement("p",null,"Vanaf januari 2020 wordt de inschrijving verzorgt door DOK. ",r.a.createElement("a",{href:ge.registrationUrl,target:"_blank",rel:"noopener noreferrer"},"Klik hier")," om naar de inschrijvingspagina te gaan."),r.a.createElement("p",null,r.a.createElement("i",null,"Is de Dojo vol, of kun je niet op die dag? Je kunt ook kijken of er plek is bij een CoderDojo in de buurt: ",r.a.createElement("a",{href:"http://www.coderdojo-zoetermeer.nl",target:"_blank",rel:"noopener noreferrer"},"CoderDojo Zoetermeer"),",  ",r.a.createElement("a",{href:"http://www.coderdojo-denhaag.nl",target:"_blank",rel:"noopener noreferrer"},"CoderDojo Den Haag")," of ",r.a.createElement("a",{href:"http://www.coderdojo-rotterdam.nl",target:"_blank",rel:"noopener noreferrer"},"CoderDojo Rotterdam"),".")))}},{key:"render",value:function(){var e;return e=ge?this.dojos():this.noDojos(),r.a.createElement(oe,null,r.a.createElement(ce,null,"Volgende editie"),r.a.createElement(ie,null,e))}}]),n}(a.Component),be=function(e){function n(){return Object(i.a)(this,n),Object(m.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(oe,null,r.a.createElement(ce,null,"Wat doen we?"),r.a.createElement(ie,null,r.a.createElement("p",null,"Bij CoderDojo gaan we programmeren, maar dat had je waarschijnlijk al begrepen. Er zijn verschillende dingen die je kunt doen. Hieronder vind je een overzichtje. Met meteen wat links, waarmee je ook thuis aan de slag kunt."),r.a.createElement("p",null,"Iedereen tussen de 8 en 14 is welkom. Als je nog nooit geprogrammeerd hebt, hebben we een verzameling opdrachten liggen en helpen we je op weg. En misschien heb je zelf al een idee van iets wat je graag wilt maken. Ook daarmee kunnen we je helpen. En heb je al veel ervaring, maar wil je nog meer leren? Ook dan ben je welkom, we helpen je graag!"),r.a.createElement("h3",null,"Scratch"),r.a.createElement("p",null,"Scratch is een geweldige tool om te beginnen met programmeren.Met Scratch programmeer je je eigen interactieve verhalen, spellen en animaties. Ga naar ",r.a.createElement("a",{href:"http://scratch.mit.edu",target:"_blank",rel:"noopener noreferrer"},"scratch.mit.edu")," om een eigen project te starten."),r.a.createElement("p",null,"De TU Delft heeft een online cursus gemaakt voor Scratch. Hiremee leer je in 6 weken precies hoe Scratch werkt. Deze cursus vind je op ",r.a.createElement("a",{href:"https://www.edx.org/course/scratch-programmeren-voor-kinderen-8",target:"_blank",rel:"noopener noreferrer"},"edX")),r.a.createElement("p",null,"In de verzameling links onderaan deze pagina, vind je veel Scratch voorbeelden"),r.a.createElement("h3",null,"3D printer (ThinkerCAD)"),r.a.createElement("p",null,"We hebben een 3D printer waarop je je eigen ontwerpen kunt printen! Een ontwerp kun je maken met ",r.a.createElement("a",{href:"https://www.tinkercad.com/",target:"_blank",rel:"noopener noreferrer"},"TinkerCad"),". Een goede handeleiding vind je ",r.a.createElement("a",{href:"https://coderdojo-nijmegen.nl/wp-content/uploads/2015/07/tinkercad_guide_nl.pdf",target:"_blank",rel:"noopener noreferrer"},"hier"),". Als je Engels kunt, kun je ook de tutorial in TinkerCad volgen."),r.a.createElement("p",null,"Als je je ontwerp als .OBJ of .STL bestand opslaat (onder de knop 'Export'), dan kun je het bij de CoderDojo laten printen."),r.a.createElement("h3",null,"Websites maken (HTML)"),r.a.createElement("p",null,"Tijdens de CoderDojo kun je een website bouwen die ook echt online te zien is. Dit doen we op ",r.a.createElement("a",{href:"http://neocities.org",target:"_blank",rel:"noopener noreferrer"},"Neocities"),". De sushi met instructies vind je ",r.a.createElement("a",{href:"https://coderdojodelft.gitbooks.io/beginner-html-css-sushi-nl/content/nl/",target:"_blank",rel:"noopener noreferrer"},"hier"),"."),r.a.createElement("h3",null,"Python"),r.a.createElement("p",null,"Python is de programmeertaal waarmee een groot deel van FaceBook is gemaakt. En dat klinkt misschien heel ingewikkeld, maar je kunt het zelf ook leren. Om er eens aan te proeven is het het handigst om een account aan te maken op ",r.a.createElement("a",{href:"https://www.pythonanywhere.com/",target:"_blank",rel:"noopener noreferrer"},"Python Anywhere"),". Als je ermee verder wilt, kun je beter Python ",r.a.createElement("a",{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"},"downloaden")," en installeren."),r.a.createElement("p",null,"Instructies om met Python te beginnen, vind je ",r.a.createElement("a",{href:"https://drive.google.com/open?id=0B5ue9rJQ-LwBaVprWVBkSzVFUDA",target:"_blank",rel:"noopener noreferrer"},"hier")," en ",r.a.createElement("a",{href:"https://drive.google.com/open?id=0B5ue9rJQ-LwBdGFVeFpHQW5QZFU",target:"_blank",rel:"noopener noreferrer"},"hier"),"."),r.a.createElement("h3",null,"Minicomputers"),r.a.createElement("p",null,"We hebben een aantal minicomputers die je kunt programmeren. Dit zijn Arduino's, micro:bits en de Makey Makey. Dit zijn bordjes met een paar poorten en knoppen waarop je bijvoorbeeld een spelletje kunt programmeren."),r.a.createElement("p",null,"Als je thuis een Arduino hebt, kun je leren hoe je hiermee iets maakt op ",r.a.createElement("a",{href:"https://arduino-lessen.nl/",target:"_blank",rel:"noopener noreferrer"},"Arduino lessen")),r.a.createElement("p",null,"Voor de micro:bit hebben we een voorbeeld van het spel ",r.a.createElement("a",{href:"https://coderdojodelft.gitbooks.io/sushi_microbit_meteors/content/nl/",target:"_blank",rel:"noopener noreferrer"},"Meteor"),", wat je ook zonder mirco:bit al kunt maken op ",r.a.createElement("a",{href:"https://makecode.microbit.org/",target:"_blank",rel:"noopener noreferrer"},"de micro:bit website"),"."),r.a.createElement("h3",null,"CodeCombat"),r.a.createElement("p",null,"Op CodeCombat leer je een programmeertaal door een spel te spelen. Je kunt je aansluiten bij onze clan. Klik op  ",r.a.createElement("a",{href:"https://codecombat.com/clans/56cd5e28a046201f001ddfe1",target:"_blank",rel:"noopener noreferrer"},"deze link")," om je aan te melden."),r.a.createElement("h3",null,"Websites met divers materiaal"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://drive.google.com/drive/folders/0B-NwRJ9NsROUbnByYlgyOHgxUFE",target:"_blank",rel:"noopener noreferrer"},"CoderDojo Zoetermeer")," heeft een verzameling opdrachten op Google Drive staan"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://projects.raspberrypi.org/nl-NL/projects",target:"_blank",rel:"noopener noreferrer"},"Raspberry Pi")," heeft een groeiende verzameling van Scratch, HTML/CSS en Python opdrachten."),r.a.createElement("li",null,r.a.createElement("a",{href:"http://kata.coderdojo.com/wiki/KataDutch",target:"_blank",rel:"noopener noreferrer"},"CoderDojo Kata")," heeft ook een verzameling van allerlei opdrachten."))))}}]),n}(a.Component);function we(){var e=Object(p.a)(["\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n",";\n\nbody {\n    font-family: Arial, Helvetica, Tahoma, san-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: ",";\n}\n"]);return we=function(){return e},e}var ve=Object(g.a)(we(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal";return"\n        @font-face {\n            font-family: 'Bebas Neue W01 Regular';\n            src: url('/font/rebas-neue/3d9ec9a9-76a2-4cfe-b376-76e7340c3b50.eot?#iefix');\n            src: url('/font/rebas-neue/3d9ec9a9-76a2-4cfe-b376-76e7340c3b50.eot?#iefix') format('eot'), url('/font/rebas-neue/e0d6f852-5401-4bbf-9672-47a50c5c87c6.woff2') format('woff2'), url('/font/rebas-neue/7fedd582-6ae3-4850-be2f-4acae2e74fa5.woff') format('woff'), url('/font/rebas-neue/d6e08ef3-40db-4ac3-82df-f062f55a72f5.ttf') format('truetype');\n            font-weight: ".concat(e,";\n            font-style: ").concat(n,";\n        }")}(),f.smoke),Ee=function(e){function n(){return Object(i.a)(this,n),Object(m.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(oe,null,r.a.createElement(ce,null,"Agenda"),r.a.createElement(ie,null,r.a.createElement("h2",null,"Komende Dojo's"),r.a.createElement("p",null,"Coderdojo Delft wordt georganiseerd op de 4e zaterdag van de maand. Af en toe wijken we hier vanaf als dit door feestdagen anders niet uitkomt. In de zomervakantie komen de Dojo's mogelijk te vervallen."),r.a.createElement("p",null,"Hieronder vind je een overzicht van de komende edities:"),r.a.createElement("ol",null,pe.map((function(e,n){return r.a.createElement("li",{key:n},e.displayDate)}))),r.a.createElement("br",null),r.a.createElement("p",null,"Je kunt je vanaf de zondag 2 weken voor de Dojo ",r.a.createElement(ue.a,{to:J.nextEdition.url},"hier")," aanmelden.")))}}]),n}(a.Component),De=function(e){function n(){return Object(i.a)(this,n),Object(m.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,null),r.a.createElement(ne,null,r.a.createElement(ae,null,r.a.createElement(U,null))),r.a.createElement(ne,null,r.a.createElement($,null),r.a.createElement(ae,null,r.a.createElement(h.a,{exact:!0,path:J.home.url,component:je}),r.a.createElement(h.a,{exact:!0,path:J.whatWeDo.url,component:be}),r.a.createElement(h.a,{exact:!0,path:J.nextEdition.url,component:fe}),r.a.createElement(h.a,{exact:!0,path:J.agenda.url,component:Ee}),r.a.createElement(h.a,{exact:!0,path:J.aboutUs.url,component:se}),r.a.createElement(h.a,{exact:!0,path:J.extraInfo.url,component:he}),r.a.createElement(h.a,{exact:!0,path:J.mentors.url,component:ke})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.dc7a6380.chunk.js.map