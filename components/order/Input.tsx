import React, {FC} from 'react';
import styles from "../../styles/Input.module.sass";

interface InputProps {
    label: string,
    id: string
}
const Input: FC<InputProps> = ({label, id}) => {
    return (
        <div className={styles.input}>
            <label htmlFor="">{label}</label>
            <input type="text" id={id}/>
        </div>
    );
};

export default Input;