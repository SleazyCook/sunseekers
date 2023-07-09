import { Link } from 'react-router-dom'

import charactersData from './CharactersData'

function PageButtons({catNumber, prevCat, nextCat}) {
  return (
      <div className="log-entry__page-buttons">
        {catNumber === "1" ? <span className="log-entry__page-buttons--placeholder"></span> : <Link className="log-entry__page-buttons--last location__button" to={`/characters/${prevCat}`}>{charactersData[prevCat-1].name}</Link>}

        {/* <Link className="log-entry__page-buttons--mid" to="/locations">World Map</Link> */}

        {catNumber >= charactersData.length ? <span className="log-entry__page-buttons--placeholder"></span> : <Link className="log-entry__page-buttons--next location__button" to={`/characters/${nextCat}`}>{charactersData[nextCat-1].name}</Link>}
      </div>
  )
}

export default PageButtons