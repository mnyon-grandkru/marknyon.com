const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  console.log("Leaving menu");
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function logThis(page) {
  console.log('This happened');
}

hamburger.addEventListener("click", mobileMenu);
navMenu.addEventListener("mouseleave", closeMenu);


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));



const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
