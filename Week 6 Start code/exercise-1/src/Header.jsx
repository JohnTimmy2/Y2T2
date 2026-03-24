function Header({ batchName }) {
  return (
    <header id="header">
      <img src="/src/assets/pn-logo.png" alt="PN Logo" />
      <h1>Students results for {batchName}</h1>
    </header>
  );
}

export default Header;
