import { getRandomTailwindBgColor, getShortName } from "@/utils/common-function";
import { clearUserDataFromCookies } from "@/utils/cookies";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

export const NavBar = () => {
    const router = useRouter();
    const cookies = parseCookies();
    const [showAdmin, setShowAdmin] = useState<any>(false);
    const [userDetails, setUserDetails] = useState<any>({})
    useEffect(() => {
        const checkAdmin = async () => {
            const is_Admin: any = cookies?.is_admin;
            const user_name = cookies?.user_name;
            const access_token = cookies?.access_token;
            console.log(is_Admin,"is_Admin")
            setShowAdmin(is_Admin);
            setUserDetails({
                user_name,
                access_token
            })
        };

        checkAdmin();
    }, []);
    const [logOutPop , setLogOutPop] = useState<boolean>();
    function handleLogOut() {
        setLogOutPop(true)
    }
    return (
       <>
        <div className="flex w-full items-center justify-between fixed top-0 left-0 right-0 h-[60px] px-2 pr-4 bg-white/50 backdrop-blur-sm z-50 shadow-lg">
            <img src="/assets/clarks-logo.svg" alt="Clarks Logo" className="h-[50px]" />
            <div className="flex items-center gap-10 text-[16px] font-bold text-[#222]">
                <p className="hover:text-[#953F00] cursor-pointer" onClick={() => router.push('/home')}>HOME</p>
                <a href="/home#component" className="hover:text-[#953F00] cursor-pointer" >COMPONENTS</a>
                <a href="/home#others" className="hover:text-[#953F00] cursor-pointer">OTHER SEGMENTS</a>
                {showAdmin == "true" && <p className="hover:text-[#953F00] cursor-pointer" onClick={() => router.push('/admin/panel')}>ADMIN</p>}
                {userDetails?.access_token && <div className='flex gap-2 items-center border border-[#606060] px-3 py-1 rounded-[24px] cursor-pointer' onClick={()=>handleLogOut()}>
                    <i className="pi pi-sign-out"></i>
                    <p className='text-black text-[14px]'>LOGOUT</p>
                    <div className={`${getRandomTailwindBgColor()} h-[35px] w-[35px] flex items-center justify-center rounded-full`}>
                        {getShortName(userDetails?.user_name ?? "") || ""}
                    </div>
                </div>}
            </div>
        </div>
        {
            logOutPop &&
            <div className="fixed inset-0 bg-black/20  flex justify-center items-center z-50">
                <div className="bg-white p-8 rounded-[12px] shadow-lg w-[450px]  transform transition-all duration-300 scale-95 opacity-0 animate-popup">
                    <div className='w-full flex flex-col gap-3'>
                        <p className='flex justify-center'>Are you sure you want to log out?</p>
                        <div className='flex gap-4 justify-center items-center'>
                            <button className='px-3 py-1 rounded-[4px] bg-[#0873CD] text-[#fff] cursor-pointer' onClick={() =>{router.push("/home");clearUserDataFromCookies();setLogOutPop(false)}} >Yes</button>
                            <button className='px-3 py-1 rounded-[4px]  bg-[#1c1c1d] text-[#fff] cursor-pointer' onClick={()=>setLogOutPop(false)} >Back</button>
                        </div>
                    </div>
                </div>
            </div>
        }
       </>
    );
};
