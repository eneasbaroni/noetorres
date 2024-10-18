'use client'
import { useEffect } from "react"
import ScrollDiv from "./ScrollDiv"
import Lenis from "lenis"


const imgs = [
    '/images/works/utzzia.jpg',
    '/images/works/utzzia.jpg',
    '/images/works/utzzia.jpg',
    '/images/works/utzzia.jpg'
]


const Borrar = () => {  
    
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time:number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)

    }, [])


  return (
    <div className="w-full h-auto flex items-center justify-center ">
        <div className="w-1/2 h-auto relative flex flex-col gap-6 justify-center items-center scrollImg">
            {imgs.map(img=> <ScrollDiv key={img} imgSrc={img}/>)}   
            <svg className="w-full h-1/2">
                    <defs>
                    <clipPath  id='myPathi' clipPathUnits="objectBoundingBox">
                        <path 
                            d='m .1 0 l .8 0 q 0 .8 .1 1 l -1 0 q .1 -.2 .1 -1'
                        ></path>
                    </clipPath>
                    </defs>
            </svg>
        </div>
    </div>
  )
}
export default Borrar