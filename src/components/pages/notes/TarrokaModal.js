import { useState } from 'react'

function TarrokaModal({cardObj, setCardOpen}) {

  console.log(cardObj)

  return (
    <div className="tarroka-new__table--popup" onClick={()=>{setCardOpen(false)}}> 

      <div className="tarroka-card">
        <div className="tarroka-card__side tarroka-card__side--front">
          <img src={`${cardObj.cardFront}`} />
        </div> {/* side--front end */}
        <div className="tarroka-card__side tarroka-card__side--back">
          <img src="https://i.imgur.com/i5jBvTr.png" />
        </div> {/* side--back end */}
      </div> {/* card end */}

    </div>
  )
}

export default TarrokaModal