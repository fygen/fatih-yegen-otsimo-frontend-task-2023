import { Provider, useStore, useDispatch } from "./_Store/Provider";
import Loading from './components/loading';
import { Navbar } from './components/navbar';
import Link from 'next/link';
import Filterbar from './components/filterbar';
import { getAllData } from "./api/getAllData";
import { SvDataType } from "./_types/types";
import allData from "./_wastejson/allDATA.json";
import CSRender_MealList from "./_CSRender_pageparts/mealList";
import StoreMealList from "./_fromStore_pageparts/mealList";


/* import Content from './welcome.mdx'; */

export const metadata = {
    title: 'fatih-yegen-otsimo-frontend-task-2023',
    description: 'fatih-yegen-otsimo-frontend-task-2023',
};


export default async function Page() {
    const response: SvDataType = await allData ?? await getAllData();
    /* const dispatch = useDispatch(); */

    return (
        <Provider svdata={response}>
            <main>
                <Navbar />
                {<StoreMealList />}
                {/* <CSRender_MealList /> */}
            </main>
        </Provider>
    )
}