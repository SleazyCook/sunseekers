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
              <li clasName="footer__item"><a href="
              https://discord.gg/bacND625aF" className="footer__link" target="_blank">
                Discord Group</a></li>

              <li clasName="footer__item"><a href="
              https://app.roll20.net/campaigns/details/13151869/plight-of-the-sunseekers" className="footer__link" target="_blank">
                Roll20 Campagin</a></li>

              <li clasName="footer__item"><a href="
              https://death-house.netlify.app" className="footer__link" target="_blank">
                Death House Game</a></li>

              <li clasName="footer__item"><a href="
              https://developedbydrewford.netlify.app" className="footer__link" target="_blank">
                Developed by Drewford</a></li>

            </ul>
          </div> {/* Footer Navigation End */}
        </div> {/* Flexbox Item End */}

        <div className="flexbox__item">
          <div className="footer__copyright">
            <p>Built by <a href="https://developedbydrewford.netlify.app" className="footer__link" target="_blank">Andrew Cook</a> for his virtual Dungeons & Dragons campaign.  This website is for recreational use by players of this specific campaign.  <a href="https://www.google.com/search?client=opera-gx&q=curse+of+strahd&sourceid=opera&ie=UTF-8&oe=UTF-8" className="footer__link" target="_blank">Curse of Strahd</a> is an official 5E module of Dungeons and Dragons. </p>
          </div>
        </div>
      </div> {/* Flexbox End */}

    </div>
  )
}

export default Footer