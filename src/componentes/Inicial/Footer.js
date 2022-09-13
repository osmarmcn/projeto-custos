import {FaFacebook, FaInstagram,FaLinkedin, FaTwitter} from 'react-icons/fa'
import styles from '../Layout/footer.module.css'


const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <ul className={styles.social}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
                <li>
                    <FaTwitter/>
                </li>
            </ul>

            <p className={styles.copy_right}>
                <span>costs</span> &copy;
            </p> 

        </footer>
    )
}


export default Footer