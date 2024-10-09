'use client'
import { motion, Variants } from "framer-motion";
import { useState } from "react";



const MenuButton = ({ foo, menuOpne }: { foo: () => void, menuOpne: boolean }) => {

    const [isHover, setIsHover] = useState(false)
    

    const pathAnim = {
        initial: {
            d: "m 0 15 l 50 0 m -50 20 l 50 0",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        },
        animate: {
            d: "m 10 10 l 30 30 m -30 0 l 30 -30",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        },
    }

    const handleClick = () => {
        foo()
        //setOpen(!open)
    }

    const bgAnim: Variants = {
        initial: {
            height: '0px',
            width: '0px',
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        },
        animate: {
            height: '80px',
            width: '80px',
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        },
    }


    return (
        <div className="fixed w-8 h-auto right-[64px] z-40 mix-blend-difference">
            <motion.div className="absolute bg-white mix-blend-difference w-16 h-16 rounded-full top-0 left-0 translate-x-[-50%] translate-y-[-50%] z-20"
                variants={bgAnim}
                animate={isHover ? "animate" : "initial"}
                initial="initial"
            >
            </motion.div>
            <motion.svg className="w-[50px] h-[50px] z-30 mix-blend-difference absolute top-0 left-0  translate-x-[-50%] translate-y-[-50%]" onClick={handleClick} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <motion.path
                    stroke={'white'}
                    strokeWidth={2}
                    variants={pathAnim}
                    animate={menuOpne ? "animate" : "initial"}
                    initial="initial"
                ></motion.path>
            </motion.svg>
        </div>
    )
}
export default MenuButton