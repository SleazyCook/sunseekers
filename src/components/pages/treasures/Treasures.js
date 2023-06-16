import { useState, useEffect } from 'react'
import TreasuresModal from './TreasuresModal'

import treasuresData from './TreasuresData'

function Treasures() {
  const [cardOpen, setCardOpen] = useState(false);
  const [itemObj, setItemObj] = useState({});
  // const [treasuresByNew, SetTreasuresByNew] = useState(treasuresData.reverse());
  const [selected, setSelected] = useState(0)
  
  console.log(selected, "!!!!!")
  // console.log(treasuresByNew)

  let treasuresByNew = [...treasuresData].reverse();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0})
    
  }, [])

  return (
    <div className="treasures">

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Treasures & Items</span>
          </h2>
      </div>

      {cardOpen && <TreasuresModal itemObj={itemObj} setCardOpen={setCardOpen} selected={selected} setSelected={setSelected} />}

      <div className="flexbox flexbox--npc">


        {treasuresByNew.map((treasuresObj) => {
          return (
            <div onClick={()=>{
              setCardOpen(true)
              setSelected(treasuresObj.id-1)
              setItemObj(treasuresData[treasuresObj.id-1])
            }} className="flexbox__item--npc" key={treasuresObj.id} value={treasuresObj.id}>
              <div className="item-card" >
                <div className="item-card__heading">
                  {treasuresObj.shortName ? treasuresObj.shortName : treasuresObj.name}
                </div>
                <div className={`item-card__img item-card__img--${treasuresObj.id}`}>&nbsp;</div>
                <div className="item-card__possess">
                  Possessed by: &nbsp;
                  <span className="item-card__possess--name">{treasuresObj.possession}</span>
                </div>

              </div>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Treasures