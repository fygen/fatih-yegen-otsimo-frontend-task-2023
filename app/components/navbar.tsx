import React from "react";
import Link from "next/link";

export function Navbar({ }) {
    return (
        <div data-theme="black" className="navbar bg-base-100">
            <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-ghost hover:text-amber-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 w-30 ">
                    <li><Link className="hover:text-amber-500" href="./home"> Home </Link></li>
                    <li><Link className="hover:text-amber-500" href="./menu"> Menu </Link></li>
                    <li><Link className="hover:text-amber-500" href="./about"> About </Link></li>
                </ul>
            </div>
            <div className="flex-1 justify-center">
                <a className="btn btn-ghost normal-case text-xl focus:text-amber-500 hover:text-amber-500 hover:text-4xl">Pizzacı Abi</a>
            </div>
            <div className="flex-none" >
                <div className="dropdown dropdown-hover dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-square hover:btn-circle hover:text-amber-500 hover:animate-pulse hover:rotate-90" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="pl-3 h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 500 500"  >
                            <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path id="1" fill="currentColor" d="m106.18 0c-22.377 2.504-103.75 39.697-106.13 231.48-2.4968 202.02 83.753 244.52 106.37 244.07v-133.44c-18.617 0-22.363-20.27-26.617-62.11-2.815-27.68-3.636-61.94 0-96 2.552-23.89 7-47.22 26.497-47.22l-0.12-136.78z" />
                                <path id="2" fill="currentColor" d="m154.43 475.78c8.62 0 14.81-7.03 14.81-14.9l0.06-0.06s-0.06-104-0.06-104.07c0-8.25-6.69-14.75-14.81-14.75h-37.8v133.78s37.71 0.06 37.74 0.03l0.06-0.03z" />
                                <path id="3" fill="currentColor" d="m154.43 136.78c8.62 0 14.81-7.03 14.81-14.9l0.06-0.06s-0.06-107-0.06-107.07c0-8.246-6.69-14.75-14.81-14.75h-37.8v136.78s37.71 0.06 37.74 0.03l0.06-0.03z" />
                            </g>
                        </svg>
                    </label>
                    <p tabIndex={0} className="menu menu-compact dropdown-content ml-2 p-2 bg-base-100 w-80 content-center"> Hier ist my nummer: +90 505 034 0009 </p>
                </div>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
            </div>
        </div>
    );
}
