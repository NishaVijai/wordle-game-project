export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Wordle Game &copy; {currentYear} - {currentYear}</p>
    </footer>
  )
}
