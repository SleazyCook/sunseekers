import { Link } from 'react-router-dom';

function DeathHouse() {
  return (
    <a href="https://death-house.netlify.app" target="_blank" className="death-house">
      <div className="death-house__textbox">
        <span className="death-house__title heading-tertiary">Play Curse of Strahd: <br />Durst Manor</span>
        <br />
        <br />
        <span className="death-house__subtitle">A recreation of the first chapter of Plight of the Sunseekers.  
        <br /><br />
        Will you survive this choose-your-own-adventure game?</span>
      </div>
    </a>
  )
}

export default DeathHouse