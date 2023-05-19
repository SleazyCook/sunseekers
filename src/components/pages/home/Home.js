
import Title from './Title';

import Header from '../../Header'
import Navigation from '../../Navigation'
import Description from './Description';
import DeathHouse from './DeathHouse';
import Recently from './Recently';
import Tarroka from './Tarroka';
import ContentLinks from './ContentLinks';
import Footer from '../../Footer';

import { FaAlignCenter } from 'react-icons/fa';

function Home() {

  return (
    <div className="home">
      
      <Header />



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