import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


import charactersData from './CharactersData'

function SingleCharacter() {
  const {characterNumber} = useParams()
  const [singleCharObject, setSingleCharObject] = useState({})
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    // setSingleCharObject(charactersData[catNumber-1].characters[characterNumber])
    window.scrollTo({top: 0, left: 0})
  }, [])

  console.log(singleCharObject)
  console.log(characterNumber)

  return (
    <div>
      Single Character

      {/* model location page for single character page.  */}
    </div>
  )
}

export default SingleCharacter