import { useState, useEffect } from 'react'
import TarrokaModal from './TarrokaModal'

import tarrokaData from './TarrokaData'
import TarrokaTranscript from './TarrokaTranscript'

function TarrokaReading() {
  const [cardOpen, setCardOpen] = useState(false);
  const [cardObj, setCardObj] = useState({});
  const [transOpen, setTransOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({top: 0, left: 0})
  }, [])

  return (
    <div>

      <div className="tarroka-new">
        
        <div className="tarroka-new__table">

        {!cardOpen && <div className="tarroka-new__header heading-secondary">Madame Eva's<br />Tarroka Reading</div>}
        {!cardOpen && <div className="tarroka-new__header tarroka-new__header--transcript heading-secondary" onClick={()=>setTransOpen(true)}>Transcript</div>}

          {cardOpen && <TarrokaModal cardObj={cardObj} setCardOpen={setCardOpen}/>}
          {transOpen && <TarrokaTranscript setTransOpen={setTransOpen} />}

          <div className="tarroka-new__table--center">

            {tarrokaData.map((tarrokaObj) => {
              return (
                <div onClick={()=>{
                  setCardOpen(true)
                  setCardObj(tarrokaData[tarrokaObj.number-1])
                }} key={tarrokaObj.number} value={tarrokaObj.number} className={`tarroka-new__card--small tarroka-new__card--small-${tarrokaObj.number}`}></div>
              )
            })}

          </div>

        </div>

      </div>

    </div>
  )
}

export default TarrokaReading