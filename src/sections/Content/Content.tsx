'use client'
import { elementAnim } from "@/lib/anims"
import { motion} from "framer-motion"
import data from "@/data/data"


const ContentSection = () => {
  return (
    <section id="socila" className="min-h-section h-auto w-full flex flex-col items-start justify-between mt-36" >
        <motion.h2 
                className="w-1/2 text-6xl font-black"
                variants={elementAnim}
                initial="init"
                whileInView="animate"
            >
                Content Creator <br/> WORKS
            </motion.h2>
            <div className="w-full flex h-[70vh] border-r ">
                <div className="w-1/4 h-full border-t border-l border-b overflow-hidden ">
                    <motion.img src={data[0].img} alt="portada reel" className="w-full h-full object-cover"                        
                        whileHover={{scale: 1.05}}
                    />
                    <motion.img/>
                </div>
                <div className="w-1/4 h-full border-t border-l border-b ">
                    <motion.img src={data[1].img} alt="portada reel" className="w-full h-full object-cover" />
                    <motion.img/>
                </div>
                <div className="w-1/4 h-full border-t border-l border-b ">
                    <motion.img src={data[2].img} alt="portada reel" className="w-full h-full object-cover" />
                    <motion.img/>
                </div>
                <div className="w-1/4 h-full border-t border-l border-b ">
                    <motion.img src={data[3].img} alt="portada reel" className="w-full h-full object-cover" />
                    <motion.img/>
                </div>
            </div>
    </section>
  )
}
export default ContentSection