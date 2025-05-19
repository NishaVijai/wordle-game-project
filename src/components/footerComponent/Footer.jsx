export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Wordle Game &copy; {currentYear} - {currentYear}</p>
      <p>GitHub - <a href="https://github.com/NishaVijai/wordle-game-project" target="_blank" rel="noopener noreferrer" title="GitHub repository of this project will open on a new tab">Repo</a></p>
    </footer>
  )
}
