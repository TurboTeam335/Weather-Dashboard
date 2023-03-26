/* Creating an object called weather that calls a weather API   */
let weather = {
  "apiKey": "7e157d1fe5c526376938186853cc69d4",
  fetchWeather: function (city){
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" 
    + city
    + "&units=imperial&appid="
    + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main; 
    const {speed} = data.wind;
    console.log(name, icon, description, temp, humidity, speed) 
    document.querySelector(".city").innerText = "Weather in " + name;
  },
  search: function(){
    this.fetchWeather(document.querySelector(".btn").value);
  }

}  

document.querySelector(".btn").addEventListener("click", function (){
  weather.search();
  console.log(weather.search())
})