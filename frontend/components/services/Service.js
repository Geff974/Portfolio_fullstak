import styles from '../../styles/Home.module.css';
import { UilArrowRight, UilCheckCircle, UilTimes } from '@iconscout/react-unicons';
import { useState } from 'react';

const Service = ({ title, describeList, children }) => {

    const [detail, setDetail] = useState(false);
    const titleSplit = title.split(' ');

    const showDetail = () => {
        setDetail(!detail);
    }

    return (
        <div className={styles.service_component}>
            <div className={styles.service_icon}>
                {children}
            </div>

            <h4 className={styles.service_title}>{titleSplit[0]} <br/> {titleSplit[1]}</h4>

            <p className={styles.service_more + ' ' + styles.main_color} onClick={showDetail}>Voir plus <UilArrowRight size={20} /> </p>

            {detail &&
                <div className={styles.service_describe}>
                    <div className={styles.service_describe_content}>

                        <div className={styles.service_describe_title}>
                            <h3>{titleSplit[0]} <br/> {titleSplit[1]}</h3>
                            <span className={styles.service_describe_close} onClick={showDetail}> <UilTimes /> </span>
                        </div>
                        <ul>
                            {describeList.map((item, k) => {
                                return (
                                    <li key={k}>
                                        <UilCheckCircle size={25} className={styles.service_describe_icon} />
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
};

export default Service;