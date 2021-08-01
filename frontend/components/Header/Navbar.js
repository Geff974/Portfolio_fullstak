import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import * as Unicons from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';

const Navbar = ({ setTheme, themeMode }) => {

    const [openMenu, setOpenMenu] = useState(styles.nav_menu);
    const [scrollOn, setScrollOn] = useState('')

    const toggleMenu = (boo) => {
        if (boo) {
            setOpenMenu(styles.nav_menu + ' ' + styles.open);
        } else {
            setOpenMenu(styles.nav_menu);
        }
    }

    const toggleTheme = () => {
        if (themeMode) {
            setTheme('');
        } else {
            setTheme('dark_theme');
        }
    }

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 20) {
                setScrollOn(styles.scroll);
            } else {
                setScrollOn('')
            }
        }
    }, [])

    return (
        <nav className={styles.nav}>
            <div className={styles.nav_container + ' ' + scrollOn}>
                <div className={styles.logo}>
                    <h3>Codaid</h3>
                </div>

                <div className={openMenu}>
                    <ul className={styles.nav_menu_link}>
                        <li className={styles.nav_menu_link_item} onClick={() => toggleMenu(0)}> <Unicons.UilEstate className={styles.nav_icon} /> <Link href="/#home">Accueil</Link> </li>
                        <li className={styles.nav_menu_link_item} onClick={() => toggleMenu(0)}> <Unicons.UilUser className={styles.nav_icon} /> <Link href="/#about">A propos</Link> </li>
                        <li className={styles.nav_menu_link_item} onClick={() => toggleMenu(0)}> <Unicons.UilEstate className={styles.nav_icon} /> <Link href="/#skills">Skills</Link> </li>
                        <li className={styles.nav_menu_link_item} onClick={() => toggleMenu(0)}> <Unicons.UilBriefcaseAlt className={styles.nav_icon} /> <Link href="/#services">Services</Link> </li>
                        <li className={styles.nav_menu_link_item} onClick={() => toggleMenu(0)}> <Unicons.UilImage className={styles.nav_icon} /> <Link href="/#portfolio">Portfolio</Link> </li>
                        <li className={styles.nav_menu_link_item} onClick={() => toggleMenu(0)}> <Unicons.UilMessage className={styles.nav_icon} /> <Link href="/#contact">Contact</Link> </li>
                    </ul>
                    <div className={styles.nav_close} onClick={() => toggleMenu(0)}>
                        <Unicons.UilTimes />
                    </div>
                </div>

                <div className={styles.nav_menu_show}>
                    {themeMode &&
                        <Unicons.UilSun className={styles.theme_mode} onClick={toggleTheme} />
                    }
                    {!themeMode &&
                        <Unicons.UilMoon className={styles.theme_mode} onClick={toggleTheme} />
                    }
                    <Unicons.UilApps className={styles.nav_toggle} onClick={() => toggleMenu(true)} />
                </div>

                <div className={scrollOn + ' ' + styles.arrow_up}>
                    <Link href="/#home">
                        <Unicons.UilArrowUp size={25} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;