import {AnimationProps} from "framer-motion"

const anim = (variants: AnimationProps["variants"]) => ({
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
}); 

export { anim }