//toggling navbar
const toggleBtn = document.querySelector('.toggle-btn');
const iconElement = toggleBtn.querySelector("i"); // Get the <i> element


toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('light-theme');
  if (document.documentElement.classList.contains('light-theme')) {
    iconElement.className = 'bx bx-moon'; // Change the icon class to moon icon
    // Additional actions for enabling light mode if needed
  } else {
    iconElement.className = 'bx bx-sun'; // Change the icon class back to sun icon
    // Additional actions for disabling light mode if needed
  }
}
);
let menuIcon=document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick=()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let scrollY = window.scrollY;

  // Remove the 'active' class from all navigation links first
  navLinks.forEach(links => {
    links.classList.remove('active');
  });

  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (scrollY >= offset && scrollY < offset + height) {
      // Add the 'active' class to the appropriate navigation link
      document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
      // sec.classList.add('show-animate');
    }
    // else{
    //   sec.classList.remove('show-animate');
    // }
  });

  //sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', scrollY > 100);


  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

const slides = document.querySelectorAll(".slides");
console.log(slides);
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  if (counter > 0) { // Check if not on the first slide
    counter--;
    slideImage();
  }
};

const goNext = () => {
  if (counter < slides.length - 1) { // Check if not on the last slide
    counter++;
    slideImage();
  }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
