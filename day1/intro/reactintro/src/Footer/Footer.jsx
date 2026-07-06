import styles from './Footer.module.css'
const Footer=()=>{
    return(
    <>
    <footer className={styles.footer}>
        <h3>My Story</h3>

        <p>© 2026 All Rights Reserved.</p>

        <div className={styles["footer-links"]}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Register</a>
          <a href="#">Contact</a>
        </div>
      </footer></>
    )
}
export default Footer