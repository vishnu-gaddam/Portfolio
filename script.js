// Particles Background
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 2 },
    move: { speed: 1},
    line_linked: { enable: true, color: "#888" }
  }
});

// Navbar Scroll Effect

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth Scroll for Nav

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Progress Bar Animation (Education)

const progressBars = document.querySelectorAll(".progress");
const options = { threshold: 0.5 };

const animateProgress = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const finalWidth = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = finalWidth;
      }, 200);
      observer.unobserve(bar);
    }
  });
};

const observer = new IntersectionObserver(animateProgress, options);
progressBars.forEach(bar => observer.observe(bar));

// Project Card Animations

const projectCards = document.querySelectorAll(".project-card");

const animateProjects = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
};

const projectObserver = new IntersectionObserver(animateProjects, { threshold: 0.2 });
projectCards.forEach(card => projectObserver.observe(card));

// Experience Card Highlight

const expCards = document.querySelectorAll(".exp-card");

const animateExperience = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("highlight");
      observer.unobserve(entry.target);
    }
  });
};

const expObserver = new IntersectionObserver(animateExperience, { threshold: 0.3 });
expCards.forEach(card => expObserver.observe(card));

// Contact for Validation

const form = document.querySelector("#contactForm");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    // If valid, open mailto link with filled values
    const mailtoLink = `mailto:user@email.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;

    form.reset();
  });

// keep CSS and JS in sync: set --header-height to header.offsetHeight
function updateHeaderHeightVar() {
  const header = document.querySelector('header');
  if (!header) return;
  const h = header.offsetHeight;
  // store in root so CSS can use it
  document.documentElement.style.setProperty('--header-height', `${h}px`);
}
// run at load and on resize
updateHeaderHeightVar();
window.addEventListener('resize', updateHeaderHeightVar);
