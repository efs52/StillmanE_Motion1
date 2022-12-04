import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


function CameraBody(){
    var tl = gsap.timeline()
        tl.from("#cam_body_rectangle", {alpha:0})



    return tl;
}
  

var mainTimeline = gsap.timeline();
mainTimeline.add(CameraBody())
    //  .add(VoriWhiteTriangle())
    //  .add(TriangleClip());




gsap.registerPlugin(GSDevTools);