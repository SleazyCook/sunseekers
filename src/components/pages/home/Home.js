import { useEffect } from 'react';

import Title from './Title';

import HeaderHome from '../../HeaderHome'
import Navigation from '../../Navigation'
import Description from './Description';
import DeathHouse from './DeathHouse';
import Recently from './Recently';
import Tarroka from './Tarroka';
import ContentLinks from './ContentLinks';
import Footer from '../../Footer';

import { FaAlignCenter } from 'react-icons/fa';

function Home() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0})
  }, [])

  return (
    <div className="home">
      
      <HeaderHome />



      <Description />

      

      <Recently />

      <Footer />

      {/* <AdventureLog /> */}

      <Tarroka />

      <ContentLinks />

      <DeathHouse />


    </div>
  )
}

export default Home