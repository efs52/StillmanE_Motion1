import { gsap } from "gsap";
// import {SplitText} from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText);


// Sets
gsap.set("#hero h1 span",{alpha:0.25})

var heroButtonTL = gsap.timeline({paused:true});
    heroButtonTL.to("#Get-started-btn",{duration:0.25,scale:1.5, backgroundColor:"#A1BD7E"},"trigger")  
    .to("#line-1",{duration:0.25, alpha:0, y:50},"trigger")
    .to("#line-2",{duration:0.25, alpha:0, y:20},"trigger")
    .to("#Get-started-btn i",{duration:0.25, rotateY:180},"-=0.15");


var startBtn = document.querySelector("#Get-started-btn");

startBtn.addEventListener("mouseover",function(){
    heroButtonTL.play();
})

startBtn.addEventListener("mouseout",function(){
    heroButtonTL.reverse();
})

function heroAnimation(){
    var tl = gsap.timeline();
    tl.from("#line-1",{duration:1,alpha:0, y:-100})
    .from("#line-2",{duration:1,alpha:0, y:-100},"-=0.75")
    .from("#Get-started-btn",{duration:1,y:100, alpha:0},"-=.5")
    .from("#Get-started-btn i",{duration:0.5,rotation:90, alpha:0, transformOrigin: "left bottom"},"-=0.5");
    return tl;
}

// let mySplitText = new SplitText('.split', {type:'chars'});
// let chars = mySplitText.chars;

// gsap.from(chars,{
//     yPercent: 130,
//     stagger: 0.02,

// })

// gsap.set("form",{scaleX: 0, transformOrigin:"left center"});

// function heroAnimation(){
//     var tl = gsap.timeline();
//     tl.from("#line-1",{duration:0.5,x:-200,alpha:0})
//         .from("#line-2",{duration:0.5,x:-100,alpha:0,delay:0.5},"-=0.25")
//         .from("#Get-started-btn",{duration:0.5,x:200,alpha:0,delay:1},"-=0.25");
//     return tl;
// }


// let GetStartedBtn = document.querySelector("aside");

// GetStartedBtn.addEventListener("mouseover", function(){

//     gsap.to("#Get-started-btn",{duration:0.25,backgroundColor:"#878787"});
//     gsap.to("aside",{duration:0.25, x:-800});
//     gsap.to("form",{duration:0.25,scaleX: 1});
// })

// GetStartedBtn.addEventListener("mouseout", function(){
//     gsap.to("#Get-started-btn",{duration:0.25,backgroundColor:"#f91515"});
//     gsap.to("aside",{duration:0.25,x:0});
//     gsap.to("form",{duration:0.25,scaleX: 0});
// })

function aboutAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#about", scrub:true, end:"top 30%"}});
    tl.from("#about aside div",{duration:1, scale:3, alpha:0},"startabout")
    .from("#about h1",{duration:1,x:"-=200%", alpha:0},"startabout")
    .from("#about p",{duration:1,x:"-=200%", alpha:0},"startabout")
    return tl;
}







// console.clear();

// gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
// gsap.defaults({ease: "none"});



// const pulses = gsap.timeline({
//   defaults: {
//     duration: 0.05, 
//     autoAlpha: 1, 
//     scale: 2, 
//     transformOrigin: 'center', 
//     ease: "elastic(2.5, 1)"
//   }})
// .to(".ball02, .text01", {}, 0.2) 
// .to(".ball03, .text02", {}, 0.33)
// .to(".ball04, .text03", {}, 0.46)

// const main = gsap.timeline({defaults: {duration: 1},
//   scrollTrigger: {
//     trigger: "#svg",
//     scrub: true,
//     start: "top center",
//     end: "bottom center"
//   }})
// .to(".ball01", {duration: 0.01, autoAlpha: 1})
// .from(".theLine", {drawSVG: 0}, 0)
// .to(".ball01", {motionPath: {
//   path: ".theLine", 
//   align:".theLine",
//   alignOrigin: [0.5, 0.5],
// }}, 0)
// .add(pulses, 0);













function wonderAnimation(){
    var tl =gsap.timeline({scrollTrigger:{trigger:"#hero-2", scrub:true, end:"top 40%", start:"top 80%"}});
    tl.from("#bg-img",{duration:5, clipPath:"inset(0 50%)"})
    .from("#hero-2 h1",{duration:1, scale:3, alpha:0},"-=50%")
    return tl;
}

var mainTimeline = gsap.timeline();
mainTimeline.add(heroAnimation())
    .add(aboutAnimation())
    .add(wonderAnimation());


    








    