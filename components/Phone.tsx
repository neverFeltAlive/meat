import React, {FC} from 'react';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import {CREDENTIALS} from "../constants";
import styles from "../styles/Phone.module.sass";

const Phone: FC = () => {
    return (
        <h3 className={styles.phone}>
            <a>
                <PhoneEnabledIcon className={styles.phone__icon}/>
                <span className={styles.phone__number}>{CREDENTIALS.PHONE}</span>
            </a>
        </h3>
    );
};

export default Phone;