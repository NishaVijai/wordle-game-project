export const ResultContainer = ({ visible, gameOver, gameWon, correctWord, onRestart, onClose, onFocusInput }) => {
  if (!visible) return null;

  const handleRestartAndFocus = () => {
    onRestart();
    if (onFocusInput) {
      setTimeout(() => {
        onFocusInput();
      }, 50);
    }
  };

  return (
    <div className="result-container show-result-container">
      <button className="close-show-result-button" onClick={onClose}>X</button>
      <section className="result">
        {gameWon ? (
          <>
            <h2>Congratulations!</h2>
            <p>You guessed the word: <strong>{correctWord}</strong></p>
            <button
              className="restart-button"
              onClick={handleRestartAndFocus}
            >
              Play Again
            </button>
          </>
        ) : (
          <>
            {gameOver ? (
              <>
                <h2>Game Over!</h2>
                <p>The correct word was: <strong>{correctWord}</strong></p>
                <button
                  className="restart-button"
                  onClick={handleRestartAndFocus}
                >
                  Restart Game
                </button>
              </>
            ) : (
              <>
                <p>You have not played the game yet.</p>
                <button
                  className="restart-button"
                  onClick={handleRestartAndFocus}
                >
                  Play
                </button>
              </>
            )}
          </>
        )}
      </section>
    </div>
  );
};
