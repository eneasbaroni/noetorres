'use client'
import { motion, useTransform, useScroll, Variants} from "framer-motion"
import { useEffect, useRef } from "react"
import dataCreator from "@/data/creator"
import { elementAnim } from "@/lib/anims"
import {easingConfig} from "../../lib/helpers"
import Lenis from "lenis"

const WorksSection = () => {    
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time:number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)

    }, [])

    const { scrollYProgress } = useScroll({
        target: sectionRef
    })
    const x = useTransform(scrollYProgress, [0.1, 1], ['0%', '-62%'])

    const dataAnim: Variants = {
        init : {
            y: '250%',
            opacity: 1,
            transition: {
                duration: 0.5,
            }
        },
        hover: {
            y: ['250%', '0%'],
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: easingConfig,
            }
            
        }
    }

    const imgAnim: Variants = {
        init    : {
            scale: 1,
            transition: {
                duration: 0.5,
                ease: easingConfig,
                delay: 0,
            }
        },       
        hover: {
            scale: [1, 1.1],
            transition: {
                duration: 0.5,
                ease: easingConfig,
                delay: 0,
            }
        }
    }


    return (
        <section ref={sectionRef} id="content" className="h-[400vh] relative w-full snap-start">
            {/* <motion.h2 
                className="w-1/4 text-6xl font-black"
                variants={elementAnim}
                initial="init"
                whileInView="animate"
            >WORKS</motion.h2> */}
            <div className="w-full h-screen sticky top-0 flex flex-col items-start justify-around overflow-hidden">
            <motion.h2 
                className="w-auto text-6xl mt-20"
                variants={elementAnim}
                initial="init"
                whileInView="animate"
            >fashion content creator WORKS</motion.h2>
                <motion.div className="flex h-[70vh] gap-0 w-auto" style={{x}}>
                    {dataCreator.map((work, index) => (
                        <motion.div key={index} 
                            className="w-[calc((100vw-8rem-1rem)/3)] h-full overflow-hidden border-l border-b border-t relative z-10"
                            initial='init'
                            animate='init'
                            whileHover='hover'                            
                        >
                            <motion.div 
                            className="w-4/5 h-2/5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] absolute left-[10%] top-[30%] bg-gray-600/[0.2] z-20  rounded-lg flex flex-col items-center justify-center"
                            variants={dataAnim}                        
                            >
                                <h3 className="text-2xl font-bold text-white">{work.marca}</h3>
                                <p className="text-white">{work.tipo}</p>
                                <a href={work.link} target="_blank" className="text-white">Ver contenido →</a>
                            </motion.div>
                            <motion.div className="w-full h-full " variants={imgAnim}>
                                <motion.img src={work.img} alt={work.marca} 
                                    className="h-full w-full object-cover transition"        
                                ></motion.img>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>            
        </section>
    )
}
export default WorksSection