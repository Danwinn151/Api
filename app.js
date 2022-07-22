let weather = {
    apiKey: "52c3f525fd78536fc9c7512b3412f634",
    fetchWeather: async function(city) {
        try{
          const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`,
        )
        const data = await response.json()
          this.displayWeather(data)
       } catch(err) {
        console.log(err)
       }
        },
    displayWeather: function(data) { 
        const {name} = data
        const {icon, description} = data.weather[0]
        const{temp, humidity} = data.main
        const {speed} = data.wind
        console.log(name,icon, description,temp, humidity, speed)
    document.querySelector(".weather").classList.remove("loading")
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src=`http://openweathermap.org/img/wn/${icon}@2x.png`; 
    document.querySelector(".temp").innerHTML = temp + "*C";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".humidity").innerHTML = "humidity:" + humidity + "%";
    document.querySelector(".Wind").innerHTML = "Wind Speed:" + speed + "km/hr";
   document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${name}")`
},
    search: function (){
    this.fetchWeather(document.querySelector('.search-bar').value)
    }
}

document.querySelector(".search .button").addEventListener("click", ()=> {
    weather.search()
})
document.querySelector(".search-bar").addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        weather.search()
    }
})

weather.fetchWeather("Denver")

//data.days.cloudcover
//data.days.datetime
//data.days.conditions
//data.days.dew