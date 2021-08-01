import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import { UilMessage } from '@iconscout/react-unicons';
import axios from 'axios';

const ContactForm = () => {

    const [contact, setContact] = useState({
        name: '',
        email: '',
        project: '',
        message: ''
    })

    const [messageSend, setMessageSend] = useState('');
    const [sending, setSending] = useState('');

    const handleChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const showMessage = () => {
        setTimeout(() => {
            setMessageSend('');
        }, 3000);
    }

    const handlerSend = () => {
        setSending(styles.contact_sending);
        axios.post('http://localhost:3001/', contact)
            .then(response => {
                if (response.data === 'success') {
                    setMessageSend('Message envoyé avec succés');
                    setContact({
                        ...contact,
                        project: '',
                        message: ''
                    })
                    showMessage();
                    setSending('');
                }
            });
    }

    return (
        <div className={styles.contact_form_component}>
            <div className={styles.contact_inputs_grid}>

                {messageSend &&
                    <div className={styles.contact_message_sended}>
                        {messageSend}
                    </div>
                }

                <div className={styles.contact_input_item}>
                    <label htmlFor="" className={styles.contact_label}>Nom</label>
                    <input type="text" className={styles.contact_input} name="name" value={contact.name} onChange={handleChange} />
                </div>

                <div className={styles.contact_input_item}>
                    <label htmlFor="" className={styles.contact_label}>Email</label>
                    <input type="email" className={styles.contact_input} name="email" value={contact.email} onChange={handleChange} />
                </div>

                <div className={styles.contact_input_item + ' ' + styles.contact_input_2}>
                    <label htmlFor="" className={styles.contact_label}>Projet</label>
                    <input type="text" className={styles.contact_input} name="project" value={contact.project} onChange={handleChange} />
                </div>

                <div className={styles.contact_input_item + ' ' + styles.contact_input_2}>
                    <label htmlFor="" className={styles.contact_label}>Projet</label>
                    <textarea cols="0" rows="7" type="text" className={styles.contact_input} name="message" value={contact.message} onChange={handleChange} />
                </div>

                <div className={styles.contact_btn} onClick={handlerSend}>
                    <a className={styles.btn}>Envoyer <UilMessage size={20} className={styles.btn_icon + ' ' + sending} /></a>
                </div>

            </div>

        </div>
    );
};

export default ContactForm;