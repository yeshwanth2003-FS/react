import styles from './Form.module.css'

const Form = () => {
    
  return (
    <>
      <div className={styles["form-container"]}>
        <div className={styles["form-card"]}>
          <h2>Create Account</h2>
          <p>Join My Story and share your experiences.</p>

          <form>
            <div className={styles["input-box"]}>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className={styles["input-box"]}>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className={styles["input-box"]}>
              <label>Password</label>
              <input type="password" placeholder="Create password" />
            </div>

            <div className={styles["input-box"]}>
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm password" />
            </div>

            <button type="submit">Register</button>

            <p className={styles["login-link"]}>
              Already have an account? <a href="#">Login</a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form