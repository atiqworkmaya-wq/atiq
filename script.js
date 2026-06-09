window.addEventListener("scroll",()=>{

const nav=document.querySelector("header");

if(window.scrollY>50){
nav.style.background="#020617";
}else{
nav.style.background="#111827";
}

});
