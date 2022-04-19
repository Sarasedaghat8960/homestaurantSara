import styles from './Footer.module.scss'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.adress}>
                <h3>Our address</h3>
                <h4>Sweden</h4>
                <h4>Stockholm</h4>
                
            </div>
           
            <div className={styles.logo}></div>
            <div className={styles.newsLetter}>
                <h3>Contact us</h3>
                <p>
                    Do you have a quaestion
                   
                    Feel free to contact us via mail!
                </p>
                <input type="text" placeholder="Your Message" />
                <button className={styles.footerBtn}>Contact us</button>
            </div>
        </div>
    )
}

export default Footer
