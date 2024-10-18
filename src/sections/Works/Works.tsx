'use client'
import { motion, useTransform, useScroll, Variants} from "framer-motion"
import { useEffect, useRef } from "react"
import data from "@/data/data"
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
    const x = useTransform(scrollYProgress, [0.1, 1], ['0%', '-60%'])

    const dataAnim: Variants = {
        init : {
            y: '120%',
            opacity: 1,
            transition: {
                duration: 0.5,
            }
        },
        hover: {
            y: ['120%', '0%'],
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
        <section ref={sectionRef} id="works" className="h-[300vh] relative w-full">
            {/* <motion.h2 
                className="w-1/4 text-6xl font-black"
                variants={elementAnim}
                initial="init"
                whileInView="animate"
            >WORKS</motion.h2> */}
            <div className="w-full h-screen sticky top-0 flex flex-col items-start justify-around overflow-hidden">
            <motion.h2 
                className="w-1/4 text-6xl font-black"
                variants={elementAnim}
                initial="init"
                whileInView="animate"
            >WORKS</motion.h2>
                <motion.div className="flex h-1/2 gap-4 w-auto" style={{x}}>
                    {data.map((work, index) => (
                        <motion.div key={index} 
                            className="w-[calc((100vw-8rem-2rem)/2)] h-full overflow-hidden rounded relative z-10"
                            initial='init'
                            animate='init'
                            whileHover='hover'                            
                        >
                            <motion.div 
                            className="w-4/5 h-4/5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] absolute left-[10%] top-[10%] bg-gray-600/[0.2] z-20 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center"
                            variants={dataAnim}                        
                            >
                                <h3 className="text-2xl font-bold">{work.nombre}</h3>
                                {work.tareas.map ((tarea, index) => (
                                    <p key={index}>{tarea}</p>
                                ))}
                                <a href={work.link} target="_blank" className="">Visitar</a>
                            </motion.div>
                            <motion.div className="w-full h-full " variants={imgAnim}>
                                <motion.img src={work.img} alt={work.nombre} 
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