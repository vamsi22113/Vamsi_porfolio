import React from 'react';
import Contact from '../contact/Contact';
import './Footer.css'
const Footer=()=>{
    return(
        <section id="projects">
  <h2 className="section-title">My Projects</h2>
  <div className="projects-container">

    {/* Project 1 – Bujji Voice Assistant */}
    <div className="project-card">
      {/* <img src="bujji.jpg" alt="Bujji Voice Assistant" className="project-img" /> */}
      <h3>Bujji - Voice Assistant</h3>
      <p>This project is a voice-controlled assistant inspired by the Bujji AI in the movie Kalki. Built using JavaScript and browser speech recognition APIs, it performs tasks like searching the web, opening websites, and answering basic questions. It gave me hands-on experience in integrating voice features with web functionality.</p>
      {/* <div className="project-links">
        <a href="https://github.com/vamsikrishna/bujji-voice-assistant" className="btn">GitHub</a>
        <a href="#" className="btn btn-primary">Live Demo</a>
      </div> */}
    </div>

    {/* Project 2 – Eastern Ghats Travel Agency */}
    <div className="project-card">
{/*       <img src="travel.jpg" alt="Travel Agency Website" className="project-img" /> */}
      <h3>Eastern Ghats Travel Agency</h3>
      <p>A responsive travel website built using React.js, designed to promote hidden tourist spots in Paderu. The site includes sections like destinations, services, and contact, offering a smooth user experience and intuitive UI. It was developed in collaboration to support local tourism.</p>
      {/* <div className="project-links">
        <a href="https://github.com/vamsikrishna/eastern-ghats-travel" className="btn">GitHub</a>
        <a href="#" className="btn btn-primary">Live Website</a>
      </div> */}
    </div>

    {/* Project 3 – Guru AI Chatbot */}
    <div className="project-card">
      {/* <img src="chatbot.jpg" alt="Guru Chatbot" className="project-img" /> */}
      <h3>Guru - AI Chatbot</h3>
      <p>Guru is an AI chatbot developed using the MERN stack. It allows users to chat with a smart assistant that provides replies using trained logic and backend data. The project gave me practical knowledge in real-time communication, authentication, and full-stack integration.</p>
      {/* <div className="project-links">
        <a href="https://github.com/vamsikrishna/guru-chatbot" className="btn">GitHub</a> */}
      {/* <a href="#" className="btn btn-primary">Try Chatbot</a> */}
      {/* </div> */}
    </div>

    {/* Project 4 – Blogging Platform */}
    <div className="project-card">
      {/* <img src="blog.jpg" alt="Blogging Website" className="project-img" /> */}
      <h3>BlogSphere - Blogging Platform</h3>
      <p>A full-featured blogging website built with React, Node.js, Express.js, and MySQL. It allows users to create accounts, write blog posts, and interact with other users. I focused on implementing authentication, RESTful APIs, and efficient data storage for scalability.</p>
      {/* <div className="project-links">
        <a href="https://github.com/vamsikrishna/blogsphere" className="btn">GitHub</a>
        <a href="#" className="btn btn-primary">Live Demo</a>
      </div> */}
    </div>

    {/* Project 5 – E-commerce Website */}
    <div className="project-card">
      {/* <img src="ecommerce.jpg" alt="E-commerce Website" className="project-img" /> */}
      <h3>ShopEase - E-Commerce Platform</h3>
      <p>An e-commerce web application built using React, Node.js, Express.js, and MySQL. Users can browse products, add to cart, and place orders. I handled both frontend design and backend API development, focusing on product management and user authentication features.</p>
      {/* <div className="project-links">
        <a href="https://github.com/vamsikrishna/shopease" className="btn">GitHub</a>
        <a href="#" className="btn btn-primary">Visit Site</a>
      </div> */}
    </div>

  </div>
  <Contact/>

</section>


    )
}
export default Footer