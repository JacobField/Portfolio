export function Navbar() {
  const handleHomeClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="navbar" id="homeSection">
        <a className="navAnchor" href="#homeSection" onClick={handleHomeClick}>
          <header>Home</header>
        </a>
        <a href="#aboutSection" className="navAnchor">
          <header>About</header>
        </a>
        <a href="#projectsSection" className="navAnchor">
          <header>Projects</header>
        </a>
        <a href="#footerSection" className="navAnchor">
          <header>Contact</header>
        </a>
      </div>
    </>
  );
}
