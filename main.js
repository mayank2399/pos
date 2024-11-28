const menuBtn= document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links");
const menuBtnIcon=menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");

    const isOpen=navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen?"ri-close-line":"ri-menu-line")
})

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class","ri-menu-line")
})

const scrollRevealOption ={
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

ScrollReveal().reveal(".header_container h1",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container p",{
    ...scrollRevealOption, 
    delay:500
});

ScrollReveal().reveal(".header_container form",{
    ...scrollRevealOption,
    delay:1000
});

ScrollReveal().reveal(".feature_card",{
   duration:1000,
    interval:500
});


ScrollReveal().reveal(".destination_card",{
    ...scrollRevealOption,
    interval:400
});

ScrollReveal().reveal(".package_card",{
    ...scrollRevealOption,
    interval:400
});

const swiper=new Swiper(".swiper",{
    slidesPreView:"auto",
    spaceBetween:20,
    pagination:{
        el:".swiper-pagination"
    },
})