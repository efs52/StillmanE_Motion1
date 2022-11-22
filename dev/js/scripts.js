import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

//   var tl = gsap.timeline({ defaults: { duration: 1, delay: 3 } });
  
//   tl.from('dot1', { y: 40 })
//     .from('#dot2', { y: 100 }, '+=0.2')

var tl = gsap.timeline({
    defaults: { duration: 0.5, ease: 'none', opacity: 0 }
  });

    var tl = new TimelineMax({repeat: -1});

tl
.fromTo("#dot1", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
.fromTo("#dot2", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
.fromTo("#dot3", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
.fromTo("#dot4", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
.fromTo("#dot5", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
.fromTo("#dot6", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
.fromTo("#dot7", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
.fromTo("#dot8", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
.fromTo("#dot9", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
.fromTo("#dot10", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
.fromTo("#dot11", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
.fromTo("#dot12", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
.fromTo("#dot13", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
.fromTo("#dot14", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
.fromTo("#dot15", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
.fromTo("#dot16", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
.fromTo("#dot17", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
.fromTo("#dot18", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
.fromTo("#dot19", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
.fromTo("#dot20", 2.3, {autoAlpha: 1}, {autoAlpha: 0})



    // .from('#line-1', { y: 100 }, '-=0.2')
    // .from('#line-2', { y: 80 }, '-=0.1')
    // .from('#line-3', { y: 60 }, '-=0.1')
    // .from('#line-4', { y: 40 }, '-=0.1')
    // .from('#btn', { y: 100 }, '-=0.2');

    GSDevTools.create();