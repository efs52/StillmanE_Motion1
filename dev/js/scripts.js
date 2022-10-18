import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// gsap.set("#hero h1 span",{alpha:0.25})

// var heroButtonTL = gsap.timeline({paused:true});
//     heroButtonTL.to("#Get-started-btn",{duration:0.25,scale:2, backgroundcolor:"#881d02"},"trigger")  
//     .to("#line-1",{duration:0.25, alpha:0, y:50},"trigger")
//     .to("#line-2",{duration:0.25, alpha:0, y:20},"trigger")
//     .to("#Get-started-btn",{duration:0.25, rotateY:180},"-=0.15");


// var GetBtn = document.querySelector("Get-started-btn");


// GetBtn.addEventListener("mouseover",function(){
//     heroButtonTL.play();
// })

// GetBtn.addEventListener("mouseout",function(){
//     heroButtonTL.reverse();
// })

// function heroAnimation(){
//     var tl = gsap.timeline();
//     tl.from("#line-1",{duration:1,alpha:0, y:-100})
//     .from("#line-2",{duration:1,alpha:0, y:-100},"-=0.75")
//     .from("#Get-started-btn",{duration:1,y:100, alpha:0},"-=.5")
//     .from("#Get-started-btn",{duration:0.5,rotation:90, alpha:0, transformOrigin: "left bottom"},"-=0.5");
//     return tl;
// }

// var mainTimeline = gsap.timeline();
// mainTimeline.add(heroAnimation());







gsap.set("form",{scaleX: 0, transformOrigin:"left center"});

function heroAnimation(){
    var tl = gsap.timeline();
    tl.from("#line-1",{duration:0.5,x:-200,alpha:0})
        .from("#line-2",{duration:0.5,x:-100,alpha:0,delay:0.5},"-=0.25")
        .from("#Get-started-btn",{duration:0.5,x:200,alpha:0,delay:1},"-=0.25");
    return tl;
}

var mainTL= gsap.timeline();
mainTL.add(heroAnimation());


let GetStartedBtn = document.querySelector("aside");

GetStartedBtn.addEventListener("mouseover", function(){

    gsap.to("#Get-started-btn",{duration:0.25,backgroundColor:"#878787"});
    gsap.to("aside",{duration:0.25, x:-800});
    gsap.to("form",{duration:0.25,scaleX: 1});
})

GetStartedBtn.addEventListener("mouseout", function(){
    gsap.to("#Get-started-btn",{duration:0.25,backgroundColor:"#f91515"});
    gsap.to("aside",{duration:0.25,x:0});
    gsap.to("form",{duration:0.25,scaleX: 0});
})