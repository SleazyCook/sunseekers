import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">

      <div className="header__textbox">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Curse of Strahd</span>
          <span className="heading-primary--sub">Plight of the Sunseekers</span>
        </h1>
        <br />
        <br />
        <Link to="/characters" className="btn">
          Explore</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://death-house.netlify.app" className="btn">
          Play</a>
      </div>


    </div>
  )
}

export default Home