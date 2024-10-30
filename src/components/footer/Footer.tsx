'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { anim } from "../../lib/definitions"
import { liAnim } from "@/lib/anims"

const footerLinks = [
	{name: 'LinkedIn', url: 'https://www.linkedin.com/in/noeliatorrescontact/'},
	{name: 'Instagram', url: 'https://www.instagram.com/noetorresdecristal'},
	{name: 'Whatsapp', url: 'https://wa.me/+5493517657726'},
]

const Footer = () => {	

	const divRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: divRef,
		offset: ['start end', 'start start']
	})

	const borderRadius = useTransform(scrollYProgress, [0, 1], ['0rem', '10rem'])

	return (
		<footer className="w-full h-screen flex flex-col bg-[url('/images/footer.svg')] bg-cover ">
			<motion.div ref={divRef} className="w-full h-64 bg-orange-50 shadow-sm" style={{ borderBottomLeftRadius: borderRadius, borderBottomRightRadius: borderRadius }}></motion.div>
			<div className="w-full h-[calc(100vh-16rem)] flex justify-between items-end px-16">
				<h3 className="w-auto text-center text-neutral-900 text-8xl font-light tracking-tighter ">Noelia Torres</h3>
				<div className="w-auto flex flex-col gap-2 [&>a]:text-3xl">
					{footerLinks.map((item, index) => <motion.a key={index} href={item.url} className="text-neutral-950 text-right" {...anim(liAnim)} whileHover={{fontVariationSettings: `"wght" 900`}}>{item.name}</motion.a>)}
				</div>
			</div>8
		</footer>
	)
}	
export default Footer