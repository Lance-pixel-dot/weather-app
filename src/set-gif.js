const contentDiv = document.querySelector("#content");

async function generateGif(weatherStatus) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=Qgma9fI5zrSKIyRZolZnGzbb2kyQw5Ts&s=${weatherStatus}-weather`,
      {
        mode: "cors",
      }
    );
    const gif = await response.json();

    console.log(gif);

    console.log(weatherStatus);

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
