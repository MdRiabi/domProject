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
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling; // for sellecting the add button
//sellecting all the inputs
const userInputs = addMovieModal.querySelectorAll('input');
//const userInput = addMovieModal.getElementsByTagName('input');

//next step is creating a movie 

const movies =[];
// select the entry-text id of the section element 
const entryTextSection = document.getElementById('entry-text');

//updateUI for checking if the user enter already movie in the movies array

const updateUI = () =>{
    if(movies.length === 0){

        entryTextSection.style.display = 'block';
    }
    else{
        entryTextSection.style.display = 'none';
    }
};


const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
      if (movie.id === movieId) {
        break;
      }
      movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    // listRoot.removeChild(listRoot.children[movieIndex]);
  };

// rendring the user input in the movies array and hiding the <p> enlemnt wich is in section element 
const renderNewMovieElement = (id , title , imageUrl , rating) => {

    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class= "movie-element__image">
    <img src="${imageUrl}" alt="${title}">
    </div>
    <div>
    <h2>${title}</h2>
    <p>${rating}/5 stars </p>
    </div>
    `;
    newMovieElement.addEventListener('click' , deleteMovieHandler.bind(null,id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);

};


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



const cancelAddMovieHandler = () => {
    toogleMovieModal();
    clearMovieInput();
};



const clearMovieInput = () =>{

    for(const userInput of userInputs)
    {
        userInput.value="";
    }
};




const addMovieHandler = () => {

    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleValue.trim()=== ''|| imageUrlValue.trim()=== ''||ratingValue.trim()===''||+ratingValue<1 ||+ratingValue>5){
        alert('Please fill in all the fields');
        return;
    }
    const newMovie = {
        id: Math.random().toString,
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };
    
    movies.push(newMovie);
    console.log(movies);
    toogleMovieModal();
    clearMovieInput();
    renderNewMovieElement(newMovie.id , newMovie.title , newMovie.image , newMovie.rating);
    updateUI();
};



startAddMovieButton.addEventListener('click', toogleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click',addMovieHandler );

35. Deleting Movie Elements































