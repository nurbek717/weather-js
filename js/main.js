const  api = {
   key: "3ee90d9304f2206c33a470e72f541f59",
   baseurl: "https://api.openweathermap.org/data/2.5/",
};
const searchBox = document.querySelector(".search-box")

searchBox.addEventListener("keypress", setQuary )

function setQuary(evt) {
  
  if (evt.keyCode == 13) {
   getResults(searchBox.value)
    console.log(searchBox.value);
  }
}

function getResults(quare) {
  fetch (`${api.baseurl}weather?q=${quare}&units=metric&APPID=${api.key}`)
  .then((weather) => weather.json())
  .then( (data) => displeyResults(data))
  // .then( (data) => console.log(data))

}

function displeyResults(weather) {
 console.log(weather);
 let ctiy = document.querySelector(".ctiy");
 ctiy.innerHTML =`${weather.name}, ${weather.sys.country}`; 


 let now = new Date()
 let data = document.querySelector('.data');
 data.textContent = dataBualder(now)

 let temp = document.querySelector(".temp")
 temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`

 let weatherEl = document.querySelector(".weather")
 weatherEl.innerHTML = `${weather.weather[0].main}`

 let tempMaxMin = document.querySelector(".hi-low")
 tempMaxMin.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C `

}


function dataBualder(n) {
 let months = [
  "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",

 ];

 let days = [
  "Sunday",
  "Mondy",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
 ];
 
 let day  = days[n.getDay()];
 let data  = n.getDate();
 let month  = months[n.getMonth()];
 let year = n.getFullYear();

 return `${day} ${data} ${month} ${year}`
}