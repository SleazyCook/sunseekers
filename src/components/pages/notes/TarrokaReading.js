import {useState, useEffect} from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'
import TarrokaModal from './TarrokaModal'

import tarrokaData from './TarrokaData'

function TarrokaReading() {
  const [cardOpen, setCardOpen] = useState(false);
  const [cardObj, setCardObj] = useState({});

  // function openCardOpen(event) {
    // setCardOpen(true)
    // setCardObj(tarrokaData[event.target.key])
    // console.log(event.target.value)
  // }

  useEffect(() => {
    window.scrollTo({top: 0, left: 0})
  }, [])

  return (
    <div>

      <Header />
      <Navigation />

      <div className="tarroka-new">
        <div className="tarroka-new__table">

          {cardOpen && <TarrokaModal cardObj={cardObj} setCardOpen={setCardOpen}/>}

          <div className="tarroka-new__table--center">

            {tarrokaData.map((tarrokaObj) => {
              return (
                <div onClick={()=>{
                  setCardOpen(true)
                  setCardObj(tarrokaData[tarrokaObj.number-1])
                  console.log(event.target.value)
                }} key={tarrokaObj.number} value={tarrokaObj.number} className={`tarroka-new__card--small tarroka-new__card--small-${tarrokaObj.number}`}></div>
              )
            })
            }

          </div>

        </div>

      </div>

    </div>
  )
}

export default TarrokaReading