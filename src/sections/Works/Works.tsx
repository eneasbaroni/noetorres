'use client'
import { motion, useTransform, useScroll} from "framer-motion"
import { useRef } from "react"
import data from "@/data/data"
import { elementAnim } from "@/lib/anims"
import Image from "next/image"

const WorksSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef
    })
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])
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
                        <div key={index} className="w-[calc((100vw-8rem-2rem)/2)] overflow-hidden rounded">
                            <Image src={work.img} alt={work.nombre} width={800} height={800} 
                            className="h-full  object-cover  hover:scale-110 transition" />
                        </div>
                    ))}
                </motion.div>
            </div>            
        </section>
    )
}
export default WorksSection