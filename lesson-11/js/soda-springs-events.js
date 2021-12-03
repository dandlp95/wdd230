const eventsURL = "https://dandlp95.github.io/wdd230/lesson-11/events.json";
fetch(eventsURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const sodaSpringEvents = jsonObject["events"][0].SodaSprings;

        for (let i = 0; i < sodaSpringEvents.length; i++) {
            let eventSection = document.createElement("section");
            let eventTextDiv = document.createElement("div");
            let eventImgDiv = document.createElement("div");
            let title = document.createElement("h2");
            let date = document.createElement("p");
            let img = document.createElement("img");


            title.textContent = sodaSpringEvents[i].event;
            date.textContent = sodaSpringEvents[i].date;
            img.setAttribute("src", sodaSpringEvents[i].photo);
            img.setAttribute("alt", sodaSpringEvents[i].photoDescription);

            eventTextDiv.appendChild(title);
            eventTextDiv.appendChild(date);
            eventImgDiv.appendChild(img);

            eventSection.appendChild(eventTextDiv)
            eventSection.appendChild(eventImgDiv);

            eventSection.classList.add("event");
            eventTextDiv.classList.add("event-text");
            eventImgDiv.classList.add("event-img");


            document.querySelector("div.events").appendChild(eventSection);

        }


    })
