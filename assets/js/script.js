document.cookie = 'third_party_var=value; SameSite=None; Secure';
document.cookie = 'third_party_var=metriplica; SameSite=None; Secure';


const main = document.getElementById('main');

// ------------------------Header . Navbar---------------------
const header = document.querySelector('.header');
const btn_menu = document.querySelector('.btn_menu');
const nav_links = document.querySelectorAll('.nav_link');

var click = Array.from(nav_links);
click.push(btn_menu);
click.forEach(e =>{
  e.addEventListener('click', ()=>{
    header.classList.toggle('open');
  });
});

// ------------------------Intersection Observer---------------------
const options = { rootMargin: '0px 300px 350px 300px' };
var images = document.querySelectorAll('[data-src]');
const lazyLoad = (image)=>{
  image.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.src = entry.target.dataset.src;
      obsLoad.unobserve(entry.target);
    }})}
const obsLoad = new IntersectionObserver(lazyLoad, options);
images.forEach((img)=>{
  obsLoad.observe(img);
});

// ------------------------Cambiar el Url para sacar los #url---------------------
window.onhashchange = function () {
  window.history.replaceState('', document.title, window.location.pathname + window.location.search)
};
window.addEventListener('scroll', ()=>{
  if (window.scrollY > 500) {
    header.style.backgroundColor = 'var(--clr-dark)';
  }
  else{
    header.style.backgroundColor = '';
  }
});