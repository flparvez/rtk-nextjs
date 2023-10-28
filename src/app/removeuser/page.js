"use client"
import Link from 'next/link'
import React from 'react'
import { removeUser } from '../redux/slice';
import { useDispatch, useSelector } from 'react-redux'


const Page = () => {
    const userData = useSelector((data) => data.userData.users)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Remove Page User</h2>

            <Link href={'/'}>Home</Link>
            {
                userData.map((item) => {
                    return <div className='border-r text-xl p-2  bg-sky-200'>
                        <span className='font-bold mr-2'>{item.name}</span>

                        <button onClick={() => dispatch(removeUser(item.id))} className='ml-2 text-sm'>Remove</button>
                    </div>
                })
            }
        </div>
    )
}

export default Page
