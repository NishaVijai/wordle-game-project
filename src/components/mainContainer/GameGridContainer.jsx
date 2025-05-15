import { useEffect, useRef, useState } from 'react';

export const GameGridContainer = ({ words, correctWord, onGameEnd }) => {
  const rows = 6;
  const cols = 5;
  const [guesses, setGuesses] = useState(Array(rows).fill(''));
  const [activeRow, setActiveRow] = useState(0);
  const [status, setStatus] = useState(Array(rows).fill(''));
  const [cellColors, setCellColors] = useState(Array(rows).fill(null).map(() => Array(cols).fill('')));
  const inputRefs = useRef([...Array(rows)].map(() => Array(cols).fill(null)));

  useEffect(() => {
    if (inputRefs.current[0][0]) inputRefs.current[0][0].focus();
  }, []);

  useEffect(() => {
    setGuesses(Array(rows).fill(''));
    setActiveRow(0);
    setStatus(Array(rows).fill(''));
    setCellColors(Array(rows).fill(null).map(() => Array(cols).fill('')));
    if (inputRefs.current[0][0]) inputRefs.current[0][0].focus();
  }, [correctWord]);

  const getColors = (guess, answer) => {
    const colors = Array(cols).fill('gray');
    const answerArr = answer.toUpperCase().split('');
    const guessArr = guess.toUpperCase().split('');
    const answerLetterCount = {};

    for (let i = 0; i < cols; i++) {
      if (answerArr[i] === guessArr[i]) {
        colors[i] = 'green';
      } else {
        answerLetterCount[answerArr[i]] = (answerLetterCount[answerArr[i]] || 0) + 1;
      }
    }

    for (let i = 0; i < cols; i++) {
      if (colors[i] === 'green') continue;
      if (answerLetterCount[guessArr[i]]) {
        colors[i] = 'yellow';
        answerLetterCount[guessArr[i]]--;
      }
    }
    return colors;
  };

  const handleInput = (rowIdx, colIdx, value) => {
    if (!/^[A-Za-z]?$/.test(value)) return;
    const updatedGuesses = [...guesses];
    let guess = updatedGuesses[rowIdx] || '';
    guess = guess.substring(0, colIdx) + value.toUpperCase() + guess.substring(colIdx + 1);
    updatedGuesses[rowIdx] = guess;
    setGuesses(updatedGuesses);

    if (value && colIdx < cols - 1) {
      const nextInput = inputRefs.current[rowIdx][colIdx + 1];
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, rowIdx, colIdx) => {
    if (e.key === 'Backspace' && !guesses[rowIdx][colIdx] && colIdx > 0) {
      const prevInput = inputRefs.current[rowIdx][colIdx - 1];
      if (prevInput) prevInput.focus();
    }

    if (
      e.key === 'Enter' &&
      guesses[rowIdx] &&
      guesses[rowIdx].length === cols &&
      [...guesses[rowIdx]].every(char => char && char !== ' ') &&
      rowIdx === activeRow
    ) {
      const guessWord = guesses[rowIdx].toLowerCase();

      if (!words.map(w => w.toLowerCase()).includes(guessWord)) {
        setStatus(s => {
          const newStatus = [...s];
          newStatus[rowIdx] = 'Not in word list';
          return newStatus;
        });
        return;
      }

      const colors = getColors(guesses[rowIdx], correctWord);
      setCellColors(prev => {
        const updated = prev.map(arr => [...arr]);
        updated[rowIdx] = colors;
        return updated;
      });

      if (guessWord === correctWord.toLowerCase()) {
        setStatus(s => {
          const newStatus = [...s];
          newStatus[rowIdx] = 'Correct!';
          return newStatus;
        });
        if (onGameEnd) onGameEnd(true);
        return;
      }

      if (rowIdx < rows - 1) {
        setActiveRow(rowIdx + 1);
        setStatus(s => {
          const newStatus = [...s];
          newStatus[rowIdx] = 'Incorrect';
          return newStatus;
        });
        setTimeout(() => {
          const nextRowFirstInput = inputRefs.current[rowIdx + 1][0];
          if (nextRowFirstInput) nextRowFirstInput.focus();
        }, 50);
      } else {
        setStatus(s => {
          const newStatus = [...s];
          newStatus[rowIdx] = 'Game Over';
          return newStatus;
        });
        if (onGameEnd) onGameEnd(false);
      }
    }
  };

  const colorClass = color => {
    if (color === 'green') return { backgroundColor: '#22c55e', color: '#fff' };
    if (color === 'yellow') return { backgroundColor: '#eab308', color: '#fff' };
    if (color === 'gray') return { backgroundColor: '#6b7280', color: '#fff' };
    return {};
  };

  return (
    <div className="game-grid-container">
      <div className="game-grid">
        {guesses.map((guess, rowIdx) => (
          <div className="game-grid-row" key={rowIdx}>
            {Array.from({ length: cols }).map((_, colIdx) => (
              <input
                key={`${rowIdx}-${colIdx}`}
                className="box text-center uppercase"
                maxLength={1}
                ref={el => (inputRefs.current[rowIdx][colIdx] = el)}
                value={guess[colIdx] || ""}
                onChange={e => handleInput(rowIdx, colIdx, e.target.value)}
                onKeyDown={e => handleKeyDown(e, rowIdx, colIdx)}
                disabled={rowIdx !== activeRow}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 2,
                  ...colorClass(cellColors[rowIdx][colIdx])
                }}
              />
            ))}
            <span className="game-grid-span">
              {status[rowIdx]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
