import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


// timeline3
// .set(dots3, {css:{'fill-opacity': 0}})
// .staggerTo(dots3, 1, {css:{x: '+=300', 'fill-opacity': 0.2}}, 0.2)
// .staggerTo(dots3, 1, {css:{x: '-=300', 'fill-opacity': 1.0}}, 0.2); 


function DotsFadein(){
  var tl = gsap.timeline({duration:2})
      tl.from("#dot1", {alpha:0})

        .from("#dot3", {alpha:0})
        .from("#dot19", {alpha:0})

        .to("#dot1", {alpha:0.5, duration:1})

        .from("#dot12", {alpha:0})

        .from("#dot10", {alpha:0})
        .from("#dot18", {alpha:0})

        .from("#dot9", {alpha:0})
        .from("#dot17", {alpha:0})

        .from("#dot4", {alpha:0})
        .from("#dot15", {alpha:0})

        .to("#dot3", {alpha:0.5})
        .to("#dot19", {alpha:0.5})

        .from("#dot7", {alpha:0})
        .from("#dot13", {alpha:0})
        .from("#dot14", {alpha:0})

        .from("#dot2", {alpha:0})

        // .to("#dot10", {duration: 0.5, fill:"white"})

        return tl;
}

// function DotsFlicker(){
//   var tl = gsap.timeline({duration:2})
//       tl.to("#dot1", {alpha:0.25})

//         .to("#dot3", {alpha:0.25})
//         .to("#dot19", {alpha:0.25})

//         .to("#dot12", {fillOpacity:0.10})

//         .to("#dot10", {fillOpacity:0.10})
//         .to("#dot18", {fillOpacity:0.10})

//         .to("#dot9", {fillOpacity:0.10})
//         .to("#dot17", {fillOpacity:0.10})

//         .to("#dot4", {fillOpacity:0.10})
//         .to("#dot15", {fillOpacity:0.10})

//         .to("#dot7", {fillOpacity:0.10})
//         .to("#dot13", {fillOpacity:0.10})
//         .to("#dot14", {fillOpacity:0.10})

//         .to("#dot2", {fillOpacity:0.10})

//         .to("#dot5", {opacity:0.10})
//         .to("#dot6", {opacity:0.10})
//         .to("#dot11", {opacity:0.10})
//         .to("#dot16", {opacity:0.10})

//         return tl;
// }

function Voriletters(){
  var tl = gsap.timeline({duration:2})
      tl.from("vori-i", {x:150})
        return tl;
}




   var mainTimeline = gsap.timeline();
  mainTimeline.add(DotsFadein())
      //  .add(DotsFlicker())
       .add(Voriletters());
    // .add(aboutAnimation())
    // .add(wonderAnimation());




    GSDevTools.create();