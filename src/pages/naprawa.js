import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import { HeroContent } from '../components/HeroSection/HeroElements'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
const Naprawa = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            
        </>
    )
}

export default Naprawa
