import gsap from "gsap";
import { RefObject } from "react";

export const animateElement = (element : RefObject<HTMLElement | null>) => {
    if (element.current){
        gsap.from(element.current, {
            duration: 0.8,
            opacity: -1,
            y: -5,
            ease: "power3.Out",
            
        });
        gsap.to(element.current, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: "power4.out",
            stagger: {
                yoyo: true,
            }
        });
    }
}