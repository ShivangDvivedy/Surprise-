const w=document.getElementById('welcome');
const p2=document.getElementById('page2');
const p3=document.getElementById('page3');

document.getElementById('startBtn').onclick=()=>{
w.classList.add('hidden');
p2.classList.remove('hidden');
};

document.getElementById('promiseBtn').onclick=()=>{
p2.classList.add('hidden');
p3.classList.remove('hidden');
};

setInterval(()=>{
const h=document.createElement('div');
h.className='heart';
h.innerHTML='❤️';
h.style.left=Math.random()*100+'vw';
h.style.fontSize=(18+Math.random()*18)+'px';
document.body.appendChild(h);
setTimeout(()=>h.remove(),6000);
},500);
