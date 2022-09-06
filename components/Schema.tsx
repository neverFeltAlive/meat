import React, {FC} from 'react';
import styles from "../styles/Schema.module.sass";

const Schema: FC = () => {
    return (
        <>
            <div className={styles.schema__container}>
                <div className={styles.schema}>
                    <div className={styles.schema__text}>
                        <h1>Название</h1>
                        <h3>Только наша компания такая, какая она есть. Именно поэтому вы купите наш товар.</h3>
                    </div>
                </div>
            </div>
            <div className={styles.schema__line}></div>
        </>
    );
};

export default Schema;