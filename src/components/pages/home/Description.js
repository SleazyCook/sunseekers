import React from 'react'

function Description() {
  return (
    <div className="description description--main">

      {/* New Take on This: Divide component into three columns. Text in the middle, an image on each side. Raven on one side, ravenloft crest on the other perhaps? */}

      <div className="description__flex-container">

        <div className="description__text-box">
      
          <p className="description__text-actual">
            <div className="heading-tertiary description__headline ">The Plight for the Sunlight</div>
            <br />

            Curse of Strahd: Plight of the Sunseekers is a virtual tabletop based on a popular 5E Dungeons and Dragons campaign. Many adventurers have stumbled into the dread domain of Barovia only to meet their fate at the hands of the vampie lord Count Strahd Von Zarovich or some other twisted horror. Those who remain continue to seek out the sun and make it back home alive. 
            <br /><br />
            The adventures of the Sunseekers so far are detailed in journals and notes collected here as the official Player Guide.
          </p>
          <br />
        </div>

      </div> {/* End of Flex Container */}



    </div>
  )
}

export default Description