import React from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import UnityGame from "../components/unity";

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
                        わくわくどんどん計算ゲーム
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
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">制作経緯</h2>
                    <p className="mt-4 text-zinc-300">小学生の妹が楽しく数字に触れられる環境を作りたいと考え、今までにないアイデアの計算ゲームを開発しました。「数字に強くなってほしい」という思いから、学びと遊びを両立させるゲームを目指しました。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">役割</h2>
                    <p className="mt-4 text-zinc-300">個人で開発しました。全てを自分で手掛け、試行錯誤を重ねながら作成中です。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">ゲーム概要</h2>
                    <p className="mt-4 text-zinc-200">-操作方法-</p>
                    <p className="mt-4 text-zinc-300">左右矢印キー（またはAとDキー）でボールを左右に移動します。</p>
                    <p className="mt-4 text-zinc-300">下矢印キー（またはSキー）でボールがすぐに落ちます。</p>
                    <p className="mt-4 text-zinc-300">スマホはスワイプで操作できます。</p>
                    <p className="mt-4 text-zinc-200">-ルール-</p>
                    <p className="mt-4 text-zinc-300">上からボールが落ちてきて、下にある赤いボールと数字が足されます。</p>
                    <p className="mt-4 text-zinc-300">足された時、横と下にある青いボールの数字が一致するとまとめて消えます。</p>
                    <p className="mt-4 text-zinc-300">すべてのボールを消すとゲームクリア！</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">工夫したポイント</h2>
                    <p className="mt-4 text-zinc-300">小学生でも楽しめるよう、数字が2桁にならないようにし暗算で無理なく解けるようにしながらも、ゲームとしてのスリルを味わえるスピード感にしました。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">ゲーム</h2>
                    <div className="grid grid-cols-1 mx-auto lg:grid-cols-1r mb-10">
                        <UnityGame />
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">GitHub Page</h2>
                    <p className="mt-4 text-zinc-300">リポジトリ</p>
                    <Link
                        href="https://github.com/IshIsseI/CalculationPuzzle"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span className="i-catppuccin-folder-github w-6 h-6 mr-5"></span>GitHub/CalculationPuzzle <span aria-hidden="true" className="ml-3">&rarr;</span>
                    </Link>
                    <p className="mt-4 text-zinc-300">プログラム</p>
                    <Link
                        href="https://github.com/IshIsseI/CalculationPuzzle/tree/main/Assets/Script"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span className="i-catppuccin-folder-github w-6 h-6 mr-5"></span>GitHub/CalculationPuzzle/Assets/Script <span aria-hidden="true" className="ml-3">&rarr;</span>
                    </Link>
                </div>

                <div className="hidden w-full h-px md:block bg-zinc-800" />
            </div>
        </div>
    );
}