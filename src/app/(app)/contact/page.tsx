/* eslint-disable @typescript-eslint/no-explicit-any */
import allUser from '@/actions/user/alluser.action'
import loginUser from '@/actions/user/login.action'
import React from 'react'

const ContactPage = async () => {
    const data = await allUser();
    // console.log("data", data)
    return (
        <div>
            <div className='flex justify-center my-5'>
                <form className='space-y-5' action={loginUser}>
                    <div>
                        <label className='block text-sm font-bold'>User Name</label>
                        <input name='user-name' type="text" className='appearance-none outline outline-amber-400 border border-amber-300 py-1 px-4' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Password</label>
                        <input name='password' type="text" className='appearance-none outline outline-amber-400 border border-amber-300 py-1 px-4' />
                    </div>
                    <button type='submit' className='bg-amber-300 p-2 rounded-xl w-full'>Submit</button>
                </form>
            </div>
            <div className='mt-10 grid grid-cols-5 gap-10'>
                {
                    data.map((item: any) =>
                        <div className='bg-gray-100 p-4 rounded-xl' key={item.id}>
                            <h3>{item.name}</h3>
                            <p>email: {item.email}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ContactPage
