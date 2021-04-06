import React from 'react'

function ServicesSection({image}) {
    return (
        <div className="ServicesSection">
            <div className="service">
                <img src={image} alt=""/>
                <h5 className="s-title"></h5>
                <p className="s-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
        </div>
    )
}

export default ServicesSection;
