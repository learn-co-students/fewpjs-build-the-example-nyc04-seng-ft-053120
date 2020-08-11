// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

const errorAlert = document.getElementById('modal');
errorAlert.classList.add('hidden');

const glyphImg = {
  '♡': '♥',
  '♥': '♡',
};

const colors = {
  red: '',
  '': 'red',
};

const glyphs = document.querySelectorAll('.like-glyph');

const likeCallback = (event) => {
  const heart = event.target;
  mimicServerCall('bogusUrl')
    .then((_serverMessage) => {
      heart.innerText = glyphImg[heart.innerText];
      heart.style.color = colors[heart.style.color];
    })
    .catch((_error) => {
      errorAlert.className = '';
    });
};

glyphs.forEach((glyph) => {
  glyph.addEventListener('click', likeCallback);
});

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject('Random server error. Try again.');
      } else {
        resolve('Pretend remote server notified of action!');
      }
    }, 300);
  });
}
