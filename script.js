let i=0;const p=[...document.querySelectorAll('.page')];const bar=document.getElementById('bar');const ans=[];
function show(){p.forEach((e,n)=>e.classList.toggle('active',n===i));bar.style.width=((i+1)/p.length*100)+'%'}
function next(){if(i<p.length-1){i++;show();}}
function pick(a){ans.push(a);next();console.log(ans);}
show();