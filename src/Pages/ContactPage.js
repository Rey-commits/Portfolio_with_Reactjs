/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from "../img/calling.svg"
import email from "../img/email.svg"
import location from "../img/home-location.svg"

function ContactPage() {
    return (
        <div className="ContactPage">
            <div className="map-sect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15451.519403669308!2d121.02492782144036!3d14.491586037950126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf1d95801c29%3A0x9815a2b0e684a8c7!2sSun%20Valley%2C%20Para%C3%B1aque%2C%201709%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1617947424441!5m2!1sen!2sph" width="600" height="450" frameBorder="0" style={{border:0,}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
            <div className="map-section">
                <ContactItem icon={phone} text1={"+123 34567789"} text2={"+0333 6789 4567"} title={"Phone"}/>
                <ContactItem icon={email} text1={"mesugareymondrobin@gmail.com"} text2={"+0333 6789 4567"} title={"Email"}/>
                <ContactItem icon={location} text1={"+123 34567789"} text2={"+0333 6789 4567"} title={"Address"}/>
            </div>
        </div>
    )
}

export default ContactPage
