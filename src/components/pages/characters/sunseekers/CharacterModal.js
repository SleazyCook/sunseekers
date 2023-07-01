import React from 'react'

import charactersData from '../CharactersData'

function CharacterModal({charsObj, selectedObj, setSelectedObj, setCardOpen, selected, setSelected}) {

  console.log(selected)

  return (
    <div className="modal-box modal-box--fixed" id="detailed-media-parent" onClick={()=> {setCardOpen(false)}}>

      <div className="treasures__table--popup treasures-pop popup">
        
        <div className="item-card__heading">{selectedObj.long ? selectedObj.long : selectedObj.name}</div>

        <div className="popup__page-button--flexbox">

          {selected != 0 ? <span onClick={(event) => {
            event.stopPropagation()
            setSelected(selected-1)
            setSelectedObj(charsObj.characters[selected])}}
            className="popup__page-button popup__page-button--previous">{charsObj.characters[selected-1].name}</span> : <span>No Prev</span>}

          {selected != charsObj.characters.length-1 ? <span onClick={(event) => {
            event.stopPropagation()
            setSelected(selected+1)
            
          }} className="popup__page-button popup__page-button--next">{charsObj.characters[selected+1].name}</span> : <span> No Next </span>}
        </div>
        
      </div>

    </div>
  )
}

export default CharacterModal