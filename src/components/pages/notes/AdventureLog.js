import { useRef } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import { FaChevronCircleRight } from 'react-icons/fa'
import { FaChevronCircleLeft } from 'react-icons/fa'

import logData from './LogData'

function AdventureLog() {
  const slider = useRef(null);

  const slideLeft = (event) => {
    slider.current.scroll({ left: slider.current.scrollLeft -700, behavior: 'smooth'}) 
    console.log(slider)
  }

  const slideRight = (event) => {
    slider.current.scroll({ left: slider.current.scrollLeft + 700, behavior: 'smooth'}) 
    console.log(slider)
  }


  return (
    <div>

      <Header />
      <Navigation />

      <div className="heading-secondary adventure__head">Experience every chapter</div>

      <div className="adventure__slider-button-box">

        <div className="adventure__nav-icon adventure__nav-icon--left" onClick={slideLeft}>
            <FaChevronCircleLeft className="adventure__icon" />
        </div>

        <div ref={slider} scrollleft={100} className="adventure__main">

          {logData.map((entryObj) => {
            return (
              <Link to={`/notes/adventure-log/${entryObj.number}`} className="adventure__link">
              <div className={`adventure__card adventure__card--${entryObj.number}`} >
                <div className="adventure__card-text-box">
                  <span className="adventure__card-text-box--main">
                    {entryObj.title}</span>
                  <span className="adventure__card-text-box--sub">
                    <span className="adventure__card-text-box--sub-num">
                    {entryObj.number < 10 ? '0' + entryObj.number : entryObj.number}  &nbsp;</span>
                    {entryObj.numDate}</span>
                </div>
              </div> 
            </Link>
            )
          } )}

        </div> {/* adventure Main End */}

        <div className="adventure__nav-icon adventure__nav-icon--right" onClick={slideRight}>
            <FaChevronCircleRight className="adventure__icon" />
        </div>

      </div>

      {/* <Footer /> */}
        
    </div>
  )
}

export default AdventureLog