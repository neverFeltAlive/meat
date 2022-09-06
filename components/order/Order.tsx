import React, {FC, useState} from 'react';
import styles from "../../styles/Order.module.sass";
import ProductChoice from "./ProductChoice";
import Basket from "./Basket";
import Cart from "./Cart";


const pages = [
    <ProductChoice key={0}/>,
    <Cart key={1}/>
]

const titles = ["Выбрать продукты:", "Оформить заказ:"];
const buttons = ["Перейти к оформлению", "Добавить ещё"];

const Order: FC = () => {
    const [page, setPage] = useState(0);
    const nextPage = (page + 1) % pages.length;

    const handlePage: React.MouseEventHandler = (event) => {
        event.preventDefault();
        setPage(nextPage);
    }

    return (
        <section className={styles.order}>
            <h2>Сделать заказ</h2>
            <h4>У нас вы всегда сможете заказать самое свежее мясо</h4>

            <div className={styles.order__container}>
                <div className={styles.order__left}>
                    <div className={styles.order__button} onClick={handlePage}>
                        <div className={styles.order__header}><h3>{titles[nextPage]}</h3></div>
                    </div>

                    <div className={styles.order__checkIn}>
                        <div className={styles.order__header}><h3>{titles[page]}</h3></div>
                        {pages[page]}
                    </div>
                </div>

                <div className={styles.order__right}>
                    <div className={styles.order__header}><h3>Ваш заказ:</h3></div>
                    <Basket/>
                    <div className={styles.order__footer}>
                        <button onClick={handlePage}>{buttons[page]}</button>
                        <p>*Точную цену вам скажут после подтверждения заказа</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;