import styles from './Header.module.css'

const Header=()=>{
   return <>
    <div className={styles.parent}>
          <div className={styles.child}>
            <h2>My Story</h2>
        </div>
        <div className={styles.child2}>
            <a href="">home</a>
            <a href="">register</a>
            <a href="">login</a>
            <a href="">contact</a>
        </div>
    </div>
    </>
}

export default Header