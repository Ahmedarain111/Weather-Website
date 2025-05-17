async function getWeather(location) {
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=9AQNULLRWZR3VFTNNDGN94J2A`);
    response = await response.json();
    console.log(response);
}

getWeather('London');