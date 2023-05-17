import AdventureLog from '../notes/AdventureLog';
import Title from './Title';
import Description from './Description';
import Header from '../../Header'
import Navigation from '../../Navigation'
import { FaAlignCenter } from 'react-icons/fa';

function Home() {

  const myStle = {
    color: "red",
    textalign: "center"
  }
  return (
    <div>

      <Header />
      <Navigation />

      <div style={{color: "red", textalign: "center"}}>
        <br />
        <br />
        Attention!
        <br />
        <br />
        Hello! This website is currently undergoing some work. I'm hoping to have it back up and running with more features and a new design by the end of May 2023. Feel free to poke around in the meantime.
        <br />
        <br />
        -Drewford
      </div>

      <br />

      <Description />

      <div className="heading-tertiary">The Adventure So Far...</div>

      <AdventureLog />
    </div>
  )
}

export default Home