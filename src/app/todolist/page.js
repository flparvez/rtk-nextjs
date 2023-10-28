
"use client"
import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { addTodos } from '../redux/todoSlice'



const Page = () => {

    const [todo, setTodo] = useState("")
    const todoData = useSelector((data) => data.todosData.todos)

    const dispatch = useDispatch();

    const todosDispatch = () => {
        dispatch(addTodos(todo));
    };



    return (
        <div className='border border-red-200'>
            <div className="mb-4">
                <input onChange={(e) => setTodo(e.target.value)} type="text" id="name" name="name"
                    className="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Add Todos" />
            </div>




            <button type="submit" onClick={todosDispatch}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500">Add Todo</button>

            <Link href='/removeuser'> <h2>Remove Todos</h2> </Link>

            <h5>Todo List</h5>
            {
                todoData.length && todoData.map((item) => {
                    return <div>
                        <h4 key={item.id}>{item.name}</h4>
                    </div>
                })
            }

        </div>

    )
}

export default Page
