import styles from '../../styles/Home.module.css'
import ContactItem from './ContactItem'
import * as Unicons from '@iconscout/react-unicons';
import ContactForm from './ContactForm';

const Contact = () => {

    const iconSize = 35;

    return (
        <div className={styles.container + ' ' + styles.section} id="contact">
            <h2 className={styles.section_title}>Contact</h2>
            <div className={styles.section_subtitle}>Plus d&apos;information</div>

            <div className={styles.contact_container}>
                <div className={styles.contact_grid}>
                    <ContactItem title="Appelez moi" detail="+262 692 276 238" type="tel:">
                        <Unicons.UilPhone size={iconSize} className={styles.contact_icon} />
                    </ContactItem>

                    <ContactItem title="Email" detail="contact@codaid.com" type="mailto:">
                        <Unicons.UilEnvelope size={iconSize} className={styles.contact_icon} />
                    </ContactItem>

                    <ContactItem title="Location" detail="La Réunion - Tampon" type="map:">
                        <Unicons.UilLocationPoint size={iconSize} className={styles.contact_icon} />
                    </ContactItem>
                </div>

                <div className={styles.contact_form}>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;