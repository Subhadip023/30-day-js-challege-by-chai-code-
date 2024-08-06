const form = document.querySelector('.search-form');
const input = document.querySelector('.search-bar__input');
const result = document.querySelector('.result');
const desc = document.querySelector('.desc');
const moreInfo = document.querySelector('#moreInfoButton');
const resultHeading = document.querySelector('.result_heading');
const loader = document.getElementById('loader'); // Loader element


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = input.value.trim();
  
	 loader.style.display = 'block';
    try {
        const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/title/${encodeURIComponent(title)}?exact=true&titleType=movie`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'your Key ',
                'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const movie = data.results[0];

        if (movie) {
            result.innerHTML = `
                <div class="left">
                    <img src="${movie.primaryImage.url}" alt="${movie.titleText.text} image" class="move_banner">
                </div>
                <div class="desc">
                    <h3 style="text-align: left;">Title : ${movie.titleText.text}</h3>
                    
                    <h3 style="text-align: left;">Release year : ${movie.releaseYear.year}</h3>
                    <button id="moreInfoButton" class="moreInfo"> <p>more info ...</p></button>
                </div>
            `;

            // Attach event listener to the button
            document.getElementById('moreInfoButton').addEventListener('click', () => ShowMore(movie));
        } else {
            resultHeading.innerHTML = 'No results found';
        }
    } catch (error) {
        resultHeading.innerHTML = 'Server error';
        console.log(error);
    }
	finally{
		loader.style.display='none'
	}
});

function ShowMore(movie) {
    // Hide the "more info" button
    document.getElementById('moreInfoButton').style.display = 'none';
    
    // Create a new paragraph element for the image caption
    const imageC = document.createElement('p');
    imageC.textContent = `${movie.primaryImage.caption.plainText}`;
    imageC.classList.add('desc_p'); // Add the 'desc_p' class

    // Select the 'desc' element and append the new paragraph
    const desc = document.querySelector('.desc');
    desc.appendChild(imageC);

    // Create a new heading element for the release date
    const moreInfoElement = document.createElement('h3');
    moreInfoElement.textContent = `Release Date: ${movie.releaseDate.day} - ${movie.releaseDate.month} - ${movie.releaseDate.year}`;

    // Append the new heading to the 'desc' element
    desc.appendChild(moreInfoElement);
}

