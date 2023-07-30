let btnMenu=document.getElementById("icon-menu"),
     btnClose=document.getElementById("icon-close"),
     headerNavMenu=document.getElementById("header-nav-menu")
     liMenu=document.querySelectorAll("#header-nav-menu > ul > li")




// ---------close & open menu and close outside click menu ------------------------
     document.addEventListener('click', (event) => {
        const withinBoundaries = event.composedPath().includes(headerNavMenu)
      
        if (withinBoundaries) {
          // target.innerText = 'Click happened inside element'
          console.log("aaaaaaaaaaaaaaaaaaaaa");
        } else {
          // target.innerText = 'Click happened **OUTSIDE** element'
         if(false===headerNavMenu.getAttribute("class").split(" ").includes("active-header-nav-menu"))
         headerNavMenu.classList.add("active-header-nav-menu")
         else{
            headerNavMenu.classList.remove("active-header-nav-menu")
         }
        }
      })




// ---------close when click button close and click on link ------------------------

    //  btnMenu.addEventListener("click",()=>{headerNavMenu.classList.add("active-header-nav-menu")})
     btnClose.addEventListener("click",()=>{headerNavMenu.classList.remove("active-header-nav-menu")})
     liMenu.forEach(li=>{li.addEventListener("click",()=>{headerNavMenu.classList.remove("active-header-nav-menu")})})







    //  ---------------------------scroll top-----------------------------
  // ----------------------change background header when scroll down -----------------------
window.onscroll=function(){
    let header=document.getElementById("header")

    if(document.documentElement.scrollTop>60){
        header.classList.add("changeHeader")
 

    }
    else{
        header.classList.remove("changeHeader")

    }
}





// -----------------------  scroll reveal  ---------------------------------
const sr=ScrollReveal({
    distance:"60px",
    duration:1500,
    reset:true
})
sr.reveal("#Home",{delay:200,origin:"top"})
sr.reveal("#header",{delay:200,origin:"bottom"})
sr.reveal("#Bio",{delay:200,origin:"bottom"})
sr.reveal("#Projects",{delay:200,origin:"bottom"})
sr.reveal("#Contacts",{delay:200,origin:"bottom"})
const sr2=ScrollReveal({
    distance:"60px",
    duration:1500,
    reset:false
})
sr2.reveal(".header-logo",{delay:2000,origin:"left"})




