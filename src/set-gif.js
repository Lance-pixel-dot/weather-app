const contentDiv = document.querySelector('#content');

async function generateGif(weatherStatus) {
    try{
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Qgma9fI5zrSKIyRZolZnGzbb2kyQw5Ts&s=${weatherStatus}`, {
            mode: 'cors'
        })
        const gif = await response.json();

        const gifContainer = document.createElement('div');
        gifContainer.className = 'gif-container';
        const gifImg = document.createElement('img');
        gifImg.src = gif.

        gifContainer.appendChild(gifImg);
        contentDiv.appendChild(gifContainer);

    } catch{
        const gifContainer = document.querySelector('.gif-container');
        contentDiv.appendChild(gifContainer);
        gifContainer.textContent = "Couldn't fetch data from the server";
    }

}

export { generateGif }