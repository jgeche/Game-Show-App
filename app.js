//Variables

const keys = document.querySelector('#qwerty');
let missed = 0;
const startButton = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');
const lives = document.querySelectorAll('.tries img');

// Remove Overlay to Start to Game

startButton.addEventListener("click", () => {
  overlay.style.display = "none";
});

//Array and Return random phrase

const phrases = [
  'i am the walrus', 
  'here is my guitar', 
  'seashell by the seashore', 
  'i can see the stars', 
  'turn off the racket'];

function getRandomPhraseAsArray (array){
  const randomLetters = Math.floor( Math.random() * array.length);
  return array[randomLetters];
}

//Add Phrase to Display

function addPhraseToDisplay (RandomLetters) {
  for ( let i = 0; i < RandomLetters.length; i++){
    const li = document.createElement('li');
    li.textContent = RandomLetters[i];
    ul.appendChild(li);
    if (li.textContent === ''){
      li.className = 'space';
    } else {
      li.className = 'letter';
  }
 }
};
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// Check if Letter is Correct

function checkLetter (clicked) {
  const checkLetter = document.querySelectorAll('li');
  let matching = null;
  
  for ( let i=0; i < checkLetter.length; i++){
    const letters = checkLetter[i];
  if ( letters.textContent === clicked.textContent){
    letters.classList.add('show');
    matching = clicked.textContent;
  }
 }
  return matching;
};

// Keyboard Listener

keys.addEventListener ('click', (e) => {
  const click = e.target;
  if ( e.target.tagName === 'BUTTON'){
    click.classList.add('chosen');
    click.disabled = true;
    const found = checkLetter(click);
    let check = checkLetter(event.target)
  if (!found){
    lives[missed].src='images/lostHeart.png'
    missed++;
  }
  checkWin();
}
});
  
// Check to see if Player Won
  
function checkWin(){
  const letter = document.getElementsByClassName('letter');
  const show = document.getElementsByClassName('show');
  if (letter.length === show.length){
    overlay.style.display = 'flex';
    overlay.className = 'win';
    overlay.firstChild.textContent = 'Replay Game?'
  }if (missed > 4){
    overlay.classList = 'lose';
    overlay.style.display = 'flex';
    overlay.firstChild.textContent = 'You have lost! Sorry, next time!'
    StartButton.textContent = 'Replay Game?'
  }
}
    
      
  
      
