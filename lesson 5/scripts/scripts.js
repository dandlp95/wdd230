function toggleMenu(){
    document.getElementById("mainNav").classList.toggle('hide');
}

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var date = new Date();
var n = date.toLocaleDateString('en-UK', options);
document.getElementById("todayDate").innerHTML = n;


function saturdayBanner(){
    const date = new Date();
    var saturdayBanner = document.getElementById("sBanner");

    if (date.getDay() !== 5){
        /*saturdayBanner.setAttribute("style", "display:none;");*/
        saturdayBanner.style.display="none";
    }

}

saturdayBanner();