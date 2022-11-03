import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function simpleMotion(){

  var tl = gsap.timeline();
  tl.fromTo("#vectorline", 1, {drawSVG:0, x: vectorline.width, delay: 0.5});

  return tl;

  

  // var vectorline = document.querySelector("#vectorline");
  
  // vectorline = vectorline.getBBox();

  // var tl = gsap.timeline();
  // tl.fromTo("#vectorline", 1, {drawSVG:0, x: vectorline.width, delay: 0.5});

  // return tl;




    // var line = document.querySelector("#center-line");

    // line = line.getBBox();

    // var leftBall = document.querySelector("#left-ball");
    // leftBall = leftBall. getBBox();

    // var center = document.querySelector("#center");
    // center = center.getBBox();
    // console.log(center.height)

    // gsap.set("#left-ball", {x:line.width / 2 + leftBall.width / 2, transformOrigin: "center"})
    // gsap.set("#right-ball", {x:line.width / 2 - leftBall.width / 2, transformOrigin: "center"})

    // var tl = gsap.timeline();
    // tl.from("#right-ball", {scale:0, duration: 0.25, drawSVG: 0})
    //   .from("#left-ball", {scale:0, duration:0.25},"-+50%")
    //   .to("#")

    // return tl;
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


var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
   .add(patternMotion())
  //  .add(UIMotion())

   GSDevTools.create();
