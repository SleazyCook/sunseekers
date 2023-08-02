import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import charactersData from './CharactersData'
import renderWithLinks from '../notes/HyperlinkFunction'

function CharacterModal({charsObj, selectedObj, setSelectedObj, setCardOpen, selected, setSelected}) { 

  function handleCloseModal(event) {
    if (event.target.id === 'detailed-media-parent') {
      setCardOpen(false)
    }
  }

  useEffect(() => {
    // window.scrollTo({top: 0, left: 0})
  }, [selected])

  return (
    <div className="modal-box modal-box--fixed" id="detailed-media-parent" onClick={handleCloseModal}>

      <div className="treasures__table--popup treasures-pop popup">

        <div className="item-card__heading">{selectedObj.long ? selectedObj.long : selectedObj.name}</div>

        <div className="character-modal__flex">
          <div className="character-modal__image-box"><img className="character-modal__image" src={selectedObj.img} /></div>

          {/* Details Box Start */}
          <div className="character-modal__flex--right">
            <div className="character-modal__description">{selectedObj.description}</div>
              <div className="details-box character-modal__details-box">

              {/* Player Character Top */}
              {selectedObj.class && <>
                <div className="details-box__section">
                  Level {selectedObj.level} {selectedObj.class}
                  <br />
                  {selectedObj.subclass}
                </div>
              </> }

              {/* NPC Top */}
              {selectedObj.title && <>
                <div className="details-box__section">
                  {selectedObj.title}
                </div>
              </>}

              {/* Status */}
              <div className="details-box__section">
                <div className="details-box__section--left"><b>Status</b></div>
                <div className="details-box__section--right">{selectedObj.status}</div>
              </div>

              {/* Race */}
              { selectedObj.race && <div className="details-box__section">
                <div className="details-box__section--left"><b>Race</b></div>
                <div className="details-box__section--right">{selectedObj.race}</div>
              </div>}

              {/* First Appearance */}
              <div className="details-box__section">
                <div className="details-box__section--left"><b>First Appearance</b></div>
                <Link to={`/notes/adventure-log/${selectedObj.firstAppearance}`} className="details-box__section--right hyperlink-a">Session {selectedObj.firstAppearance}</Link>
              </div>

              {/* Special Items */}
              {selectedObj.items && <div className="details-box__section">
                <div className="details-box__section--left"><b>Special Items</b></div>
                <div className="details-box__section--right">
                  {selectedObj.items.map((itemsObj) => {
                  return (
                    <span key={itemsObj.id} value={itemsObj.id} className="hyperlink" style={{whiteSpace:'break-spaces'}}>
                      {itemsObj.name && renderWithLinks(itemsObj.name, itemsObj.localLinks)},&nbsp;
                    </span>
                    )
                  })}
                </div>
              </div> }

            </div>
          </div>
          {/* Details Box End */}
        </div>

        {selectedObj.sections && selectedObj.sections.map((sectionsObj) => {
          return (
            <div key={sectionsObj.id} value={sectionsObj.id} className="page-section">
              <span className="page-section__title heading-tertiary">{sectionsObj.name}</span>
              <p className="hyperlink" style={{whiteSpace:'break-spaces'}}>
                {sectionsObj.description && renderWithLinks(sectionsObj.description, sectionsObj.localLinks)}
              </p>
            </div>
          )
        })}

        <div className="popup__page-button--flexbox">
          {selected != 0 ? <span onClick={(event) => {
            event.stopPropagation()
            setSelected(selected-1)
            setSelectedObj(charsObj.characters[selected-1])
            }}
            className="popup__page-button popup__page-button--previous">{charsObj.characters[selected-1].name}</span> : <span className="hidden">No Prev</span>}

          {selected != charsObj.characters.length-1 ? <span onClick={(event) => {
            event.stopPropagation()
            setSelected(selected+1)
            setSelectedObj(charsObj.characters[selected+1])
          }} className="popup__page-button popup__page-button--next">{charsObj.characters[selected+1].name}</span> : <span className="hidden"> No Next </span>}
        </div>

        <br />

      </div>

    </div>
  )
}

export default CharacterModal