import React, {FC, useState} from 'react';
import styles from "../../styles/ProductChoice.module.sass";
import Select from "./Select";
import {ProductPayload, addProduct} from "../../features/basket/basketSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectCatalog} from "../../features/catalog/catalogSlice";

const defaultValues: ProductPayload = {
    category: 0,
    item: 0,
    quantity: 1
}

const ProductChoice: FC = () => {
    const [values, setValues] = useState<ProductPayload>(defaultValues);
    const dispatch = useAppDispatch();
    const catalog = useAppSelector(selectCatalog);

    const setNextIndex = (length: number, current: number, key: string = "category") => {
        const index = (current === length - 1) ? 0 : ++current;
        setValues({...values, [key]: index});
    }
    const setPreviousIndex = (length: number, current: number, key: string = "category") => {
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
    console.log(catalog);

    const isMass = catalog[values.category].items[values.item] ? catalog[values.category].items[values.item].mass : true;
    return (
        <div className={styles.productChoice}>
            {catalog.map((category, index) => {
                if (values.category === index) {
                    return (
                        <div key={index} className={styles.productChoice__choiceContainer}>
                            <Select setNext={() => {
                                setNextIndex(catalog.length, values.category)
                            }} setPrevious={() => {
                                setPreviousIndex(catalog.length, values.category)
                            }}>
                                <p className={styles.productChoice__choice}>{category.name}</p>
                            </Select>
                        </div>
                    )
                }
            })}
            {catalog[values.category].items.map((item, index) => {
                if (values.item === index) {
                    return (
                        <div key={index} className={styles.productChoice__choiceContainer}>
                            <Select setNext={() => {
                                setNextIndex(catalog[values.category].items.length, values.item, "item")
                            }} setPrevious={() => {
                                setPreviousIndex(catalog[values.category].items.length, values.item, "item")
                            }}>
                                <div className={styles.productChoice__choice}>
                                    <p>{item.name}</p>
                                    <p className={styles.productChoice__price}>{item.price} <span
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
                <input type="number" step={isMass ? 0.1 : 1} className={styles.productChoice__quantityInput} value={values.quantity}
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