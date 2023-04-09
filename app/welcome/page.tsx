import Link from "next/link";
import { Navbar } from "../components/navbar";

export const metadata = {
    title: 'Home',
    description: 'Welcome to the PizzaPage',
};

export default function Page() {
    return (
        <main >
            <Navbar />
            
        </main>
    )
}