import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import {DEBUG} from "../../constants";

export interface ProductPayload{
    category: number,
    item: number,
    quantity: number
}

interface Product extends ProductPayload{
    id: number,
}

interface BasketState {
    products: [] | Product[]
}

const initialState: BasketState = {
    products: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,

    reducers: {
        addProduct: (state, action: PayloadAction<ProductPayload>) => {
            let id = 0;

            try{
                if (state.products.length !== 0)
                    id = state.products[state.products.length - 1].id + 1;
            }
            catch (e) {
                if (DEBUG) console.log(e);
            }

            const product: Product = { ...action.payload, id};
            state.products = [...state.products, product];
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
    }
})

export const { addProduct, removeProduct } = basketSlice.actions
export const selectProducts = (state: RootState) => state.basket.products;
export default basketSlice.reducer