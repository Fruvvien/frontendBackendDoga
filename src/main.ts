import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
document.addEventListener("DOMContentLoaded", ()=>{


  const url = document.getElementById("url") as HTMLInputElement;
  const szelesseg = document.getElementById("szelesseg") as HTMLInputElement;
  const vastagsag = document.getElementById("vastagsag") as HTMLInputElement;
  const szin = document.getElementById("szin") as HTMLInputElement;
  const cicaKep = document.getElementById("cicaKep") as HTMLImageElement;
  const darkMode = document.getElementById("darkMode") as HTMLButtonElement;
  
 

  url.addEventListener("change", (e)=>{
    cicaKep.src =  e.currentTarget!.value;
    cicaKep.style.border = "solid"; 
  })

  szelesseg.addEventListener("input", (e)=>{
    cicaKep.width = e.currentTarget!.value;
  })

  vastagsag.addEventListener("input", (e) =>{
    
    cicaKep.style.borderWidth = e.currentTarget!.value + "px";
  })

  szin.addEventListener("input", (e) =>{
    cicaKep.style.borderColor = e.currentTarget!.value;
  })

  darkMode.addEventListener("click", (e) =>{
    document.body.classList.toggle("dark-mode")
  })
})
