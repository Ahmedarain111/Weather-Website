async function getWeather(location) {
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=9AQNULLRWZR3VFTNNDGN94J2A&unitGroup=metric&include=current`, {
        mode: 'cors'
    });
    response = await response.json();
    return response;
}

async function getInfo(location) {
    let data = await getWeather(location);
    return {
        location: data.resolvedAddress,
        temp: data.currentConditions.temp,
        conditions: data.currentConditions.conditions,
        rainChance: data.currentConditions.precipprob,
        windSpeed: data.currentConditions.windspeed
    }
}

async function printInfo(input) {
    let info = await getInfo(input);
    const location = document.querySelector('.location');
    const temp = document.querySelector('.temperature');
    const conditions = document.querySelector('.conditions');
    const rainChance = document.querySelector('.rain span');
    const windSpeed = document.querySelector('.wind span');
    
    location.textContent = info.location;
    temp.textContent = info.temp;
    conditions.textContent = info.conditions;
    rainChance.textContent = info.rainChance;
    windSpeed.textContent = info.windSpeed;

    document.querySelector('main').style.display = 'flex';
}


const search = document.querySelector('.search button');
search.addEventListener('click', () => {
    const input = document.querySelector('input').value;
    printInfo(input);
})
