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
                        たけしのタコス屋さん
                    </h2>
                    <p className="inline-flex items-center mt-4 text-zinc-300"><span className="i-catppuccin-unity w-7 h-7 mr-3"></span>
                        Unity Game
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">使用技術</h2>
                    <p className="mt-4 text-zinc-300">Unity / C# / Adobe Illustrator</p>
                    <div>
                        <span className="i-catppuccin-unity w-7 h-7"></span>/
                        <span className="i-catppuccin-csharp w-7 h-7"></span>/
                        <span className="i-catppuccin-adobe-ai w-7 h-7"></span>
                    </div>
                    <p className="mt-4 text-zinc-300">(3DモデルはAssetStoreから)</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">制作経緯</h2>
                    <p className="mt-4 text-zinc-300">技術力の向上を目指すとともに、自分のアイデアを形にする作品を作りたかったからです。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">役割</h2>
                    <p className="mt-4 text-zinc-300">個人での開発。3Dモデルは Unity Asset Storeの素材を活用して効率的に開発を進めました。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">ゲーム概要</h2>
                    <p className="mt-4 text-zinc-300">主人公・たけしくんがタコスを作りながら冒険の旅に出るユニークな物語。</p>
                    <p className="mt-4 text-zinc-300">敵を倒してタコスの素材を集め、美味しいタコスを作成。</p>
                    <p className="mt-4 text-zinc-300">待ち受けるボスには、バトルではなく「好みのタコス」を提供することで攻略します。</p>
                    <p className="mt-4 text-zinc-300">素材の種類が豊富で、多様なタコスを作れるため、プレイヤーが試行錯誤を楽しめる設計です。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">工夫したポイント</h2>
                    <p className="mt-4 text-zinc-300">ボス戦を従来のバトルではなく「タコスの好み」で攻略するシステムにしました。</p>
                    <p className="mt-4 text-zinc-300">素材をたくさん用意し、プレイヤーが自由にタコスを組み合わせて作れる仕組みを導入しました。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">ゲーム内画像</h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <figure>
                            <Image
                                src="/images/takeshi1.png"
                                alt="たけしのタコス屋さんのゲーム画面"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">タイトル画面</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/takeshi2.png"
                                alt="たけしのタコス屋さんのゲーム画面"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">マップセレクト画面</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/takeshi3.png"
                                alt="たけしのタコス屋さんのゲーム画面"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">ステージ画面</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/takeshi4.png"
                                alt="たけしのタコス屋さんのゲーム画面"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">バトル画面</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">GitHub Page</h2>
                    <p className="mt-4 text-zinc-300">リポジトリ</p>
                    <Link
                        href="https://github.com/IshIsseI/Takeshi_Tacos"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span className="i-catppuccin-folder-github w-6 h-6 mr-5"></span>GitHub/Takeshi_Tacos <span aria-hidden="true" className="ml-3">&rarr;</span>
                    </Link>
                    <p className="mt-4 text-zinc-300">プログラム</p>
                    <Link
                        href="https://github.com/IshIsseI/Takeshi_Tacos/tree/main/Assets/Script"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span className="i-catppuccin-folder-github w-6 h-6 mr-5"></span>GitHub/Takeshi_Tacos/Assets/Script <span aria-hidden="true" className="ml-3">&rarr;</span>
                    </Link>
                </div>

                <div className="hidden w-full h-px md:block bg-zinc-800" />
            </div>
        </div>
    );
}