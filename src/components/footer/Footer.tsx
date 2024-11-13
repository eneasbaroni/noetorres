'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { anim } from "../../lib/definitions"
import { liAnim } from "@/lib/anims"

const footerLinks = [
	{name: 'Email', url: 'mailto:noeliatorrescontact@gmail.com'},
	{name: 'LinkedIn', url: 'https://www.linkedin.com/in/noeliatorrescontact/'},
	{name: 'Whatsapp', url: 'https://wa.me/+5493517657726'},
	{name: 'Instagram', url: 'https://www.instagram.com/noetorresdecristal'},
]

const Footer = () => {	

	const divRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: divRef,
		offset: ['start end', 'start start']
	})

	const borderRadius = useTransform(scrollYProgress, [0.5, 1], ['0rem', '10rem'])

	return (
		<footer className="w-full min-h-screen flex flex-col bg-[url('/images/footer.svg')] bg-cover overflow-y-hidden ">
			<motion.div ref={divRef} className="w-full h-64 bg-orange-50 shadow-sm" style={{ borderBottomLeftRadius: borderRadius, borderBottomRightRadius: borderRadius }}></motion.div>

			<div className="w-full h-[calc(100vh-16rem)] flex flex-col justify-end items-center">
			
				<div className="w-full h-auto grid grid-rows-[auto_1fr] justify-center items-end gap-y-0 px-16">
					<div className="flex flex-col gap-2 [&>a]:text-2xl">
						{footerLinks.map((item, index) => <motion.a key={index} href={item.url} className="w-auto text-neutral-950 text-right" {...anim(liAnim)} whileHover={{fontVariationSettings: `"wght" 900`}}>{item.name}</motion.a>)}
					</div>
					<h3 className="h-auto leading-[13vw] w-auto text-center text-neutral-900 text-[10vw] font-light tracking-tighter border-foreground border-b">Lest´s work together</h3>
					<div className="flex items-center justify-between">
						<p>© {new Date().getFullYear()} Noelia Torres. Todos los derechos reservados.</p>
						<p>Diseñado y desarrollado por <a href="https://eneasbaroni.com.ar" target="blank" className="text-neutral-900 text-right">Eneas Baroni</a></p>
					</div>
				</div>
			</div>
		</footer>
	)
}	
export default Footer