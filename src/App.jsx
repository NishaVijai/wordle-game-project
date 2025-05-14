// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Fragment } from 'react';
import viteLogo from '/vite.svg'
// import './App.css'
import { Header } from './components/headerComponent/Header.jsx'
import { Footer } from './components/footerComponent/Footer.jsx'
import { GameGridContainer } from './components/mainContainer/GameGridContainer.jsx';
import { KeyboardContainer } from './components/mainContainer/KeyboardContainer.jsx';

function App() {
  return (
    <Fragment>
      <Header />
      <section>
        <GameGridContainer />
        <KeyboardContainer />
      </section>
      <Footer />
    </Fragment>
  )
}

export default App
