
import Title from './Title';

import Header from '../../Header'
import Navigation from '../../Navigation'
import Description from './Description';
import DeathHouse from './DeathHouse';
import Recently from './Recently';
import Tarroka from './Tarroka';
import AdventureLog from '../notes/AdventureLog';
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

      <div className="home__placeholder home__placeholder--2">Links to interesting things like journals, important quests, shops, etc</div >

      <DeathHouse />


    </div>
  )
}

export default Home