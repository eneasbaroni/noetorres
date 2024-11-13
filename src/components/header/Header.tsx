'use client'

import { useState } from "react"
import MenuButton from "./MenuButton"
import Menu from "./Menu"
import { AnimatePresence } from "framer-motion"



const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className="w-auto h-[40px] flex items-center justify-between ml-16">            
            <MenuButton foo={handleClick} menuOpne={menuOpen}/>
            <AnimatePresence>
                {menuOpen && <Menu foo={handleClick}/>}
            </AnimatePresence>
        </header>
    )
}
export default Header