import React, {FC, useState} from 'react';
import styles from "../../styles/Order.module.sass";
import ProductChoice from "./ProductChoice";

import Cart from "./Cart";

const Order: FC = () => {
    return (
            <section className={styles.order}>
                <h2>Сделать заказ</h2>
                <h4>У нас вы всегда сможете заказать самое свежее мясо</h4>

                <div className={styles.order__container}>
                    <div className={styles.order__left}>
                        <ProductChoice/>
                    </div>
                    <div className={styles.order__right}>
                        <Cart/>
                    </div>
                </div>
            </section>
    );
};

export default Order;