// Bathu Spa — Fresh Start v2 interactions
const $ = (s, c=document)=>c.querySelector(s);
const $$ = (s, c=document)=>Array.from(c.querySelectorAll(s));

// Year
const y = $('#year'); if (y) y.textContent = new Date().getFullYear();

// Mobile nav
const burger = $('.nav__burger');
const links = $('.nav__links');
const cta = $('.nav__cta');
if (burger){
  burger.addEventListener('click', ()=>{
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    links.style.display = expanded ? 'none' : 'flex';
    if (cta) cta.style.display = expanded ? 'none' : 'inline-flex';
  });
}

// Preloader
const preloader = $('#preloader');
window.addEventListener('load', ()=>{ if (preloader) preloader.classList.add('hidden'); });

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if (e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} }); }, {threshold:0.12});
$$('.reveal').forEach(el=>io.observe(el));

// Before/After sliders
$$('.compare').forEach(compare=>{
  const slider = $('.compare__slider', compare);
  const after = $('.compare__after', compare);
  if (!slider || !after) return;
  const setClip = v => after.style.clipPath = `inset(0 0 0 ${100-Number(v)}%)`;
  setClip(slider.value);
  slider.addEventListener('input', e=> setClip(e.target.value));
});

// Smooth page transitions (internal links, respects reduced motion)
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function isInternalLink(a){ const url = new URL(a.href, window.location.origin); return url.origin === window.location.origin && !a.target && !a.hash && !/\.pdf$/i.test(url.pathname); }
if (!prefersReduced){
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a');
    if (!a) return;
    if (isInternalLink(a)){
      e.preventDefault();
      document.body.classList.add('page-exit');
      setTimeout(()=>{ window.location.href = a.href; }, 250);
    }
  });
}

// Focus main on navigation
window.addEventListener('pageshow', ()=>{ const main = document.getElementById('main'); if (main) main.focus(); });
