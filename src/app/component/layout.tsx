"use client";
import { getRandomTailwindBgColor, getShortName } from "@/utils/common-function";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";

interface LayoutProps {
    children: React.ReactNode;
}
const NavBar = () => {
  const router = useRouter();
  const cookies = parseCookies();
  const isAdmin = cookies?.is_admin;

  console.log(isAdmin, "isAdmin")
  const is_Admin: any = cookies?.is_admin;
  const [showAdmin, setShowAdmin] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<any>({})
  useEffect(() => {
    const checkAdmin = async () => {
      const user_name = cookies?.user_name;
      const access_token = cookies?.access_token;
      setShowAdmin(is_Admin);
      setUserDetails({
        user_name,
        access_token
      })
    };

    checkAdmin();
  }, []);
  return (
    <div className="flex w-full items-center justify-between fixed top-0 left-0 right-0 h-[60px] px-2 pr-4 bg-white/50 backdrop-blur-sm z-50 shadow-lg">
      <img src="/assets/clarks-logo.svg" alt="Clarks Logo" className="h-[50px]" />
      <div className="flex items-center gap-10 text-[16px] font-bold">
        <p className="hover:text-[#953F00] cursor-pointer" onClick={() => router.push('/home')}>HOME</p>
        <a href="/home#component" className="hover:text-[#953F00] cursor-pointer" >COMPONENTS</a>
        <a href="/home#others" className="hover:text-[#953F00] cursor-pointer">OTHER SEGMENTS</a>
        {showAdmin && <p className="hover:text-[#953F00] cursor-pointer" onClick={() => router.push('/admin/panel')}>ADMIN</p>}
        {userDetails?.access_token && <div className='flex gap-2 items-center border border-[#606060] px-3 py-1 rounded-[24px] cursor-pointer' >
          <i className="pi pi-sign-out"></i>
          <p className='text-black text-[14px]'>LOGOUT</p>
          <div className={`${getRandomTailwindBgColor()} h-[35px] w-[35px] flex items-center justify-center rounded-full`}>
            {getShortName(userDetails?.user_name ?? "") || ""}
          </div>
        </div>}
      </div>
    </div>
  );
};

const LayoutWithNav: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#ffffff]">
            <NavBar />
            <div className="">
                <main>{children}</main>
            </div>
        </div>
    );
};

export default LayoutWithNav;
