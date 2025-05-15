export const GameGridContainer = () => {
  const rows = 6;
  const cols = 5;

  return (
    <div className="game-grid-container">
      <div className="game-grid">
        {[...Array(rows)].map((_, rowIndex) => (
          [...Array(cols)].map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="box"
            >

            </div>
          ))
        ))}
      </div>
    </div>
  )
}
