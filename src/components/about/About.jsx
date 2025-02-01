import React from 'react'
import "./about.css"
import Image from "../../assets/avatar-2.svg";
import Bilal_Arshad from "../../assets/Bilal Arshad.pdf"

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            I'm Bilal Arshad, a passionate developer from Lahore, Pakistan with expertise in 
            multiple programming languages and technologies, including JS, Python and C++.
             I also have extensive experience in web designing and development, creating
             user-friendly and visually appealing websites.
            </p>
            <a href={Bilal_Arshad} download="Bilal_Arshad" className="btn">Download CV</a>
          </div>
          <div className="about__skills grid">
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">C/C++</h3>
                <span className="skills__number"></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">Python</h3>
                <span className="skills__number"></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage python"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">React JS</h3>
                <span className="skills__number"></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage rjs"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX</h3>
                <span className="skills__number"></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
