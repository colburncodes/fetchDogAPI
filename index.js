
'use strict';

// GET: function getDogImage
// returns a promise containing the response object.
// function getDogImage() {
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data));
// }

function getDogImage(input) {
    const options = {method: 'GET'};
    let URL = `https://dog.ceo/api/breeds/image/random/${input}`;

    fetch(URL, options)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong!'));
}

// FUNC: passes a responseObj 
// invokes getImages(responseObj) 
// displays it back to the user.
function displayResults(responseObj) {
    console.log(responseObj);

    let imageObj = responseObj.message;
    let result = getImages(imageObj);
    //replace the existing image with the new one
    // $('.results-img').replaceWith(
    //   `<img src="${responseObj.message}" class="results-img">`
    // )
    //display the results section
    $('.results-img').hmtl(result);
  }

// loop through images arry 
// return the result img
function getImages(images) {
    let result = '';
    for(let i =0; i < images.length; i++) {
        result += `<img src="${images[i]}" class="results-img"/>`
    }
    return result;
}

// FUNC: watchForm()
function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let quantity = $('.quantity').val();
        getDogImage(quantity);
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
})