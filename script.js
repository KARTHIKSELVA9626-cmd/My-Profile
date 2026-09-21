const nav=document.querySelector('.nav');
document.querySelector('.menu').addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.section,.hero-copy,.portrait').forEach(e=>{e.style.opacity='0';
    e.style.transform='translateY(18px)';
    e.style.transition='opacity .7s ease,transform .7s ease';
    obs.observe(e)});
    document.head.insertAdjacentHTML('beforeend','<style>.show{opacity:1!important;transform:none!important}</style>');