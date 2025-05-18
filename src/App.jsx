import { Fragment, useEffect, useState, useRef } from 'react';
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
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    fetch('/WordleWords.txt')
      .then((response) => response.text())
      .then((text) => {
        const wordList = text.split('\n').map(w => w.trim()).filter(Boolean);
        setWords(wordList);
        if (wordList.length > 0) {
          setCorrectWord(wordList[Math.floor(Math.random() * wordList.length)]);
        }
      });
  }, []);

  const handleRestart = () => {
    setShowHowToPlay(false);
    setShowResult(false);
    setCurrentWord('');
    setGameOver(false);
    setGameWon(false);
    if (words.length > 0) {
      setCorrectWord(words[Math.floor(Math.random() * words.length)]);
    }
  };

  const handleGameEnd = (won) => {
    setGameOver(true);
    setGameWon(won);
    setTimeout(() => setShowResult(true), 100);
  };

  const handleOnClose = () => {
    setShowHowToPlay(false);
    setShowResult(false);
  };

  const handleFocusInput = () => {
    handleOnClose();
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <Fragment>
      <Header
        onShowHowToPlay={() => setShowHowToPlay(true)}
        onShowResult={() => setShowResult(true)}
        onFocusInput={handleFocusInput}
      />
      <HowToPlay visible={showHowToPlay} onClose={handleOnClose} />
      <ResultContainer
        visible={showResult}
        gameOver={gameOver}
        gameWon={gameWon}
        correctWord={correctWord}
        onRestart={handleRestart}
        onClose={handleOnClose}
      />
      <section className="game-container">
        <GameGridContainer
          words={words}
          correctWord={correctWord}
          onGameEnd={handleGameEnd}
          inputRef={inputRef}
        />
      </section>
      <Footer />
    </Fragment>
  );
}

export default App;
