import { useEffect } from 'react';

import Description from './Description';
import DeathHouse from './DeathHouse';
import Recently from './Recently';
import Tarroka from './Tarroka';
import ContentLinks from './ContentLinks';

import { FaAlignCenter } from 'react-icons/fa';

function Home() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0})
  }, [])

  return (
    <div className="home">

      <Description />

      <Recently />

      <Tarroka />

      <ContentLinks />

      <DeathHouse />


    </div>
  )
}

export default Home