'use client'
import { motion, animate, motionValue } from "framer-motion";
import { useEffect, useState } from "react";



const MenuButton = ({foo}: {foo: () => void}) => {

    const [open, setOpen] = useState(false)
    const [monted, setMonted] = useState(false) //para evitar movimiento inical al montar el componente

    useEffect(() => {
        setMonted(true)
    }, [])


    const d = motionValue("m 0 15 l 50 0 m -50 20 l 50 0")   

    useEffect(() => {

        if (open && monted) {
            animate(d, ["m 0 15 l 50 0 m -50 20 l 50 0", "m 10 10 l 30 30 m -30 0 l 30 -30"],  { duration: 0.5 })
            /* animate(stroke, ['white', 'black'], { duration: 0.2, delay: 0.1 }) */            
        }
        if (!open && monted) {
            animate(d, ["m 10 10 l 30 30 m -30 0 l 30 -30","m 0 15 l 50 0 m -50 20 l 50 0"], { duration: 0.5 })
            /* animate(stroke, ['black', 'white'], { duration: 0.2, delay: 0.8 }) */
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    const handleClick = () => {   
        foo()
        setOpen(!open)
    }

    return (
        <motion.svg className="w-[50px] h-[50px] z-20 mix-blend-difference" onClick={handleClick}>
            <motion.path  
                stroke={'white'}              
                strokeWidth={2}
                d={d}                
            ></motion.path>
        </motion.svg>
    )
}
export default MenuButton