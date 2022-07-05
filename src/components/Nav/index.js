function Nav({sectionSelected, setSectionSelected}) {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> ☀️</span> Solaire Landscaping
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" className={`${sectionSelected === 'about' && 'activeSection'}`} onClick={ () => setSectionSelected('about') }>Services Offered</a>
          </li>
          <li className="mx-2">
            <a href="#gallery" className={`${sectionSelected === 'gallery' && 'activeSection'}`} onClick={ () => setSectionSelected('gallery') }>Gallery</a>
          </li>
          <li className="mx-2">
            <a href="#contact" className={`${sectionSelected === 'contact' && 'activeSection'}`} onClick={ () => setSectionSelected('contact') }>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;