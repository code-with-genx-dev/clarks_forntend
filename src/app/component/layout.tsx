"use client";
import { NavBar } from "@/components/NavBar";

interface LayoutProps {
    children: React.ReactNode;
}


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
