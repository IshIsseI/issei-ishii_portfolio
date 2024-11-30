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
                    <p className="inline-flex items-center mt-4 text-zinc-300"><span className="i-catppuccin-adobe-ai w-7 h-7 mr-3"></span>
                        Design
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">使用技術</h2>
                    <p className="mt-4 text-zinc-300">Adobe Illustrator, Photoshop, Premire Pro</p>
                    <div>
                        <span className="i-catppuccin-adobe-ai w-7 h-7"></span>/
                        <span className="i-catppuccin-adobe-ps w-7 h-7"></span>
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">概要</h2>
                    <p className="mt-4 text-zinc-300">茨城高専の文化祭「茨香祭」で、虚言愛好会というサークルが主催した出し物です。</p>
                    <p className="mt-4 text-zinc-300">学校内を巡るツアー形式で、建物や施設にまつわる「七不思議」を紹介しますが、その内容はすべて嘘です。</p>
                    <p className="mt-4 text-zinc-300">茨香祭当日のツアーは、多くの人に来ていただきました。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">役割</h2>
                    <p className="mt-4 text-zinc-300">チーム人数は12人</p>
                    <p className="mt-4 text-zinc-300">ほぼ全てのデザインを担当</p>
                    <p className="mt-4 text-zinc-300 ">ロゴデザイン: サークルロゴおよび「嘘七不思議ツアー」のロゴを作成。</p>
                    <p className="mt-4 text-zinc-300 ">フライヤーとパンフレット:ツアーの宣伝用資料と案内用パンフレットをデザイン。</p>
                    <p className="mt-4 text-zinc-300 ">リストバンド: 参加者がツアー中に身につけるリストバンドを制作。</p>
                    <p className="mt-4 text-zinc-300 ">物販グッズ: 「嘘認定証」というグッズをデザイン。</p>
                    <p className="mt-4 text-zinc-300 ">解説動画: ツアーの解説で使用する映像をPremiere Proで編集。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">工夫したポイント</h2>
                    <p className="mt-4 text-zinc-300">全てのデザインに統一したカラーコードなどを採用し、「嘘七不思議ツアー」の世界観を強調しました。</p>
                    <p className="mt-4 text-zinc-300">実際のツアーのようにパンフレットやリストバンドを制作した。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />


                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">デザイン</h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <Image
                            src="/images/uso1.png"
                            alt="嘘七不思議ツアー"
                            width={600}
                            height={600}
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/uso7.png"
                            alt="嘘七不思議ツアー"
                            width={600}
                            height={600}
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/uso2.png"
                            alt="嘘七不思議ツアー"
                            width={600}
                            height={600}
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
                            width={600}
                            height={600}
                            className="rounded-lg bg-white"
                        />
                        <Image
                            src="/images/uso4.png"
                            alt="嘘七不思議ツアー"
                            width={600}
                            height={600}
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