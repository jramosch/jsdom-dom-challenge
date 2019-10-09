// increase counter by one every second
const counter = document.getElementById('counter');

function timer () {setInterval(function(){counter.innerHTML++}, 1000);};
var interval = timer();
//interval = timer();

// plus and minus buttons that increment or decrement counter
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

minus.onclick = function() {counter.innerHTML--};
plus.onclick = function() {counter.innerHTML++};

// like button that adds a like for the number that is currently displayed by the timer
const heart = document.getElementById('heart');
const likes = document.querySelector('.likes')

// 4 has been liked x time(s)
heart.onclick = function() {
  const like = document.createElement('li')
  // need if statement for checking if number has already been liked
  like.innerHTML = `${counter.innerHTML} has been liked`
  likes.appendChild(like);
}

// pause the counter, which will disable all buttons and  change pause button to "resume"
const pause = document.getElementById('pause');

pause.onclick = function() {
  switch (pause.innerHTML) {
    case "resume":
      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      this.innerHTML = "pause";
      interval;
      break;

    default:
      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
      clearInterval(interval);
      this.innerHTML = "resume";
  }
/*
  if (this.innerHTML == "resume") {
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    this.innerHTML = "pause";
  }

  minus.disabled = true;
  plus.disabled = true;
  heart.disabled = true;
  clearInterval(timer);
  this.innerHTML = "resume";
*/
  //different reaction if innerHTML is "resume"
}



// comment box that adds comment when submitted
