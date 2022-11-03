import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { TimelineMax } from "gsap/gsap-core";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function simpleMotion(){
    var tl = gsap.timeline()
    tl.from("#line", {drawSVG:"0%", duration: 3});

    return tl;

  }


function patternMotion(){

    var tl = gsap.timeline();

    tl.from(".small", {duration:4, drawSVG:0, stagger:0.25, rotate:180, transformOrigin: "center"}, "spin")
    .fromTo(".big", {drawSVG: "0%, 0%"}, {duration:3, drawSVG:"0%, -100%", stagger:0.25, rotate:180, transformOrigin: "center"}, "spin");

    return tl;
}

// function UIMotion(){
//      var bottomLine = document.querySelector("#bottom-line");

//      bottomLine = bottomLine.getBBox();

//      console.log(bottomLine.width);
//      var tl = gsap.timeline();
//      tl.to("#pencil", {duration: 0.5, x: bottomLine.width}, "draw")
//      .from("#bottom-line", {duration: 0.5, drawSVG:0}, "draw")
//      .to("#pencil", {duration: 0.5, alpha:0}, "drawOutline")
//      .fromTo("#outline", {drawSVG:"100% 100%"},{duration: 0.5, drawSVG:"100% 0%"}, "drawOutline")
//      return tl;
// }

function Preloader(){

  var tl = new
  TimelineMax ()
  tl.from("#bigsquare", {duration: 2, rotate: 180, yoyoEase: "power2.out", transformOrigin: "center", repeat: 2, repeatDelay:0.5})
  .set("#leftarrow", {duration: 0.5, xPercent: -30})
  .from("#rightarrow", {duration: 0.5, xPercent: -30})

  return tl;


  // var tl = gsap.timeline()
  // tl.to("#bigsquare", {duration: 2, rotate: 180, yoyoEase: "power2.out", transformOrigin: "center", repeat: 5, repeatDelay:0.5})
  // .to("#leftarrow", {duration: 0.5, xPercent: -30})
  // .to("#rightarrow", {duration: 0.5, xPercent: 30});
  // return tl;


}


var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
   .add(patternMotion())
   .add(Preloader())

   GSDevTools.create();
