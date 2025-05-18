import { GameGridCell } from './GameGridCell.jsx';

export const GameGridRow = ({
  rowIndex,
  guess,
  colors,
  inputRefs,
  cols,
  activeRow,
  handleInput,
  handleKeyDown,
  status,
}) => (
  <div className="game-grid-row">
    {Array.from({ length: cols }).map((_, columnIndex) => (
      <GameGridCell
        key={`${rowIndex}-${columnIndex}`}
        value={guess[columnIndex]}
        color={colors[columnIndex]}
        inputRef={el => (inputRefs.current[rowIndex][columnIndex] = el)}
        onChange={e => handleInput(rowIndex, columnIndex, e.target.value)}
        onKeyDown={e => handleKeyDown(e, rowIndex, columnIndex)}
        disabled={rowIndex !== activeRow}
      />
    ))}
    <span className="game-grid-span">{status}</span>
  </div>
);
