import {ReactNode} from "react";

export interface Meal {
    id: number
    name: string,
    ingredients: {
        name: string,
        quantity: number,
        quantity_type: string,
    }[],
}

export interface GroceryItem {
    name: string;
    groups?: string[];
    options: {
        name: string;
        quality: string;
        price: number;
        per_amount: string;
    }[];
}

export interface Task {
    id: number;
    text: string;
    done: boolean;
}

export interface Action {
    type: string;
    payload: SvDataType;
}

export interface SvDataType {
    meals: Meal[];
    ingredients: GroceryItem[];
}

export interface StoreProps {
    settings: {
        theme: string;
    }
    meals: Meal[];
    ingredients: GroceryItem[];
}

export interface ProviderProps {
    svdata: SvDataType;
    children: ReactNode;
}