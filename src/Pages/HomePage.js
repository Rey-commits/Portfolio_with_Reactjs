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
                        To be continue at 2:01:27.
                        It is a long established fact that a reader will be 
                        distracted by the readable content of a page when looking 
                        at its layout.
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
