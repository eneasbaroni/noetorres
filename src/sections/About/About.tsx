'use client'
import { motion, Variants } from "framer-motion"

const h2Anim: Variants = {
    init : {
        y: 55,
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.5,
        }
    }
}

const AboutSection = () => {
    return (
        <section id="about" className="min-h-screen w-full flex items-center justify-between">
            <div className="w-1/4 overflow-hidden">                
                <motion.h2 
                    className="text-6xl font-black"
                    variants={h2Anim}
                    initial="init"
                    whileInView="animate"
                >ABOUT ME</motion.h2>
            </div>
            <p className="text-3xl w-3/4">
                Holi! Soy Noe, creadora de contenido <span className="font-cormorant text-4xl italic">fashion y lifestyle.</span><br />
                La <span className="font-cormorant text-4xl italic">moda</span> es mi pasión y mi juego favorito desde que a mis 5 años mi mamá me dejó empezar a vestirme sola, revolver su placard y maquillarme cual maquilladora profesional, ja!<br/>
                El tiempo pasó, estudié <span className="font-cormorant text-4xl italic">diseño de indumentaria</span>, aparecieron las <span className="font-cormorant text-4xl italic">redes sociales</span>, complementé con formaciones de <span className="font-cormorant text-4xl italic">marketing digital</span> y ahora comparto en mis outfits para inspirar a los que me ven, pruebo y recomiendo <span className="font-cormorant text-4xl italic">health & beauty</span>, hablo sobre <span className="font-cormorant text-4xl italic">tendencias</span> y la Noe nerd analiza cada fashion week.<br/>
                Además, trabajo como <span className="font-cormorant text-4xl italic">Social Media Manager</span> para empresas de moda y me divierte la dinámica en equipo, porque así, podemos hacer algo grande, bonito y funcional.<br/>
                Let&apos;s work together! Si no nos divertimos, no vale :)
            </p>
        </section>
    )
}
export default AboutSection