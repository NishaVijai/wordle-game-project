import { useEffect, useRef, useState } from 'react';
import { GameGridRow } from './GameGridRow.jsx';

export const GameGridContainer = ({ words, correctWord, onGameEnd, inputRef }) => {
  const totalRows = 6;
  const totalCols = 5;
  const [allGuesses, setAllGuesses] = useState(Array(totalRows).fill(''));
  const [currentRow, setCurrentRow] = useState(0);
  const [rowStatus, setRowStatus] = useState(Array(totalRows).fill(''));
  const [rowCellColors, setRowCellColors] = useState(Array(totalRows).fill(null).map(() => Array(totalCols).fill('')));
  const cellRefs = useRef([...Array(totalRows)].map(() => Array(totalCols).fill(null)));

  useEffect(() => {
    if (cellRefs.current[0][0]) cellRefs.current[0][0].focus();
    if (inputRef) inputRef.current = cellRefs.current[0][0];
  }, [correctWord]);

  useEffect(() => {
    setAllGuesses(Array(totalRows).fill(''));
    setCurrentRow(0);
    setRowStatus(Array(totalRows).fill(''));
    setRowCellColors(Array(totalRows).fill(null).map(() => Array(totalCols).fill('')));
  }, [correctWord]);

  const getCellColors = (guess, answer) => {
    const colors = Array(totalCols).fill('gray');
    const answerArr = answer.toUpperCase().split('');
    const guessArr = guess.toUpperCase().split('');
    const answerLetterCount = {};

    for (let i = 0; i < totalCols; i++) {
      if (answerArr[i] === guessArr[i]) {
        colors[i] = 'green';
      } else {
        answerLetterCount[answerArr[i]] = (answerLetterCount[answerArr[i]] || 0) + 1;
      }
    }

    for (let i = 0; i < totalCols; i++) {
      if (colors[i] === 'green') continue;
      if (answerLetterCount[guessArr[i]]) {
        colors[i] = 'yellow';
        answerLetterCount[guessArr[i]]--;
      }
    }
    return colors;
  };

  const handleCellInput = (rowIndex, columnIndex, value) => {
    if (!/^[A-Za-z]?$/.test(value)) return;
    const updatedGuesses = [...allGuesses];
    let guess = updatedGuesses[rowIndex] || '';
    guess = guess.substring(0, columnIndex) + value.toUpperCase() + guess.substring(columnIndex + 1);
    updatedGuesses[rowIndex] = guess;
    setAllGuesses(updatedGuesses);

    if (value && columnIndex < totalCols - 1) {
      const nextInput = cellRefs.current[rowIndex][columnIndex + 1];
      if (nextInput) nextInput.focus();
    }
  };

  const handleCellKeyDown = (e, rowIndex, columnIndex) => {
    if (e.key === 'Backspace' && !allGuesses[rowIndex][columnIndex] && columnIndex > 0) {
      const prevInput = cellRefs.current[rowIndex][columnIndex - 1];
      if (prevInput) prevInput.focus();
    }

    if (
      e.key === 'Enter' &&
      allGuesses[rowIndex] &&
      allGuesses[rowIndex].length === totalCols &&
      [...allGuesses[rowIndex]].every(char => char && char !== ' ') &&
      rowIndex === currentRow
    ) {
      const guessWord = allGuesses[rowIndex].toLowerCase();

      if (!words.map(w => w.toLowerCase()).includes(guessWord)) {
        setRowStatus(statusArr => {
          const newStatus = [...statusArr];
          newStatus[rowIndex] = 'Not in word list';
          return newStatus;
        });
        return;
      }

      const colors = getCellColors(allGuesses[rowIndex], correctWord);
      setRowCellColors(prev => {
        const updated = prev.map(arr => [...arr]);
        updated[rowIndex] = colors;
        return updated;
      });

      if (guessWord === correctWord.toLowerCase()) {
        setRowStatus(statusArr => {
          const newStatus = [...statusArr];
          newStatus[rowIndex] = 'Correct!';
          return newStatus;
        });
        if (onGameEnd) onGameEnd(true);
        return;
      }

      if (rowIndex < totalRows - 1) {
        setCurrentRow(rowIndex + 1);
        setRowStatus(statusArr => {
          const newStatus = [...statusArr];
          newStatus[rowIndex] = 'Incorrect';
          return newStatus;
        });
        setTimeout(() => {
          const nextRowFirstInput = cellRefs.current[rowIndex + 1][0];
          if (nextRowFirstInput) nextRowFirstInput.focus();
        }, 50);
      } else {
        setRowStatus(statusArr => {
          const newStatus = [...statusArr];
          newStatus[rowIndex] = 'Game Over';
          return newStatus;
        });
        if (onGameEnd) onGameEnd(false);
      }
    }
  };

  const getColorClass = color => {
    if (color === 'green') return 'cell-green';
    if (color === 'yellow') return 'cell-yellow';
    if (color === 'gray') return 'cell-gray';
    return '';
  };

  return (
    <div className="game-grid-container">
      <div className="game-grid">
        {allGuesses.map((guess, rowIndex) => (
          <GameGridRow
            key={rowIndex}
            rowIndex={rowIndex}
            guess={guess}
            colors={rowCellColors[rowIndex].map(getColorClass)}
            inputRefs={cellRefs}
            cols={totalCols}
            activeRow={currentRow}
            handleInput={handleCellInput}
            handleKeyDown={handleCellKeyDown}
            status={rowStatus[rowIndex]}
          />
        ))}
      </div>
    </div>
  );
};
