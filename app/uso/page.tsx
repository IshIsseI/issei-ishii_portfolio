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
                        嘘七不思議ツアー
                    </h2>
                    <p className="inline-flex items-center mt-4 text-zinc-400"><span className="i-catppuccin-adobe-ai w-7 h-7 mr-3"></span>
                        Design
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">使用技術</h2>
                    <p className="mt-4 text-zinc-400">Adobe Illustrator, Photoshop, Premire Pro</p>
                    <div>
                        <span className="i-catppuccin-adobe-ai w-7 h-7"></span>/
                        <span className="i-catppuccin-adobe-ps w-7 h-7"></span>
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">概要</h2>
                    <p className="mt-4 text-zinc-400">茨城高専の文化祭である「茨香祭」で行った「嘘七不思議ツアー」</p>
                    <p className="mt-4 text-zinc-400">茨城高専の七不思議(嘘)をツアー形式で紹介した．</p>
                    <p className="mt-4 text-zinc-400">フライヤーやパンフレットなどのデザインを担当．</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">デザイン</h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <Image
                            src="/images/uso1.png"
                            alt="嘘七不思議ツアー"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/uso7.png"
                            alt="嘘七不思議ツアー"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/uso2.png"
                            alt="嘘七不思議ツアー"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg bg-white"
                        />
                        <video
                            src="/images/usoMov.mp4"
                            width="600"
                            height="600"
                            autoPlay loop muted
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/uso3.png"
                            alt="嘘七不思議ツアー"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg bg-white"
                        />
                        <Image
                            src="/images/uso4.png"
                            alt="嘘七不思議ツアー"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg"
                        />
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">SNS</h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <Link
                            href="https://x.com/nitic_usotour"
                            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            <span className="i-simple-icons-x w-5 h-5 mr-3"></span>
                            @ NITIC_usotour <span aria-hidden="true">&rarr;</span>
                        </Link>
                        <Link
                            href="https://instagram.com/nitic_usotour"
                            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            <span className="i-simple-icons-instagram w-5 h-5 mr-3"></span>
                            @ nitic_usotour <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}