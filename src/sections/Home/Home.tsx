'use client'
import { motion, Variants } from "framer-motion"
import {anim} from "../../lib/definitions"

const HomeSection = () => {

	const h2Anim: Variants = {
		init: {
			y: '16vw',			
		},
		enter: {
			y: ['16vw', '0vw'],			
			transition: {
				duration: 0.5,
				delay: 0.5,
			}
		}
	}
	const h2AnimB: Variants = {
		init: {
			y: '16vw',			
		},
		enter: {
			y: ['16vw', '0vw'],			
			transition: {
				duration: 0.5,
				delay: 0.7,
			}
		}
	}
	const h3Anim: Variants = {
		init: {
			y: '3vw',			
		},
		enter: {
			y: ['3vw', '0vw'],			
			transition: {
				duration: 0.5,
				delay: 1,
			}
		}
	}

	return (
		<section id="home" className="min-h-section w-full flex justify-center items-end overflow-hidden">
			<div>
				<div className="overflow-hidden relative">
					<motion.h2 
						className="abosolute text-[16vw] font-black leading-[13vw]" 
						{...anim(h2Anim)}
						>NOELIA
					</motion.h2>
				</div>
				<div className="overflow-hidden relative">
					<motion.h2 
						className="abosolute text-[16vw] font-black leading-[13vw]" 
						{...anim(h2AnimB)}
						>TORRES
					</motion.h2>
				</div>
			</div>
			<div><motion.h3 className="text-[2.5vw] leading-[4vw]" {...anim(h3Anim)}>Comunty Manager</motion.h3></div>
			{/* <motion.h1 className="text-[16vw] font-black leading-[13vw]"
				variants={h1Anim}
				initial="init"
				whileInView="animate"
			>NOELIA TORRES<span className="text-[2.5vw] leading-[2vw]"> Comunty Manager</span></motion.h1> */}
		</section>
	)
}
export default HomeSection