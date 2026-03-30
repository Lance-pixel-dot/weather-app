const contentDiv = document.querySelector("#content");

async function generateGif(weatherStatus) {

  const conditionToGifKeyword = {
    // Clear / Sunny
    "Clear": "sunny",

    // Partial clouds
    "Partially cloudy": "cloudy",

    // Overcast
    "Overcast": "overcast cloudy",

    // Rain variants
    "Rain": "rain",
    "Rain, Overcast": "rain",
    "Rain, Partially cloudy": "rain",
    "Light Rain": "rain",
    "Heavy Rain": "heavy rain",
    "Drizzle": "drizzle rain",
    "Rain, Thunderstorm": "thunderstorm",

    // Thunderstorms
    "Thunderstorm": "thunderstorm",
    "Thunderstorm, Overcast": "thunderstorm",
    "Thunderstorm, Partially cloudy": "thunderstorm",

    // Snow variants
    "Snow": "snow",
    "Light Snow": "snow",
    "Heavy Snow": "blizzard snow",
    "Snow, Overcast": "snow",
    "Snow, Partially cloudy": "snow",
    "Blowing Snow": "blizzard",
    "Blizzard": "blizzard",

    // Rain + Snow mix
    "Rain, Snow": "sleet",
    "Rain, Snow, Overcast": "sleet",
    "Freezing Rain": "freezing rain",
    "Ice": "ice storm",

    // Fog / Mist / Haze
    "Fog": "fog",
    "Mist": "mist foggy",
    "Haze": "haze",
    "Smoke": "smoke haze",
    "Dust": "dust storm",
    "Sand": "sandstorm",

    // Wind
    "Windy": "windy",
    "Breezy": "windy",

    // Severe
    "Tornado": "tornado",
    "Hurricane": "hurricane",
    "Squalls": "storm",
  };

  function getGifKeyword(condition) {

    if (conditionToGifKeyword[condition]) {
      return conditionToGifKeyword[condition];
    }
  
    // Fuzzy fallback — check if any key is contained in the condition string
    for (const key of Object.keys(conditionToGifKeyword)) {
      if (condition.includes(key)) {
        return conditionToGifKeyword[key];
      }
    }
  
    // Last resort: just use the raw condition
    return condition.toLowerCase();
  }

  try {

    const keyword = getGifKeyword(weatherStatus);

    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=Qgma9fI5zrSKIyRZolZnGzbb2kyQw5Ts&s=${encodeURIComponent(keyword)}`,
      {
        mode: "cors",
      }
    );
    const gif = await response.json();

    const gifContainer = document.createElement("div");
    gifContainer.className = 'gif-container';
    const gifImg = document.createElement("img");
    gifImg.src = gif.data.images.downsized_large.url;
    gifImg.className = 'gif';

    gifContainer.appendChild(gifImg);
    contentDiv.appendChild(gifContainer);
  } catch {
    const gifContainer = document.createElement("div");
    contentDiv.appendChild(gifContainer);
    gifContainer.textContent = "Couldn't fetch GIF data from the server";
  }
}

export { generateGif };
