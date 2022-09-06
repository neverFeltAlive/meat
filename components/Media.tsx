import React, {FC} from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import styles from "../styles/Media.module.sass";

const Media: FC = () => {

    type iconProps = {
        children: JSX.Element,
        color: string
    }
    const icon = ({children, color}: iconProps): JSX.Element => {
        return (
            <h3>
                {children}
            </h3>
        )
    }

    return (
        <div className={styles.media}>
            <h2>Свяжитесь с нами в социальных сетях:</h2>
            <h4>Мы с радостью ответим на все ваши вопросы</h4>
            <div className={styles.media__links}>
                <h3>
                    <FaVk/>
                </h3>
                <h3>
                    <FaInstagram/>
                </h3>
                <h3>
                    <FaWhatsapp/>
                </h3>
                <h3>
                    <FaViber/>
                </h3>
                <h3>
                    <FaTelegramPlane/>
                </h3>
            </div>
        </div>
    );
};

export default Media;