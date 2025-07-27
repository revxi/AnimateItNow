// Fixed and cleaned version of your full JS script

// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const progressBar = document.querySelector(".progress-bar")
  const totalHeight = document.body.scrollHeight - window.innerHeight
  const progress = (window.scrollY / totalHeight) * 100
  progressBar.style.width = `${progress}%`
})

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle")
const root = document.documentElement

function setTheme(dark) {
  root.setAttribute("data-theme", dark ? "dark" : "light")
  localStorage.setItem("theme", dark ? "dark" : "light")
  themeToggle.innerHTML = dark ? "light_mode" : "dark_mode"
}

// Load Theme
const storedTheme = localStorage.getItem("theme")
const isDark = storedTheme === "dark"
setTheme(isDark)

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(root.getAttribute("data-theme") === "light")
  })
}

// Contributors Section Reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    }
  })
})

document.querySelectorAll(".hidden").forEach(el => observer.observe(el))

// FAQ Toggle
function toggleFAQ(element) {
  const faqItem = element.parentElement
  const isActive = faqItem.classList.contains("active")

  document.querySelectorAll(".faq-item.active").forEach(item => {
    if (item !== faqItem) {
      item.classList.remove("active")
    }
  })

  faqItem.classList.toggle("active", !isActive)
}

document.querySelectorAll(".faq-toggle").forEach(button => {
  button.addEventListener("click", () => toggleFAQ(button))
})

// Cursor Follower Snake Effect
const isMobile = window.matchMedia("(max-width: 768px)").matches

function enableSnakeCursor() {
  if (isMobile) return

  const snakeContainer = document.createElement("div")
  snakeContainer.id = "snake-container"
  document.body.appendChild(snakeContainer)

  const numDots = 30
  const dots = []

  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement("div")
    dot.classList.add("snake-dot")
    snakeContainer.appendChild(dot)
    dots.push({ element: dot, x: 0, y: 0 })
  }

  let mouseX = 0
  let mouseY = 0

  document.addEventListener("mousemove", e => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  function animateSnake() {
    dots.forEach((dot, index) => {
      const next = dots[index - 1] || { x: mouseX, y: mouseY }
      dot.x += (next.x - dot.x) * 0.3
      dot.y += (next.y - dot.y) * 0.3
      dot.element.style.transform = `translate(${dot.x}px, ${dot.y}px)`
    })
    requestAnimationFrame(animateSnake)
  }

  animateSnake()
}

document.addEventListener("DOMContentLoaded", enableSnakeCursor)

// Contact Form Validation
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault()

    const name = contactForm.querySelector("input[name='name']")
    const email = contactForm.querySelector("input[name='email']")
    const message = contactForm.querySelector("textarea[name='message']")

    let valid = true

    if (!name.value.trim()) {
      name.classList.add("error")
      valid = false
    } else {
      name.classList.remove("error")
    }
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add("error")
      valid = false
    } else {
      email.classList.remove("error")
    }

    if (!message.value.trim()) {
      message.classList.add("error")
      valid = false
    } else {
      message.classList.remove("error")
    }

    if (valid) {
      alert("Message sent successfully!")
      contactForm.reset()
    }
  })
}

// You can test a food-related effect visually with this:
// document.body.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/food.png")'
// document.body.style.backgroundRepeat = 'repeat';


//hover buttons logic

