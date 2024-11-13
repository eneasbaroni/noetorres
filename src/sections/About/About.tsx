'use client'
import { motion } from "framer-motion"
import { elementAnim } from "@/lib/anims"

const elementAnimB = structuredClone(elementAnim)

elementAnimB.animate.transition.delay = 0.7


const AboutSection = () => {
    return (
        <section id="about" className="min-h-screen w-full flex items-center justify-between snap-start" >
               
            <motion.h2 
                className="w-1/4 text-6xl"
                variants={elementAnim}
                initial="init"
                whileInView="animate"
            >ABOUT ME</motion.h2>

            <motion.p 
                //className="text-3xl w-3/4 [&>span]:bg-[url('https://s2.svgbox.net/pen-brushes.svg?ic=brush-9&color=83cdfb')] [&>span]:font-bold" 
                className="text-3xl w-3/4 [&>span]:bg-gradient-to-b [&>span]:from-transparent [&>span]:from-30% [&>span]:via-indigo-300 [&>span]:via-50%  [&>span]:to-trasntparent [&>span]:to-70% [&>span]:font-bold" 
                //className="text-3xl w-3/4 [&>span]:bg-indigo-200" 
                variants={elementAnimB}
                initial="init"
                whileInView="animate"
            >
                Holi! Soy Noe, creadora de contenido<span className="font-waitingforthesunrise font-bold text-4xl text-indigo-400 !bg-transparent"> fashion y lifestyle. </span><br />
                La<span> moda </span>es mi pasión y mi juego favorito desde que a mis 5 años mi mamá me dejó empezar a vestirme sola, revolver su placard y maquillarme cual maquilladora profesional, ja!<br/>
                El tiempo pasó, estudié <span>diseño de indumentaria</span>, aparecieron las<span> redes sociales, </span>complementé con formaciones de <span>marketing digital</span> y ahora comparto en mis outfits para inspirar a los que me ven, pruebo y recomiendo <span>health & beauty</span>, hablo sobre <span>tendencias</span> y la Noe nerd analiza cada fashion week.<br/>
                Además, trabajo como<span> Social Media Manager </span>para empresas de moda y me divierte la dinámica en equipo, porque así, podemos hacer algo grande, bonito y funcional.<br/>
                Let&apos;s work together! Si no nos divertimos, no vale :)
            </motion.p>
        </section>
    )
}
export default AboutSection