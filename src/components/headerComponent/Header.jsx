export const Header = () => {
  const showHowToPlay = () => {
    const howToPlay = document.querySelector('.how-to-play');
    howToPlay.classList.add('show');
    console.log('showHowToPlay');
  }

  return (
    <header>
      <h1>Play Wordle Game!</h1>
      <button className="how-to-play-button" onClick={showHowToPlay}>How To Play</button>
    </header>
  )
}
