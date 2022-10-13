import { gsap } from "gsap";

gsap.set("form",{scaleX: 0, transformOrigin:"left center"});

gsap.from("#line-1",{duration:1,x:-200,alpha:0});
gsap.from("#line-2",{duration:1,x:-100,alpha:0,delay:0.5});

gsap.from("#Get-started-btn",{duration:1,x:200,alpha:0,delay:1});

let ticketBtn = document.querySelector("aside");

ticketBtn.addEventListener("mouseover", function(){

    gsap.to("#Get-started-btn",{duration:0.25,backgroundColor:"#878787"});
    gsap.to("aside",{duration:0.25, x:-800});
    gsap.to("form",{duration:0.25,scaleX: 1});
})

ticketBtn.addEventListener("mouseout", function(){
    gsap.to("#Get-started-btn",{duration:0.25,backgroundColor:"#f91515"});
    gsap.to("aside",{duration:0.25,x:0});
    gsap.to("form",{duration:0.25,scaleX: 0});
})