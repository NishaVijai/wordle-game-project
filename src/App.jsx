import { Fragment, useEffect, useState, useRef } from 'react';
import viteLogo from '/vite.svg'
import { Header } from './components/headerComponent/Header.jsx';
import { Footer } from './components/footerComponent/Footer.jsx';
import { GameGridContainer } from './components/mainContainer/GameGridContainer.jsx';
import { HowToPlay } from './components/rules/HowToPlay.jsx';
import { ResultContainer } from './components/result/ResultContainer.jsx';

function App() {
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [correctWord, setCorrectWord] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const resultRef = useRef(null);

  const howToPlay = document.querySelector('.how-to-play');
  const resultContainer = document.querySelector('.result-container');

  useEffect(() => {
    fetch('/WordleWords.txt')
      .then((response) => response.text())
      .then((text) => {
        setWords(text.split('\n').map(w => w.trim()).filter(Boolean));
      });
  }, []);

  useEffect(() => {
    fetch('/WordleWords.txt')
      .then((response) => response.text())
      .then((text) => {
        const wordList = text.split('\n').map(w => w.trim()).filter(Boolean);
        setWords(wordList);

        if (!correctWord && wordList.length > 0) {
          const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
          setCorrectWord(randomWord);
        }
      });
  }, []);

  const handleRestart = () => {
    howToPlay.classList.remove('show-how-to-play');
    resultContainer.classList.remove('show-result-container');

    setCurrentWord('');
    setGameOver(false);
    setGameWon(false);
    if (words.length > 0) {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setCorrectWord(randomWord);
    }

    if (resultRef.current) {
      resultRef.current.classList.remove('show-result-container');
    }
  };

  const handleGameEnd = (won) => {
    setGameOver(true);
    setGameWon(won);
    setTimeout(() => {
      const result = document.querySelector('.result-container');
      if (result) result.classList.add('show-result-container');
    }, 100);
  };

  return (
    <Fragment>
      <Header />
      <>
        <HowToPlay />
      </>
      <>
        <ResultContainer
          ref={resultRef}
          gameWon={gameWon}
          correctWord={correctWord}
          onRestart={handleRestart}
        />
      </>
      <section className="game-container">
        <GameGridContainer
          words={words}
          correctWord={correctWord}
          onGameEnd={handleGameEnd}
        />
      </section>
      <Footer />
    </Fragment>
  )
}

export default App
