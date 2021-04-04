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
            <div className="container-for-grid">
                <div className="skillsContainer">
                    <SkillsSection skill={"JavaScript"} progress={"75%"} width={"75%"}/>
                    <SkillsSection skill={"React.js"} progress={"80%"} width={"80%"}/>
                    <SkillsSection skill={"HTML5"} progress={"95%"} width={"95%"}/>
                    <SkillsSection skill={"CSS3"} progress={"75%"} width={"75%"}/>
                    <SkillsSection skill={"SASS"} progress={"75%"} width={"75%"}/>
                    <SkillsSection skill={"Python"} progress={"85%"} width={"85%"}/>
                    <SkillsSection skill={"Malplotlib"} progress={"90%"} width={"90%"}/>
                    <SkillsSection skill={"Seaborn"} progress={"80%"} width={"80%"}/>
                    <SkillsSection skill={"Pandas"} progress={"80%"} width={"80%"}/>
                    <SkillsSection skill={"Matlab"} progress={"80%"} width={"80%"}/>
                    <SkillsSection skill={"Scilab"} progress={"83%"} width={"83%"}/>
                    <SkillsSection skill={"GNU Octave"} progress={"85%"} width={"85%"}/>
                    <SkillsSection skill={"Linux Kernel"} progress={"78%"} width={"78%"}/>
                    <SkillsSection skill={"Bash (Unix Shell)"} progress={"85%"} width={"85%"}/>
                </div> 
            </div>         
        </div>
    )
}

export default AboutPage;
