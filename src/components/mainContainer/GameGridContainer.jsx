export const GameGridContainer = () => {
  const rows = 6;
  const cols = 5;

  return (
    <div className="game-grid-container">
      <div className="game-grid">
        {Array.from({ length: rows * cols }).map((_, i) => (
          <div
            key={i}
            className="box"
          >

          </div>
        ))}
      </div>
    </div>
  )
}
