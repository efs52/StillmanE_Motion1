import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


// timeline3
// .set(dots3, {css:{'fill-opacity': 0}})
// .staggerTo(dots3, 1, {css:{x: '+=300', 'fill-opacity': 0.2}}, 0.2)
// .staggerTo(dots3, 1, {css:{x: '-=300', 'fill-opacity': 1.0}}, 0.2); 


function DotsFadein(){
  var tl = gsap.timeline({duration:0.01})
      tl.from("#dot1", {alpha:0})

        .from("#dot3", {alpha:0, duration:0.2}, "appear1")
        .from("#dot19", {alpha:0, duration:0.2}, "appear1")

        .to("#dot1", {alpha:0.65, duration:0.2}, "together")

        .from("#dot12", {alpha:0, duration:0.2}, "together")

        .from("#dot10", {alpha:0, duration:0.2}, "appear2")
        .from("#dot18", {alpha:0, duration:0.2}, "appear2")

        .from("#dot9", {alpha:0, duration:0.2}, "appear3")
        .from("#dot17", {alpha:0, duration:0.2}, "appear3")

        .from("#dot4", {alpha:0, duration:0.2}, "appear4")
        .from("#dot15", {alpha:0, duration:0.2}, "appear4")

        .to("#dot3", {alpha:0.65, duration:0.1},"appear4")
        .to("#dot19", {alpha:0.65, duration:0.1}, "appear4")

        .from("#dot7", {alpha:0, duration:0.1}, "appear5")
        .from("#dot13", {alpha:0, duration:0.1}, "appear5")
        .from("#dot14", {alpha:0, duration:0.1}, "appear5")

        .to("#dot12", {alpha:0.65, duration:0.1}, "appeartogether")
        .from("#dot2", {alpha:0, duration:0.1}, "appeartogether")

        .to("#dot10", {alpha:0.65, duration:0.1}, "fade2")
        .to("#dot18", {alpha:0.65, duration:0.1}, "fade2")

        .to("#dot9", {alpha:0.65, duration:0.1}, "fade3")
        .to("#dot17", {alpha:0.65, duration:0.1}, "fade3")

        .to("#dot4", {alpha:0.65, duration:0.1}, "fade4")
        .to("#dot15", {alpha:0.65, duration:0.1}, "fade4")

        .to("#dot7", {alpha:0.65, duration:0.1}, "fade5")
        .to("#dot13", {alpha:0.65, duration:0.1}, "fade5")
        .to("#dot14", {alpha:0.65, duration:0.1}, "fade5")

        .to("#dot2", {alpha:0.65, duration:0.1})

        .from("#dot8", {alpha:0, duration:0.1})
        .to("#dot8", {alpha:0.65, duration:0.1})

        // .to("#dot10", {duration: 0.5, fill:"white"})

        return tl;
}

function VoriWhiteTriangle(){
  var tl = gsap.timeline()
      tl.from("#white-triangle", {display: 'none', delay: 4, scale: 0.30, transformOrigin: "center"}, "-=.2")
        
}

function TriangleClip(){
  var tl = gsap.timeline({})
      tl.fromTo("#clip", {ease: "none"}, {duration: 3, scale: 0.3})

      return tl;
}

// function Voriletters(){
//   var tl = gsap.timeline({duration:2})
//       tl.from("vori-i", {x:150})
//         return tl;
// }




   var mainTimeline = gsap.timeline();
  mainTimeline.add(DotsFadein())
       .add(VoriWhiteTriangle())
       .add(TriangleClip());
    // .add(aboutAnimation())
    // .add(wonderAnimation());




    GSDevTools.create();