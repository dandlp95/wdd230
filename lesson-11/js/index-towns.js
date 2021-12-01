const townsURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(townsURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const townsInfoP = jsonObject["towns"][6];
        
        let townSectionP = document.createElement("section");
        let imageDivP = document.createElement("div");
        let imgP = document.createElement("img");
        let infoDivP = document.createElement("div");
        let titleDivP = document.createElement("div");
        let townsNameP = document.createElement("h2");
        let quotationP = document.createElement("q");
        let yearP = document.createElement("p");
        let populationP = document.createElement("p");
        let rainfallP = document.createElement("p");

        townSectionP.classList.add("town");
        imageDivP.classList.add("townImage");
        infoDivP.classList.add("info");
        titleDivP.classList.add("title");

        let imgFileNameP = townsInfoP.photo;

        imgP.setAttribute("data-src", "images/home-images/" + imgFileNameP);
        imgP.setAttribute("src", "images/home-images/placeholder512x340.png")
        imgP.setAttribute("alt", "field image");

        
        townsNameP.textContent = townsInfoP.name;
        quotationP.textContent = townsInfoP.motto;
        yearP.textContent = "Year Founded: " + townsInfoP.yearFounded;
        populationP.textContent = "Population: " + townsInfoP.currentPopulation;
        rainfallP.textContent = "Anual Rainfall " + townsInfoP.averageRainfall;

        townSectionP.appendChild(imageDivP);
        townSectionP.appendChild(infoDivP);
        imageDivP.appendChild(imgP);
        infoDivP.appendChild(titleDivP);
        infoDivP.appendChild(yearP);
        infoDivP.appendChild(populationP);
        infoDivP.appendChild(rainfallP);
        titleDivP.appendChild(townsNameP);
        titleDivP.appendChild(quotationP);




        const townsInfoF = jsonObject["towns"][2];

        let townSectionF = document.createElement("section");
        let imageDivF = document.createElement("div");
        let imgF = document.createElement("img");
        let infoDivF = document.createElement("div");
        let titleDivF = document.createElement("div");
        let townsNameF = document.createElement("h2");
        let quotationF = document.createElement("q");
        let yearF = document.createElement("p");
        let populationF = document.createElement("p");
        let rainfallF = document.createElement("p");

        townSectionF.classList.add("town");
        imageDivF.classList.add("townImage");
        infoDivF.classList.add("info");
        titleDivF.classList.add("title");

        let imgFileNameF = townsInfoF.photo;

        imgF.setAttribute("data-src", "images/home-images/" + imgFileNameF);
        imgF.setAttribute("src", "images/home-images/placeholder512x340.png")
        imgF.setAttribute("alt", "field images with trees");
        townsNameF.textContent = townsInfoF.name;
        quotationF.textContent = townsInfoF.motto;
        yearF.textContent = "Year Founded: " + townsInfoF.yearFounded;
        populationF.textContent = "Population: " + townsInfoF.currentPopulation;
        rainfallF.textContent = "Anual Rainfall " + townsInfoF.averageRainfall;

        townSectionF.appendChild(imageDivF);
        townSectionF.appendChild(infoDivF);
        imageDivF.appendChild(imgF);
        infoDivF.appendChild(titleDivF);
        infoDivF.appendChild(yearF);
        infoDivF.appendChild(populationF);
        infoDivF.appendChild(rainfallF);
        titleDivF.appendChild(townsNameF);
        titleDivF.appendChild(quotationF);




        const townsInfoS = jsonObject["towns"][0];

        let townSectionS = document.createElement("section");
        let imageDivS = document.createElement("div");
        let imgS = document.createElement("img");
        let infoDivS = document.createElement("div");
        let titleDivS = document.createElement("div");
        let townsNameS = document.createElement("h2");
        let quotationS = document.createElement("q");
        let yearS = document.createElement("p");
        let populationS = document.createElement("p");
        let rainfallS = document.createElement("p");

        townSectionS.classList.add("town");
        imageDivS.classList.add("townImage");
        infoDivS.classList.add("info");
        titleDivS.classList.add("title");

        let imgFileNameS = townsInfoS.photo;

        imgS.setAttribute("data-src", "images/home-images/" + imgFileNameS);
        imgF.setAttribute("src", "images/home-images/placeholder512x340.png")
        imgS.setAttribute("alt", "windmill field");
        townsNameS.textContent = townsInfoS.name;
        quotationS.textContent = townsInfoS.motto;
        yearS.textContent = "Year Founded: " + townsInfoS.yearFounded;
        populationS.textContent = "Population: " + townsInfoS.currentPopulation;
        rainfallS.textContent = "Anual Rainfall " + townsInfoS.averageRainfall;

        townSectionS.appendChild(imageDivS);
        townSectionS.appendChild(infoDivS);
        imageDivS.appendChild(imgS);
        infoDivS.appendChild(titleDivS);
        infoDivS.appendChild(yearS);
        infoDivS.appendChild(populationS);
        infoDivS.appendChild(rainfallS);
        titleDivS.appendChild(townsNameS);
        titleDivS.appendChild(quotationS);



        document.querySelector("#towns").appendChild(townSectionP);
        document.querySelector("#towns").appendChild(townSectionF);
        document.querySelector("#towns").appendChild(townSectionS);


    })
