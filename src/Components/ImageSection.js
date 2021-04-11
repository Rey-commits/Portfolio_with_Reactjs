import React from 'react';
// import reymond from '../img/reymond.jpg';
// import reymond1 from "../img/reymond1.jpg"

function ImageSection() {
    return (
        <div className="ImageSection">
            {/* <div className="img">
                <img className="img1" src={reymond} alt=""/>
            </div> */}
            
            <div className="about-info">
                <h4>I am<span> Reymond Mesuga</span></h4>
                <p className="about-text">
                    I'm a junior physics student at PUP and currently 
                    doing my research on the application of artificial intelligence 
                    in medical imaging and in the field of gravitation. I also enjoy 
                    doing personal projects in web/software development.  
                
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Reymond Robin. Mesuga</p>
                        <p>: 21</p>
                        <p>: Filipino</p>
                        <p>: Filipino, English</p>
                        <p>: Parañaque City, Philippines</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
