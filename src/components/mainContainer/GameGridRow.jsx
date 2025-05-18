import { GameGridCell } from './GameGridCell.jsx';

export const GameGridRow = ({
  rowIdx,
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
    {Array.from({ length: cols }).map((_, colIdx) => (
      <GameGridCell
        key={`${rowIdx}-${colIdx}`}
        value={guess[colIdx]}
        color={colors[colIdx]}
        inputRef={el => (inputRefs.current[rowIdx][colIdx] = el)}
        onChange={e => handleInput(rowIdx, colIdx, e.target.value)}
        onKeyDown={e => handleKeyDown(e, rowIdx, colIdx)}
        disabled={rowIdx !== activeRow}
      />
    ))}
    <span className="game-grid-span">{status}</span>
  </div>
);
