import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J10() {
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
        <h4 className="log-entry__title">10. Wachterhaus and the Vallaki Vistani Camp</h4>
        <h5 className="log-entry__date">
          <span>28th and 29th Day of Hammer</span>
          <span><i>August 21st, 2022 8pm </i></span>
        </h5>

        <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, German, Safzira<br />
            <b>Non-Player Characters: </b> Freebird, Ireena, Kasimir, Van Richten, and Vasili<br />
            <b>Quests: </b> "All Will Be Well!", Coup of Vallaki, Rescue Arabelle, Bones of St. Andral
        </p>

        <p className="log-entry__text">
          <b>28th Day of Hammer</b><br />
          Safzira and Elizana go to the Swift Finish to wash up and unwind<br />
          Saf sends a message by carrier pigeon to young priest<br />
          The party is followed by a mysterious stranger, Elizana realizes he works for the Wachter family and agrees to arrange a meeting at dinner that same day<br />
          Meeting with Vasili and and Ireena, Ireen learns about Izek's dolls, they agree to meet at Wachterhaus, and Vasili tells the party about some silver at the Vistani camp south of town<br />
          PCs meet Kasimir and the rest of the Dusk elves outside of the camp<br />
          Kasimir tells the sad tale of the dusk elves and plan to resurrect his sister Patrina at the Amber Temple ("faceless god at the end of a long and winding road deep in the mountains")<br />
          Upon reaching the Vistani camp at the top of the hill, they meet Luvash whipping teenage Alexi for falling asleep and losing his 7yr old daughter Arabelle. Arrigal offers silver for her safe return.<br />
          Elizana, Ireena, and Vasili meet with Lady Fiona Wachter over a formal dinner to discuss the possibility of a coup in her favor. She says her henchman Ernst can assist with tracking Izek so the party can dispose of him and her influence and wealth should take care of the rest. If they are successful in assisting her she will pay out more than the full worth of Elizana's ring. <br />
          Saf, German, and Kasimir use a found Blinsky doll to track down Bluto, the town drunk, who might have kidnapped Arabelle, the missing Vistana girl.<br />
          Saf and Kasimir use a boat to slowly row within 100 feet of the mysterious boat to use her owl familiar<br />
          The familiar sees Bluto drunkenly drop a child shaped burlap sack into the river as he continues fishing<br />
          Saf jumps in and rescues the child, leaving Bluto behind.<br />
          German, Saf, and Kasimir return the child to Luvash and they are rewarded with 15 silver bars before engaging in a possible menage-a-troi <br /><br />

          <b>29th Day of Hammer</b><br />
          Rictavio meets the party at the Blue Water Inn revealing that he has discovered that the proprietors of the Blue Water Inn (Martikov family) are members of the Keepers of the Feather (raven-themed spy organization out to destroy Strahd and restore the light in Barovia)<br />
          Rictavio entails that the Keepers of the Feather are willing to exchange the location of the House of the Saint (from Madame Eva's card reading) if they can restore the Winery to the west<br />
          The party goes to the market to silver their weapons (it will take one week)
          With the interest of taking Franz, the priest in training, to the Village of Barovia they meet at the church to find that the sacred bones of St. Andral are missing. Franz will not go anywhere until they are returned<br />
          Following a possible lead that Millovaj, an older orphan, might have taken  the bones the party investigates the orphanage<br />
          Millovaj is catatonic and new kid Felix seems to be carving demonic glyphs over kids beds. A shadow demon appears when Felix is confronted and makes a deal with German in abyssal. The demon drops the kid and hides in a locket given to German. 

          <a href="#">Return to top</a><br /><br />
      
        </p>
      
      </div>

    <Footer />

  </div>
  )
}

export default J10