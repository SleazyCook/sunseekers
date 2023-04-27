import React, { useRef } from 'react'
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
      
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Journals</span>
          <span className="heading-secondary--sub">
            Adventure Log</span>
          </h2>
      </div>

      <div ref={slider} scrollLeft={100} className="adventure__main">

        <div className="adventure__nav-icon adventure__nav-icon--left">
          <FaChevronCircleLeft className="adventure__icon" onClick={slideLeft}/>
        </div>
        <div className="adventure__nav-icon adventure__nav-icon--right">
            <FaChevronCircleRight className="adventure__icon" onClick={slideRight}/>
        </div>

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

        <Link to="/notes/adventure-log/03" className="adventure__link">
          <div className="adventure__card adventure__card--03">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Tarroka Reading</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">03 &nbsp;</span>
              6/13/2022</span>
            </div>
          </div> 
        </Link> {/* 03 End */}

        <Link to="/notes/adventure-log/04" className="adventure__link">
          <div className="adventure__card adventure__card--04">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Dream Pastries</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">04 &nbsp;</span>
              6/20/2022</span>
            </div>
          </div> 
        </Link> {/* 04 End */}

        <Link to="/notes/adventure-log/05" className="adventure__link">
          <div className="adventure__card adventure__card--05">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Welcome to Vallaki</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">05 &nbsp;</span>
              6/20/2022</span>
            </div>
          </div> 
        </Link> {/* 05 End */}

        <Link to="/notes/adventure-log/06" className="adventure__link">
          <div className="adventure__card adventure__card--06">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Festival of the Blz Sun</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">06 &nbsp;</span>
              7/03/2022</span>
            </div>
          </div> 
        </Link> {/* 06 End */}

        <Link to="/notes/adventure-log/07" className="adventure__link">
          <div className="adventure__card adventure__card--07">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Showdown at the Mill</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">07 &nbsp;</span>
              7/10/2022</span>
            </div>
          </div> 
        </Link> {/* 07 End */}

        <Link to="/notes/adventure-log/08" className="adventure__link">
          <div className="adventure__card adventure__card--08">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Rats in Ravenloft</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">08 &nbsp;</span>
              7/10/2022</span>
            </div>
          </div> 
        </Link> {/* 08 End */}

        <Link to="/notes/adventure-log/09" className="adventure__link">
          <div className="adventure__card adventure__card--09">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Return to Vallaki</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">09 &nbsp;</span>
              8/07/2022</span>
            </div>
          </div> 
        </Link> {/* 09 End */}

        <Link to="/notes/adventure-log/10" className="adventure__link">
          <div className="adventure__card adventure__card--10">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Vallaki Vistani Camp</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">10 &nbsp;</span>
              8/21/2022</span>
            </div>
          </div> 
        </Link> {/* 10 End */}

        <Link to="/notes/adventure-log/11" className="adventure__link">
          <div className="adventure__card adventure__card--11">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Bones of St. Andral</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">11 &nbsp;</span>
              8/28/2022</span>
            </div>
          </div> 
        </Link> {/* 11 End */}

        <Link to="/notes/adventure-log/12" className="adventure__link">
          <div className="adventure__card adventure__card--12">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Feast of St. Andral</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">12 &nbsp;</span>
              9/04/2022</span>
            </div>
          </div> 
        </Link> {/* 12 End */}

        <Link to="/notes/adventure-log/13" className="adventure__link">
          <div className="adventure__card adventure__card--13">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                After the Feast</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">13 &nbsp;</span>
              9/11/2022</span>
            </div>
          </div> 
        </Link> {/* 13 End */}

        <Link to="/notes/adventure-log/14" className="adventure__link">
          <div className="adventure__card adventure__card--14">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Umnos in Ravenloft</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">14 &nbsp;</span>
              9/26/2022</span>
            </div>
          </div> 
        </Link> {/* 14 End */}

        <Link to="/notes/adventure-log/15" className="adventure__link">
          <div className="adventure__card adventure__card--15">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Order of the Dragon</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">15 &nbsp;</span>
              9/26/2022</span>
            </div>
          </div> 
        </Link> {/* 15 End */}

        <Link to="/notes/adventure-log/16" className="adventure__link">
          <div className="adventure__card adventure__card--16">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Heart of Sorrow</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">16 &nbsp;</span>
              10/25/2022</span>
            </div>
          </div> 
        </Link> {/* 16 End */}

        <Link to="/notes/adventure-log/17" className="adventure__link">
          <div className="adventure__card adventure__card--17">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Ez and the Tome</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">17 &nbsp;</span>
              11/07/2022</span>
            </div>
          </div> 
        </Link> {/* 17 End */}

        <Link to="/notes/adventure-log/18" className="adventure__link">
          <div className="adventure__card adventure__card--18">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                Cold Deep South</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">18 &nbsp;</span>
              11/14/2022</span>
            </div>
          </div> 
        </Link> {/* 18 End */}

        <Link to="/notes/adventure-log/19" className="adventure__link">
          <div className="adventure__card adventure__card--19">
            <div className="adventure__card-text-box">
              <span className="adventure__card-text-box--main">
                The Brazier Room</span>
              <span className="adventure__card-text-box--sub">
              <span className="adventure__card-text-box--sub-num">19 &nbsp;</span>
              3/25/2023</span>
            </div>
          </div> 
        </Link> {/* 19 End */}

      </div> {/* adventure Main End */}

      <Footer />
        
    </div>
  )
}

export default AdventureLog