let city = document.getElementById("city")
let cityname = document.querySelector(".cityname");
let date = document.querySelector(".date");
let forecast = document.querySelector(".forecast")
let icon = document.querySelector(".icon")
let temperature = document.querySelector(".temperature")
let min = document.querySelector(".min")
let max = document.querySelector(".max") 
let searchbox = document.getElementById("searchbox");
let humidity = document.getElementById("humidity");
let feelslike = document.getElementById("feelslike");
let wind = document.getElementById("wind");
let pressure = document.getElementById("pressure");
let mainbtn = document.getElementById("mainbtn");

const getCountryname = (code) =>{
    return new Intl.DisplayNames([code], { type: "region"}).of(code)
};


mainbtn.addEventListener("click",() =>{
    const getwetherdata = async() =>{
        let wether = city.value;
        const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${wether}&appid=467ce606e5753de4a5727d7d50d36036`;
        
        try{
            const res = await fetch(APIurl);
            const data = await res.json();
           
                const wetherdata = data;
                console.log(wetherdata);
                temperature.innerHTML = `${wetherdata.main.temp}`
                humidity.innerHTML = `${wetherdata.main.humidity + "%"}`;
                feelslike.innerHTML = `${wetherdata.main.feels_like + "&deg"}`;
                wind.innerHTML = `${wetherdata.wind.speed + "m/s"}`
                pressure.innerHTML = `${wetherdata.main.pressure + "hpo"}`
                min.innerHTML = `Min : ${wetherdata.main.temp_min}`;
                max.innerHTML =`Max : ${ wetherdata.main.temp_max}`;
                cityname.innerHTML = `${wetherdata.name}, ${getCountryname(wetherdata.sys.country)}`;
                icon.innerHTML = `${wetherdata[0].icon}`
                date.innerHTML = new Date();
               
        }

        catch(error){
            console.log(error);
      
        }
    };
    getwetherdata();

});
mainbtn.addEventListener("click",getwetherdata());