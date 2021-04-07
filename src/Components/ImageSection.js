import React from 'react'
import reymond1 from "../img/reymond1.jpg"

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={reymond1} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Reymond Mesuga</span></h4>
                <p className="about-text">
                    To be continue at 3:39:40. It is a long established fact 
                    that a reader will be 
                    distracted by the readable content of a page when looking 
                    at its layout.
                </p>
                {/* <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Hometown</p> 
                    </div>
                    <div className="right-section">
                        <p>: Reymond Robin Mesuga</p>
                        <p>: 21</p>
                        <p>: Filipino</p>
                        <p>: Filipino and English</p>
                        <p>: Metro Manila, PH</p> 
                    </div>
                </div> */}
                <button className="btn">Download CV</button>

            </div>
        </div>
    )
}
export default ImageSection
