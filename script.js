document.getElementById("switch").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    console.log("hello");
    let sun=document.querySelector(".sun")
    let moon = document.querySelector(".moon");
    if (document.body.classList.contains("dark-theme")) {
        moon.style.display = "block";
        sun.style.display="none"
        
    }else{
        sun.style.display="block"
        moon.style.display = "none";

    }
});
document.querySelector(".bars").addEventListener("click",Navbar)
function Navbar(){
    console.log("hello")
    if(document.querySelector(".menu").style.display=="none"){
        document.querySelector(".menu").style.display="block"
    }else{
        document.querySelector(".menu").style.display="none"
    }
}




