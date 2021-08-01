import styles from '../../styles/Home.module.css';
import { UilAngleDown } from '@iconscout/react-unicons';
import { useState } from 'react';
import SkillDetail from './SkillDetail';

const SkillCategory = ({ children, title, describe, skillList }) => {

    const [clicked, setClicked] = useState('');

    const showDetail = () => {
        if (clicked !== '') {
            setClicked('');
        } else {
            setClicked(styles.clicked)
        }
    }

    return (
        <div className={styles.skill_category_component} onClick={showDetail}>
            <div className={styles.skill_category}>
                {children}
                <div className={styles.skill_description}>
                    <h2 className={styles.section_title_min}>{title}</h2>
                    <span className={styles.section_subtitle_min}>{describe}</span>
                </div>
                <UilAngleDown size={35} className={styles.arrow + ' ' + clicked} />
            </div>
            {clicked &&
                <div className={styles.skill_detail}>
                    <SkillDetail skillList={skillList} />
                </div>
            }
        </div>
    );
};

export default SkillCategory;