const codeSnippets = {
      glowBlue: `
            <style>
            .btn:hover{
            transform: scale(1.08);
            }
            #glowBtn{
            background: #4f8cff;
            color: #fff;
            padding: 1em 2em;
            border: none;
            border-radius: 2em;
            font-weight: 600;
            box-shadow: 0 0 10px #4d8fff;
            transition: background 0.2s, transform 0.2s;
            cursor: pointer;
            }
            </style>
            <button id = "glowBtn" class="btn glow">Glow</button>`,
      outlineBlue: `
            <style>
            .btn:hover{
            transform: scale(1.08);
            }
            #outlineBtn{
            background: #fff;
            color: #4f8cff;
            padding: 1em 2em;
            border: 2px solid #4f8cff;
            border-radius: 2em;
            font-size: 1.1rem;
            font-weight: 600;
            box-shadow: 0 4px 16px rgba(79, 140, 255, 0.12);
            transition: background 0.2s, transform 0.2s;
            cursor: pointer;
            }
            </style>
            <button id = "outlineBtn" class="btn">Outline</button>`,
      gradientBlue: `
            <style>
            .btn:hover{
            transform: scale(1.08);
            }
            #gradientBtn{
            background: linear-gradient(90deg, #4f8cff 60%, #2563eb 100%);
            color: #fff;
            padding: 1em 2em;
            border: none;
            border-radius: 2em;
            font-size: 1.1rem;
            font-weight: 600;
            box-shadow: 0 4px 16px rgba(79, 140, 255, 0.12);
            transition: background 0.2s, transform 0.2s;
            cursor: pointer;
            }
            </style>
            <button id = "gradientBtn" class="btn gradient">Gradient</button>`,
      glowBlack: `
            <style>
            .btn::after{
            content: "";
            z-index: -1;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #333;
            left: 0;
            top: 0;
            border-radius: 2em;
            }
            .btn::before{
            content: "";
            background: linear-gradient(
              45deg,
              #f11616,rgb(224, 210, 10),rgb(106, 223, 10),
              rgba(16, 205, 139, 0.942),rgb(9, 194, 223),rgba(55, 13, 221, 0.871),
              rgb(220, 19, 169),rgb(222, 18, 18)
            );
            position: absolute;
            top:-2px;
            left: -2px;
            background-size:600%;
            z-index: -1;
            width: calc(100% + 0.3em);
            height: calc(100% + 0.3em);
            filter: blur(1em);
            animation: glow 20s linear infinite;
            border-radius: 2px;
            opacity: 0;
            }
            @keyframes glow{
                0%{
                    background-position: 0 0;
                }
                50%{
                    background-position: 400% 0;
                }
                100%{background-position: 0 0;}
            }
            .btn:hover{
            transform: scale(1.08);
            }
            #glowBtn{
            color: #fff;
            padding: 1em 2em;
            border: none;
            border-radius: 2em;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            position: relative;
            z-index: 0;
            }
            </style>
            <button id = "glowBtn" class="btn glow">Glow</button>`,
      outlineBlack: `
            <style>
            .btn::after{
            content: "";
            z-index: -1;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #333;
            left: 0;
            top: 0;
            border-radius: 2em;
            }
            .btn::before{
            content: "";
            background: linear-gradient(
              45deg,
              #f11616,rgb(224, 210, 10),rgb(106, 223, 10),
              rgba(16, 205, 139, 0.942),rgb(9, 194, 223),rgba(55, 13, 221, 0.871),
              rgb(220, 19, 169),rgb(222, 18, 18)
            );
            position: absolute;
            top:-2px;
            left: -2px;
            background-size:600%;
            z-index: -1;
            width: calc(100% + 0.3em);
            height: calc(100% + 0.3em);
            filter: blur(1em);
            animation: glow 20s linear infinite;
            border-radius: 2px;
            opacity: 0;
            }
            @keyframes glow{
                0%{
                    background-position: 0 0;
                }
                50%{
                    background-position: 400% 0;
                }
                100%{background-position: 0 0;}
            }
            .btn:hover{
            transform: scale(1.08);
            }
            #outlineBtn{
            padding: 1em 2em;
            border-radius: 2em;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            border: none;
            color: white;
            position: relative;
            z-index: 0;
            }
            </style>
            <button id = "outlineBtn" class="btn outline">Outline</button>`,
      gradientBlack: `
            <style>
            .btn::after{
            content: "";
            z-index: -1;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #333;
            left: 0;
            top: 0;
            border-radius: 2em;
            }
            .btn::before{
            content: "";
            background: linear-gradient(
              45deg,
              #f11616,rgb(224, 210, 10),rgb(106, 223, 10),
              rgba(16, 205, 139, 0.942),rgb(9, 194, 223),rgba(55, 13, 221, 0.871),
              rgb(220, 19, 169),rgb(222, 18, 18)
            );
            position: absolute;
            top:-2px;
            left: -2px;
            background-size:600%;
            z-index: -1;
            width: calc(100% + 0.3em);
            height: calc(100% + 0.3em);
            filter: blur(1em);
            animation: glow 20s linear infinite;
            border-radius: 2px;
            opacity: 0;
            }
            @keyframes glow{
                0%{
                    background-position: 0 0;
                }
                50%{
                    background-position: 400% 0;
                }
                100%{background-position: 0 0;}
            }
            .btn:hover{
            transform: scale(1.08);
            }
            #gradientBtn{
            padding: 1em 2em;
            border: none;
            border-radius: 2em;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            color: white;
            position: relative;
            z-index: 0;
            }
            </style>
            <button id = "gradientBtn" class="btn gradient">Gradient</button>`
    };

    let currentShown = null;

function showBox(type) {
      const box = document.getElementById("greyBox");
      if (currentShown === type) {
        box.style.display = "none";
        box.textContent = "";
        currentShown = null;
      } else {
        box.style.display = "block";
        box.textContent = codeSnippets[type];
        currentShown = type;
      }
    }
