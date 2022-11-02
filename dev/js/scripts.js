import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function simpleMotion(){

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

    tl.from(".odd", {duration:3, drawSVG:0, stagger:0.25, rotate:180, transformOrigin: "center"}, "spin")
    .fromTo(".even", {drawSVG: "0%, 0%"}, {duration:2, drawSVG:"0%, -100%", stagger:0.25, rotate:180, transformOrigin: "center"}, "spin");

    return tl;
}

function UIMotion(){
     var bottomLine = document.querySelector("#bottom-line");

     bottomLine = bottomLine.getBBox();

     console.log(bottomLine.width);
     var tl = gsap.timeline();
     tl.to("#pencil", {duration: 0.5, x: bottomLine.width}, "draw")
     .from("#bottom-line", {duration: 0.5, drawSVG:0}, "draw")
     .to("#pencil", {duration: 0.5, alpha:0}, "drawOutline")
     .fromTo("#outline", {drawSVG:"100% 100%"},{duration: 0.5, drawSVG:"100% 0%"}, "drawOutline")
     return tl;
}


var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
   .add(patternMotion())
   .add(UIMotion())

   GSDevTools.create();
<div class="drawSVG">

    <div class="svg">
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 172">
  <g id="Alltriangles" fill="#D9D9D9">
    <g id="smalltriangles">
      <path id="smalltriangle1" d="m142.198 20.46-4.591 35.208-28.196-21.58 32.787-13.629Z"/>
      <path id="smalltriangle2" d="m139.285 103.629 5.036 35.148-32.957-13.213 27.921-21.935Z"/>
      <path id="smalltriangle4" d="m21.372 20.337 32.684 13.874L25.7 55.58l-4.327-35.243Z"/>
      <path id="smalltriangle3" d="m29.493 103.345 26.4 23.745-33.763 10.991 7.363-34.736Z"/>
    </g>
    <g id="Bigtriangles">
      <path id="bigtriangle4" d="m0 79.5 48.75-28.146v56.292L0 79.5Z"/>
      <path id="bigtriangle3" d="m110.546 111.161-28.192 48.724-28.1-48.777 56.292.053Z"/>
      <path id="bigtriangle2" d="m166 79.5-48.75 28.146V51.354L166 79.5Z"/>
      <path id="Bigtriangle1" d="m82.5 0 28.146 48.75H54.354L82.5 0Z"/>
    </g>
  </g>
</svg>
    </div>
</div>