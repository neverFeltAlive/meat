import React, {FC, useState} from 'react';
import styles from "../../styles/Cart.module.sass";
import Input from "./Input";
import Select from "./Select";
import {CREDENTIALS} from "../../constants";

interface OrderValues{
    name: null | string,
    delivery: null | string,
}

const defaultValues = {
    name: null,
    delivery: null
}

const Cart: FC = () => {
    const [values, setValues] = useState<OrderValues>(defaultValues);

    const setDeliveyOption = () => {
        const option = values.delivery === null ? "" : null;
        setValues({...values, delivery: option});
    }

    const deliveryOption = (values.delivery !== null ? <p>Доставка</p> : <p>Самовывоз</p>)

    return (
        <div className={styles.cart}>
            <Input label="Имя:" id="name"/>
            <Input label="Номер телефона:" id="phone_number"/>
            <div className={styles.cart__time}>
                <label>Дата:</label>
                <input id="date" type="date"/>
            </div>
            <div className={styles.cart__time}>
                <label>Время:</label>
                <input id="date" type="time"/>
            </div>
            <div className={styles.cart__choiceContainer}>
                <Select setNext={() => {
                    setDeliveyOption()
                }} setPrevious={() => {
                    setDeliveyOption()
                }}>
                    <div className={styles.cart__choice}>
                        {deliveryOption}
                    </div>
                </Select>
            </div>
            <div className={styles.cart__address}>
                {values.delivery !== null && (
                    <Input label="Ваш адрес:" id="address"/>
                )}
                {values.delivery === null && (
                    <h3>{CREDENTIALS.ADDRESS}</h3>
                )}
            </div>
            <button className={styles.cart__button}>Оформить заказ</button>
        </div>
    );
};

export default Cart;