import React from 'react';
import styles from './Header.module.css';

function Header() {
  
  const navItems = [
    { label: 'HOME', link: '#' },
    { label: 'PRODUCT', link: '#', hasDropdown: true },
    { label: 'CONTACT US', link: '#' },
    { label: 'ABOUT US', link: '#' }
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {navItems.map((item, index) => (
          <div key={index} className={styles.navItem}>
            <a href={item.link} className={styles.navLink}>{item.label}</a>
            {item.hasDropdown && (
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0908943472b913e9e8102c31452164045d4cb8046a8ea866385249f73ec8ffc9?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="" className={styles.dropdownIcon} />
            )}
          </div>
        ))}
      </nav>
      <div className={styles.avatar}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c57afa8364da5984921fd7f2374b8e55466477a0c5b16d62a657c72eb7ffcd92?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="User avatar" className={styles.avatarImage} />
      </div>
    </header>
  );
}

export default Header;