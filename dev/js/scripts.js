import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin);


function CameraBody(){
    var tl = gsap.timeline()
        tl.from("#cam_body_rectangle", {scale:0.1, transformOrigin: 'center', rotate: 180, duration:0.4}, "camerabody")
          .to("#cam_body_rectangle",{duration: 0.2, scale:1.03, smoothOrigin: true})
          .to("#cam_body_rectangle",{duration: 0.3, scale:1, smoothOrigin: true},"lens")
          .fromTo("#cam_body_rectangle", {duration: 0.4, alpha:0}, {duration: 0.4, alpha:1}, "camerabody")

          .from("#small-cam-btn", {duration: 0.2, scale:0.1, transformOrigin: 'center'}, "sm-btn")
          .fromTo("#small-cam-btn", {alpha:0}, {alpha:1}, "sm-btn")

          .from("#line_through_camera", {x: -600, duration: 0.8},"-=0.5")
          .to("#line_through_camera", {x: 20,  duration: 0.8},"-=0.5")
          .from("#outer_circle", {drawSVG: "0%, 0%", duration:0.55},"lens")
          .from("#inner_circle", {alpha: 0, scale:0.3, transformOrigin: 'center', duration:0.25},"lens")
          .from("#camera-button", {duration: 0.1, alpha: 0, scaleY: 0.3, transformOrigin: "50%, bottom"}, "together")
          .from("#small_cam_flash",{duration: 0.1, alpha: 0, scaleY: 0.3, transformOrigin: "50%, bottom"}, "together")

          .to("#outer_circle", {strokeWidth: 5, yoyo: true, smoothOrigin: true}, "-=0.15")
          .to("#inner_circle", {scale:1.15, transformOrigin: 'center', duration:0.25, smoothOrigin: true},"-=0.27")
          .to("#outer_circle", {strokeWidth: 55, yoyo: true, smoothOrigin: true}, "-=0.2")
          .to("#outer_circle", {strokeWidth: 31, yoyo: true, smoothOrigin: true}, "-=0.1")

          .fromTo("#tall_cam_flash", {duration: 0.25, alpha:0}, {duration: 0.25, alpha:1}, "-=0.45")
          .fromTo("#tall_cam_flash",{duration: 0.25, scaleY: 0, transformOrigin: "50%, bottom"}, {duration: 0.25, scaleY: 1, transformOrigin: "50%, bottom"}, "-=0.45")

          .fromTo("#top_flash_line", {duration: 0.1, alpha:0}, {duration: 0.1, alpha:1}, "-=0.3")
          .fromTo("#top_flash_line", {duration: 0.2, scale:0, transformOrigin: "center"}, {duration: 0.2, scale:1, transformOrigin: "center"}, "-=0.3")

          .fromTo("#bottom_flash_line", {duration: 0.1, alpha:0}, {duration: 0.1, alpha:1}, "-=0.3")
          .fromTo("#bottom_flash_line", {duration: 0.2, scale:0, transformOrigin: "center"}, {duration: 0.2, scale:1, transformOrigin: "center"}, "-=0.3")

          .to("#camera-button", {duration: 0.5, scaleY: 0.3, transformOrigin: "50%, bottom"}, "cheese")
          .to("#camera-button", {duration: 0.5, scaleY: 1, transformOrigin: "50%, bottom"}, "cheese")
          .to("#small-cam-btn", {duration: 0.4, scale:1.5, transformOrigin: 'center', smoothOrigin: true}, "-=0.3")
          .to("#small-cam-btn", {duration: 0.4, scale:1, transformOrigin: 'center', smoothOrigin: true}, "-=0.3")

          .from("#small_cam_flash", {duration: 0.2, scale:0.1, transformOrigin: 'center'}, "cam-flash")
          .fromTo("#small_cam_flash", {alpha:0}, {alpha:1}, "cam-flash")


    return tl;
}

// function Rectangle(){
//     var tl = gsap.timeline()
//         tl.from("#line_through_camera", {x: -600, duration: 0.5})
//           .to("#line_through_camera", {x: 20})
//           .from("#outer_circle", {drawSVG: "0%, 0%", duration:0.5},"-=0.7")
//           .from("#inner_circle", {alpha: 0, scale:0.3, transformOrigin: 'center', duration:0.25},"-=0.8")
//           .from("#camera_button", {duration: 0.1, alpha: 0, scaleY: 0.3, transformOrigin: "50%, bottom"},"-=0.3")

//     return tl;
// }

// function CameraLensCenter(){
//     var tl = gsap.timeline()
//         tl.from("#inner_circle", {scale:0.3, transformOrigin: 'center', duration:0.25})
//     return tl;
// }

// function CameraLensStroke(){
//     var tl = gsap.timeline()
//         tl.from("#outer_circle", {drawSVG: "0%, 0%", duration:0.25})
//     return tl;
// }

// function CameraButton(){
//     var tl = gsap.timeline()
//         tl.from("#camera_button", {duration: 0.1, alpha: 0, scaleY: 0.3, transformOrigin: "50%, bottom"})

//     return tl;
// }

// function CameraFlash1(){
//     var tl = gsap.timeline()
//         tl.fromTo("#tall_cam_flash", {duration: 0.25, alpha:0}, {duration: 0.25, alpha:1}, "<")
//           .fromTo("#tall_cam_flash",{duration: 0.25, scaleY: 0, transformOrigin: "50%, bottom"}, {duration: 0.25, scaleY: 1, transformOrigin: "50%, bottom"})

//           .fromTo("#top_flash_line", {duration: 0.1, alpha:0}, {duration: 0.1, alpha:1}, "flash")
//           .fromTo("#top_flash_line", {duration: 0.2, scale:0, transformOrigin: "center"}, {duration: 0.2, scale:1, transformOrigin: "center"}, "flash")

//           .fromTo("#bottom_flash_line", {duration: 0.1, alpha:0}, {duration: 0.1, alpha:1}, "flash")
//           .fromTo("#bottom_flash_line", {duration: 0.2, scale:0, transformOrigin: "center"}, {duration: 0.2, scale:1, transformOrigin: "center"}, "flash")
//           .to("#outer_circle", {strokeWidth: 13, yoyo: true}, "-=0.15")
//           .to("#outer_circle", {strokeWidth: 45, yoyo: true}, "-=0.15")
//           .to("#outer_circle", {strokeWidth: 31, yoyo: true}, "-=0.15")

//     return tl;
// }





  

var mainTimeline = gsap.timeline();
mainTimeline.add(CameraBody());
    //  .add(Rectangle())
    //  .add(CameraLensCenter())
    //  .add(CameraLensStroke())
    //  .add(CameraButton())
    //  .add(CameraFlash1());




     GSDevTools.create();