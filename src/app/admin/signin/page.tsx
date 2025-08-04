"use client"
import SavePopup from '@/components/savePopup';
import { Response } from '@/utils/common-interfaces';
import { postMethod } from '@/utils/rest-apis';
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies';
import React, { useState } from 'react'

const page = () => {
    const router = useRouter();
    const cookies = parseCookies()
    const [formData, setFormData] = useState<any>({
        user_name: "",
        user_email: "",
        number: "",
        password: "",
        confrim_pass: "",
        isAdmin: "",
    });
    const [isShowPass, setIsShowPass] = useState<any>();
    const [isShowRePass, setIsShowRePass] = useState<any>();
    const [signInSuccess,setSignInSuccess] = useState<any>()
    function reset() {
        setFormData(
            {
                user_name: "",
                user_email: "",
                number: "",
                password: "",
                confrim_pass: "",
                isAdmin: "",
            }
        )
    }
    const handleChange = (fieldName: any, value: any) => {
        setFormData({ ...formData, [fieldName]: value })
    }
    const signIn = async () => {
        const payload = {
            user_name: formData?.user_name,
            user_email: formData?.user_email,
            mobile_number: formData?.number,
            password: formData?.password,
            confrim_pass: formData?.confrim_pass,
            isAdmin: formData?.isAdmin
        }
        const res: Response = await postMethod("/users/sign_up", payload)
        if (res.status == "success") {
            setSignInSuccess(true)
            reset();
            setTimeout(()=>{
                router.push("/admin/login")
                setSignInSuccess(false)
            },2000)

        }
    }
    return (
        <>
           { <div className="bg-[url('/assets/common/login.svg')] h-[100vh] bg-no-repeat bg-cover w-screen grid grid-cols-3 overflow-auto">
                <div className="text-white col-span-2 flex flex-col justify-center pl-20">
                    <p className="text-[44px] font-bold mb-2">Welcome, Admin!</p>
                    <p className="text-[14px] pr-[200px]">
                        This portal is for authorized administrators only. Please log in to
                        manage and monitor the system securely.
                    </p>
                </div>
                <div className='col-span-1 flex items-center justify-center'>
                    <div className='bg-white/10 backdrop-blur-md flex flex-col gap-3 m-10 p-10 rounded-2xl !w-[400px]  '>
                        <img src="/assets/common/clarks-login.svg" alt="logo" className='h-[50px] mb-[25px]' />
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className='text-[#FFF] pl-[5px]'>User Name</label>
                            <input
                                type="text"
                                placeholder="Enter User Name"
                                className="text-black w-full py-2 focus:outline-none bg-white/5 backdrop-blur-md border border-[#999999] rounded-full px-4"
                                value={formData?.user_name ?? ""}
                                onChange={(e) => { handleChange("user_name", e.target.value) }}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className='text-[#FFF] pl-[5px]'>User Email</label>
                            <input
                                type="email"
                                placeholder="Enter Email address"
                                className="text-black w-full py-2 focus:outline-none bg-white/5 backdrop-blur-md border border-[#999999] rounded-full px-4"
                                value={formData?.user_email ?? ""}
                                onChange={(e) => { handleChange("user_email", e.target.value) }}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className='text-[#FFF] pl-[5px]'>Phone Number</label>
                            <input
                                type="number"
                                placeholder="Enter Number"
                                className="text-black w-full py-2 focus:outline-none bg-white/5 backdrop-blur-md border border-[#999999] rounded-full px-4"
                                value={formData?.number ?? ""}
                                onWheel={(e) => e.currentTarget.blur()} // Prevent scrolling to change value
                                onKeyDown={(e) => {
                                    if (["e", "E", "+", "-"].includes(e.key)) {
                                        e.preventDefault(); // Prevent unwanted characters
                                    }
                                }}
                                onChange={(e) => { handleChange("number", e.target.value) }}
                            />
                        </div>
                        <div className="flex flex-col gap-1 relative">
                            <label htmlFor="" className='text-[#FFF] pl-[5px]'>Password</label>
                            <input
                                type={isShowPass ? "text" : "password"}
                                placeholder="Enter Password"
                                className="text-black w-full py-2 focus:outline-none bg-white/5  backdrop-blur-md border border-[#999999] rounded-full px-4"
                                value={formData?.password ?? ""}
                                onChange={(e) => { handleChange("password", e.target.value) }}
                            />
                            <span className="pr-4 absolute right-0 top-10" onClick={() => { setIsShowPass(!isShowPass) }}><i className={`text-[black] cursor-pointer pi ${isShowPass ? "pi-eye" : "pi-eye-slash"}`}></i></span>
                        </div>
                        <div className="flex flex-col gap-1 relative">
                            <label htmlFor="" className='text-[#FFF] pl-[5px]'>Re-enter Password</label>
                            <input
                                type={isShowRePass ? "text" : "password"}
                                placeholder="Enter Password"
                                className="text-black w-full py-2 focus:outline-none bg-white/5  backdrop-blur-md border border-[#999999] rounded-full px-4"
                                value={formData?.confrim_pass ?? ""}
                                onChange={(e) => { handleChange("confrim_pass", e.target.value) }}
                            />
                            <span className="pr-4 absolute right-0 top-10" onClick={() => { setIsShowRePass(!isShowRePass) }}><i className={`text-[black] cursor-pointer pi ${isShowRePass ? "pi-eye" : "pi-eye-slash"}`}></i></span>
                        </div>
                        <div className="flex items-center gap-1 mt-[8px]">
                            <input
                                id="isAdmin"
                                type="checkbox"
                                className="h-[20px] w-[20px] cursor-pointer"
                                checked={formData?.isAdmin ?? ""}
                                onChange={(e) => handleChange("isAdmin", e.target.checked)}
                            />
                            <label htmlFor="isAdmin" className="text-[#FFF] pl-[5px]">Is Admin?</label>
                        </div>

                        <button className="w-full bg-[#DDDDDD] mt-[10px] px-4 py-2 rounded-full text-black font-semibold cursor-pointer" onClick={() => signIn()}>
                            Login
                        </button>
                    </div>
                </div>
            </div>}
            {
                signInSuccess &&
                <>
                <SavePopup message={'Succes'} status={'success'}/>
                </>
            }
        </>
    )
}

export default page