export const KeyboardContainer = () => {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace']
  ];

  return (
    <div className="keyboard-container">
      <div className="keyboard">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-rows">
            {row.map((key) => (
              <button
                key={key}
                className="key"
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
