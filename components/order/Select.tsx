import React, {FC} from 'react';
import styles from "../../styles/Select.module.sass";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface SliderProps {
    children: JSX.Element,
    setNext: () => void,
    setPrevious: () => void,
}

const Select: FC<SliderProps> = ({children, setNext, setPrevious}) => {
    return (
        <div className={styles.slider}>
            <button
                className={styles.slider__button}
                onClick={(event) => {event.preventDefault(); setPrevious()}}
            >
                <ArrowBackIosNewIcon/>
            </button>
            <div className={styles.slider__container}>
                {children}
            </div>
            <button
                className={styles.slider__button}
                onClick={(event) => {event.preventDefault(); setNext()}}
            >
                <ArrowForwardIosIcon/>
            </button>
        </div>
    );
};

export default Select;