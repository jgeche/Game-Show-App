const qwerty = getElementById('qwerty');
const phrase = getElementById('phrase');
const startButton = getElementsByClassName('btn__reset');
const missed = 0;

const phrases = ['watermelon', 'guitar', 'seashell', 'astronomer', 'racket'];

//return random phrase from an array
const getRandomPhraseAsArray = arr => {
}

//add letters of a string to the display
const addPhraseToDisplay = arr => {
}

//check if the game has been lost or won
const checkWin = () => {
}

//listen for the startgame button to be pressed 
startButton.addEventListener('click', e => {
  document.getElementById('overlay').style.display='none';
});
