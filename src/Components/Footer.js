import React from 'react'
import sytles from './Footer.module.css'
import {ReactComponent as Dogs} from '../Assets/dogs-footer.svg'

const Footer = () => {
    return (
        <footer className={sytles.footer}>
            <Dogs />
           <p>Dogs. Alguns direitos reservados.</p>
        </footer>
    )
}

export default Footer
