import AdventureLog from '../notes/AdventureLog';
import Title from './Title';
import Description from './Description';
import Header from '../../Header'
import Navigation from '../../Navigation'

function Home() {
  return (
    <div>

      <Header />
      <Navigation />

      <br />

      <Description />

      <div className="heading-tertiary">The Adventure So Far...</div>

      <AdventureLog />
    </div>
  )
}

export default Home