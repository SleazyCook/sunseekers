import React from 'react'

function Footer() {
  return (
    <div className="footer">

      <div className="footer__logo-box">
        <a href='https://drewford.dev' target='_blank' ><span>Developed by </span>
        <span className="footer__logo-box--author">Drewford</span></a>
      </div>

      <div className="flexbox">

        <div className="flexbox__item">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item"><a href="
              https://discord.gg/bacND625aF" className="footer__link" target="_blank">
                Discord Group</a></li>

              <li className="footer__item"><a href="
              https://app.roll20.net/campaigns/details/13151869/plight-of-the-sunseekers" className="footer__link" target="_blank">
                Roll20 Campaign</a></li>

              <li className="footer__item"><a href="
              https://death-house.drewford.dev" className="footer__link" target="_blank">
                Death House Game</a></li>

              <li className="footer__item"><a href="
              https://drewford.dev" className="footer__link" target="_blank">
                Developed by Drewford</a></li>

            </ul>
          </div> {/* Footer Navigation End */}
        </div> {/* Flexbox Item End */}

        <div className="flexbox__item">
          <div className="footer__copyright">
            <p>Built by <a href="https://developedbydrewford.netlify.app" className="footer__link" target="_blank">Andrew Cook</a> for a custom campaign for his virtual tabletop role-playing game.  This website is intended for recreational use by players of this specific campaign.  <a href="https://www.google.com/search?client=opera-gx&q=curse+of+strahd&sourceid=opera&ie=UTF-8&oe=UTF-8" className="footer__link" target="_blank">Curse of Strahd</a> is an official 5E module for Dungeons and Dragons by Wizards of the Coast. </p>
          </div>
        </div>
      </div> {/* Flexbox End */}

    </div>
  )
}

export default Footer