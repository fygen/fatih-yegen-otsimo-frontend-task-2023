import { GroceryItem, Meal as MealType } from '../_types/types'
import { Fragment } from 'react'
import Image from 'next/image'
import { useStore } from '../_Store/Provider'

export default function Meal(meal: MealType) {
      const groceryItems = useStore().ingredients
      const ingNameArr = meal.ingredients.map(({ name }) => name)

      const get = (obj: any, ...selectors: any) =>
            [...selectors].map(s =>
                  s
                        .replace(/\[([^\[\]]*)\]/g, '.$1.')
                        .split('.')
                        .filter((t: any) => t !== '')
                        .reduce((prev: any, cur: any) => prev && prev[cur], obj)
            );

      const getPriceRange = (ingname: string) => {
            const arr: number[] = []
            groceryItems
                  .filter((o: any) => o.name === ingname)
                  .map((item: any) => item.options
                        .map((opt: any) => arr.push(opt.price)))
            return arr
      }

      return (
            <div key={meal.id} className="card bg-base-100 m-3 shadow-xl image-full">
                  <div className="card-body flex-row justify-between items-center">
                        <div className="card image-full">
                              <figure ><Image className="object-none rounded-[16px]"
                                    sizes="(max-width: 768px) 100vw,
                                          (max-width: 1200px) 50vw,
                                          33vw"
                                    fill={true}
                                    src={`/meals/bgless/${meal.name}.png`}
                                    alt="me" /></figure>
                              <h4 className="card-body card-title">{meal.name}</h4>
                        </div>
                        <ul>
                              {meal.ingredients.map((ingredient, idx: number) => (
                                    <Fragment key={idx}><p className="badge badge-outline whitespace-nowrap flex-initial w-33">{ingredient.name}</p></Fragment>
                              ))}
                        </ul>
                        <div className="flex flex-row justify-between items-center">
                              {meal.ingredients.map((ingredient, idx: number) => (
                                    <Fragment key={idx}><p className="badge badge-outline flex-initial w-33">{ingredient.name}</p> <ul className='border p-1 align-center rounded-md'>{getPriceRange(ingredient.name).map((elem, idx) => <li className='self-center' key={idx}>{elem}</li>)}</ul></Fragment>
                              ))}
                        </div>
                        <div className="card-actions justify-end flex-initial w-32">
                              <button className="btn btn-primary">Details</button>
                        </div>
                  </div>
            </div>
      )
}