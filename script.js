// let image = document.querySelector('.image')
// let submit = document.querySelector('.submit')



// submit.addEventListener('click', function () {
//     // 1. Generating a random dice roll
//     const number = Math.trunc(Math.random() * 6) + 1;

//     // 2. Display dice

//     image.src = `weather${number}.png`;
// })
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bc9e40b99cmsh9b6296c86949d74p1f3970jsn05187a47f83f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let submit = document.querySelector('#submit')
let city = document.querySelector('#city')

const getweather = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cityName.innerHTML = city
            a1.innerHTML = response.cloud_pct
            a2.innerHTML = response.feels_like
            a3.innerHTML = response.humidity
            a4.innerHTML = response.max_temp
            a5.innerHTML = response.min_temp
            a6.innerHTML = response.sunrise
            a7.innerHTML = response.sunset
            a8.innerHTML = response.temp
            a9.innerHTML = response.wind_degrees
            a0.innerHTML = response.wind_speed


        })
        .catch(err => console.error(err));

}
getweather('mumbai');


submit.addEventListener("click", (e) => {
    e.preventDefault()
    getweather(city.value)
    submit.dispatchEvent(clickEvent)
    console.log(hii);
})
getweather()
submit.addEventListener("click", console.log(hii));
