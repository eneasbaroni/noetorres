import { motion, Variants } from "framer-motion"
import { anim } from "../../lib/definitions"
import { MouseEvent } from "react"

const Menu = ({ foo }: { foo: () => void }) => {
    const menuAnim: Variants = {
        initial: {
            y: '-100vh',
        },
        enter: {
            y: '0vh',
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        },
        exit: {
            y: '-100vh',
            transition: {
                duration: 1,
                ease: 'easeInOut',
                delay: 0.5
            }
        }
    }

    const liAnim = {
        initial: {
            y: 45,
            fontVariationSettings: `"wght" 400`
        },
        enter: (index: number) => ({
            y: 0,
            transition: {
                duration: 0.5,
                /* delay: 1   */
                delay: 1 + (index * 0.1)
            },
        }),

        exit: {
            y: 45,
            fontVariationSettings: `"wght" 400`,
            transition: {
                duration: 0.5
            }
        }
    }

    const links = [
        {
            name: "HOME",
            href: "#home"
        },
        {
            name: "ABOUT",
            href: "#about"
        },
        {
            name: "WORKS",
            href: "#works"
        },
        {
            name: "CONTACT",
            href: "#contact"
        }
    ]
    const hangleClick = (e:MouseEvent<HTMLLIElement, globalThis.MouseEvent>, link: string) => {
        e.preventDefault()
        console.log(link);  
        //redirigir a link
        window.location.href = link
        foo()      
    }


    return (
        <motion.nav className="fixed h-screen w-screen bg-white top-0 left-0 z-10"
            {...anim(menuAnim)}
        >
            <ul className="h-full flex flex-col gap-4 p-4 items-center justify-center [&>li]:text-black [&>li]:text-3xl">
                {links.map((link, index) => (
                    <motion.li key={index} className="relative overflow-hidden h-12 w-full" onClick={(e) => hangleClick(e, link.href)}> <motion.a href={link.href} custom={index} className="absolute w-full text-center top 0" {...anim(liAnim)} whileHover={{fontVariationSettings: `"wght" 900`,  transition: { duration: 0.5 }}}> {link.name}</motion.a></motion.li>
                ))}
                {/* <motion.li className="relative overflow-hidden h-12 w-full"> <motion.a href="" className="absolute w-full text-center top 0" {...anim(liAnim)}> HOME </motion.a></motion.li>
            <motion.li className="relative overflow-hidden h-12 w-full"> <motion.a href="" className="absolute w-full text-center top 0" {...anim(liAnim)}> ABOUT </motion.a></motion.li>
            <motion.li className="relative overflow-hidden h-12 w-full"> <motion.a href="" className="absolute w-full text-center top 0" {...anim(liAnim)}> WORKS </motion.a></motion.li>
            <motion.li className="relative overflow-hidden h-12 w-full"> <motion.a href="" className="absolute w-full text-center top 0" {...anim(liAnim)}> CONTACT </motion.a></motion.li>  */}
            </ul>

        </motion.nav>
    )
}
export default Menu