import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { TimelineMax } from "gsap/gsap-core";
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

function Preloader(){

  var tl = gsap.timeline({repeat:5, repeatDelay:-1});

    tl.from(".tiny", {duration:4, drawSVG:0, stagger:0.25, rotate:180, transformOrigin: "center"}, "spin")
    .fromTo(".large", {drawSVG: "0%, 0%"}, {duration:3, drawSVG:"0%, -100%", stagger:0.25, rotate:180, transformOrigin: "center"}, "spin");

    return tl;

}


var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
   .add(patternMotion())
   .add(Preloader())

   GSDevTools.create();
