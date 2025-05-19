async function getWeather(location) {
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=9AQNULLRWZR3VFTNNDGN94J2A&unitGroup=metric&include=current`);
    response = await response.json();
    return response;
}

async function getInfo(location) {
    let data = await getWeather(location);
    // console.log(data);
    // console.log(data.currentConditions.temp);
    return {
        temp: data.currentConditions.temp,
        conditions: data.currentConditions.conditions,
        rainChance: data.currentConditions.precipprob,
        windSpeed: data.currentConditions.windspeed
    }
}

async function printInfo() {
    let info = await getInfo('Hyderabad');
    console.log(info.temp);
}

printInfo();


