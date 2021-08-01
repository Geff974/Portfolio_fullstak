import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import * as Unicons from '@iconscout/react-unicons';

const HeaderContent = () => {

    const widthPhoto = 500;
    const heightPhoto = widthPhoto * 2.038;

    return (
        <div className={styles.header_component} id="home">
            <div className={styles.container + ' ' + styles.header_content}>
                <div className={styles.header_social}>
                    <Link href="https://www.linkedin.com/in/geffrey-said-aaa015188/">
                        <a target="_blank" className={styles.home_social_icon}> <Unicons.UilLinkedinAlt /> </a>
                    </Link>
                    <Link href="https://github.com/Geff974">
                        <a target="_blank" className={styles.home_social_icon}> <Unicons.UilGithubAlt /> </a>
                    </Link>
                </div>

                <div className={styles.header_img}>
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                        <defs>
                            <clipPath id="shape">
                                <path id="blob" d="M309,350.5Q134,451,130.5,244.5Q127,38,305.5,144Q484,250,309,350.5Z" fill="#784cfb"></path>
                            </clipPath>
                        </defs>
                        <image x="50" y="80" width="80%" height="80%" clipPath="url(#shape)" xlinkHref="/photo_profil.png"></image>
                    </svg>
                </div>

                <div className={styles.header_data}>
                    <h1 className={styles.section_title}>Hello,<br /> je suis Geffrey</h1>
                    <h3 className={styles.section_subtitle}>Developpeur Frontend ReactJS/NextJS</h3>
                    <p className={styles.text}>Passionné depuis 4 ans par le code, j&apos;en ai fait mon métier.</p>
                    <Link href="mailto:contact@codaid.com">
                        <a className={styles.btn}>Contact <Unicons.UilMessage className={styles.btn_icon} /></a>
                    </Link>
                </div>


            </div>

        </div>
    );
};

export default HeaderContent;