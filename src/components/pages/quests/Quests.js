import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import questsData from './QuestsData'

function Quests() {
  const [selectedQuest, setSelectedQuest] = useState({})
  let questsByRecent = [...questsData].reverse()

  useEffect(() => {
    window.scrollTo({top: 0, left: 0})
  }, [])

  return (
    <div className="quests">

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Quests Guide</span>
          </h2>
      </div>

      <div className="centered">

        <div className="quests-main centered">

          {/* <div className="quests-main__toolbar">
            Toolbar
          </div> */}

          {/* Flexbox Container */}
          <div className="quests-main__flexbox">
          
            {/* Flex- Left */}
            <div className="quests__list">
              {questsByRecent.map((questsObj) => {
                return (
                  <div key={questsObj.id} value={questsObj.id} className="quests__list-item" onClick={() => {
                    setSelectedQuest(questsData[questsObj.id-1])
                  }}>
                    {questsObj.name}
                  </div>
                )
              })}
            </div>

            {/* Flex- Right */}
            <div className="quests__selected">

              {!selectedQuest.name &&  <div className="centered"><img className="quests__selected--placeholder" src="https://i.imgur.com/RkKW0pG.png"/></div>}

              <div className="quests__selected--header heading-tertiary">
                {selectedQuest.name}
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Quests