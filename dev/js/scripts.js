import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
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
          .to("#line_through_camera", {x: 20})

    return tl;
}

function CameraLensCenter(){
    var tl = gsap.timeline()
        tl.from("#inner_circle", {scale:0.3, transformOrigin: 'center', duration:0.25});
    return tl;
}

function CameraLensStroke(){
    var tl = gsap.timeline()
        tl.from("#outer_circle", {drawSVG: "0%, 0%", duration:0.75});
    return tl;
}

function CameraButton(){
    var tl = gsap.timeline()
        tl.fromTo("#camera_button", {display:'none'}, {display:'inline', duration: 2, y:-1})
    return tl;
}

function CameraFlash1(){
    var tl = gsap.timeline()
        tl.from("#small_cam_flash", {y:100})
    return tl;
}





  

var mainTimeline = gsap.timeline();
mainTimeline.add(CameraBody())
     .add(Rectangle())
     .add(CameraLensCenter())
     .add(CameraLensStroke())
     .add(CameraButton())
     .add(CameraFlash1());




gsap.registerPlugin(GSDevTools);