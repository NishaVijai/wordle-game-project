export const Header = () => {
  const showHowToPlay = () => {
    const howToPlay = document.querySelector('.how-to-play');
    howToPlay.classList.add('show-how-to-play');
    console.log('showHowToPlay');
  }

  const setFocusOnInput = () => {
    const input = document.querySelector('.game-grid input');
    if (input) input.focus();
    console.log('setFocusOnInput');
  }

  // TODO: remove the following test code
  const showResultContainer = () => {
    const howToPlay = document.querySelector('.result-container');
    howToPlay.classList.add('show-result-container');
    console.log('showResultContainer');
  }

  return (
    <header>
      {/* <h1>Play Wordle Game!</h1> */}
      <button onClick={setFocusOnInput}>Play Wordle Game</button>
      <button className="how-to-play-button" onClick={showHowToPlay}>How To Play</button>
      <button className="show-result-button" onClick={showResultContainer}>Show result</button>
    </header>
  )
}
