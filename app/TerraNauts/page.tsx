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
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl font-display mt-10">
                        TerraNauts
                    </h2>
                    <p className="inline-flex items-center mt-4 text-zinc-400"><span className="i-catppuccin-unity w-7 h-7 mr-3"></span>
                        Unity Game
                    </p>
                </div>

                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">使用技術</h2>
                    <p className="mt-4 text-zinc-400">Unity / C# / Affinity Designer</p>
                    <div>
                        <span className="i-catppuccin-unity w-7 h-7"></span>/
                        <span className="i-catppuccin-csharp w-7 h-7"></span>/
                        <span className="i-catppuccin-adobe-ai w-7 h-7"></span>
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">概要</h2>
                    <p className="mt-4 text-zinc-400">共同制作物 (素材管理や調理のシステム,UI,素材や料理のデザインを担当)</p>
                    <p className="mt-4 text-zinc-400">「食べて成長するアクションゲーム!!」</p>
                    <p className="mt-4 text-zinc-400">主人公のネコが、友達の病気を治すため、薬の材料探しにダンジョンへ行くお話。金も時間もないので仲間も雇わず、ダンジョンのモンスターを食べることにするのだが......。</p>
                    <p className="mt-4 text-zinc-400">拾った素材はダンジョン内にあるきゅうけいじょで調理して食べることで自分を強化できるぞ!</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">ゲーム内画像</h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <Image
                            src="/images/terra1.png"
                            alt="TerraNautsのゲーム画面"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/terra2.png"
                            alt="TerraNautsのゲーム画面"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/terra3.png"
                            alt="TerraNautsのゲーム画面"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/terra4.png"
                            alt="TerraNautsのゲーム画面"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/terra5.png"
                            alt="TerraNautsのゲーム画面"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/terra6.png"
                            alt="TerraNautsのゲーム画面"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/food.png"
                            alt="TerraNautsのゲーム画面"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/dish.png"
                            alt="TerraNautsのゲーム画面"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/stamp.png"
                            alt="TerraNautsのゲーム画面"
                            width={500} // 画像の幅
                            height={500} // 画像の高さ
                            className="rounded-lg"
                        />
                        <Image
                            src="/images/stamp2.png"
                            alt="TerraNautsのゲーム画面"
                            width={600} // 画像の幅
                            height={600} // 画像の高さ
                            className="rounded-lg"
                        />
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">GitHub Page</h2>
                    <Link
                        href="https://github.com/PakupakuTerraNauts/TerraNauts"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span className="i-catppuccin-folder-github w-6 h-6 mr-5"></span>GitHub/TerraNauts <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>

                <div className="hidden w-full h-px md:block bg-zinc-800" />
            </div>
        </div>
    );
}