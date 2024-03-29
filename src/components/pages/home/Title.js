import React from 'react'
import { Link } from 'react-router-dom'

function Title() {
  return (
    <div className="title">

      <div className="title__textbox">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Curse of Strahd</span>
          <span className="heading-primary--sub">Plight of the Sunseekers</span>
        </h1>
        <br />
        <br />
        {/* <Link to="/notes/adventure-log" className="btn">
          Guide</Link>
          
        <a href="https://death-house.netlify.app" className="btn">
          Death House</a> */}
      </div>


    </div>
  )
}

export default Title