import styles from '../styles/Home.module.css';
import Link from 'next/link';
import * as Unicons from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <div className={styles.footer}>

            <div className={styles.footer_bg}>
                <div>
                    <h1 className={styles.footer_title}>Geffrey</h1>
                    <span className={styles.footer_subtitle}>Frontend développeur</span>
                </div>

                <ul className={styles.footer_links}>
                    <li>
                        <a href="#about" className={styles.footer_link}>A propos</a>
                    </li>
                    <li>
                        <a href="#services" className={styles.footer_link}>Service</a>
                    </li>
                    <li>
                        <a href="#contact" className={styles.footer_link}>Me contacter</a>
                    </li>
                </ul>

                <div className={styles.footer_socials}>
                    <Link href="https://www.linkedin.com/in/geffrey-said-aaa015188/" target="_blank">
                        <a className={styles.footer_social}> <Unicons.UilGithubAlt size={20} className={styles.footer_social_icon} /> </a>
                    </Link>
                    <Link href="https://github.com/Geff974" target="_blank">
                        <a className={styles.footer_social}> <Unicons.UilLinkedinAlt size={20} className={styles.footer_social_icon} /> </a>
                    </Link>
                </div>
            </div>
            <p className={styles.footer_copy}>&#169; Codaid - Tout droit réservé</p>


        </div>
    );
};

export default Footer;