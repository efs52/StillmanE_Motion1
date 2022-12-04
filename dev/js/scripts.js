import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin);


function CameraBody(){
    var tl = gsap.timeline()
        tl.from("#cam_body_rectangle", {scale:0.3, transformOrigin: 'center', duration:0.75})

    return tl;
}

function Rectangle(){
    var tl = gsap.timeline()
        tl.from("#line_through_camera", {x: -600, duration: 0.75})
          .to("#line_through_camera", {delay: 4, x: 20})

    return tl;
}

function CameraLensStroke(){
    var tl = gsap.timeline()
        tl.from("#outer_circle", {drawSVG: "0%, 0%"});


    return tl;
}



  

var mainTimeline = gsap.timeline();
mainTimeline.add(CameraBody())
     .add(Rectangle())
     .add(CameraLensStroke());




gsap.registerPlugin(GSDevTools);