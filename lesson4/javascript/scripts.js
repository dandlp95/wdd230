function toggleMenu(){
    console.log(document.getElementById("mainNav").classList);
    document.getElementById("mainNav").classList.toggle('hide');
}

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var date = new Date();
var n = date.toLocaleDateString('en-UK', options);
document.getElementById("todayDate").innerHTML = n;