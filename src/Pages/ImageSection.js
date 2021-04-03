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
                <p>
                     It is a long established fact that a reader will be 
                    distracted by the readable content of a page when looking 
                    at its layout.
                </p>
                <div className="about-details">
                    <div className="details">
                        <p>Full Name</p>
                        <p>: Reymond Robin Mesuga</p>
                    </div>
                </div>
                <div className="about-details">
                    <div className="details">
                        <p>Age</p>
                        <p>: 21</p>
                    </div>
                </div>
                <div className="about-details">
                    <div className="details">
                        <p>Nationality</p>
                        <p>: Filipino</p>
                    </div>
                </div>
                <div className="about-details">
                    <div className="details">
                        <p>Languages</p>
                        <p>: Filipino and English</p>
                    </div>
                </div>
                <div className="about-details">
                    <div className="details">
                        <p>Hometown</p>
                        <p>: Metro Manila, Philippines</p>
                    </div>
                </div>
                <div className="about-details">
                    <div className="details">
                        <p>Full Name</p>
                        <p>: Reymond Robin Mesuga</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImageSection
