import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.png";

export default function Footer() {
    return (
        <footer className="mt-auto border-t border-[#222630] bg-[#0F1014]">
            <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

                <Link
                    href="/"
                    className="flex items-center gap-2"
                >
                    <Image
                        src={Logo}
                        alt="FitLog"
                        width={20}
                        height={20}
                        className="h-5 w-5"
                    />

                    <span className="text-lg font-black tracking-widest text-white">
                        FITLOG
                    </span>
                </Link>

                <p className="text-center text-xs text-[#9CA3AF] md:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
}