import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const ContactItem = ({ title, detail, type = '', children }) => {


    return (
        <Link href={`${type}${detail}`}>
            <div className={styles.contact_item_component}>
                <div className={styles.contact_icon}>
                    {children}
                </div>
                <div className={styles.contact_detail}>
                    <h3 className={styles.section_title_min}>{title}</h3>
                    <span className={styles.section_subtitle_min}>{detail}</span>
                </div>
            </div>
        </Link>


    );
};

export default ContactItem;