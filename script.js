const apikey = "ea72cf736fa03d0c072e9992790692ac";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchbox = document.querySelector(".input input");
const searchbtn = document.querySelector(".input button");
const weatherimg = document.querySelector(".weatherimg")

async function weatherfetch(city){
  const response = await fetch(apiurl + city +`&appid=${apikey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".City").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C " ;
  document.querySelector(".humidity-percent").innerHTML=data.main.humidity +"%" ;
  document.querySelector(".wind-speed").innerHTML=data.wind.speed +" km/h" ;

  if(data.weather[0].main=="Clouds"){
    weatherimg.src="clouds.jpg"
  }
  if(data.weather[0].main=="Rain"){
    weatherimg.src="rain.jpg"
  }
  if(data.weather[0].main=="Clear"){
    weatherimg.src="clear.jpg"
  }
  if(data.weather[0].main=="Drizzle"){
    weatherimg.src="drizzle.jpg"
  }
  if(data.weather[0].main=="Mist"){
    weatherimg.src="mist.avif"
  }
}

searchbtn.addEventListener("click", ()=>{
  weatherfetch(searchbox.value);

})