const apikey = "ed744a31c265dc4027c5dbba5f5ec4c6";
const loadtemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}
const displayTemperature = data => {
    // const temperature = document.getElementById('temp');
    // temperature.innerText = data.main.temp;
    setinnertextbyid('temp', data.main.temp)
    setinnertextbyid('humidity', data.main.humidity)
    setinnertextbyid('wind', data.wind.speed)
    console.log(data);
}
const setinnertextbyid = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;

}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadtemperature(city);
})
loadtemperature('new york');