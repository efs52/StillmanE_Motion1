import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


function CameraBody(){
    var tl = gsap.timeline()
        tl.from("#cam_body_rectangle", {scale:0.3, transformOrigin: 'center', duration:0.75})

    return tl;
}

function Rectangle(){
    var tl = gsap.timeline()
        tl.from("#line_through_camera", {x: -300})
          .to("#line_through_camera", {delay: 4, x: 20})

    return tl;
}


  

var mainTimeline = gsap.timeline();
mainTimeline.add(CameraBody())
     .add(Rectangle())
    //  .add(TriangleClip());




gsap.registerPlugin(GSDevTools);