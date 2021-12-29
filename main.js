const prev = document.querySelector(".btn-prev")
const next = document.querySelector(".btn-next")
const profiles = document.querySelectorAll(".testimonial-profile")
const content =document.querySelector(".testimonial-content")

  next.addEventListener('click', nextCard);
  prev.addEventListener('click', prevCard);

let index = 1;
 function showProfile(){
     profiles.forEach(profile => {
         profile.classList.add("hidden");
     });
     profiles[index - 1].classList.remove("hidden");
 }
 function nextCard() {
    index++;
    if (index > profiles.length) {
      index = 1;
    }
    showProfile();
  }

  function prevCard() {
    index--;
    if (index <= 0) {
      index = profiles.length;
    }
    showProfile();
  }
