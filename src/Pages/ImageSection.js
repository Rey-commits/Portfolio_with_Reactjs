import React from 'react'
import about from "../img/about.png"

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span>Reymond Mesuga</span></h4>
                <p>
                     It is a long established fact that a reader will be 
                    distracted by the readable content of a page when looking 
                    at its layout.
                </p>
                <div className="about-details">
                    
                </div>
            </div>
        </div>
    )
}
export default ImageSection
