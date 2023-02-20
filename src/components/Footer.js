import React from 'react'

function Footer() {
  return (
    <div className="footer">

      <div className="footer__logo-box">
        <span>Developed by </span>
        <span className="footer__logo-box--author">Drewford</span>
      </div>

      <div className="flexbox">

        <div className="flexbox__item">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li clasName="footer__item"><a href="#" className="footer__link">Company</a></li>
              <li clasName="footer__item"><a href="#" className="footer__link">Contact</a></li>
              <li clasName="footer__item"><a href="#" className="footer__link">Careers</a></li>
              <li clasName="footer__item"><a href="#" className="footer__link">Privacy Policy</a></li>
              <li clasName="footer__item"><a href="#" className="footer__link">Terms</a></li>
            </ul>
          </div> {/* Footer Navigation End */}
        </div> {/* Flexbox Item End */}

        <div className="flexbox__item">
          <div className="footer__copyright">
            <p>Built by <a href="#" className="footer__link">Andrew Cook</a> for his virtual Dungeons & Dragons campaign.  This website is for recreational use by players of this specific campaign.  <a href="#" className="footer__link">Curse of Strahd</a> is an official 5E module of Dungeons and Dragons. </p>
          </div>
        </div>
      </div> {/* Flexbox End */}

    </div>
  )
}

export default Footer