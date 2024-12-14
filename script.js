// Sticky Navbar & Scroll to Top
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Designer", "Freelancer", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Designer", "Freelancer", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

// Project cards filter
const filterContainer = document.querySelector(".project-filter"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      projectItems = document.querySelectorAll(".project-item"),
      totalProjectItem = projectItems.length;

      for(let i=0; i<totalFilterBtn; i++){
          filterBtns[i].addEventListener("click", function(){
              filterContainer.querySelector(".active").classList.remove("active");
              this.classList.add("active");
              
              const filterValue = this.getAttribute("data-filter");
              for(let k=0; k<totalProjectItem; k++){
                  if(filterValue === projectItems[k].getAttribute("data-category")){
                      projectItems[k].classList.remove("hide");
                      projectItems[k].classList.add("show");
                  }
                  else{
                      projectItems[k].classList.remove("show");
                      projectItems[k].classList.add("hide");
                  }
                  if(filterValue === "all"){
                      projectItems[k].classList.remove("hide");
                      projectItems[k].classList.add("show");
                  }
              }
          })
      }

// Skills Animation
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress-bar');

function showProgress(){
    progressBars.forEach(progressBar=> {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}

function hideProgress(){
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

window.addEventListener('scroll',() => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos){
        showProgress();
    } else {
        hideProgress();
    }
});

// Form Validation & Submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const subject = form.querySelector('input[name="subject"]').value;
    const message = form.querySelector('textarea[name="message"]').value;
    
    // Basic validation
    if(!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // If validation passes, you can send the form data to your server
    console.log('Form submitted:', { name, email, subject, message });
    
    // Reset form
    form.reset();
    alert('Message sent successfully!');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(window.pageYOffset >= (sectionTop - sectionHeight/3)){
            section.classList.add('show-animate');
        }
    });
});

// Dark/Light theme toggle
const themeButton = document.querySelector('.theme-btn');
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeButton.classList.toggle('sun');
    
    // Save theme preference
    localStorage.setItem('dark-theme', document.body.classList.contains('dark-theme'));
});

// Load saved theme preference
if(localStorage.getItem('dark-theme') === 'true'){
    document.body.classList.add('dark-theme');
    themeButton.classList.add('sun');
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentSlide);