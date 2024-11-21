import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
export default function Example() {
    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <Particles
                        className="absolute inset-0 -z-10 animate-fade-in"
                        quantity={100}
                    />
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display2 mt-10">
                        出席確認装置
                    </h2>
                    <p className="inline-flex items-center mt-4 text-zinc-400"><span className="i-catppuccin-next w-7 h-7 mr-3"></span>
                        Next App
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">使用技術</h2>
                    <p className="mt-4 text-zinc-400">Next.js / Typescript / MySQL</p>
                    <div>
                        <span className="i-catppuccin-next w-7 h-7"></span>/
                        <span className="i-catppuccin-typescript w-7 h-7"></span>/
                        <span className="i-catppuccin-database w-7 h-7"></span>
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">概要</h2>
                    <p className="mt-4 text-zinc-400">共同制作物</p>
                    <p className="mt-4 text-zinc-400"></p>
                    <p className="mt-4 text-zinc-400"></p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">デモ動画</h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <Image
                            src="/images/pbl2.png"
                            alt="たけしのタコス屋さんのゲーム画面"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/pbl1.png"
                            alt="たけしのタコス屋さんのゲーム画面"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg"
                        />
                        <video
                            src="/images/PBL.mp4"
                            width="600"
                            height="600"
                            autoPlay loop muted
                            className="rounded-lg"
                        />
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">GitHub Page</h2>
                    <Link
                        href="https://github.com/IshIsseI/Attendance"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span className="i-catppuccin-folder-github w-6 h-6 mr-5"></span>GitHub/Attendance <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>

                <div className="hidden w-full h-px md:block bg-zinc-800" />
            </div>
        </div>
    );
}