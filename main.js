// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


let likeGlyphs = document.querySelectorAll("span.like-glyph");
for(let i=0; i<likeGlyphs.length; i++) {
  let likeGlyph = likeGlyphs[i];

  let article = likeGlyph.parentElement.parentElement.parentElement.parentElement;
  
  likeGlyph.addEventListener( "click", function(e) {
    mimicServerCall().then( () => {
      if ( e.target.innerHTML === EMPTY_HEART) {
        e.target.innerHTML = FULL_HEART;
        e.target.className = "activated-heart";
      } else if (e.target.innerHTML === FULL_HEART) {
        e.target.innerHTML = EMPTY_HEART;
        e.target.className = "";
      }
    }).catch( function(error) {
      console.log(error);
      let modal = document.querySelector("div#modal");
      modal.className = "";
      setTimeout( function() { modal.className = "hidden"; }, 5000);
    }
    );
  });
}



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
