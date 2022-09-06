import React, {FC, useState} from 'react';
import styles from "../../styles/ProductChoice.module.sass";
import {FaShoppingBasket} from "react-icons/fa";
import Select from "./Select";
import {selectProducts, ProductPayload, addProduct} from "../../features/products/productsSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

//region Data
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
//endregion

const defaultValues: ProductPayload = {
    meatOption: 0,
    meatPart: 0,
    quantity: 1
}

const ProductChoice: FC = () => {
    const [values, setValues] = useState<ProductPayload>(defaultValues);
    const dispatch = useAppDispatch();

    const setNextIndex = (length: number, current: number, key: string = "meatOption") => {
        const index = (current === length - 1) ? 0 : ++current;
        setValues({...values, [key]: index});
    }
    const setPreviousIndex = (length: number, current: number, key: string = "meatOption") => {
        const index = (current === 0) ? length - 1 : --current;
        setValues({...values, [key]: index});
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        setValues({...values, quantity: Number(event.target.value)})
    }
    const handleProductAdd: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        dispatch(addProduct(values));
    }

    const isMass = meatOptions[values.meatOption].parts[values.meatPart].mass;
    return (
        <div className={styles.productChoice}>
            {meatOptions.map((option, index) => {
                if (values.meatOption === index) {
                    return (
                        <div key={index} className={styles.productChoice__choiceContainer}>
                            <Select setNext={() => {
                                setNextIndex(meatOptions.length, values.meatOption)
                            }} setPrevious={() => {
                                setPreviousIndex(meatOptions.length, values.meatOption)
                            }}>
                                <p className={styles.productChoice__choice}>{option.name}</p>
                            </Select>
                        </div>
                    )
                }
            })}
            {meatOptions[values.meatOption].parts.map((part, index) => {
                if (values.meatPart === index) {
                    return (
                        <div key={index} className={styles.productChoice__choiceContainer}>
                            <Select setNext={() => {
                                setNextIndex(meatOptions[values.meatOption].parts.length, values.meatPart, "meatPart")
                            }} setPrevious={() => {
                                setPreviousIndex(meatOptions[values.meatOption].parts.length, values.meatPart, "meatPart")
                            }}>
                                <div className={styles.productChoice__choice}>
                                    <p>{part.name}</p>
                                    <p className={styles.productChoice__price}>{part.price} <span
                                        className={styles.productChoice__measures}>&#8381;/ кг</span></p>
                                </div>
                            </Select>
                        </div>
                    )
                }
            })}
            <div className={styles.productChoice__quantity}>
                <p className={styles.productChoice__sliderName}>Количество <span
                    className={styles.productChoice__measures}>({(isMass) ? "кг" : "шт"})</span></p>
                <input type="number" step={meatOptions[values.meatOption].parts[values.meatPart].mass ? 0.1 : 1} className={styles.productChoice__quantityInput} value={values.quantity}
                       onChange={handleChange}/>
            </div>
            <button className={styles.productChoice__button} onClick={handleProductAdd}>Добавить продукт</button>
            <div className={styles.productChoice__note}>
                <p>*Если желаемого продукта нет в списке, пожалуйста, уточните по телефону</p>
            </div>
        </div>
    );
};

export default ProductChoice;