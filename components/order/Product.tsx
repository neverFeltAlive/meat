import React, {FC} from 'react';
import {ProductPayload} from "../../features/products/productsSlice";
import styles from "../../styles/Product.module.sass";
import {FaTimes} from "react-icons/fa";

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

interface ProductProps extends ProductPayload{
    remove: React.MouseEventHandler<HTMLButtonElement>
}
const Product: FC<ProductProps> = ({meatOption, meatPart, quantity, remove}) => {
    return (
        <div className={styles.product}>
            <p>{meatOptions[meatOption].name}</p>
            <p>{meatOptions[meatOption].parts[meatPart].name}</p>
            <p>{quantity}</p>
            <p>{meatOptions[meatOption].parts[meatPart].price * quantity}</p>
            <button onClick={remove}><FaTimes/></button>
        </div>
    );
};

export default Product;