import { useState } from 'react'
import './BackToTop.css'

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => { 
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    window.addEventListener('scroll', toggleVisibility);

    return (
        <>
            {isVisible && (
            <button className="back-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                ^
            </button>
            )}
        </>
    )
}