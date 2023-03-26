import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J02() {
  return (
    <div>

    <Header />
    <Navigation />
    
    <div className="u-center-text u-margin-bottom-big">
      <Link className="log-entry__link" to="/notes/adventure-log">
      <h2 className="heading-secondary">
        <span className="heading-secondary--main">
          Journals</span>
        <span className="heading-secondary--sub">
          Adventure Log</span>
        </h2>
      </Link>
    </div>

      <div className="log-entry__main">
        <h4 className="log-entry__title">2. Village of Barovia</h4>
        <h5 className="log-entry__date">
          <span>11th Morning of Hammer through 12th Evening of Hammmer</span><br />
          <span><i>June 12th, 2022 7pm</i></span>
        </h5>

        <p className="log-entry__details">
          <b>Player Characters: </b> Elizana, German, Safzira<br />
          <b>Non-Player Characters: </b> Freebird, Ireena, Ismark, Lancelot<br />
          <b>Quests: </b> Village Plague, Missing Villagers, Burgomaster's Funeral, Protect Ireena, Replacement Priest, Find Gertruda
        </p>

        <p className="log-entry__text">
          11th Day of Hammer <br/><br />
          -Arrival in town <br/><br />
          -Safzira and german go for a drink, where they meet 3 tough vistani women suggesting that they meet up with madam eva on their way out of town. Izmark offers to buy them drinks and asks them to protect his sister Ireena in exchange for free lodging and meals anytime they are in town. <br/><br />
          -Safzira and german go to Izmark's mansion to meet Ireena who insists on giving their father a proper burial. <br/><br />
          -Safzira and German escort Ireena and Ismark with the body of their father to the church where the priest Donavich holds a funeral in his honor.  <br/><br />
          -Ismark becomes the new Burgomaster in his father’s place
          -Halfing checks out shop, mean shop owner, directs to scratching on home fronts. investigation leads to the Cobb house, where a wife answers the door and the halfling meets her dying husband. He mentions resorting to drinking well water after a shortage of wine in the village. He dies and turns into a zombie. Elizana and Freebird slay the zombie outside his home after he devours his wife. <br/><br />
          -Safzira, german, izmark, and ireena join up with elizana and freebird and investigate the local well. Inside are several of Strahd's zombies. They defeat the zombies and retire to the burgomeister's mansion to rest up. <br/><br />
          -Ireena is officially a Sunseeker <br/><br /><br/>

          12th Day of Hammer <br/><br />
          -Elizana attempts the shop again but along the way the dog lancelot scratches at a door of a village home.  <br/><br />
          -Mad Mary explains that Lancelot belongs to her missing daughter Gertruda. Lancelot is looking for her. <br/><br />
          -Mad Mary has witnessed a cloaked figure dragging people towards the north end of town at night. She believes that Gertruda must have been one of them <br/><br />
          -The Sunseekers investigate the area on the north side of town which brings them back to the priest Donavich at his church. 
          -Strange screams are heard from the undercroft of the church.
          -Donavich’s son Doru is a vampire and attacks the friendly Elizana in a hungry rage. <br/><br />
          -Doru is killed and Donavich is imprisoned for his crimes in the undercroft. <br/><br />
          -Ismark asks that the Sunseekers look for a replacement priest in the town of Vallaki to the West.  <br/><br />
          <a href="#">Return to top</a><br /><br />

        </p>
      
      </div>

    <Footer />

  </div>
  )
}

export default J02