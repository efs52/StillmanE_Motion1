import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

//   var tl = gsap.timeline({ defaults: { duration: 1, delay: 3 } });
  
//   tl.from('dot1', { y: 40 })
//     .from('#dot2', { y: 100 }, '+=0.2')

// var tl = gsap.timeline({duration: 0.5, ease: 'none', opacity: 0});
// tl.to("#dot1", {x: 100, duration: 1});
// tl.to("#dot2", {y: 50, duration: 1});
// tl.to("#dot3", {opacity: 0, duration: 1});

// var tl = gsap.timeline();
// tl.to(".class1", {rotation: -270, duration: 1, ease: "elastic"})
//   .to(".class2", {rotation: -360, duration: 1, ease: "elastic"})
//   .to(".class3", {rotation: -180, duration: 1, ease: "elastic"});

function FadeAnimation(){
  var tl = gsap.timeline({duration:3})
      tl.from("#dot1", {opacity: 0}, "appear")
        .from("#dot3", {opacity:0},"appear1")
        .from("#dot19", {opacity:0},"appear1")

        .from("#dot12", {opacity:0},"appear2")

        .from("#dot9", {opacity:0},"appear3")
        .from("#dot10", {opacity:0},"appear3")
        .from("#dot17", {opacity:0},"appear3")
        .from("#dot18", {opacity:0},"appear3")
        .from("#dot19", {opacity:0},"appear3")

        .from("#dot4", {opacity:0},"appear4")
        .from("#dot7", {opacity:0},"appear4")
        .from("#dot13", {opacity:0},"appear4")
        .from("#dot14", {opacity:0},"appear4")
        .from("#dot15", {opacity:0},"appear4")

        .from("#dot2", {opacity:0},"appear5")
        .from("#dot8", {opacity:0})

        .from("#dot5", {opacity:0},"appear6")
        .from("#dot16", {opacity:0},"appear6")
        
        .from("#dot6", {opacity:0},"appear7")
        .from("#dot11", {opacity:0},"appear7")
        return tl;
}





  // function FadeAnimation(){}
  //   var tl = gsap.timeline();
  //   tl.from("#about aside div",{duration:1, scale:3, alpha:0},"startabout")
  //   .from("#about h1",{duration:1,x:"-=200%", alpha:0},"startabout")
  //   .from("#about p",{duration:1,x:"-=200%", alpha:0},"startabout")
  //   return tl;

  //   function FadeAnimation(){
  //     var tl = gsap.timeline();
  //     var background_dots = document.querySelector("#background_dots");
  //    tl.to(background_dots, {opacity:0, duration:3});
  //    tl.to(background_dots, {opacity:100, duration:3, delay:1});
  //  }

   var mainTimeline = gsap.timeline();
  mainTimeline.add(FadeAnimation());
    // .add(groceryAnimation())
    // .add(aboutAnimation())
    // .add(wonderAnimation());



    // .from('#line-1', { y: 100 }, '-=0.2')
    // .from('#line-2', { y: 80 }, '-=0.1')
    // .from('#line-3', { y: 60 }, '-=0.1')
    // .from('#line-4', { y: 40 }, '-=0.1')
    // .from('#btn', { y: 100 }, '-=0.2');

    GSDevTools.create();