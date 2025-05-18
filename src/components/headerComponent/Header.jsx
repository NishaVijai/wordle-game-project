export const Header = ({ onShowHowToPlay, onShowResult, onFocusInput }) => {
  return (
    <header>
      <button onClick={onFocusInput}>Play Wordle Game</button>
      <button className="how-to-play-button" onClick={onShowHowToPlay}>How To Play</button>
      <button className="show-result-button" onClick={onShowResult}>Show result</button>
    </header>
  );
};
