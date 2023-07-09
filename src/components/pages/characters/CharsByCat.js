import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import charactersData from './CharactersData'
import CharacterModal from './CharacterModal'
import PageButtons from './PageButtons'


function CharsByCat() {

  const {catNumber} = useParams()
  const [charsObj, setCharsObj] = useState({})
  const [cardOpen, setCardOpen] = useState(false)
  const [selected, setSelected] = useState(0)
  const [selectedObj, setSelectedObj] = useState({})

  let nextCat = +catNumber+1
  let prevCat = +catNumber-1

  useEffect(() => {
    setCharsObj(charactersData[catNumber-1])
    window.scrollTo({top: 0, left: 0})
  }, [catNumber])

  return (
    <div>

      <div className={`characters-header characters-header--${charsObj.number}`}>
        <div className="characters-header__textbox">
          <span className="characters-header__textbox--main">
            Character Guide</span>
          <span className="characters-header__textbox--sub">
            {charsObj.name}</span>
        </div>
      </div>

      <div className="characters-header__description">{charsObj.description}</div>

      <PageButtons catNumber={catNumber} prevCat={prevCat} nextCat={nextCat} className="u-margin-bottom-medium"/>

      <br />

      {cardOpen && <CharacterModal charsObj={charsObj} selectedObj={selectedObj} setSelectedObj={setSelectedObj} setCardOpen={setCardOpen} selected={selected} setSelected={setSelected} />}

      <div className="flexbox flexbox--npc">

      {/* {charsObj.name == "Creatures" && <>Hello</>} */}

        { charsObj.characters && 
        <>
        {charsObj.characters.map((catObj) => {
          return (
            <div onClick={()=> {
              setCardOpen(true)
              setSelected(catObj.id-1)
              setSelectedObj(charsObj.characters[catObj.id-1])
            }} className="flexbox__item--npc" key={catObj.id} value={catObj.id}>
              <div className="item-card">
                <div className="item-card__heading">
                  {catObj.name}
                </div>
                <div className={`npc-card__img npc-card__img--${charsObj.number}-${catObj.id}`}>&nbsp;</div>
                {catObj.status && <div className="item-card__possess">
                  Status: &nbsp;
                  <span className="item-card__possess--name">{catObj.status}</span>
                </div> }
              </div>
            </div>
          )
        })}
        </>}

      </div>

      <br />

      <PageButtons catNumber={catNumber} prevCat={prevCat} nextCat={nextCat} className="u-margin-medium"/>


    </div>
  )
}

export default CharsByCat