export const ResultContainer = ({ gameOver, gameWon, correctWord, onRestart }) => {
  const closeResultContainer = () => {
    const result = document.querySelector('.result-container');
    result.classList.remove('show-result-container');
  };

  return (
    <div className="result-container">
      <button className="close-show-result-button" onClick={closeResultContainer}>X</button>
      <section className="result">
        {gameWon ? (
          <>
            <h2>Congratulations!</h2>
            <p>You guessed the word: <strong>{correctWord}</strong></p>
            <button
              className="restart-button"
              onClick={onRestart}
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
                  onClick={onRestart}
                >
                  Restart Game
                </button>
              </>
            ) : (
              <>
                <p>You have not played the game yet.</p>
                <button
                  className="restart-button"
                  onClick={onRestart}
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
