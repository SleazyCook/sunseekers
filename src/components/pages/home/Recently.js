import { Link } from 'react-router-dom';

import logData from '../notes/LogData';

function Recently() {

  const MostRecent = logData[logData.length-1];
  const RecentA = logData[logData.length-2];
  const RecentB = logData[logData.length-3];
  const RecentC = logData[logData.length-4];
  
  return (
    <div className="recently">

      <h3 className="heading-tertiary recently__head">Catch up on the most recent adventures</h3>

      <div className="most-recent">
        <Link to={`/notes/adventure-log/${MostRecent.number}`}>
          <div className={`most-recent__single adventure__card--${MostRecent.number}`}>
            <div className="most-recent__text-box">
                <span className="most-recent__number">{MostRecent.number}</span>&nbsp;
                <span className="most-recent__title">{MostRecent.title}</span>
                <span className="most-recent__synopsis">{MostRecent.short}</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="less-recent">

        <Link to={`/notes/adventure-log/${RecentA.number}`}>
          <div className={`less-recent__single adventure__card--${RecentA.number}`}>
            <div className="less-recent__text-box">
              <span className="less-recent__number">{RecentA.number}</span>&nbsp;
              <span className="less-recent__title">{RecentA.title}</span>
            </div>
          </div>
        </Link>

        <Link to={`/notes/adventure-log/${RecentB.number}`}>
          <div className={`less-recent__single adventure__card--${RecentB.number}`}>
            <div className="less-recent__text-box">
              <span className="less-recent__number">{RecentB.number}</span>&nbsp;
              <span className="less-recent__title">{RecentB.title}</span>
            </div>
          </div>
        </Link>

        <Link to={`/notes/adventure-log/${RecentC.number}`}>
          <div className={`less-recent__single adventure__card--${RecentC.number}`}>
            <div className="less-recent__text-box">
              <span className="less-recent__number">{RecentC.number}</span>&nbsp;
              <span className="less-recent__title">{RecentC.title}</span>
            </div>
          </div>
        </Link>

        <Link to={`/notes/adventure-log/${RecentA.number}`}>
          <div className="less-recent__single less-recent__single--all">
            <div className="less-recent__text-box">
              <span className="less-recent__title">All Adventure Logs</span>
            </div>
          </div>
        </Link>

      </div>


    </div>
  )
}

export default Recently