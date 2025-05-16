export const Header = () => {
  const input = document.querySelector('.game-grid input');
  const howToPlay = document.querySelector('.how-to-play');
  const resultContainer = document.querySelector('.result-container');

  const showHowToPlay = () => {
    howToPlay.classList.add('show-how-to-play');
  }

  const setFocusOnInput = () => {
    howToPlay.classList.remove('show-how-to-play');
    resultContainer.classList.remove('show-result-container');

    if (input) input.focus();
  }

  const showResultContainer = () => {
    resultContainer.classList.add('show-result-container');
  }

  return (
    <header>
      <button onClick={setFocusOnInput}>Play Wordle Game</button>
      <button className="how-to-play-button" onClick={showHowToPlay}>How To Play</button>
      <button className="show-result-button" onClick={showResultContainer}>Show result</button>
    </header>
  )
}
