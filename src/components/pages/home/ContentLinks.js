import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ContentLinks() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0})
  }, [])

  let contentData = [
    {
      number: 1,
      title: "Quests",
      link: "quests",
      img: "https://i.imgur.com/G2pd6iZ.jpg"
    },
    {
      number: 2,
      title: "Locations",
      link: "locations",
      img: "https://i.imgur.com/OVBsusR.png"
    },
    {
      number: 3,
      title: "Characters",
      link: "characters",
      img: "https://i.imgur.com/YoAb0kL.png"
    },
    {
      number: 4,
      title: "Notes",
      link: "notes",
      img: "https://i.imgur.com/r17tnaC.png"
    },
    {
      number: 5,
      title: "Vallaki Market",
      link: "market",
      img: "https://i.imgur.com/CiucFK9.jpg"
    }
  ]

  return (
    <div className="content-links">

      <div className="content-links__main">

        {contentData.map((contentObj) => {
          return (
            <Link to={`/${contentObj.link}`} className={`content-links__card content-links__card--${contentObj.number}`}>
              <span className="content-links__card--name">{contentObj.title}</span>
              <div className={`content-links__card--img content-links__card--img-${contentObj.number}`}>&nbsp;</div>
            </Link>
          )
        })}

      </div>


    </div>
  )
}

export default ContentLinks