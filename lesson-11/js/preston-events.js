const eventsURL = "https://dandlp95.github.io/wdd230/lesson-11/events.json";
fetch(eventsURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.log(jsonObject);

        const sodaSpringEvents = jsonObject["events"][0].SodaSprings;
        console.log(sodaSpringEvents);

        for (let i = 0; i < sodaSpringEvents.length; i++) {
            let eventSection = document.createElement("section");
            let title = document.createElement("h2");
            let date = document.createElement("p");
            let img = document.createElement("img");


            title.textContent = sodaSpringEvents[i].event;
            date.textContent = sodaSpringEvents[i].date;
            img.setAttribute("src", sodaSpringEvents[i].photo);

            eventSection.appendChild(title);
            eventSection.appendChild(date);
            eventSection.classList.add("event");

            document.querySelector("div.pEvents").appendChild(eventSection);

        }


    })

/*
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing

        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let pDate = document.createElement('p');
            let pPlace = document.createElement('p');
            let  img = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            pDate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            pPlace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            img.setAttribute('src', prophets[i].imageurl);
            img.setAttribute('alt', 'Picture of ' + prophets[i].name + ' ' + prophets[i].lastname)
            /*img.setAttribute('width', '100%')*\

            card.appendChild(h2);
            card.appendChild(pDate);
            card.appendChild(pPlace);
            card.appendChild(img)

            document.querySelector('div.cards').appendChild(card);
        }
    });

    */ 