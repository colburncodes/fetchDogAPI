
'use strict';

// GET: function getDogImage
// returns a promise containing the response object.
// function getDogImage() {
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data));
// }

function getDogImage() {
    const options = {method: 'GET'};
    fetch('https://dog.ceo/api/breeds/image/random', options)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong!'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    //replace the existing image with the new one
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    )
    //display the results section
    $('.results').removeClass('hidden');
  }

// FUNC: watchForm()
function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
})