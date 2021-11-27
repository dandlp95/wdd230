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
            eventSection.appendChild(img);
            eventSection.classList.add("event");

            document.querySelector("div.pEvents").appendChild(eventSection);

        }


    })
