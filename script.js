document.getElementById('year').textContent=new Date().getFullYear();
const els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.1});
 els.forEach(e=>io.observe(e));
}else{els.forEach(e=>e.classList.add('show'))}
