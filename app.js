let hours = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

let currentTime = new Date();

const updateTIme = () => {
  hours.innerText = currentTime.getHours();
  mins.innerText = currentTime.getMinutes();
  secs.innerHTML = currentTime.getSeconds();
};

updateTIme()
