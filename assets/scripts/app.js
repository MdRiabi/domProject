// selecting the modal and the button elements with different ways to select
//we can select the div element by different ways
const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal'); we add the # if the element has an ID
//const addMovieModal = document.body.children[1];


//selecting the buuton element in the header element using two ways to select

const startAddMovieButton = document.querySelector('header button');
//const addMovieButton = document.querySelector('header').lastElementChild; this way is not preferred for selecting elements because devolper can change the last element in the header element
