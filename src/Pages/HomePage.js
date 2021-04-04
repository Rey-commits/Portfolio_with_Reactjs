import React from 'react'
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"
function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Reymond Mesuga</span>
                </h1>
                <p className="h-sub-text">
                        I'm a college student major in physics. 
                        In my spare time, i did some personal projects 
                        including front-end web/software 
                        development using React JS as my main framework. I also did some data science and 
                        artificial intelligence using python. As a physics student, 
                        my research focuses on the application of artificial inteligence 
                        in medical imaging.
                </p>
                <div className="icons">
                    <Link className="icon-holder" to={{pathname:"https://www.facebook.com/reymond.mesugah/"}} target="_blank">
                        <FontAwesomeIcon  icon={faFacebook} className="icon fb"/>
                    </Link>
                    <Link className="icon-holder" to={{pathname:"https://github.com/Rey-commits"}} target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </Link>
                    <Link className="icon-holder" to={{pathname:"https://www.linkedin.com/in/reymond-r-21410/"}} target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage
