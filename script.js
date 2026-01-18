// swiper
new Swiper('.swiper',{loop:true,autoplay:{delay:3000}});

// contador
const inicio=new Date('2022-09-11T00:00:00');
setInterval(()=>{
const ahora=new Date();
let diff=ahora-inicio;
let min=Math.floor(diff/60000);
let h=Math.floor(min/60);
let d=Math.floor(h/24);
let m=Math.floor(d/30);
let y=Math.floor(m/12);
document.getElementById('tiempo').innerText=
`${y} años · ${m%12} meses · ${d%30} días · ${h%24} horas · ${min%60} minutos`;
},1000);

// corazones dinámicos
const container=document.querySelector('.heart-container');
setInterval(()=>{
const heart=document.createElement('span');
heart.innerText='❤️';
heart.style.left=Math.random()*100+'vw';
heart.style.fontSize=(Math.random()*20+10)+'px';
container.appendChild(heart);
setTimeout(()=>heart.remove(),8000);
},500);

// modales
function abrirDisculpa(){document.getElementById('modalDisculpa').style.display='flex';}
function abrirCarta(){document.getElementById('modalCarta').style.display='flex';}
function abrirVideo(){document.getElementById('modalVideo').style.display='flex';}
function cerrarTodo(){
['modalDisculpa','modalCarta','modalVideo'].forEach(id=>document.getElementById(id).style.display='none');
document.getElementById('mensaje').innerText='Te amoo mi reina, mi princesa hermosa 👑❤️';
}
