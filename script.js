// --- Particles ---
particlesJS("particles-js",{particles:{number:{value:60},size:{value:2},move:{speed:1},line_linked:{enable:true,color:"#888"}}});

// --- Navbar Toggle ---
const menuToggle=document.getElementById('menu-toggle'), navLinks=document.querySelector('.nav-links');
menuToggle.addEventListener('click',()=>navLinks.classList.toggle('active'));

// --- Navbar Scroll Effect ---
const header=document.querySelector("header");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>50));

// --- Smooth Scroll ---
document.querySelectorAll("nav a").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  });
});

// --- Progress Bars ---
const progressBars=document.querySelectorAll(".progress");
const observer=new IntersectionObserver((entries,obs)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const bar=entry.target;
      const finalWidth=bar.style.width;
      bar.style.width="0";
      setTimeout(()=>bar.style.width=finalWidth,200);
      obs.unobserve(bar);
    }
  });
},{threshold:0.5});
progressBars.forEach(bar=>observer.observe(bar));

// --- Project Cards ---
const projectCards=document.querySelectorAll(".project-card");
const projectObserver=new IntersectionObserver((entries,obs)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("show");obs.unobserve(entry.target);}
  });
},{threshold:0.2});
projectCards.forEach(card=>projectObserver.observe(card));

// --- Experience Cards ---
const expCards=document.querySelectorAll(".exp-card");
const expObserver=new IntersectionObserver((entries,obs)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("highlight");obs.unobserve(entry.target);}
  });
},{threshold:0.3});
expCards.forEach(card=>expObserver.observe(card));

// --- Contact Form Validation ---
const form=document.querySelector("#contactForm");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const name=form.querySelector("#name").value.trim(),
        email=form.querySelector("#email").value.trim(),
        message=form.querySelector("#message").value.trim();
  if(!name||!email||!message){alert("Please fill in all fields."); return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){alert("Please enter a valid email."); return;}
  window.location.href=`mailto:user@email.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
  form.reset();
});

// --- Update header height for scroll-padding ---
function updateHeaderHeightVar(){
  const header=document.querySelector('header');
  if(!header) return;
  document.documentElement.style.setProperty('--header-height',`${header.offsetHeight}px`);
}
updateHeaderHeightVar();
window.addEventListener('resize',updateHeaderHeightVar);
