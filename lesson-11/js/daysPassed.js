let daysPassed = document.getElementById("daysPassed").textContent;
let pageVisit = localStorage.getItem('daysPassed') || date;
let days = Math.round((pageVisit - date) / 8640000);

daysPassed.textContent = days;

localStorage.setItem("daysPassed", daysPassed)