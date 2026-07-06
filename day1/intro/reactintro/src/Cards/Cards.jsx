import styles from './Cards.module.css'

const Cards=()=>{
    return(
        <>
         <div className={styles.cards}>

          <div className={styles.card}>
            <h3>Stories</h3>
            <p>Read thousands of inspiring stories.</p>
          </div>

          <div className={styles.card}>
            <h3>Community</h3>
            <p>Connect with people around the world.</p>
          </div>

          <div className={styles.card}>
            <h3>Share</h3>
            <p>Write your own story and inspire others.</p>
          </div>

        </div></>
    )
}
export default Cards