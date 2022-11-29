import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


// timeline3
// .set(dots3, {css:{'fill-opacity': 0}})
// .staggerTo(dots3, 1, {css:{x: '+=300', 'fill-opacity': 0.2}}, 0.2)
// .staggerTo(dots3, 1, {css:{x: '-=300', 'fill-opacity': 1.0}}, 0.2); 


function FadeAnimation(){
  var tl = gsap.timeline({duration:2})
      tl.from("#dot1", {opacity: 0}, "appear")

        .from("#dot3", {opacity:0},"appear1")
        .from("#dot19", {opacity:0},"appear1")

        .from("#dot1", {attr:{"fill-opacity":.5}})

        .from("#dot12", {opacity:0},"appear2")

        .from("#dot10", {opacity:0},"appear3")
        .from("#dot18", {opacity:0},"appear3")

        .from("#dot9", {opacity:0},"appear4")
        .from("#dot17", {opacity:0},"appear4")

        .from("#dot4", {opacity:0},"appear5")
        .from("#dot15", {opacity:0},"appear5")

        .from("#dot3", {opacity:0},"disappear1")
        .from("#dot19", {opacity:0},"disappear1")

        .from("#dot7", {opacity:0},"appear5")
        .from("#dot13", {opacity:0},"appear5")
        .from("#dot14", {opacity:0},"appear5")

        .from("#dot12", {opacity:0},"disappear2")

        .from("#dot2", {opacity:0},"appear6")

        
        .from("#dot18", {opacity:0},"disappear3")

        .from("#dot9", {opacity:0},"disappear4")
        .from("#dot17", {opacity:0},"disappear4")

        .from("#dot4", {opacity:0},"disappear5")
        .from("#dot15", {opacity:0},"disappear5")

        .from("#dot7", {opacity:0},"disappear6")
        .from("#dot13", {opacity:0},"disappear6")
        .from("#dot14", {opacity:0},"disappear6")

        .from("#dot2", {opacity:0},"disappear7")

        .from("#dot5", {opacity:0},"appear8")
        .from("#dot6", {opacity:0},"appear8")
        .from("#dot11", {opacity:0},"appear8")
        .from("#dot16", {opacity:0},"appear8")

        .to("#dot10", {duration: 0.5, fill:"white"})

        // .from("#dot9", {opacity:0},"appear3")
        // .from("#dot10", {opacity:0},"appear4")
        // .from("#dot17", {opacity:0},"appear5")
        // .from("#dot18", {opacity:0},"appear6")
        // .from("#dot19", {opacity:0},"appear7")

        // .from("#dot4", {opacity:0},"appear8")
        // .from("#dot7", {opacity:0},"appear9")
        // .from("#dot13", {opacity:0},"appear10")
        // .from("#dot14", {opacity:0},"appear11")
        // .from("#dot15", {opacity:0},"appear12")

        // .from("#dot2", {opacity:0},"appear13")
        // .from("#dot8", {opacity:0})

        // .from("#dot5", {opacity:0},"appear14")
        // .from("#dot16", {opacity:0},"appear15")
        
        // .from("#dot6", {opacity:0},"appear7")
        // .from("#dot11", {opacity:0},"appear7")
        return tl;
}


   var mainTimeline = gsap.timeline();
  mainTimeline.add(FadeAnimation());
    // .add(groceryAnimation())
    // .add(aboutAnimation())
    // .add(wonderAnimation());




    GSDevTools.create();