import styles from './Seaction.module.css'

const  Seaction= () => {
  return (
    <>
     
      <section className={styles.hero}>
        <div className={styles["hero-content"]}>
          <h1>Welcome To My Story</h1>
          <p>
            Share your experiences, thoughts, and memories with the world.
          </p>

          <button>Explore Stories</button>
        </div>
      </section>

    
      <section className={styles.about}>
        <h2>About Us</h2>

        <p>
          My Story is a platform where everyone can write and share their
          personal stories, achievements, and experiences.
        </p>

       
      </section>

      
    </>
  );
};

export default Seaction;