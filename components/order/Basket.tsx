import React, {FC, useEffect} from 'react';
import styles from "../../styles/Basket.module.sass";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {removeProduct, selectProducts} from "../../features/basket/basketSlice";
import {selectCatalog} from "../../features/catalog/catalogSlice";
import {FaTimes} from "react-icons/fa";

const Basket: FC = () => {
    const products = useAppSelector(selectProducts);
    const catalog = useAppSelector(selectCatalog);
    const dispatch = useAppDispatch();

    useEffect(() => {

    }, [catalog])

    let cost = 0
    products.forEach((product) => {
        cost += catalog[product.category].items[product.item].price * product.quantity
    })

    return (
        <div className={styles.basket}>
            <div className={styles.basket__header}>

            </div>
            {products.map((product, index) => {
                const removeHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
                    event.preventDefault();
                    dispatch(removeProduct(product.id))
                }

                return (
                    <div key={index} className={styles.basket__product}>
                        <p>{catalog[product.category].name}</p>
                        <p>{catalog[product.category].items[product.item].name}</p>
                        <p>{product.quantity}</p>
                        <p>{catalog[product.category].items[product.item].price * product.quantity}</p>
                        <button onClick={removeHandler}><FaTimes/></button>
                    </div>
                )
            })}
            {products.length > 0 && (
                <div className={styles.basket__footer}>
                    <h3>Приблизительный итог: <span>{cost} &#8381;</span></h3>
                </div>
            )}
        </div>
    );
};

export default Basket;