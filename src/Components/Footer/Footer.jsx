import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta_icon from '../Assets/insta_icon.png'
import linkedin_icon from '../Assets/linkedin_icon.png'
import github_icon from '../Assets/github_icon_new.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>Shoplet</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <a href="https://github.com/Harshitshukla0208" target="_blank">
                        <img src={github_icon} alt="GitHub" />
                    </a>
                </div>
                <div className="footer-icons-container">
                    <a href="https://www.linkedin.com/in/harshit-shukla-9a5950239/" target="_blank">
                        <img src={linkedin_icon} alt="LinkedIn" />
                    </a>
                </div>
                <div className="footer-icons-container">
                    <a href="https://www.instagram.com/harshitshukla_780/" target="_blank">
                        <img src={insta_icon} alt="Instagram" />
                    </a>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All rights are reserved</p>
            </div>
        </div>
    )
}

export default Footer
