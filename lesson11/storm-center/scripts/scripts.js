function toggleMenu(){
    document.getElementById("mainNav").classList.toggle('hide');
}

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var date = new Date();
var n = date.toLocaleDateString('en-UK', options);
document.getElementById("todayDate").innerHTML = n;


function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}