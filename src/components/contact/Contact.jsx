import React from 'react'
import './Contact.css'
function Contact(){
    return(
      <div id='contact'>
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container text-center text-md-left">
        <div className="row md-0">
          {/* Contact Info */}
          <div className="col-md-4 mx-auto mb-4">
            <h5 className="text-uppercase font-weight-bold">Contact Me</h5>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:vamsikrishna949191@gmail.com" style={{'text-decoration':'none'}} className="text-white">vamsikrishna949191@gmail.com</a></li>
              <li>Phone: <a href="tel:+917382486144" style={{'text-decoration':'none'}} className="text-white">+91 7382486144</a></li>
              <li>Location: Andhra Pradesh, India</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mx-auto mb-4">
            <h5 className="text-uppercase font-weight-bold">Follow Me</h5>
            <ul className="list-unstyled d-flex justify-content-center gap-3">
              <li><a href="https://github.com/vamsi22113/" target="_blank" style={{'text-decoration':'none'}} rel="noreferrer" className="text-white">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/bera-vamsi-krishna-10671a266/" target="_blank" style={{'text-decoration':'none'}} rel="noreferrer" className="text-white">LinkedIn</a></li>
            </ul>
          </div>

        </div>
        <hr className="bg-light" />
        <div className="text-center py-2">
          <small>© 2025 Vamsi Krishna. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
    </div>
  );
}
export default Contact