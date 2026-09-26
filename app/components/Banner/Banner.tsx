import HeroImage from "@/public/assets/banner.png";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

export default function Banner() {
    return (
        <section className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
            <div className="relative overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]">

                <div className="flex flex-col lg:min-h-95 lg:flex-row lg:items-center">

                    <div className="relative z-10 w-full px-6 py-10 sm:px-10 lg:w-2/3 lg:px-12 lg:py-12">

                        <p className="mb-5 text-xs font-bold tracking-wider text-[#C2F800]">
                            WORKOUT LIBRARY
                        </p>

                        <h1 className="max-w-xl text-2xl font-black uppercase leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                            Train With Intent. Log <br /> Every Set.
                        </h1>

                        <p className="mt-6 max-w-xl text-sm leading-6 text-[#9CA3AF] sm:text-base">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>

                        <Link
                            href="#library"
                            className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#C2F800] px-5 py-3 text-xs font-bold uppercase text-black transition hover:bg-lime-300"
                        >
                            Browse Workouts
                            <HiArrowDown />
                        </Link>

                    </div>

                    <div className="relative h-64 w-full sm:h-72 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:h-full lg:w-2/5 lg:py-12 lg:pr-8">
                        <div className="relative h-full w-full">
                            <Image
                                src={HeroImage}
                                alt="Workout illustration"
                                fill
                                className="object-contain object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
