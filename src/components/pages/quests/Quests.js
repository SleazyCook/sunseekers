import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import questsData from './QuestsData'
import renderWithLinks from '../notes/HyperlinkFunction'
import logData from '../notes/LogData'

function Quests() {
  const [selectedQuest, setSelectedQuest] = useState({})
  const [cardOpen, setCardOpen] = useState(false)
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

          {/* Quest List */}
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

            {/* Selected Quest Data */}
            <div className="selected">

              {/* Placeholder Image */}
              {!selectedQuest.name &&  <div className="centered"><img className="selected__placeholder" src="https://i.imgur.com/RkKW0pG.png"/></div>}

              {/* Quest Name */}
              <div className="selected__header heading-tertiary">
                {selectedQuest.name}
              </div>

              {/* Link to Session */}
              {selectedQuest.sessionStarted && <Link to={`/notes/adventure-log/${selectedQuest.sessionStarted}`} className="selected__started">
                Quest offered in Session {selectedQuest.sessionStarted}.&nbsp;
              </Link>}

              {/* linked quest name */}

              {/* Starting Hook */}
              <div className="selected__starting-hook">{selectedQuest.initiated}</div>

              {/* Developments */}
              {selectedQuest.developments && selectedQuest.developments.map((sectionsObj) => {
                return (
                  <div key={sectionsObj.id} value={sectionsObj.id} className="page-section">
                    {/* <span className="page-section__title heading-tertiary">{sectionsObj.name}</span> */}
                    <p className="hyperlink" style={{whiteSpace:'break-spaces'}}>
                      {sectionsObj.description && renderWithLinks(sectionsObj.description, sectionsObj.localLinks, setCardOpen)}
                    </p>
                  </div>
                )
              })}

              {/* isComplete? */}
              {selectedQuest.completed && <div className="selected__completed"> &rarr; Quest Completed &larr;</div>}

              {/* Rewards */}
              {selectedQuest.rewards && <div className="selected__rewards">Rewards go here</div>}

            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Quests