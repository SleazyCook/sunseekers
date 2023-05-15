import AdventureLog from '../notes/AdventureLog';
import Title from './Title';
import Description from './Description';
import Header from '../../Header'

function Home() {
  return (
    <div>

      <Header />

      <br />

      <Description />

      <div className="heading-tertiary">The Adventure So Far...</div>

      <AdventureLog />
    </div>
  )
}

export default Home