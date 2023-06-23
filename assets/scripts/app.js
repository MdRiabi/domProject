// selecting the modal and the button elements with different ways to select
//we can select the div element by different ways
const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal'); we add the # if the element has an ID
//const addMovieModal = document.body.children[1];


//selecting the buuton element in the header element using two ways to select

const startAddMovieButton = document.querySelector('header button');
//const addMovieButton = document.querySelector('header').lastElementChild; this way is not preferred for selecting elements because devolper can change the last element in the header element

//selecting the backdor element in the body by two ways to select

//const backButton = document.body.firstElementChild
const backdrop = document.getElementById('backdrop');

// sellecting the cancel button
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');


const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};


//adding an enentListner to the add button for showing the add modal

const toogleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop()
};

const backdropClickHandler = () => {
    toogleMovieModal();
};
const cancelAddMovie = () => {
    toogleMovieModal();
};

startAddMovieButton.addEventListener('click', toogleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);































