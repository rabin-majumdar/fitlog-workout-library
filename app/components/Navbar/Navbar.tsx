'use client'

import { WorkoutContext } from '@/app/context/WorkoutContext';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "@/public/assets/logo.png"
import { usePathname } from "next/navigation";
import { useContext } from 'react';

export default function Navbar() {

    const pathname = usePathname();
    const context = useContext(WorkoutContext)

    if (!context) {
        throw new Error("Navbar must be used inside WorkoutProvider");
    }

    const links = (
        <>
            <li>
                <Link href={'/'} className={`rounded-full px-6 py-2 transition-all inline-block
                    ${pathname === "/"
                        ? "bg-[#1A2312] text-[#C2F800] font-semibold "
                        : "text-[#9CA3AF] hover:text-white font-medium"
                    }`} >
                    Workouts
                </Link>
            </li>

            <li>
                <Link href={'/my-plan'} className={`rounded-full px-6 py-2 transition-all inline-block
                ${pathname === "/my-plan"
                        ? "bg-[#1A2312] text-[#C2F800] font-semibold "
                        : "text-[#9CA3AF] hover:text-white font-medium"
                    }`} >
                    My Plan
                </Link>
            </li>
        </>
    );

    return (
        <nav className='sticky top-0 z-50 bg-[#0f0f0f] border-b border-gray-800 px-4 md:px-8 py-3'>
            <div className="navbar text-white mx-auto container">

                <div className="navbar-start">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
                        <Image src={Logo} alt="FitLog" width={20} height={20} className="w-5 h-5" />
                        <span className="text-xl font-black tracking-widest mt-1">FITLOG</span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 items-center">

                        {links}

                    </ul>
                </div>

                <div className="navbar-end gap-6 sm:flex pr-2">
                    <Link href="/my-plan">
                        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
                            <span className="text-[#9CA3AF] font-medium text-sm">Plan</span>
                            <div className="w-6 h-6 rounded-full bg-[#C2F800] text-black flex items-center justify-center text-xs font-extrabold">
                                {context.plan.length}
                            </div>
                        </div>
                    </Link>

                    <Link href="/my-plan">
                        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
                            <span className="text-[#D1D5DB] font-medium text-sm">Saved</span>
                            <div className="w-6 h-6 rounded-full border border-[#2D313B] text-[#D1D5DB] flex items-center justify-center text-xs font-medium">
                                {context.saved.length}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};