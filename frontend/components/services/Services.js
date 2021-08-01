import styles from '../../styles/Home.module.css';
import Service from './Service';
import * as Unicons from '@iconscout/react-unicons';

const Services = () => {
    const sizeIcon = 35
    const frontendDescribe = [
        'Je développe l\'interface utilisateur.',
        'Développement des application frontend.',
        'Integration web.',
    ];

    const ReactDescribe = [
        'Création d\'application ReactJS.',
        'Utilisation NextJS.',
        'Utilisation d\'API',
        'Création d\'API.'
    ]

    const BackendDescribe = [
        'En complément du Frontend.',
        'Création d\'API basique CRUD.',
        'Gestion d\'authentification.',
        'Gestion base de données SQL.'
    ]

    return (
        <div className={styles.container + ' ' + styles.services_component + ' ' + styles.section} id="services">
            <h2 className={styles.section_title}>Services</h2>
            <div className={styles.section_subtitle}>Ce que je propose</div>

            <div className={styles.services_grid}>
                <Service
                    title="Frontend Développeur"
                    describeList={frontendDescribe}>
                    <Unicons.UilArrow size={sizeIcon} className={styles.main_color} />
                </Service>

                <Service
                    title="ReactJS Développeur"
                    describeList={ReactDescribe}>
                    <Unicons.UilReact size={sizeIcon} className={styles.main_color} />
                </Service>

                <Service
                    title="Backend Développeur"
                    describeList={BackendDescribe}>
                    <Unicons.UilDatabase size={sizeIcon} className={styles.main_color} />
                </Service>
            </div>
        </div>
    );
};

export default Services;