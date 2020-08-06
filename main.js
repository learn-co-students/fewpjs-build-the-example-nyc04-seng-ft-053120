// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

likeButton = document.querySelectorAll('.like-glyph');

document.body.addEventListener('click', (e) => {

  if (e.target.className === "like-glyph") {
    mimicServerCall()
    .then(() => {
      e.target.innerText = FULL_HEART;
      e.target.classList.add('activated-heart');
    })
    .catch((error) => {
      let modal = document.querySelector('#modal');
      modal.className = "";
      setTimeout(() => {
        modal.className = "hidden"
      }, 5000);
    });
  }
});

document.body.addEventListener('click', e => {
  if (e.target.className === 'like-glyph activated-heart') {
    mimicServerCall()
    .then(() => {
      e.target.innerText = EMPTY_HEART
      e.target.classList.remove('activated-heart')
    })
    .catch((error) => {
      let modal = document.querySelector('#modal');
      modal.className = "";
      setTimeout(() => {
        modal.className = "hidden"
      }, 5000);
    });
  }
});


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
