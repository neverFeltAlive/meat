import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import {CATALOG_COLLECTIONS} from "../../constants";

export interface Item{
    name: string,
    mass: boolean,
    price: number
}

export interface ItemPayload extends Item{
    category: string
}

interface Category{
    name: string,
    items: Item[]
}

interface CatalogState {
    categories: Category[],
}

const getInitialCategories = (): Category[] => {
    const categories: Category[] = [];

    for (const category in CATALOG_COLLECTIONS){
        categories.push({
            name: category,
            items: []
        })
    }
    return categories;
}

const initialState: CatalogState = {
    categories: getInitialCategories()
}

export const catalogSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ItemPayload>) => {
            const {category, ...item} = action.payload;
            state.categories.forEach((cat) => {
                if (cat.name == category){
                    cat.items.push(item);
                }
            });
        },
    }
})

export const {addItem} = catalogSlice.actions;
export const selectCatalog = (state: RootState) => state.catalog.categories;
export default catalogSlice.reducer;