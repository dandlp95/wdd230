function saturdayBanner() {
    const date = new Date();
    var saturdayBanner = document.getElementById("sBanner");

    if (date.getDay() !== 5) {
        /*saturdayBanner.setAttribute("style", "display:none;");*/
        saturdayBanner.style.display = "none";
    }

}

saturdayBanner();