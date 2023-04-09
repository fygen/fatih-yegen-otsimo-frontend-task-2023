"use client"
import { Fragment } from 'react';
import Loading from "../components/loading";
import { Meal, SvDataType } from "../_types/types"
import Filterbar from "../components/filterbar";
import { useStore } from "../_Store/Provider";
import MealCard from "../components/mealcard"

export default function StoreMealList() {
    const {meals} = useStore();
    return (
        <Fragment>
            <Filterbar />
            {meals ?
                meals.map((meal: Meal, idx: number) => <MealCard key={idx} { ...meal} />)
                : <Loading />
            }
        </Fragment>
    )

}
