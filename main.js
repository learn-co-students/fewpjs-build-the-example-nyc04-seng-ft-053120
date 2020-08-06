// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorModal = document.querySelector("#modal")
errorModal.className = "hidden"

let emptyHearts = document.querySelectorAll(".like-glyph")



emptyHearts.forEach((ele) => {
  ele.addEventListener("click", (evt) => {
    mimicServerCall().then(() => {
      if (evt.target.innerText === EMPTY_HEART) {
        evt.target.innerText = FULL_HEART
        evt.target.className = "like-glyph activated-heart"
      }
      else if (evt.target.innerText === FULL_HEART) {
        evt.target.innerText = EMPTY_HEART
        evt.target.className = "like-glyph"
      }
    })
    .catch(() => {
      errorModal.removeAttribute("class")
      setTimeout(() => {
        errorModal.className = "hidden"
      }, 5000)
    })
  })
})

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
