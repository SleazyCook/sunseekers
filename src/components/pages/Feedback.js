import { useEffect } from 'react'

import Header from "../Header"
import Navigation from "../Navigation"

function Feedback() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0})
  }, [])

  return (
    <div>

      <div className="feedback">
        <div className="heading-secondary feedback--title">
          Post-Session Anonymous Feedback Form
        </div>

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe5O_6FQmpc-_OslXkTdrc8Eqevlt8xm9OBRH88RQ4bB37DPg/viewform?embedded=true" width="640" height="2416" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>




    </div>
  )
}

export default Feedback