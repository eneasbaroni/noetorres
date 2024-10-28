import { Variants } from "framer-motion"
import { easingConfig } from "./helpers"

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
        x: '-100%',       
    },
    animate: {
        x: ['-100%','0%'],
        transition: {
            duration: 0.5,
            delay: 0.3,
            ease: easingConfig
        }
        
    },
    exit: {
        x: '100%',
        transition: {
            duration: 0.3,
        }
        
    }
}

export { elementAnim , dataAnim, worksImgAnim }