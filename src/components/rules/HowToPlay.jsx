export const HowToPlay = ({ onClickHandler }) => {
    return (
        <div className="how-to-play">
            <h2>How to Play</h2>
            <p>Guess the word in 6 tries.</p>
            <p>Each guess must be a valid 5-letter word.</p>
            <p>The color of the tiles will change to show how close your guess was to the word.</p>
            <ul>
                <li><strong>Green:</strong> The letter is in the word and in the correct position.</li>
                <li><strong>Yellow:</strong> The letter is in the word but in the wrong position.</li>
                <li><strong>Gray:</strong> The letter is not in the word.</li>
            </ul>
        </div>
    )
}
