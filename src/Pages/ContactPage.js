import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from "../img/phone.svg"
import email from "../img/emailme.svg"
import location from "../img/location.svg"

function ContactPage() {
    return (
        <div className="ContactPage">
            <div className="map-section">
                <ContactItem icon={phone} text1={"+123 34567789"} text2={"+0333 6789 4567"} title={"Phone"}/>
                <ContactItem icon={email} text1={"+123 34567789"} text2={"+0333 6789 4567"} title={"Email"}/>
                <ContactItem icon={location} text1={"+123 34567789"} text2={"+0333 6789 4567"} title={"Address"}/>
            </div>
        </div>
    )
}

export default ContactPage
