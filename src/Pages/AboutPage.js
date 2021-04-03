import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={"ABOUT ME"} span={"ABOUT ME"}/>
            <ImageSection />
            <Title title={"MY SKILLS"} span={"MY SKILLS"}/>
            <SkillsSection skill={"JavaScript"} progress={"70%"} />
        </div>
    )
}

export default AboutPage;
