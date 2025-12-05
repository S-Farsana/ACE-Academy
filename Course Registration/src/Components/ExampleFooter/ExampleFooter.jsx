import "../ExampleFooter/ExampleFooter.css"

function ExampleFooter() {
  return (
    <div className='footer-main'>
      <p>footer here</p>
      <h4 className="company-name">ACE Academy</h4>

        {/* Tagline */}
        <p className="tagline">Empowering you to write your success story</p>

        {/* Social Icons */}
        <div className="social-area mt-3">
          <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="social"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="copy p-2">
        © 2025 ACE Academy. All rights reserved.
      </div>
    </div>
  )
}

export default ExampleFooter
