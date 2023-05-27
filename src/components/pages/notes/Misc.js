import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import { GoPrimitiveDot } from 'react-icons/go'
import { BsDashLg } from 'react-icons/bs'

function Misc() {
  return (
    <div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Journals</span>
          <span className="heading-secondary--sub">
            Miscellaneous</span>
          </h2>
      </div>

      <div className="u-thin-border-top u-padding-medium">
        <h3 className="heading-tertiary">Morse Code Translator</h3>
        <div className="flexbox">
          <ul className="flexbox__item list">
            <li>A <GoPrimitiveDot /><BsDashLg /></li>
            <li>B <BsDashLg /> <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot /></li>
            <li>C <BsDashLg /> <GoPrimitiveDot /> <BsDashLg /> <GoPrimitiveDot /></li>
            <li>D <BsDashLg /> <GoPrimitiveDot /> <GoPrimitiveDot /></li>
            <li>E <GoPrimitiveDot /></li>
            <li>F <GoPrimitiveDot /> <GoPrimitiveDot /> <BsDashLg /> <GoPrimitiveDot /></li>
            <li>G <BsDashLg /> <BsDashLg /> <GoPrimitiveDot /></li>
            <li>H <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot /></li>
            <li>I <GoPrimitiveDot /> <GoPrimitiveDot /></li>
            <li>J <GoPrimitiveDot /> <BsDashLg /> <BsDashLg /> <BsDashLg /></li>
            <li>K <BsDashLg /> <GoPrimitiveDot /> <BsDashLg /></li>
            <li>L <GoPrimitiveDot /> <BsDashLg /> <GoPrimitiveDot /> <GoPrimitiveDot /></li>
            <li>M <BsDashLg /> <BsDashLg /></li>
            <li>N <BsDashLg /> <GoPrimitiveDot /></li>
            <li>O <BsDashLg /> <BsDashLg /> <BsDashLg /></li>
            <li>P <GoPrimitiveDot /> <BsDashLg /> <BsDashLg /> <GoPrimitiveDot /></li>
            <li>Q <BsDashLg /> <BsDashLg /> <GoPrimitiveDot /> <BsDashLg /></li>
            <li>R <GoPrimitiveDot /> <BsDashLg /> <GoPrimitiveDot /></li>
            <li>S <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot /></li>
            <li>T <BsDashLg /> </li>
            <li>U <GoPrimitiveDot /> <GoPrimitiveDot /> <BsDashLg /></li>
            <li>V <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot /> <BsDashLg /></li>
            <li>W <GoPrimitiveDot /> <BsDashLg /> <BsDashLg /></li>
            <li>X <BsDashLg /> <GoPrimitiveDot /> <GoPrimitiveDot /> <BsDashLg /></li>
            <li>Y <BsDashLg /> <GoPrimitiveDot /> <GoPrimitiveDot /> <BsDashLg /></li>
            <li>Z <BsDashLg /> <BsDashLg /> <GoPrimitiveDot /> <GoPrimitiveDot /></li>
          </ul>

          <ul className="flexbox__item typewriter-script list">
            <li>1 <GoPrimitiveDot /> <BsDashLg /> <BsDashLg /> <BsDashLg /> <BsDashLg /></li>
            <li>2 <GoPrimitiveDot /> <GoPrimitiveDot /> <BsDashLg /> <BsDashLg /> <BsDashLg /></li>
            <li>3 <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot /> <BsDashLg /> <BsDashLg /></li>
            <li>4 <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot /> <BsDashLg /></li>
            <li>5 <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot /></li>
            <li>6 <BsDashLg /> <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot /></li>
            <li>7 <BsDashLg /> <BsDashLg /> <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot /></li>
            <li>8 <BsDashLg /> <BsDashLg /> <BsDashLg /> <GoPrimitiveDot /> <GoPrimitiveDot /></li>
            <li>9 <BsDashLg /> <BsDashLg /> <BsDashLg /> <BsDashLg /> <GoPrimitiveDot /></li>
            <li>0 <BsDashLg /> <BsDashLg /> <BsDashLg /> <BsDashLg /> <BsDashLg /></li>
          </ul>
        </div> {/* Flexbox End */}
      </div>

      {/* safzira letter Start */}
      <div className="u-thin-border-top u-padding-medium"> 

        <h3 className="heading-tertiary">Note to a friend</h3>

        <p className="u-padding-medium safzira-script">
          Elizana, <br /><br />
          I will return will I have found waht I am looking for. Freebird can assist you with anything you may need until I return.<br /><br />
          Safzira
        </p>

      </div>
      {/* safzira letter End */}

      {/* brazier room hourglass inscription Start */}
      <div className="u-thin-border-top u-padding-medium"> 

        <h3 className="heading-tertiary">Hourglass Inscription, Brazier Room at Castle Ravenloft</h3>

        <p className="u-padding-medium u-center-text typewriter-script">
          Cast a stone into the fire<br />
          Violet leads to the mountain spire<br />
          Orange to the castle's peak<br />
          Red if lore is what you seek<br />
          Green to where the coffins hide<br />
          Indigo to the master's bride<br />
          Blue to ancient magic's womb<br />
          Yellow to the master's tomb<br />
        </p>

        </div>
        {/* safzira letter End */}

    </div>
  )
}

export default Misc