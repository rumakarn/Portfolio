//toggling navbar
const toggleBtn = document.querySelector('.toggle-btn');
const iconElement = toggleBtn.querySelector("i"); // Get the <i> element
const home=document.querySelector(".home");
const initialBackground = getComputedStyle(document.querySelector('.home')).background;


// script.js


// script.js
document.getElementById('open-resume-button').addEventListener('click', function() {
 
  var resumeURL = 'your_resume.pdf';

  window.open("https://drive.google.com/file/d/1ghHXEpmi7yrslpupWI7lq76X1WQGrE_H/view?usp=drive_link", '_blank');
});

const cursorLight = document.querySelector('.cursor-light');
const lightSize = 20; // Size of the cursor light element

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const offsetX = -(lightSize / 2); // Adjust for half of the light's width
  const offsetY = -(lightSize / 2); // Adjust for half of the light's height

  cursorLight.style.transform = `translate(${x + offsetX}px, ${y + offsetY}px)`;
});



toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('light-theme');
  if (document.documentElement.classList.contains('light-theme')) {
    iconElement.className = 'bx bx-moon'; // Change the icon class to moon icon
    // Additional actions for enabling light mode if needed
    home.style.background="white";
    
  } else {
    iconElement.className = 'bx bx-sun'; // Change the icon class back to sun icon
    // Additional actions for disabling light mode if needed
    home.style.background = initialBackground;

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


document.addEventListener('DOMContentLoaded', () => {
  const readMoreButton = document.querySelector('.read-more');
  const moreContent = document.querySelector('.more-content');

  readMoreButton.addEventListener('click', () => {
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
      // If moreContent is hidden, show it
      moreContent.style.display = 'block';
      readMoreButton.textContent = 'Read less';
    } else {
      // If moreContent is visible, hide it
      moreContent.style.display = 'none';
      readMoreButton.textContent = 'Read more';
    }
  });
});






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
