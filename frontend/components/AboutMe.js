import Image from 'next/image';
import styles from '../styles/Home.module.css';
import * as Unicons from '@iconscout/react-unicons';
import PhotoAbout from '../public/geffrey.jpg'

const AboutMe = () => {
    return (
        <div className={styles.container + ' ' + styles.section} id="about">
            <h2 className={styles.section_title}>A propos</h2>
            <span className={styles.section_subtitle}>Ma présentation</span>

            <div className={styles.about_container}>
                <div className={styles.img_profil_block}>
                    <Image src={PhotoAbout} alt="photo de profil" className={styles.img_profil} width={200} height={266} />
                </div>

                <div className={styles.about_description}>
                    <p className={styles.text}>
                        Développeur web, frontend, je me suis spécialisé avec le framework ReactJS/NextJS que j&apos;affectionne tout particulièrement.
                    </p>
                    <div className={styles.btn_section}>
                        <a href="/CV_Geffrey_SAID.pdf" className={styles.btn} download>Mon CV <Unicons.UilDownloadAlt className={styles.btn_icon} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;