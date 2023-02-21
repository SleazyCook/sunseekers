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
      
      <h3 className="heading-tertiary">Maps of Barovia</h3>

      <div className="maps-box u-padding-medium">
        <img src="https://i.imgur.com/Lz5FS1r.jpg" className="maps-box__map" />
        <p className="typewriter-script u-center-text">
          Map of Barovia found in Castle Ravenloft</p>
        <br />
        
        <img src="https://i.imgur.com/28ypbbJ.jpg" className="maps-box__map"/>
        <p className="typewriter-script u-center-text">
          Map of Barovia found in Vallaki</p>
      </div>


      <Footer />

    </div>
  )
}

export default Maps