import styles from '../../styles/Home.module.css';
import * as Unicons from '@iconscout/react-unicons';
import SkillCategory from './SkillCategory';

const Skills = () => {

    const skillFrontend = [
        {
            label: 'HTML',
            value: 90
        },
        {
            label: 'CSS',
            value: 80
        },
        {
            label: 'JS',
            value: 70
        },
        {
            label: 'React_JS',
            value: 90
        },
        {
            label: 'Angular_JS',
            value: 50
        }
    ];

    const skillBackend = [
        {
            label: 'node',
            value: 60
        },
        {
            label: 'Firebase',
            value: 40
        },
        {
            label: 'mysql',
            value: 60
        },
    ]

    return (
        <div className={styles.container + ' ' + styles.section} id="skills">
            <h2 className={styles.section_title}>Skills</h2>
            <span className={styles.section_subtitle}>Mon niveau technique</span>

            <div className={styles.skills_container}>
                <SkillCategory
                    title="Frontend"
                    describe="Secteur principale"
                    skillList={skillFrontend}>
                    <Unicons.UilBracketsCurly size={40} className={styles.main_color} />
                </SkillCategory>

                <SkillCategory
                    title="Backend"
                    describe="Connaissance basique"
                    skillList={skillBackend}>
                    <Unicons.UilServerNetwork size={40} className={styles.main_color} />
                </SkillCategory>
            </div>
        </div>
    );
};

export default Skills;