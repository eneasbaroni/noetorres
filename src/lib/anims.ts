import { Variants } from "framer-motion"
import { easingConfig } from "./helpers"


const liAnim: Variants = {
    initial: {
        y: 45,
        fontVariationSettings: `"wght" 400`
    },
    enter: (index: number) => ({
        y: 0,
        transition: {
            duration: 0.5,
            /* delay: 1   */
            delay: 1 + (index * 0.1)
        },
    }),

    exit: {
        y: 45,
        fontVariationSettings: `"wght" 400`,
        transition: {
            duration: 0.5
        }
    }
}

const elementAnim: Variants = {
    init : {
        x: 20,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.3,
        }
        
    }
}

const dataAnim: Variants = {
    init : {
        y: 20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.3,
        }
        
    }
}

const worksImgAnim: Variants = {
    init : {
        x: '-101%',       
    },
    animate: {
        x: ['-101%','0%'],
        transition: {
            duration: 0.5,
            delay: 0.3,
            ease: easingConfig
        }
        
    },
    exit: {
        x: '101%',
        transition: {
            duration: 0.3,
        }
        
    }
}

export { elementAnim , dataAnim, worksImgAnim, liAnim }