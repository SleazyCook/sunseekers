import React from 'react'

function TreasuresModal(itemObj, setCardOpen) {
  return (
    <div className='modal-box' id='detailed-media-parent' onClick={()=>{setCardOpen(false)}} >

      <div className="treasures-pop treasures__table--popup">

        <div className="heading-secondary treasures-pop__header">{itemObj.name}</div>
      </div>

    </div>
  )
}

export default TreasuresModal