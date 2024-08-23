import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import Footer from './Footer';
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <Header />
      <main className={styles.mainContent}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/575d0968488d349cb3a686a6f32179a963658c5637563527421afb5c55fc97d8?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Login illustration" className={styles.loginImage} />
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;