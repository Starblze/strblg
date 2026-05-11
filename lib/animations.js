import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export function heroAnimation() {

    gsap.to(".scroll-prompt", {
        y: 0,
        duration: 0.75,
        delay: 1,
        ease: "back.out(1)"
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".scene-shell",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5
        }
    });

    tl.to(".sun", {
        motionPath: {
            path: [{x:0, y:0}, {x:-500, y:100}, {x:-1000, y:500}],
            curviness: 1.5
        },
        scale: 0.85,
        ease: "none"
    }, 0);

    tl.to(".sunset-overlay", {
        opacity: 1,
        ease: "none"
    }, 0);

    tl.to(".mountains", {
        filter: "brightness(0.7)",
        y: -40,
        ease: "none"
    }, 0);

    tl.to(".clouds", {
        y: -100,
        ease: "none"
    }, 0);

    tl.to(".scroll-prompt", {
        y: 1000,
        ease: "none"
    }, 0);
}