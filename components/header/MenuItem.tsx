import * as React from "react";
import { motion } from "framer-motion";
import {FC} from "react";
import styles from "../../styles/MenuItem.module.sass"

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    close: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

interface MenuItemProps {
    colorIndex: number,
    text: string,
    icon: JSX.Element,
}
export const MenuItem: FC<MenuItemProps> = ({ colorIndex , text, icon}) => {
    // const style = { color: `${COLORS[colorIndex]}` };
    return (
        <motion.li
            className={styles.menuItem}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <p className={styles.menuItem__icon}>{icon}</p>
            {/*<p className={styles.menuItem__text}>{text}</p>*/}
        </motion.li>
    );
};