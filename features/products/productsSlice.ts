import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface ProductPayload{
    meatOption: number,
    meatPart: number,
    quantity: number
}

interface Product extends ProductPayload{
    id: number,
}

interface ProductsState {
    products: [] | Product[]
}

const initialState: ProductsState = {
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {
        addProduct: (state, action: PayloadAction<ProductPayload>) => {
            let id = 0;

            try{
                if (state.products.length !== 0)
                    id = state.products[state.products.length - 1].id + 1;
            }
            catch (e) {
                console.log(e);
            }

            const product: Product = { ...action.payload, id};
            state.products = [...state.products, product];
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
    }
})

export const { addProduct, removeProduct } = productsSlice.actions
export const selectProducts = (state: RootState) => state.products.products;
export default productsSlice.reducer