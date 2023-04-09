"use client"

import { createContext, useContext, useEffect, useReducer } from 'react';
import { SvDataType, Action, StoreProps, ProviderProps } from '../_types/types';

const initialStore: StoreProps = {
  settings: {
    theme: "coffee"
  },
  meals: [
    {
      id: 1,
      name: "Rice and chicken bowl",
      ingredients: [
        {
          name: "Rice",
          quantity: 120,
          quantity_type: "gram"
        },
        {
          name: "Chicken",
          quantity: 85,
          quantity_type: "gram"
        }
      ],
    },
  ],
  ingredients: [
    {
      name: "Rice",
      groups: [
        "vegan",
        "vegetarian"
      ],
      options: [
        {
          name: "Long grain white rice",
          quality: "high",
          price: 3,
          per_amount: "kilogram"
        },
      ]
    },
  ]
};



const Context = createContext<SvDataType>(initialStore);
const DispatchContext = createContext<React.Dispatch<Action> | null>(null);





export function Provider({ svdata, children }: ProviderProps) {
  const sv_Data = svdata;
  const [store, dispatch] = useReducer(
    Reducer,
    initialStore
  );
  useEffect(() => {
    sv_Data && dispatch({ type: "setdata", payload: sv_Data });
  }, [sv_Data])

  return (
    <Context.Provider value={store}>
      <DispatchContext.Provider value={dispatch}>
        <>
          {children}
        </>
        {/* {<div><pre>{sv_Data ? JSON.stringify(sv_Data, null, 4) : "yok"}</pre></div>} */}
      </DispatchContext.Provider>
    </Context.Provider>
  );
}

export function useStore() {
  return useContext(Context);
}

export function useDispatch() {
  return useContext(DispatchContext);
}

function Reducer(store: StoreProps, action: Action): StoreProps {

  switch (action.type) {
    case 'setdata': {
      const { meals, ingredients } = action.payload;
      return { ...store, meals, ingredients }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
