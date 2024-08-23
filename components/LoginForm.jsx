import React from 'react';
import styles from './LoginForm.module.css';

function LoginForm() {
  return (
    <section className={styles.loginSection}>
      <h1 className={styles.loginTitle}>LOGIN</h1>
      <div className={styles.userTypeToggle}>
        <button className={styles.userTypeButton}>USER</button>
        <button className={`${styles.userTypeButton} ${styles.active}`}>ADMIN</button>
      </div>
      <form className={styles.loginForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>Email</label>
          <input type="email" id="email" className={styles.inputField} required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>Password</label>
          <input type="password" id="password" className={styles.inputField} required />
        </div>
        <div className={styles.rememberMe}>
          <input type="checkbox" id="rememberMe" className={styles.checkbox} />
          <label htmlFor="rememberMe" className={styles.checkboxLabel}>REMEMBER ME</label>
        </div>
        <button type="submit" className={styles.signInButton}>SIGN IN</button>
      </form>
      <div className={styles.divider}>OR</div>
      <button className={styles.googleSignIn}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/75bc117934ee10e4251a8ba588a96b83ffac9d77a9154914708d62f2ac460581?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="" className={styles.googleIcon} />
        Sign in with Google
      </button>
      <button className={styles.facebookSignIn}>Sign in with Facebook</button>
      <a href="#" className={styles.forgotPassword}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4544c9bcb3e9c2891b1057c389c75eb3cdcef568276f10d042e213b641f0e2f?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="" className={styles.lockIcon} />
        Lost password? Recovery password
      </a>
    </section>
  );
}

export default LoginForm;