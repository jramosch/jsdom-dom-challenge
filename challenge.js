// increase counter by one every second
const counter = document.getElementById('counter');

var timer = setInterval(function () {counter.innerHTML++}, 1000);

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
  let like = document.getElementById(`${counter.innerHTML}`);

  if (!like) {
    like = document.createElement('li')
    like.id = `${counter.innerHTML}`;
    like.setAttribute("data-likeCounter", 1);
    like.innerHTML = `${counter.innerHTML} has been liked 1 time`
  } else {
    var i = like.getAttribute("data-likeCounter");
    like.setAttribute("data-likeCounter", i++);
    like.innerHTML = `${counter.innerHTML} has been liked ${i} times`
  }

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
      timer = setInterval(function () {counter.innerHTML++}, 1000);
      break;

    default:
      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
      this.innerHTML = "resume";
      clearInterval(timer);
  }
}
// comment box that adds comment when submitted

const comments = document.querySelector('.comments');
const submit = document.getElementById('submit');



submit.onclick = function (e) {
  const newComment = document.createElement('p');
  const comment = document.getElementById('comment-input').value;
  newComment.innerHTML = `${comment}`;
  comments.appendChild(newComment);
  document.getElementById('comment-form').reset();

  e.preventDefault();
}
