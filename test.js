const header = document.querySelector('.header');



console.log(header.innerHTML);





 header.innerHTML = header.innerText.split('').map((x,idx)=>`<span class="turn" style="transition-delay:${idx * 300}ms">${x}</span>`).join('');


//  const spans = document.querySelectorAll('.header span');
//  console.log(spans);
//  const tick = ()=>{

//     spans.forEach((span)=>{
//         span.classList.remove('turn-2');
//     })


//  };

//  setInterval(tick, 1000);