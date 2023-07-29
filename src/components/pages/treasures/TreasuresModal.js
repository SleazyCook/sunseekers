import React from 'react'

import treasuresData from "./TreasuresData"

function TreasuresModal({itemObj, setCardOpen, selected, setSelected}) {

  function handleCloseModal(event) {
    if (event.target.id === 'detailed-media-parent') {
      setCardOpen(false)
    }
  }

  return (
    <div className='modal-box modal-box--fixed' id='detailed-media-parent' onClick={handleCloseModal} >

      <div className="treasures__table--popup treasures-pop popup">

        <div className="heading-secondary treasures-pop__header">{treasuresData[selected].name}</div>


        <div className="treasures-pop__flexbox">

          <div className="treasures-pop__img-box">
            <img className="treasures-pop__img" src={treasuresData[selected].image} />
          </div>
          {/* Details */}
          <div className="treasures-pop__details-box">

            <span className="treasures-pop__text">In the Possession of &nbsp;
              <span className="item-card__possess--name">
                {treasuresData[selected].pLong ? treasuresData[selected].pLong : treasuresData[selected].possession}</span></span>
            {treasuresData[selected].found && <span className="treasures-pop__text">Found at &nbsp;
              <span className="item-card__possess--name">{treasuresData[selected].found}</span></span>}
            {treasuresData[selected].location && <span className="treasures-pop__text">Last Known Location &nbsp;
              <span className="item-card__possess--name">{treasuresData[selected].location}</span></span>}
            <span className="treasures-pop__text treasures-pop__text--description">{treasuresData[selected].description}</span>

            {/* Page Buttons */}
            <div className="popup__page-button--flexbox">

              {selected != treasuresData.length-1 ? <span onClick={(event)=> {
                event.stopPropagation()
                setSelected(selected+1)}}
                className="popup__page-button popup__page-button--previous">{treasuresData[selected+1].name}</span> : <span className="popup__page-button--placeholder">Placeholder</span>}

              {selected != 0 ? <span onClick={(event)=> {
                event.stopPropagation()
                setSelected(selected-1)}}
                className="popup__page-button popup__page-button--next">{treasuresData[selected-1].name}</span> : <span className="popup__page-button--placeholder">Placeholder</span>}
            </div>

          </div>

        </div> {/* Flexbox End */}
        
      </div> {/* Pop-Up End */}

    </div>
  )
}

export default TreasuresModal