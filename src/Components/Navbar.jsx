import React, { useState } from 'react'; // Correctly importing useState
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menuOpen state
  };

  // Function to close the menu when a menu item is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        {/* Toggle between menu and close icons */}
        {menuOpen ? (
          <ion-icon name="close" className="icon" size="large" onClick={toggleMenu}></ion-icon>
        ) : (
          <ion-icon name="menu" className="icon" size="large" onClick={toggleMenu}></ion-icon>
        )}
        
        {/* Menu items */}
        <ul className={`${styles.menu_items} ${menuOpen ? styles.menuOpen : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#achievements" onClick={closeMenu}>Achievements</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
