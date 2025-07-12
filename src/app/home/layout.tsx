"use client";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const NavBar = () => {
  return (
    <div className="flex w-full items-center justify-between fixed top-0 left-0 right-0 h-[60px] px-2 pr-4 bg-white/50 backdrop-blur-sm z-50 shadow-lg">
      <img src="/assets/clarks-logo.svg" alt="Clarks Logo" className="h-[50px]" />
      <div className="flex items-center gap-10 text-[16px] font-bold">
        <p className="hover:text-[#953F00] cursor-pointer">HOME</p>
        <p className="hover:text-[#953F00] cursor-pointer">COMPONENTS</p>
        <p className="hover:text-[#953F00] cursor-pointer">OTHER SEGMENTS</p>
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
