
"use client"
import React, { useState } from 'react'
import { addUser } from '../redux/slice'
import { useDispatch } from 'react-redux'
import Link from 'next/link'



const Adduser = () => {

    const [name, setname] = useState("")
    const dispatch = useDispatch();

    const userDispatch = () => {
        dispatch(addUser(name));
    };
    return (
        <div className='border border-red-200'>
            <div className="mb-4">





                <input onChange={(e) => setname(e.target.value)} type="text" id="name" name="name"
                    className="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Add User" />
            </div>




            <button type="submit" onClick={userDispatch}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500">Submit</button>

            <Link href='/removeuser'> <h2>Remove User</h2> </Link>
        </div>

    )
}

export default Adduser
