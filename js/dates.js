const copyrightyear = document.getElementById("copyrightyear");

copyrightyear.textContent = new Date().getFullYear();

let updateDate = new Date(document.lastModified);

document.getElementById("updateDate").innerHTML = updateDate;

