import { Link } from 'react-router-dom'

function TarrokaModal({cardObj, setCardOpen}) {

  console.log(cardObj)

  return (
    <div className="fuckity" id="detailed-media-parent" onClick={()=>{setCardOpen(false)}} >

      <div className="tarroka-new__table--popup tarroka-pop" > 

        <div className="heading-secondary tarroka-pop__header">{cardObj.card}: {cardObj.name}</div>

        <div className="tarroka-pop__flexbox">

        <div className="tarroka-card">
          <div className="tarroka-card__side tarroka-card__side--front">
            <img src={`${cardObj.cardFront}`} />
          </div> {/* side--front end */}
          <div className="tarroka-card__side tarroka-card__side--back">
            <img src="https://i.imgur.com/i5jBvTr.png" />
          </div> {/* side--back end */}
        </div> {/* card end */}

        <div className="tarroka-pop__details-box">
          <p>
            <span><b>Reading:</b> {cardObj.reading}</span>
            <span><b>Madame Eva's advice:</b> {cardObj.tip}</span>
            <span><b>Sunseekers update:</b> {cardObj.update}</span>
            {cardObj.found && <span><b>Reward:</b> <Link to={cardObj.imgLink}>{cardObj.reward}</Link> </span>}
          </p>

          
        { cardObj.found && <Link to={cardObj.imgLink}className="tarroka-pop__reward-img">
            <img className={`tarroka-pop__reward-img-${cardObj.number}`} src={`${cardObj.img}`} alt={`${cardObj.imgAlt}`} /> </Link>}
              
          
            
        </div>

        </div>  {/* flexbox end */}

        

      </div>
    {/* end Fuckity */}
    </div> 
  )
}

export default TarrokaModal