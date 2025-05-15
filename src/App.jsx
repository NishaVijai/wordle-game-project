import { Fragment } from 'react';
import viteLogo from '/vite.svg'
import { Header } from './components/headerComponent/Header.jsx';
import { Footer } from './components/footerComponent/Footer.jsx';
import { GameGridContainer } from './components/mainContainer/GameGridContainer.jsx';
import { KeyboardContainer } from './components/mainContainer/KeyboardContainer.jsx';
import { HowToPlay } from './components/rules/HowToPlay.jsx';

function App() {
  return (
    <Fragment>
      <Header />
      <>
        <HowToPlay />
      </>

      <section className="game-container">
        <GameGridContainer />
        <KeyboardContainer />
      </section>
      <Footer />
    </Fragment>
  )
}

export default App
