"use client"
import Image from "next/image";
import { Fragment, useEffect, useState } from 'react';
import Loading from "../components/loading";
import { Meal } from "../_types/types"
import Filterbar from "../components/filterbar";
import MealCard from "../components/mealcard";

export default function CsrMealList() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch("https://apis.career.otsimo.xyz/api/restaurant/listMeals")
            .then(response => response.json())
            .then(data => setMeals(data));
    }, []);


    return (
        <Fragment>
            <Filterbar />
            {meals ?
                meals.map((meal: Meal, idx: number) => <MealCard key={idx} {...meal} />)
                : <Loading />
            }
        </Fragment>
    )

}

// export function Meal(meal: Meal) {

//     return (
//         <div key={meal.id} className="card bg-base-100 m-3 shadow-xl image-full">
//             {/* <figure><Image src="/template.jpg" alt="me" width="64" height="64" /></figure> */}
//             <div className="card-body flex-row justify-between items-center">
//                 <div className="card image-full">
//                     <figure ><Image className="object-none rounded-[16px]" fill={true} sizes="(max-width: 768px) 100vw,
//               (max-width: 1200px) 50vw,
//               33vw" src={`/meals/bgless/${meal.name}.png`} alt="me" /></figure>
//                     <h4 className="card-body card-title">{meal.name}</h4>
//                 </div>
//                 <ul>
//                     {
//                         meal.ingredients.map((ingredient, idx: number) => (
//                             <Fragment key={idx}><p className="badge badge-outline whitespace-nowrap flex-initial w-33">{ingredient.name}</p></Fragment>
//                         ))
//                     }
//                 </ul>
//                 <div className="card-actions justify-end flex-initial w-32">
//                     <button className="btn btn-primary">Details</button>
//                 </div>
//             </div>
//         </div>
//     )
// }