"use client"
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiUsers } from '../redux/slice'
import { useEffect } from 'react'

const Page = () => {

    const dispatch = useDispatch()
    const apiUserData = useSelector((data) => data.userData.userApiData)

    useEffect(() => {
        dispatch(fetchApiUsers())
    }, [])
    return (
        <div>
            <h2>Api User List</h2>



            {apiUserData.map((item) => {
                return <div key={item.id} className='border-r text-xl p-2  bg-sky-200'>
                    <h4>{item.name}</h4>
                    <h4>{item.email}</h4>


                </div>
            })}

            )

        </div>
    )
}

export default Page
