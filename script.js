// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
//making heading dynamic
function typeWriter(){
  const el=document.getElementById("change");
  const text=el.textContent;
  function start(){
  el.textContent="";
  let index=0;
  let interval=setInterval(function(){
    if(index<text.length){
el.textContent+=text.charAt(index);
index++;    }
else{
  clearInterval(interval);
  setTimeout(start,1000);
}
  },100);
}
start();}
typeWriter();

function setTheme(dark) {
  if (dark) {
    body.classList.add('dark');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Load theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') setTheme(true);
else setTheme(false);

themeToggle.addEventListener('click', () => {
  setTheme(!body.classList.contains('dark'));
});

// Fade-in and scroll animations
window.addEventListener('DOMContentLoaded', () => {
  // Animate landing section
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = 1;
  });

  // Scroll-triggered fade for info sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.scroll-fade').forEach(section => {
    observer.observe(section);
  });
}); 

// Contact form validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.submit-btn');
    const formInputs = contactForm.querySelectorAll('input[required], textarea[required]');
    
    // Initially disable the submit button
    submitBtn.disabled = true;
    
    // Function to check if all required fields are filled
    function checkFormValidity() {
        let allFieldsFilled = true;
        
        formInputs.forEach(input => {
            if (input.value.trim() === '') {
                allFieldsFilled = false;
            }
        });
        
        // Enable/disable button based on form validity
        if (allFieldsFilled) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('disabled');
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.add('disabled');
        }
    }
    
    // Add event listeners to all form inputs
    formInputs.forEach(input => {
        input.addEventListener('input', checkFormValidity);
        input.addEventListener('blur', checkFormValidity);
    });
});
