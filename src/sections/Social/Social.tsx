'use client'
import { elementAnim, worksImgAnim } from "@/lib/anims"
import { AnimatePresence, motion} from "framer-motion"
import data from "@/data/data"
import { useState } from "react"
import Image from "next/image"


const SocialSection = () => {
    const [work, setWork] = useState(false)
    const [actualWork, setActualWork] = useState(0)

    const handleActalWork = (index: number) => {
        setWork(false)
        setTimeout(() => {
            setWork(true)
            setActualWork(index)
        }, 300)
        //setActualWork(index)
    }


    return (
        <section id="social" className="min-h-section h-auto w-full flex flex-col items-start justify-between snap-start" >
            <motion.h2 
                className="w-auto text-6xl mt-20"
                variants={elementAnim}
                initial="init"
                whileInView="animate"
            >
                social media WORKS
            </motion.h2>
            <div className="w-full h-auto flex items-center justify-between">
                <div className="w-1/2 flex flex-col border-b border-neutral-950/50 ">
                    {data.map((item, index) => (
                        <div key={index} 
                        className="w-full border-t border-neutral-950/50 h-20 flex flex-col items-start justify-center"
                        onClick={() => handleActalWork(index)}
                        onMouseEnter={() => handleActalWork(index)}
                        >
                            <div className="w-full flex justify-between items-center">
                                <div className="flex justify-start items-end gap-5">
                                    <h3 className="text-2xl leading-6">
                                        {item.nombre}
                                    </h3>
                                    <div className="flex gap-2" >
                                        {item.tareas.map((tarea, index) => (
                                            <p key={index} className="text-sm">{tarea}</p>
                                        ))}
                                    </div>
                                </div>
                                <Image src='/images/works/arrow.svg' alt='arrow' width={15} height={15}/>
                            </div>
                            
                        </div>
                    ))}
                </div>

                <div className="w-1/2 h-[75vh] object-cover  flex justify-end ">
                    <div className="w-4/5 h-full overflow-hidden">
                        <AnimatePresence>
                            {work &&
                                <motion.img src={data[actualWork].img} alt={data[actualWork].nombre} 
                                className="w-full h-full object-cover"
                                variants={worksImgAnim}
                                initial="init"
                                animate="animate"
                                exit="exit" 
                                >
                                </motion.img>
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SocialSection