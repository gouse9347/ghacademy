import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>About  GH-ACADEMY</h3>
        <h2>Learn. Build. Get Hired.</h2>
        <p>GH Academy is a premier technology training institute based in Nandyal, Andhra Pradesh, dedicated to empowering students and professionals with in-demand skills in the fields of software development, vlsi, embedded systems, data science, AI/ML, cloud computing, and more.</p>
        <p>Our mission is to bridge the gap between academic knowledge and real-world industry requirements by providing hands-on, project-based learning experiences. With expert trainers, up-to-date curriculum, and personalized mentorship, we aim to shape the future of tech professionals in India.</p>
        <p>We offer both online and offline courses, catering to fresh graduates, working professionals, and entrepreneurs. Our training is aligned with the latest technologies and industry standards to ensure job readiness and career growth.</p>
      </div>
    </div>
  )
}

export default About
