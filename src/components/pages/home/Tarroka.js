import { Link } from 'react-router-dom'

function Tarroka() {
  return (
    <div className="description description--tarroka">

      {/* New Take on This: Divide component into three columns. Text in the middle, an image on each side. Raven on one side, ravenloft crest on the other perhaps? */}

      <div className="description__flex-container">

        <Link to="/notes/tarroka-reading" className="description__text-box">
      
          <p className="description__text-actual description__text-actual--tarroka">
            <div className="heading-tertiary description__headline ">Madame Eva's Tarroka Reading</div>
            <br />

            The mysterious Vistana fortune teller Madame Eva harnesses the power of the Tarroka deck from her tent in the Vistani Tser Pool Encampment. Upon arriving, the Sunseekers received a reading that may contain the secrets to defeating Strahd and escaping Barovia. 
            <br /><br />
            Revisit this crucial event and unravel the mysterious of the Tarroka.
          </p>
          <br />
        </Link>

      </div> {/* End of Flex Container */}



    </div>
  )
}

export default Tarroka