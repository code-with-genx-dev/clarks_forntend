"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const router = useRouter();
    const [formData , setFormData] = useState<any>({
        user_name:"",
        password:""
    })
    const handleChange = (fieldName:any,value:any) => {
        setFormData({...formData,[fieldName]:value})
    }
    return (
        <div className="bg-[url('/assets/common/login.svg')] h-[100vh] bg-no-repeat bg-cover w-screen grid grid-cols-3 overflow-auto">
            <div className="text-white col-span-2 flex flex-col justify-center pl-20">
                <p className="text-[44px] font-bold mb-2">Welcome, Admin!</p>
                <p className="text-[14px] pr-[200px]">
                    This portal is for authorized administrators only. Please log in to
                    manage and monitor the system securely.
                </p>
            </div>
            <div className='col-span-1 flex items-center justify-center'>
                <div className='bg-white/10 backdrop-blur-md flex flex-col gap-3 m-10 p-10 rounded-2xl !w-[400px] '>
                <img src="/assets/common/clarks-login.svg" alt="logo" className='h-[50px] mb-[25px]' />
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className='text-[#FFF] pl-[5px]'>User ID</label>
                    <input
                        type="email"
                        placeholder="Enter Email address"
                        className="text-black w-full py-2 focus:outline-none bg-white/5 backdrop-blur-md border border-[#999999] rounded-full px-4"
                        value={formData?.user_name}
                        onChange={(e) => {handleChange("user_name",e.target.value) }}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className='text-[#FFF] pl-[5px]'>Password</label>
                    <input
                        type="text"
                        placeholder="Enter Password"
                        className="text-black w-full py-2 focus:outline-none bg-white/5 backdrop-blur-md border border-[#999999] rounded-full px-4"
                        value={formData?.password} 
                        onChange={(e) => {handleChange("password",e.target.value) }}
                    />
                </div>
                <button className="w-full bg-[#DDDDDD] mt-[10px] px-4 py-2 rounded-full text-black font-semibold cursor-pointer" onClick={() => {router.push("/admin/panel")}}>
                    Login
                </button>
            </div>
            </div>
        </div>
    )
}

export default page