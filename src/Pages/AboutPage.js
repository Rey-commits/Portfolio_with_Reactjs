import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'
import ServicesSection from '../Components/ServicesSection'
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={"ABOUT ME"} span={"ABOUT ME"}/>
            <ImageSection />
            <Title title={"MY SKILLS"} span={"MY SKILLS"}/>
            <div className="container-for-grid">
                <div className="skillsContainer">
                    <SkillsSection skill={"JavaScript "} progress={"75%"} width={"75%"}/>
                    <SkillsSection skill={"React JS "} progress={"80%"} width={"80%"} />
                    <SkillsSection skill={"HTML5 "} progress={"95%"} width={"95%"}/>
                    <SkillsSection skill={"CSS3 "} progress={"75%"} width={"75%"} />
                    <SkillsSection skill={"SASS "} progress={"75%"} width={"75%"}  />
                    <SkillsSection skill={"Python (Data Analytics) "} progress={"85%"} width={"85%"} />
                    <SkillsSection skill={"Python (Deep Learning) "} progress={"85%"} width={"85%"} />
                    <SkillsSection skill={"Matlab "} progress={"80%"} width={"80%"} />
                    <SkillsSection skill={"Scilab "} progress={"83%"} width={"83%"}/>
                    <SkillsSection skill={"GNU Octave "} progress={"85%"} width={"85%"}/>
                    <SkillsSection skill={"Linux Kernel "} progress={"78%"} width={"78%"} />
                    <SkillsSection skill={"Git Command "} progress={"85%"} width={"85%"} />
                </div> 
            </div>

            <Title title={"SERVICES"} span={"SERVICES"}/>
            <div className="services-container">
                <ServicesSection image={design} title={"Web design"} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <ServicesSection image={intelligence} title={"Artificial Intelligence"} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <ServicesSection image={gamedev} title={"Game Development"} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </div>         
        </div>
    )
}

export default AboutPage;
