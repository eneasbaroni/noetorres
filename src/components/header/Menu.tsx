import {motion, Variants} from "framer-motion"
import {anim} from "../../lib/definitions"

const Menu = () => {
    const menuAnim: Variants = {
        initial: {
            y:'-100vh',        
        },
        enter: {
            y:'0vh',
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        },
        exit: {
            y:'-100vh',
            transition: {
                duration: 1,
                ease: 'easeInOut',
                delay: 0.5
            }
        }
    }

    const liAnim = {
        initial: {
            y: 45
        },
        enter: {
            y: 0,
            transition: {
                duration: 0.5, 
                delay: 1                           
            },
        },

        exit: {
            y: 45,
            transition: {
                duration: 0.5
            }
        }
    }
  return (
    <motion.nav className="fixed h-screen w-screen bg-white top-0 left-0 z-10"
        {...anim(menuAnim)}
    >
        <ul className="h-full flex flex-col gap-4 p-4 items-center justify-end [&>li]:text-black [&>li]:text-3xl">            
            <motion.li className="relative overflow-hidden h-12 w-full"> <motion.a href="" className="absolute w-full text-center top 0" {...anim(liAnim)}> HOME </motion.a></motion.li>
            <motion.li className="relative overflow-hidden h-12 w-full"> <motion.a href="" className="absolute w-full text-center top 0" {...anim(liAnim)}> ABOUT </motion.a></motion.li>
            <motion.li className="relative overflow-hidden h-12 w-full"> <motion.a href="" className="absolute w-full text-center top 0" {...anim(liAnim)}> WORKS </motion.a></motion.li>
            <motion.li className="relative overflow-hidden h-12 w-full"> <motion.a href="" className="absolute w-full text-center top 0" {...anim(liAnim)}> CONTACT </motion.a></motion.li>            
        </ul>

    </motion.nav>
  )
}
export default Menu