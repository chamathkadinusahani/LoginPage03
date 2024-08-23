import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bb61bb44f2a53fe8d31cf1658f0459ea85914fb90c55fb8afe6fc47657cb059?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5", alt: "Facebook" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e0fcb14135ac7e7addb4391b71365065130781ddbb7a7cf8a1fb783eb80b49a?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5", alt: "Twitter" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/41dc0d5b883b718c665d22862f83594b419f05deff750a4d127108c750e4e24c?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5", alt: "Instagram" }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <p className={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Quick Links</h2>
          <nav className={styles.quickLinks}>
            <a href="#" className={styles.footerLink}>Home</a>
            <a href="#" className={styles.footerLink}>About</a>
            <a href="#" className={styles.footerLink}>Services</a>
            <a href="#" className={styles.footerLink}>Contact</a>
          </nav>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Social Media</h2>
          <div className={styles.socialIcons}>
            {socialIcons.map((icon, index) => (
              <img key={index} src={icon.src} alt={icon.alt} className={styles.socialIcon} />
            ))}
          </div>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <address className={styles.contactInfo}>
            Email: info@example.com<br />
            Phone: +123 456 7890<br />
            Address: 123 Street Name, City, Country
          </address>
        </div>
      </div>
      <div className={styles.footerDivider}></div>
      <p className={styles.copyright}>2024 Your Website. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;