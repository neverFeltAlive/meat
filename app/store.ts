import { configureStore } from '@reduxjs/toolkit'
import {basketSlice} from "../features/basket/basketSlice";
import {catalogSlice} from "../features/catalog/catalogSlice";

export const store =  configureStore({
    reducer: {
        basket: basketSlice.reducer,
        catalog: catalogSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch