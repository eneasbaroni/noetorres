'use client'
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef} from "react"

const ScrollDiv = ({ imgSrc }: { imgSrc: string }) => {
    const divRef = useRef<HTMLDivElement>(null)
  
    const { scrollYProgress } = useScroll({
        target: divRef,
        offset: ['start end', 'end start']
    })

    //const x = useTransform(scrollYProgress, [0.1, 1], ['0%', '-60%'])  
    const rotateX = useTransform(scrollYProgress, [0.1, 0.4], [45, 0])
    const scale = useTransform(scrollYProgress, [0.1, 0.4], [1.2, 1])
    //const scaleB = useTransform(scrollYProgress, [0.1, 0.4], [1.25, 1])
    

    //const d = useTransform(scrollYProgress, [0.1, 0.4], ['m .1 0 l .8 0 q 0 .8 .1 1 l -1 0 q .1 -.2 .1 -1', 'm 0 0 l 10 0 q 0 8 0 10 l -10 0 q 0 -2 0 -10'])
    //const d = useTransform(scrollYProgress, [0.1, 0.4], ['m .1 0 l .8 0 q 0 .8 .1 1 l -1 0 q .1 -.2 .1 -1', 'm .1 0 l .8 0 q 0 .8 .1 1 l -1 0 q .1 -.2 .1 -1'])

    return (

        <motion.div ref={divRef} className="w-full h-1/2 relativ"
            style={{ perspective: '1000px' }}
        >
            <motion.img
                src={imgSrc} alt="img"
                className='w-full h-full object-cover rotate'
                style={{ rotateX, scale }}
            ></motion.img>

            {/* <motion.svg className="">
                <motion.defs>
                <motion.clipPath  id='myPath' clipPathUnits="objectBoundingBox">
                    <motion.path 
                        d={d}
                    ></motion.path>
                </motion.clipPath>
                </motion.defs>
            </motion.svg> */}
            
            {/* <motion.img 
            src={imgSrc} alt="img" 
            className="w-full h-full object-cover] mix-blend-overlay"  
            style={{rotateX, scale: scaleB, translateY: '-100%'}}        
            ></motion.img> */}

        </motion.div>

    )
}

export default ScrollDiv