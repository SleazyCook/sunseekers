import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

function Maps() {

  return (
    <div>

      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Journals</span>
          <span className="heading-secondary--sub">
            Maps</span>
          </h2>
      </div>

      <p className="strahd-descriptive">
        The following took maps have been secured by the Sunseekers during their travels across Barovia.
      </p>
      
      {/* Barovia Start */}
      <div className="u-thin-border-top">
        <h3 className="heading-tertiary u-margin-bottom-small">Maps of Barovia</h3>

        <div className="maps-box u-padding-medium">
          <img src="https://i.imgur.com/Lz5FS1r.jpg" className="maps-box__map" />
          <p className="typewriter-script u-center-text">
            Map of Barovia found in Castle Ravenloft</p>
          <br />

          <img src="https://i.imgur.com/28ypbbJ.jpg" className="maps-box__map"/>
          <p className="typewriter-script u-center-text">
            Map of Barovia found in Vallaki</p>
        </div>
      </div> {/* Barovia End */}

      {/* Village of Barovia Start */}
      <div className="u-thin-border-top">
        <h3 className="heading-tertiary u-margin-bottom-small">Maps of the Village of Barovia</h3>

        <div className="maps-box u-padding-medium">
          <img src="https://i.imgur.com/zxl3W65.png" className="maps-box__map" />
          <p className="typewriter-script u-center-text">
            A Map of the Village of Barovia</p><br />
            <div className="flexbox">
                <ul className="maps-box__list flexbox__item">
                  <li>E1. Bildrath's Mercantile</li>
                  <li>E2. Blood of the Vine Tavern</li>
                  <li>E3. Mad Mary's Townhouse</li>
                  <li>E4. Burgomaster's Mansion</li>
                  <li>E5. Church</li>
                  <li>E6. Cemetary</li>
                </ul>
            </div> {/* Flexbox End */}

          <br />

          <img src="https://i.imgur.com/fxgQqfY.jpg" className="maps-box__map"/>
          <p className="typewriter-script u-center-text">
            Map of Village Church</p>
        </div>
      </div> {/* Village of Barovia End */}

      {/* Vallaki Start */}
      <div className="u-thin-border-top">
        <h3 className="heading-tertiary u-margin-bottom-small">Maps of Vallaki</h3>

        <div className="maps-box u-padding-medium">
          <img src="https://i.imgur.com/LOLy8XV.png" className="maps-box__map" />
          <p className="typewriter-script u-center-text">
            A Map of the Vallaki</p><br />
            <div className="flexbox">
              <ul className="maps-box__list flexbox__item">
                <li>N1. St. Andral's Church</li>
                <li>N2. Blue Water Inn</li>
                <li>N3. Burgomaster's Mansion</li>
                <li>N4. Wachterhaus</li>
                <li>N5. Arasek Stockyard</li>
                <li>N6. Coffin Maker's Shop</li>
                <li>N7. Blinsky's Toys</li>
                <li>N8. Town Square</li>
                <li>N9. Vistani Camp</li>
              </ul>
            </div> {/* Flexbox End */}
          <br />

          <img src="https://i.imgur.com/Oia2nrv.jpg" className="maps-box__map"/>
          <p className="typewriter-script u-center-text">
            Map of St. Andral's Church</p>
        </div>
      </div> {/* Vallaki End */}


      <Footer />

    </div>
  )
}

export default Maps