document.addEventListener('DOMContentLoaded', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  
    async function fetchWeatherData(lat, lon) {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=308b935c9641fdb8ee892bbe6b6785ad`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        displayWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherDisplay').innerHTML = '<p class="text-red-500">Unable to fetch weather data.</p>';
      }
    }
  
    async function fetchForecast(lat, lon) {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=308b935c9641fdb8ee892bbe6b6785ad`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        displayForecast(data);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
        document.getElementById('forecastDisplay').innerHTML = '<p class="text-red-500">Unable to fetch forecast data.</p>';
      }
    }
  
    function displayWeather(data) {
      const weatherDisplay = document.getElementById('weatherDisplay');
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherDisplay.innerHTML = `
        <div class="flex items-center justify-center mb-4">
          <img src="${iconUrl}" alt="${data.weather[0].description}" class="w-16 h-16">
          <div class="ml-4">
            <p class="text-lg font-semibold">Location: ${data.name}</p>
            <p class="text-lg">Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
            <p class="text-lg">Weather: ${data.weather[0].description}</p>
          </div>
        </div>
      `;
    }
  
    function displayForecast(data) {
      let forecastHTML = '<h2 class="text-xl font-bold mb-2">5-Day Forecast</h2>';
      data.list.forEach((item, index) => {
        if (index % 8 === 0) { 
          const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
          forecastHTML += `
            <div class="p-2 border-b border-gray-600">
              <div class="flex items-center mb-2">
                <img src="${iconUrl}" alt="${item.weather[0].description}" class="w-12 h-12">
                <div class="ml-4">
                  <p class="font-semibold">${new Date(item.dt * 1000).toDateString()}</p>
                  <p>Temperature: ${(item.main.temp - 273.15).toFixed(2)}°C</p>
                  <p>Weather: ${item.weather[0].description}</p>
                </div>
              </div>
            </div>
          `;
        }
      });
      document.getElementById('forecastDisplay').innerHTML = forecastHTML;
    }
  
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      fetchWeatherData(latitude, longitude);
      fetchForecast(latitude, longitude);
    }
  
    function error() {
      console.log("Unable to retrieve your location.");
      document.getElementById('weatherDisplay').innerHTML = '<p class="text-red-500">Unable to retrieve your location.</p>';
    }
  
    // Search functionality
    document.getElementById('searchButton').addEventListener('click', async () => {
      const city = document.getElementById('cityInput').value;
      if (city) {
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=308b935c9641fdb8ee892bbe6b6785ad`);
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          const data = await response.json();
          displayWeather(data);
          
     
          const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=308b935c9641fdb8ee892bbe6b6785ad`);
          if (!forecastResponse.ok) {
            throw new Error('Network response was not ok');
          }
          const forecastData = await forecastResponse.json();
          displayForecast(forecastData);
        } catch (error) {
          console.error('Error fetching weather data:', error);
          document.getElementById('weatherDisplay').innerHTML = '<p class="text-red-500">Unable to fetch weather data for this city.</p>';
          document.getElementById('forecastDisplay').innerHTML = '';
        }
      }
    });
  });
  