import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

function VallakiLaws() {
  return (
    <div>

      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Journals</span>
          <span className="heading-secondary--sub">
            Vallaki Laws</span>
          </h2>
      </div>

      <h3 className="heading-tertiary">"By order of the Burgomaster of Vallaki, Baron Vargas Vallakovich, all persons within the walls of Vallaki must obey the following laws:"</h3>

      <h3 className="heading-tertiary u-underline">Crimes of Malicious Unhappiness</h3>

      <p className="vallaki-laws">
        None shall speak Strahd’s name aloud or carry written documents bearing his name. Vallakovich believes that to speak his name is to summon his attention or presence. When they must, Vallakians refer to Strahd simply as “the Devil.”<br />
        None may speak ill of the Baron or his festivals, nor hold any documents that present either in an ill light. The Baron believes that happiness is the key to the town’s safety, and severely punishes any resident that threatens to harm “morale.”<br />
        All visitors and residents shall assist with the festivals. This includes both preparations and clean-up. These duties rotate through the general public on a random basis, in a manner similar to jury duty.<br />
        All visitors and residents shall attend the festival. Guards routinely go door-to-door in the time before and during a festival, and patrol the streets to ensure that no attendee has been left out.<br />
        *Any Vallakian charged with breaking these laws is charged with “malicious unhappiness,” and sentenced to 2d6 days of public humiliation in the stocks. The length of the criminal’s stay in the stocks depends on the severity of the crime and the intent of the offender.
      </p>


      <h3 className="heading-tertiary u-underline">Greater Crimes</h3>

      <p className="vallaki-laws">
        Theft and “public brawling” are punished with 4d6 days of public humiliation in the stocks, with the length of the criminal’s stay depending on the severity and intent. Theft from the Baron’s estate, repeated minor offenses, or major injury to another civilian are punishable by exile from Vallaki to the wilderness of the Svalich Woods.<br />
        Murder is rare to nonexistent in Vallaki. However, on the rare occasion that a Vallakian kills another - intentionally or not - the perpetrator is sentenced to a public hanging from the gallows in the Town Square. While awaiting their sentence, the perpetrator is imprisoned in the stocks alongside other criminals, and is executed at the next sunset following their arrest. 
      </p>




      <Footer />

    </div>
  )
}

export default VallakiLaws