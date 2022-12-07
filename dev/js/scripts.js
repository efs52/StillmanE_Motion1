import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin);


function CameraBody(){
    var tl = gsap.timeline()
        tl.from("#cam_body_rectangle", { duration:0.23, scale: 0.01, transformOrigin: 'center', rotate: 180, yoyo: true}, "camerabody")
          .to("#cam_body_rectangle",{duration: 0.2, scale:1.07, smoothOrigin: true,  yoyo: true}, "bop")
          .to("#cam_body_rectangle",{duration: 0.2, scale:1, smoothOrigin: true,  yoyo: true},"lens")
          .fromTo("#cam_body_rectangle", {duration: 0.3, alpha:0}, {duration: 0.3, alpha:1}, "camerabody")


          .fromTo("#line_through_camera", {duration: 0.3, scaleY:0, transformOrigin:"50% 0%"}, {duration: 0.3, scaleY:1, transformOrigin:"50% 0%"},"-=1.5")
          .fromTo("#line_through_camera", {duration: 0.25, scaleY:1, transformOrigin:"50% 0%"}, {duration: 0.25, scaleY:1.5, transformOrigin:"50% 0%"}, "bop", "-=0.5")
          .to("#line_through_camera",{duration: 0.3, scaleY:1, transformOrigin:"50% 0%"})
          .from("#line_through_camera", {x: -600, duration:0.25},"-=0.54")
          // .to("#line_through_camera", {x: 20,  duration: 1},"-=0.5")


          .to("#outer_circle", {duration: 0.3, strokeWidth: 50, yoyo: true, smoothOrigin: true})
          .to("#outer_circle", {duration: 0.3, strokeWidth: 31, yoyo: true, smoothOrigin: true})
          .from("#outer_circle", {drawSVG: "0%, 0%", duration:0.5, yoyo: true, smoothOrigin: true},"-=0.85")
          .from("#inner_circle", {alpha: 0, scale:0.3, transformOrigin: 'center', duration:0.25, yoyo: true, smoothOrigin: true},"-=0.8")


          .fromTo("#small-cam-btn", {duration: 0.2, scale:0, transformOrigin: 'center'}, {duration: 0.2, scale:1.5, transformOrigin: 'center'}, "-=0.9")
          .to("#small-cam-btn",{scale:1, transformOrigin: 'center'}, "-=0.7")
          .fromTo("#small-cam-btn", {alpha:0}, {alpha:1}, "-=0.9")
          // .fromTo("#small-cam-btn", {scale:0.1, transformOrigin: 'center'}, {scale:1, transformOrigin: 'center'})
          

          .from("#camera-button", {duration: 0.24, alpha: 0, scaleY: 0.3, transformOrigin: "50%, bottom"}, "together")
          .from("#small_cam_flash",{duration: 0.1, alpha: 0, scaleY: 0.3, transformOrigin: "50%, bottom"}, "together")


          .to("#outer_circle", {strokeWidth: 5, yoyo: true, smoothOrigin: true}, "-=0.3")
          .to("#inner_circle", {scale:1.1, transformOrigin: 'center', duration:0.25, smoothOrigin: true, yoyo: true},"-=0.25")
          .to("#outer_circle", {strokeWidth: 55, yoyo: true, smoothOrigin: true}, "-=0.2")
          .to("#outer_circle", {strokeWidth: 31, yoyo: true, smoothOrigin: true}, "-=0.1")


          .fromTo("#tall_cam_flash", {duration: 0.25, alpha:0}, {duration: 0.25, alpha:1}, "-=0.5")
          .fromTo("#tall_cam_flash",{duration: 0.25, scaleY: 0, transformOrigin: "50%, bottom"}, {duration: 0.25, scaleY: 1, transformOrigin: "50%, bottom"}, "-=0.4")

          .fromTo("#top_flash_line", {duration: 0.1, alpha:0}, {duration: 0.1, alpha:1}, "-=0.4")
          .fromTo("#top_flash_line", {duration: 0.2, scale:0, transformOrigin: "center"}, {duration: 0.2, scale:1, transformOrigin: "center"}, "-=0.4")

          .fromTo("#bottom_flash_line", {duration: 0.1, alpha:0}, {duration: 0.1, alpha:1}, "-=0.4")
          .fromTo("#bottom_flash_line", {duration: 0.2, scale:0, transformOrigin: "center"}, {duration: 0.2, scale:1, transformOrigin: "center"}, "-=0.4")

          .to("#camera-button", {duration: 0.7, scaleY: 0.3, transformOrigin: "50%, bottom"}, "cheese")
          .to("#camera-button", {duration: 0.7, scaleY: 1, transformOrigin: "50%, bottom"}, "cheese")

          .to("#small-cam-btn", {duration: 0.5, scale:1.7, transformOrigin: 'center', smoothOrigin: true}, "cheese")
          .to("#small-cam-btn", {duration: 0.5, scale:1, transformOrigin: 'center', smoothOrigin: true}, "cheese")

          .fromTo("#cam-flash",{duration: 0.55, scale:0, transformOrigin: 'center'}, {duration: 0.55, scale:250, transformOrigin: 'center'}, "cheese")
          .fromTo("#cam-flash",{duration: 0.3, alpha:1, transformOrigin: 'center'}, {duration: 0.3, alpha:0, transformOrigin: 'center'}, "-=0.2")
          // .fromTo("#cam-flash", {duration:1, alpha:0}, {duration:1, alpha:1}, "camflash")

          .to("#cam_body_rectangle",{duration: 0.1, fill:"#FE0000"}, "-=0.5")
          .to("#inner_circle",{duration: 0.1, fill:"#FE0000"}, "-=0.5")
          .to("#camera-button",{duration: 0.1, fill:"#FE0000"}, "-=0.5")
          .to("#tall_cam_flash",{duration: 0.1, fill:"#FE0000"}, "-=0.5")
          .to("#inner_circle",{duration: 0.1, fill:"#FE0000"}, "-=0.5")

          .to("#outer_circle", {duration: 0.3, strokeWidth: 15, yoyo: true, smoothOrigin: true})
          .to("#outer_circle", {duration: 0.3, strokeWidth: 50, yoyo: true, smoothOrigin: true})
          .to("#outer_circle", {duration: 0.3, strokeWidth: 31, yoyo: true, smoothOrigin: true})
          .to("#outer_circle", {duration: 0.6, drawSVG: "0%"}, "-=0.4")
          .to("#inner_circle", {duration: 0.3, scale:0, transformOrigin: 'center', yoyo: true}, "-=0.45")

          .to("#line_through_camera", {x: 1000, duration: 1},"-=0.4")

          .to("#small-cam-btn", {duration: 0.4, scale: 1.3, transformOrigin: 'center', smoothOrigin: true}, "-=0.9")
          .to("#small-cam-btn", {duration: 0.4, scale: 0, transformOrigin: 'center', smoothOrigin: true}, "-=0.9")

          .to("#small_cam_flash",{duration: 0.1, alpha: 0}, "-=1")

          .to("#top_flash_line", {duration: 0.1, scale:0, transformOrigin: "center"},"twins")
          .to("#bottom_flash_line", {duration: 0.1, scale:0},"twins")

          .to("#camera-button",{duration: 0.18, scaleY: 0, transformOrigin: "50%, bottom"}, "-=0.5")
          .to("#tall_cam_flash",{duration: 0.18, scaleY: 0, transformOrigin: "50%, bottom"}, "-=0.5")

          .from("#fu", {alpha:0})

          .to("#cam_body_rectangle", {morphSVG: "#fu", duration:1})


          


    return tl;
}

// function redCamera(){
//     var tl = gsap.timeline()
//         tl.to("#cam_body_rectangle",{fill:"#FE0000"}, "red")
//          .to("#inner_circle",{fill:"#FE0000"}, "red")
//          .to("#camera-button",{fill:"#FE0000"}, "red")
//          .to("#tall_cam_flash",{fill:"#FE0000"}, "red")
//          .to("#inner_circle",{fill:"#FE0000"}, "red")

//     return tl;
// }








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
    //  .add(redCamera());
    //  .add(CameraLensCenter())
    //  .add(CameraLensStroke())
    //  .add(CameraButton())
    //  .add(CameraFlash1());




     GSDevTools.create();