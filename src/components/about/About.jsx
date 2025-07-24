import React from 'react'
import './about.css'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{vscFolderLibrary} from 'react-icons/vsc'
import Me from '../../assest/m2.jpg'
const About=()=>{
    return(
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
        <div className='container about__container'>
            <div className='about__me'>
            <div className='about__me-image'>
            <img src={Me} alt='img'/></div></div>
        <div className='about__content'>
            {/* <div className='about__cards'>
                <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small></small>
                </article>
                <article className='about__card'>
                    <FiUsers className='about__icon'/>
                    <h5>Clients</h5>
                    <small>200+ worldwide</small>
                </article>
                <article className='about__card'>
                    <vscFolderLibrary className='about__icon'/>
                    <h5>Projects</h5>
                    <small>80+ completec</small>
                </article>
            </div> */}
            <p>
                I'm a passionate and dedicated Fullstack Developer with a strong foundation in building responsive and user-friendly web applications. I recently graduated in 2025 with a Bachelor's degree in Electronics and Communication Engineering, securing a CGPA of 7.8. Academically, I’ve always been consistent — scoring 944 marks in my intermediate and achieving a 9.7 CGPA in 10th grade. I have hands-on experience with technologies like HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. I'm also proud to have earned a 5-star rating in Python on HackerRank, reflecting my strong problem-solving skills and commitment to continuous learning. This portfolio highlights the projects I've built, the skills I've developed, and my journey as a developer ready to take on real-world challenges.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
            

        </div>
        </section>
    )
}
export default About