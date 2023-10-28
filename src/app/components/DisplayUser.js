"use client"
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice';

const DisplayUser = () => {
    const userData = useSelector((data) => data.users);
    const dispatch = useDispatch()
    // console.log(userData)
    return (
        <div className='border border-red-300 overflow-scroll h-40'>
            <h2 className=' font-bold'>User List</h2>
            {userData.map((data) => {
                return <div className='border-r text-xl p-2  bg-sky-200'>
                    <span className='font-bold mr-2'>{data.name}</span>

                    <button onClick={() => dispatch(removeUser(data.id))} className='ml-2 text-sm'>Remove</button>
                </div>
            })}
        </div>
    )
}

export default DisplayUser
