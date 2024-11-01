import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, Newsreader } from 'next/font/google'
import "./globals.css";
import './borrar/ScrollDiv.css'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

//local fonts
import localFont from 'next/font/local'



const dmSans = DM_Sans({
	subsets: ['latin'],
	variable: '--font-dm',
}) //ver archivo tailwind.config.ts

const cormorantGaramond = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-cormorant',
}) //ver archivo tailwind.config.ts

const newsreader = Newsreader({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-newsreader',
}) //ver archivo tailwind.config.ts

const neueMetana = localFont({ 
	src: '../fonts/neuemetana.otf',
	variable: '--font-neuemetana',
 })

export const metadata: Metadata = {
	title: "Noelia Torres",
	description: "Noelia Torres, community manager y copywriter con sólida experiencia y trayectoria en la gestion de redes sociales.",
	keywords: "Noelia Torres, community manager,  redes sociales, marketing, planificación, contenido, estrategia de redes sociales, estrategia, gestión, córdoba",
	openGraph: {
		title: "Noelia Torres",
		description: "Noelia Torres, community manager y copywriter con más de 4 años de experiencia y trayectoria en la gestión de redes sociales.",
		url: "https://noeliatorres.com.ar/",
		siteName: "Noelia Torres",
		images: [
			{
				url: "/images/Logo.png" 
			}
		]
	}
};

	export default function RootLayout({
		children,
	}: Readonly<{
		children: React.ReactNode;
	}>) {
		return (			
			<html lang="es" className={`${dmSans.variable} ${cormorantGaramond.variable} ${newsreader.variable} ${neueMetana.variable} overflow-y-scroll`}>
				<body className="font-dm pt-10">
					<Header/>
					{children}
					<Footer/>
				</body>
			</html>
		);
}
