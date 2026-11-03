const nav=document.querySelector('nav');document.querySelector('.menu')?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));const toast=document.getElementById('toast');document.getElementById('copy')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('VEXIL')}catch(e){const x=document.createElement('textarea');x.value='VEXIL';document.body.appendChild(x);x.select();document.execCommand('copy');x.remove()}toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)});document.querySelectorAll('.fake').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.getElementById('download').scrollIntoView({behavior:'smooth'})}));
// VEXIL signature slogan rotation
const heroRotator = document.getElementById('heroRotator');
if (heroRotator) {
  const lines = [
    'ВИЗУАЛ НОВОГО УРОВНЯ.',
    'ВИЗУАЛ БЕЗ КОМПРОМИССОВ.',
    'ИГРАЙ. ВЫДЕЛЯЙСЯ. ПОБЕЖДАЙ.',
    'ВИЗУАЛ, КОТОРЫЙ ОЩУЩАЕТСЯ.',
    'ТВОЯ ИГРА — ТВОИ ПРАВИЛА.'
  ];
  let line = 0;
  setInterval(() => {
    heroRotator.classList.add('switching');
    setTimeout(() => {
      line = (line + 1) % lines.length;
      heroRotator.textContent = lines[line];
      heroRotator.classList.remove('switching');
    }, 420);
  }, 3200);
}
