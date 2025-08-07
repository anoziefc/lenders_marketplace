"use client";
import Image from "next/image";
import React from "react";
import {Pause, Play} from "lucide-react";

const sponsors = [
    {img: "/s1.jpg"},
    {img: "/s2.jpg"},
    {img: "/s3.jpg"},
    {img: "/s4.jpg"}
];

const HomeVideo = () => {
    const [play, setPlay] = React.useState(false);
    const onPlay = () => setPlay(!play);

    return (
        <section className="py-12 flex flex-col gap-6">
            <h1 className="text-center text-xl font-bold">
                Trusted by 100+ business lender in the UK
            </h1>
            <div className="mb-8">
                <div className="mx-auto max-w-lg flex gap-4 justify-between items-center-safe flex-wrap">
                    {sponsors.map((sponsor, idx) => (
                        <div key={idx} className="">
                            <Image
                                src={sponsor.img}
                                className="rounded"
                                alt="sponsor"
                                width={60}
                                height={60}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <div
                    className="relative bg-[url('/video-thumb.jpg')] bg-cover bg-center w-full max-w-2xl rounded-xl aspect-[2/1] bg-gray-900 bg-opacity-10 flex justify-center items-center">
                    <div
                        onClick={onPlay}
                        className={`w-fit cursor-pointer py-3 px-6  text-gray-600 text-lg font-semibold rounded-full border-2 shadow-md
                 flex items-center justify-center space-x-2
                 focus:outline-none focus:ring-2  focus:ring-opacity-50
                 transition duration-300 ease-in-out bg-white  border-white focus:ring-pink-500`}
                    >
                        {play ? <Play className="bg-white border-white"/> : <Pause className="bg-white border-white"/>}
                        <span> Watch Video</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeVideo;
