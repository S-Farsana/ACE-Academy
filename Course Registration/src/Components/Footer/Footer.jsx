
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import '../Footer/Footer.css'

function Footer() {
  return (
    // <div className='Foot'>
    <footer className="footers">
      <hr className="footer-divider" />

      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">ACE Academy</div>
          <span>© 2025 Company, Inc</span>
        </div>

        <div className="footer-right">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="social-link">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="social-link">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
    // </div>
  )
}

export default Footer
