import React, {FC, useRef} from 'react';
import {AnimatePresence, motion, useCycle, useScroll} from "framer-motion";
import {MenuToggle} from "./MenuToggle";
import {useDimensions} from "../../hooks/useDimentions";
import {MenuItem} from "./MenuItem";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import CommentIcon from "@mui/icons-material/Comment";
import styles from "../../styles/Header.module.scss";

const variantsBackground = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: `circle(30px at 40px 40px)`,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const variantsMenu = {
    open: {
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1}
    }
};

const itemsMenu = [
    {
        icon: <ShoppingBasketIcon/>,
        text: "Сделать заказ"
    },
    {
        icon: <PhoneCallbackIcon/>,
        text: "Заказать звонок"
    },
    {
        icon: <CommentIcon/>,
        text: "Оставить отзыв"
    }
]

const Header: FC = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const {height} = useDimensions(containerRef);
    const { scrollYProgress } = useScroll();

    return (
        <motion.header
            className={styles.header}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
            <motion.div className={styles.header__background} variants={variantsBackground}/>
            {isOpen && (
                    <motion.ul
                        className={styles.header__menu}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0}}
                        variants={variantsMenu}
                    >
                        <AnimatePresence>
                            {itemsMenu.map((item, index) => (
                                <MenuItem colorIndex={index} key={index} text={item.text} icon={item.icon}/>
                            ))}
                        </AnimatePresence>
                    </motion.ul>
            )}
            <div className={styles.header__button}>
                <MenuToggle toggle={() => toggleOpen()}/>
            </div>
            <div className={styles.header__progress}>
                <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="20" pathLength="1" className={styles.header__progressBackground} />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="20"
                        pathLength="1"
                        className={styles.header__progressIndicator}
                        style={{ pathLength: scrollYProgress }}
                    />
                </svg>
            </div>
        </motion.header>
    );
};

export default Header;