import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

//   var tl = gsap.timeline({ defaults: { duration: 1, delay: 3 } });
  
//   tl.from('dot1', { y: 40 })
//     .from('#dot2', { y: 100 }, '+=0.2')

// var tl = gsap.timeline({duration: 0.5, ease: 'none', opacity: 0});
// tl.to("#dot1", {x: 100, duration: 1});
// tl.to("#dot2", {y: 50, duration: 1});
// tl.to("#dot3", {opacity: 0, duration: 1});


var tl = gsap.timeline({ duration: 0.5, ease: 'none', opacity: 0 });
tl.to("#dot1", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
tl.to("#dot2", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
tl.to("#dot3", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
tl.to("#dot4", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
tl.to("#dot5", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
tl.to("#dot6", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
tl.to("#dot7", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
tl.to("#dot8", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
tl.to("#dot9", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
tl.to("#dot10", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
tl.to("#dot11", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
tl.to("#dot12", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
tl.to("#dot13", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
tl.to("#dot14", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
tl.to("#dot15", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
tl.to("#dot16", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
tl.to("#dot17", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
tl.to("#dot18", 2.3, {autoAlpha: 1}, {autoAlpha: 0})
tl.to("#dot19", 2.3, {autoAlpha: 0}, {autoAlpha: 1})
tl.to("#dot20", 2.3, {autoAlpha: 1}, {autoAlpha: 0})


    // .from('#line-1', { y: 100 }, '-=0.2')
    // .from('#line-2', { y: 80 }, '-=0.1')
    // .from('#line-3', { y: 60 }, '-=0.1')
    // .from('#line-4', { y: 40 }, '-=0.1')
    // .from('#btn', { y: 100 }, '-=0.2');

    GSDevTools.create();