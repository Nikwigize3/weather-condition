const cityInput = document.querySelector('.city-input')
const searchBtn =  document.querySelector('.search-btn')

const weatherInfoSection = document.querySelector('.weather-info')
const notFoundSection =  document.querySelector('.not-found')
const searchCitySection = document.querySelector('.search-city')
const apiKey ='64dd50eaf59471521b81b03669904637'

searchBtn.addEventListener('click',() => {
  if(cityInput.value.trim() != "") {
  updateweatherInfo(cityInput.value)
    cityInput.value = ''
    cityInput.blur()
  }
})
cityInput.addEventListener('keydown',(event) => {
  if(event.key == 'Enter' &&
   cityInput.value.trim() != ''
  ){
    updateweatherInfo(cityInput.value)
    cityInput.value = ''
    cityInput.blur()
  }
})

async function getFetchData() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;

const response = await fetch (apiUrl)

return response-json()
}

async function updateweatherInfo(city) {
  const weatherDat = await getFetchData('weather',city)

  if(weatherDat.cod != 200) {
    showDisplaySection(not-notFoundSection)
    return
  }

  showDisplaySection(weatherInfoSection)
}

function showDisplaySection(section){
  [weatherInfoSection, searchCitySection, notFoundSection]
  .forEach(section => section .style.display ='none')

  section.style.display = 'flex'
  
}