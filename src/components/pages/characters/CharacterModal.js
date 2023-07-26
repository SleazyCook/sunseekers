import React, { useEffect } from 'react'

import charactersData from './CharactersData'

function CharacterModal({charsObj, selectedObj, setSelectedObj, setCardOpen, selected, setSelected}) { 

  useEffect(() => {
    // window.scrollTo({top: 0, left: 0})
  }, [selected])

  return (
    <div className="modal-box modal-box--fixed" id="detailed-media-parent" onClick={()=> {setCardOpen(false)}}>

      <div className="treasures__table--popup treasures-pop popup">
        
        <div className="item-card__heading">{selectedObj.long ? selectedObj.long : selectedObj.name}</div>

        <div className="flexbox">
          <div>1</div>
          <div>2</div>
        </div>

        <div className="popup__page-button--flexbox">
          {selected != 0 ? <span onClick={(event) => {
            event.stopPropagation()
            setSelected(selected-1)
            setSelectedObj(charsObj.characters[selected-1])
            }}
            className="popup__page-button popup__page-button--previous">{charsObj.characters[selected-1].name}</span> : <span>No Prev</span>}

          {selected != charsObj.characters.length-1 ? <span onClick={(event) => {
            event.stopPropagation()
            setSelected(selected+1)
            setSelectedObj(charsObj.characters[selected+1])
          }} className="popup__page-button popup__page-button--next">{charsObj.characters[selected+1].name}</span> : <span> No Next </span>}
        </div>
      </div>

    </div>
  )
}

export default CharacterModal