import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import charactersData from './CharactersData'


function CharsByCat() {

  const {catNumber} = useParams()
  const [charsObj, setCharsObj] = useState({})

  const [cardOpen, setCardOpen] = useState(false)
  const [selected, setSelected] = useState(0)

  let nextCat = +catNumber+1
  let prevCat = +catNumber-1

  useEffect(() => {
    setCharsObj(charactersData[catNumber-1])
    window.scrollTo({top: 0, left: 0})
  }, [])

  return (
    <div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Character Guide</span>
          <span className="heading-secondary--sub">
            {charsObj.name}</span>
          </h2>
      </div>

      <div className="flexbox flexbox--npc">

        { charsObj.characters && 
        <>
        {charsObj.characters.map((catObj) => {
          return (
            <div className="flexbox__item--npc" key={catObj.id} value={catObj.id}>
              <div className="item-card">
                <div className="item-card__heading">
                  {catObj.name}
                </div>
                <div className={`npc-card__img npc-card__img--${charsObj.number}-${catObj.id}`}>&nbsp;</div>
                <div className="item-card__possess">
                  Status: &nbsp;
                  <span className="item-card__possess--name">{catObj.status}</span>
                </div>
              </div>
            </div>
          )
        })}
        </>}

      </div>

      <br />

    </div>
  )
}

export default CharsByCat