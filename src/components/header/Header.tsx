'use client'
import Image from "next/image"

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
            {/* <Image src="/images/logo.svg" alt="logo" width={36} height={36} className="mix-blend-difference invert z-20" /> */}
            <Image src="/images/logoB.svg" alt="logo" width={50} height={50} className="mix-blend-difference invert z-20" />
            
            <MenuButton foo={handleClick} menuOpne={menuOpen}/>
            <AnimatePresence>
                {menuOpen && <Menu foo={handleClick}/>}
            </AnimatePresence>
        </header>
    )
}
export default Header