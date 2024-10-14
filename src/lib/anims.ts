import { Variants } from "framer-motion"

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

export { elementAnim }