// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const tagErrorModal = document.getElementById("modal");
tagErrorModal.className = "hidden";
const emptyHearts = document.querySelectorAll(".like-glyph");

emptyHearts.forEach((heartElem) => {
  heartElem.addEventListener("click", (event) => {
    if (event.target.innerText === EMPTY_HEART) {
      mimicServerCall()
        .then(() => {
          heartElem.innerText = FULL_HEART;
          heartElem.className = "activated-heart";
        })
        .catch(() => {
          tagErrorModal.classList.remove("hidden");
          setTimeout(() => {
            tagErrorModal.className = "hidden";
          }, 5000);
        });
    } else {
          heartElem.innerText = EMPTY_HEART;
          heartElem.className = "activated-heart";
          heartElem.classList.remove("activated-heart")
    }
  });
});

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
