import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <section id='Footer'>
        <div className="footer-wrap">
          <div className="fw-up">
            <div className="fw-rows">
              <p>Logo</p>
            </div>
            <div className="fw-rows">
              <div className="fwr-head">
                <p>About Us</p>
                <hr />
              </div>
              <div className="fwr-content">
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
              </div>
            </div>
            <div className="fw-rows">
              <div className="fwr-head">
                <p>Blogs</p>
                <hr />
              </div>
              <div className="fwr-content">
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
              </div>
            </div>
            <div className="fw-rows">
              <div className="fwr-head">
                <p>Contact Us</p>
                <hr />
              </div>
              <div className="fwr-content">
                <p>Address</p>
                <p>Email</p>
                <p>Phone</p>
                <p>Phone 2</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="fw-down">
            <p>&#169; 2024 Copyright Ignatius Michael Dinata</p>
            <div className="fwd-socials">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Footer