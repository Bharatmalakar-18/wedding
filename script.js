/* Floating Particles */
for(let i=0;i<25;i++){
  let p=document.createElement("div");
  p.className="particle";
  p.style.left=Math.random()*100+"%";
  p.style.animationDuration=(5+Math.random()*5)+"s";
  document.body.appendChild(p);
}

const wrapper=document.getElementById("wrapper");
const cardSection=document.getElementById("cardSection");
const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

wrapper.addEventListener("click",()=>{
  wrapper.classList.add("open");
  setTimeout(()=>{
    wrapper.style.display="none";
    cardSection.style.display="flex";
    startEvents();
    music.play();
  },1500);
});

function startEvents(){
  const events=document.querySelectorAll(".event");
  events.forEach((event,index)=>{
    setTimeout(()=>{
      event.classList.add("show");
    },index*2000);
  });
}

/* Countdown */
const weddingDate=new Date("April 25, 2026 19:00:00").getTime();

setInterval(()=>{
  const now=new Date().getTime();
  const gap=weddingDate-now;

  const d=Math.floor(gap/(1000*60*60*24));
  const h=Math.floor((gap%(1000*60*60*24))/(1000*60*60));
  const m=Math.floor((gap%(1000*60*60))/(1000*60));
  const s=Math.floor((gap%(1000*60))/1000);

  document.getElementById("countdown").innerHTML=
  d+" दिन | "+h+" घंटे | "+m+" मिनट | "+s+" सेकंड";
},1000);

/* Music Toggle */
musicBtn.addEventListener("click",()=>{
  if(music.paused){
    music.play();
    musicBtn.innerHTML="🔊";
  }else{
    music.pause();
    musicBtn.innerHTML="🔇";
  }
});


