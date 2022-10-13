function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// menu

const btn = document.getElementById("menu-btn")
const nav = document.getElementById("menu")

function navToggle(){
 btn.classList.toggle("open")
 nav.classList.toggle("hidden")
 document.body.classList.toggle("no-scroll")
}

btn.addEventListener("click", navToggle)