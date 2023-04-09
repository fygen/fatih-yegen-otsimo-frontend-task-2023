import {Meal , GroceryItem } from "../_types/types"
import getData from "./get"

export async function getAllData() {
    const meals: Meal[] = await getData("https://apis.career.otsimo.xyz/api/restaurant/listMeals")
    const ingredients : GroceryItem[] = await getData("https://apis.career.otsimo.xyz/api/restaurant/listIngredients")
    return {meals, ingredients}
}

export async function getAllMeals() {
    const meals: Meal[] = await getData("https://apis.career.otsimo.xyz/api/restaurant/listMeals")
    return meals;
}

export async function getAllIngredients() {
    const ingredients : GroceryItem[] = await getData("https://apis.career.otsimo.xyz/api/restaurant/listIngredients")
    return ingredients;
}