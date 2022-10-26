import { gsap } from "gsap";


import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);


let mySplitText = new SplitText(".split", {type: "chars"});
let chars = mySplitText.chars;

gsap.from(chars, {
    yPercent: 130,
    stagger: 0.05,
    ease: "back.out",
    duration: 1,
    scrollTrigger: {
        trigger: '.split',
        start: "top 80%",
        markers: true

    }
});

function bannerAnimation(){
    var tl = gsap.timeline();
    tl.to("#container",{duration: 1, fill:"red",x:300});
}



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

function wonderAnimation(){
    var tl =gsap.timeline({scrollTrigger:{trigger:"#hero-2", scrub:true, end:"top 40%", start:"top 80%"}});
    tl.from("#bg-img",{duration:5, clipPath:"inset(0 50%)"})
    .from("#hero-2 h1",{duration:1, scale:3, alpha:0},"-=50%")
    return tl;
}





function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});






var mainTimeline = gsap.timeline();
mainTimeline.add(heroAnimation())
    .add(bannerAnimation())
    .add(aboutAnimation())
    .add(wonderAnimation());


    








    