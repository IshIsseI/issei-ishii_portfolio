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
                        Locker.ai
                    </h2>
                    <p className="inline-flex items-center mt-4 text-zinc-300"><span className="i-catppuccin-robots w-7 h-7 mr-3"></span>
                        3DCAD
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">使用技術</h2>
                    <p className="mt-4 text-zinc-300">Fusion360</p>
                    <div>
                        <span className="i-catppuccin-robots w-7 h-7"></span>
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">概要</h2>
                    <p className="mt-4 text-zinc-300">Locker.ai:Vision-Languageモデルとスマートロッカーを用いた完全無人での遺失物管理サービス</p>
                    <p className="mt-4 text-zinc-300">情報処理学会 INTERACTION 2024でのデモ発表を行う</p>
                    <Link
                        href="https://www.interaction-ipsj.org/2024/"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span className="i-catppuccin-http w-6 h-6 mr-5"></span>INTERACTION 2024<span aria-hidden="true" className="ml-3">&rarr;</span>
                    </Link>
                    <Link
                        href="https://www.interaction-ipsj.org/proceedings/2024/data/pdf/2B-18.pdf"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span className="i-catppuccin-http w-6 h-6 mr-5"></span>論文<span aria-hidden="true" className="ml-3">&rarr;</span>
                    </Link>

                    <p className="mt-4 text-zinc-300">Vision-Languageモデル(GPT-4V)と独自のニューラルネットワークを用いたシステムで遺失物センターの遺失物管理を代替することで無人化を実現し、より安全で堅牢な遺失物管理サービスを開発する。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">制作経緯</h2>
                    <p className="mt-4 text-zinc-300">遺失物センターでは，職員による手作業で遺失物を管理していることがほとんどであるが，このアプローチは多大な労力を要するだけではなく，主観的な判断による遺失者の認証プロセスは安全性に潜在的なリスクをもたらすことがあるため．</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">役割</h2>
                    <p className="mt-4 text-zinc-300">チーム人数は10人。</p>
                    <p className="mt-4 text-zinc-300">遺失物を保管するためのスマートロッカーの設計・加工を担当</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">スマートロッカーの内容</h2>
                    <p className="mt-4 text-zinc-300">ソレノイド式電気錠「スリムロック」を採用。自動で施錠・解錠が可能な仕組みを構築しました。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">工夫したポイント</h2>
                    <p className="mt-4 text-zinc-300">ソレノイド式電気錠を用いることで、ロッカーの完全自動化を実現。遺失物の安全な保管と無人運用を可能にしました。</p>
                    <p className="mt-4 text-zinc-300">小型かつ多用途のロッカーサイズを設計し、さまざまな遺失物に対応可能。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">画像</h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <figure>
                            <Image
                                src="/images/locker1.png"
                                alt="ロッカー"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">ロッカー図面</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/locker2.png"
                                alt="ロッカー"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">ロッカー図面</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/locker3.png"
                                alt="ロッカー"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">ロッカー3Dモデル</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/locker4.png"
                                alt="ロッカー"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">ロッカー3Dモデル</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />
            </div>
        </div>
    );
}