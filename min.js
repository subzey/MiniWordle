w=W[new Date%W.length],g=6,i.onkeyup=e=>{13==e.which&&W.includes(v=i.value)&&(p.innerHTML+="<p>"+[...v].map(y=(e,i)=>e!=(c=[...w][i])&&(y[c]=-~y[c],e)).map(((e,i)=>0===(z=e&&~~y[e]&&!!y[e]--)?"⬛":z?"🟨":"🟩"))+v,i.value=v!=w&&--g?"":w)}