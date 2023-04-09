"use client"
import { useState } from "react"
import { useDispatch } from "../_Store/Provider"

export default function Filterbar(callSort: Function | any, callChange: Function | any) {
    callSort = callSort? callSort : null;
    callChange = callChange? callChange : null;

    const [search, setSearch] = useState("")
    const dispatch = useDispatch();

    return (
        <div className="card w-min-700 bg-base-1000 m-3 shadow-xl image-full">
            <div className="card-body flex-row justify-between items-center">
                <h2 className="card-title">
                    <div className="dropdown dropdown-right dropdown-hover">
                        <button tabIndex={0} className="btn btn-secondary" >Name</button>
                        <div tabIndex={0} className="card compact dropdown-content shadow bg-base-100 rounded-box w-64">
                            <div className="card-body">
                                <p>Click to sort name!</p>
                            </div>
                        </div>
                    </div>
                </h2>

                <div className="card-actions justify-end dropdown dropdown-left">
                    <button tabIndex={0} className="btn btn-secondary">FILTER</button>
                    <div tabIndex={0} className="card compact dropdown-content shadow bg-base-100 rounded-box w-64">
                        <div className="card-body">
                            <input value={search} type="text" placeholder="Write here to filter!" className="input input-bordered input-primary w-full max-w-xs" onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
