import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <ul className='items-center'>
                <Link href='/'> <p className='p-2'>Home</p></Link>
                <Link href='/todolist'><p className='p-2'> Todolist </p></Link>
                <Link href='/apiusers'><p className='p-2'>Api User</p></Link>
            </ul>
        </div>
    )
}

export default Navbar
