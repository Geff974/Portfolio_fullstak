import styles from '../../styles/Home.module.css'

const SkillDetail = ({ skillList }) => {

    return (
        <div>
            {skillList.map((skill, k) => {
                return (
                    <div className={styles.skill_list} key={k}>

                        <div className={styles.skill_data}>
                            <div className={styles.skill_label}>
                                {skill.label}
                            </div>
                            <div className={styles.skill_value}>
                                {skill.value}%
                            </div>
                        </div>

                        <div className={styles.skill_bar}>
                            <span className={styles.skill_percentage + ' ' + `skill_${skill.label}`}></span>
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
};

export default SkillDetail;