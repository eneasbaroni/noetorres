'use client'
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"

const Footer = () => {

    const divRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: divRef,
        offset: ['start end', 'start start']
    })

    const borderRadius = useTransform(scrollYProgress, [0, 1], ['0rem', '10rem'])

  return (
    <footer className="w-full h-screen flex flex-col bg-orange-50 ">
        <motion.div ref={divRef} className="w-full h-64 bg-neutral-900 shadow-md" style={{borderBottomLeftRadius: borderRadius, borderBottomRightRadius: borderRadius}}></motion.div>
        <div className="w-full h-[calc(100vh-16rem)] flex flex-col justify-end">
            <h3 className="w-full text-center text-neutral-900 text-8xl font-light tracking-tighter ">Noelia Torres</h3>
        </div>8
    </footer>
  )
}
export default Footer