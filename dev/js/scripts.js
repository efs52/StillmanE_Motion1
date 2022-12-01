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

        .from("#dot1", {fillOpacity:0.25},"appear2")

        .from("#dot12", {opacity:0},"appear3")

        .from("#dot10", {opacity:0},"appear4")
        .from("#dot18", {opacity:0},"appear4")

        .from("#dot9", {opacity:0},"appear5")
        .from("#dot17", {opacity:0},"appear5")

        .from("#dot4", {opacity:0},"appear6")
        .from("#dot15", {opacity:0},"appear6")

        .from("#dot3", {fillOpacity:0.25},"appear7")
        .from("#dot19", {fillOpacity:0.25},"appear7")

        .from("#dot7", {opacity:0},"appear8")
        .from("#dot13", {opacity:0},"appear8")
        .from("#dot14", {opacity:0},"appear8")

        .from("#dot12", {fillOpacity:0.25},"appear9")

        .from("#dot2", {opacity:0},"appear10")

        
        .from("#dot18", {fillOpacity:0.25},"appear11")

        .from("#dot9", {fillOpacity:0.25},"appear12")
        .from("#dot17", {fillOpacity:0.25},"appear13")

        .from("#dot4", {fillOpacity:0.25},"appear14")
        .from("#dot15", {fillOpacity:0.25},"appear15")

        .from("#dot7", {fillOpacity:0.25},"appear16")
        .from("#dot13", {fillOpacity:0.25},"appear17")
        .from("#dot14", {fillOpacity:0.25},"appear18")

        .from("#dot2", {fillOpacity:0.25},"appear19")

        .from("#dot5", {visibility:"hidden"})
        .from("#dot6", {visibility:"hidden"})
        .from("#dot11", {visibility:"hidden"})
        .from("#dot16", {visibility:"hidden"})

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