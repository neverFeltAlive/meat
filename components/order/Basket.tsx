import React, {FC} from 'react';
import styles from "../../styles/Basket.module.sass";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {removeProduct, selectProducts} from "../../features/products/productsSlice";
import Product from "./Product";


const meatOptions = [
    {
        name: "Баранина",
        parts: [
            {
                name: "На фарш",
                price: 300,
                mass: true,
            },
            {
                name: "Вырезка",
                price: 800,
                mass: false,
            },
            {
                name: "Нога",
                price: 500,
                mass: true,
            }
        ],
    },
    {
        name: "Свинина",
        parts: [
            {
                name: "На фарш",
                price: 300,
                mass: true,
            },
            {
                name: "Вырезка",
                price: 800,
                mass: false,
            },
            {
                name: "Нога",
                price: 500,
                mass: true,
            }
        ],
    },
    {
        name: "Говядина",
        parts: [
            {
                name: "На фарш",
                price: 300,
                mass: true,
            },
            {
                name: "Вырезка",
                price: 800,
                mass: false,
            },
            {
                name: "Нога",
                price: 500,
                mass: true,
            }
        ],
    }
]

const Basket: FC = () => {
    const products = useAppSelector(selectProducts);
    const dispatch = useAppDispatch();

    let cost = 0
    products.forEach((product) => {
        cost += product.quantity * meatOptions[product.meatOption].parts[product.meatPart].price;
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
                    <Product key={index} {...product} remove={removeHandler}/>
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