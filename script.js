// Atualiza ano
document.addEventListener('DOMContentLoaded', function(){
  const yEl = document.getElementById('y');
  if (yEl) yEl.textContent = new Date().getFullYear();

  // Tilt/parallax suave no mockup do hero
  const dev = document.getElementById('device');
  if (dev){
    const reset = () => dev.style.transform = 'rotateY(-18deg) rotateX(8deg)';
    const onMove = (e) => {
      const r = dev.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      dev.style.transform = `rotateY(${(-18 + x*18)}deg) rotateX(${(8 - y*12)}deg)`;
    };
    dev.addEventListener('mousemove', onMove);
    dev.addEventListener('mouseleave', reset);
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal, .card');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){ entry.target.classList.add('show'); }
    })
  }, {threshold: .12});
  revealEls.forEach(el=> io.observe(el));

  // Suave: scroll em links do header
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      const t = document.querySelector(id);
      if(!t) return;
      e.preventDefault();
      window.scrollTo({ top: t.offsetTop - 70, behavior: 'smooth'});
    })
  });
});
