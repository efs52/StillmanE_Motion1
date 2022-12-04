import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


function DotsFadein(){
    var tl = gsap.timeline()
        tl.from("#cam_body_rectangle", {alpha:0})



    return tl;
}
  





gsap.registerPlugin(GSDevTools);