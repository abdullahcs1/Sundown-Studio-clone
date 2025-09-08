
gsap.registerPlugin(ScrollTrigger);

// Initialize LocomotiveScroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Sync LocomotiveScroll with GSAP ScrollTrigger
scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0, left: 0, width: window.innerWidth, height: window.innerHeight
        };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();


function imageHover(){
let elemC = document.querySelector("#elem-container");
let fixed = document.querySelector("#fixed-image");

elemC.addEventListener("mouseenter",function(){
    fixed.style.display="block";

});
elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none";
});

let elems=document.querySelectorAll(".elem");
elems.forEach(function(dets){
    dets.addEventListener("mouseenter",function(){
        let image =dets.getAttribute("data-image");
            fixed.style.backgroundImage =`url(${image})`;

    });
});
};

function swiperjss(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
    //   centeredSlides: true,
      spaceBetween: 50,
    //   grabCursor: true,
    });
};

var desc = document.querySelector("#desc")
var Design = document.querySelector("#Design")
var design = document.querySelector("#design")
var Project = document.querySelector("#Project")
var Execution = document.querySelector("#Execution")
var image = document.querySelector("#page4-img")

Design.addEventListener("click",function(){
    desc.textContent = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
    var add = Design.getAttribute("data-img")
    image.setAttribute("src",`${add}`)
    Project.style.right = "0vw"
    Design.style.right = "2vw"
    design.style.color = "#EFEAE3"
    Execution.style.right = "0vw"
    Execution.style.color = "#504A45"
    Project.style.color = "#504A45"
});

Project.addEventListener("click",function(){
    desc.textContent = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
    var add = Project.getAttribute("data-img")
    image.setAttribute("src",`${add}`)
    Project.style.right = "2vw"
    Project.style.color = "#EFEAE3"
    Design.style.right = "0vw"
    design.style.color = "#504A45"
    Execution.style.color = "#504A45"
    Execution.style.right = "0vw"
});

Execution.addEventListener("click",function(){
    desc.textContent = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    var add = Execution.getAttribute("data-img")
    image.setAttribute("src",`${add}`)
    Project.style.right = "0vw"
    Design.style.right = "0vw"
    Execution.style.right = "2vw"
    Execution.style.color = "#EFEAE3"
    Project.style.color = "#504A45"
    design.style.color = "#504A45"
});

let para=document.querySelector("#para-slide");
gsap.from(para,{
    scrollTrigger:{
        trigger:para,
        scroller:"#main",
        start:"top 100%",
        end:"bottom 0%",
        scrub:2,
        
    },
    opacity:0,
    y:50
})
function menuanimate(){
let nav=document.querySelector("nav h3");
let full=document.querySelector("#full-scr");
let img=document.querySelector("nav img");
var flag=0;
nav.addEventListener("click",function(){
    if(flag===0){
        full.style.top=0;
        img.style.opacity=0;
        flag=1;
    }
    else{
        full.style.top="-100%"
        img.style.opacity=1;

        flag=0;
    }
})}

var loader=document.querySelector("#loader");
setTimeout(function(){
 loader.style.top="-100%"
},4200)

menuanimate();

imageHover();
swiperjss();