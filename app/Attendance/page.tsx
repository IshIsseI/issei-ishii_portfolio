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
                    <p className="inline-flex items-center mt-4 text-zinc-300"><span className="i-catppuccin-next w-7 h-7 mr-3"></span>
                        Next App
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">使用技術</h2>
                    <p className="mt-4 text-zinc-300">Next.js / Typescript / MySQL</p>
                    <div>
                        <span className="i-catppuccin-next w-7 h-7"></span>/
                        <span className="i-catppuccin-typescript w-7 h-7"></span>/
                        <span className="i-catppuccin-database w-7 h-7"></span>
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">制作経緯</h2>
                    <p className="mt-4 text-zinc-300">このプロジェクトは、学校のPBL（Project/Problem Based Learning）の授業で取り組んだものです。授業開始時に時間を要する出席確認を効率化し、代返の防止や欠席日数の把握ができるシステムを構築することで、学生や教員の負担を軽減することを目的としていました。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">役割</h2>
                    <p className="mt-4 text-zinc-300">5人で開発。</p>
                    <p className="mt-4 text-zinc-300">Webアプリケーションの設計・実装、データベース（MySQL）の設計・実装を担当。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">概要</h2>
                    <p className="mt-4 text-zinc-300">学生証裏のバーコードをWebアプリで読み取り、出席情報を登録。</p>
                    <p className="mt-4 text-zinc-300">出席後、教室内の「出席確認ボード」のLEDが光り、指定された座席位置がわかる仕組み。</p>
                    <p className="mt-4 text-zinc-300">出席日数が不足すると、学生に警告メールを送信する機能を実装。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">工夫したポインタ</h2>
                    <p className="mt-4 text-zinc-300">バーコードによる出席確認を採用し、従来の手動点呼から大幅に時間を短縮しました。</p>
                    <p className="mt-4 text-zinc-300">欠席が一定数を超えると、警告メールを送信できる仕組みを導入。学生自身が危機感を持てるように工夫しました。</p>
                    <p className="mt-4 text-zinc-300">LEDボードで空席を可視化し、学生がスムーズに着席できるようにしました。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">デモ画像・動画</h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <figure>
                            <Image
                                src="/images/pbl3.png"
                                alt="pbl"
                                width={600}
                                height={600}
                                className="rounded-3xl"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">システム構成図</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/pbl2.png"
                                alt="pbl"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">日付選択画面</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/pbl1.png"
                                alt="pbl"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">日付選択画面(ダークモード)</figcaption>
                        </figure>
                        <figure>
                            <video
                                src="/images/PBL.mp4"
                                width="600"
                                height="600"
                                autoPlay loop muted
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">デモ動画</figcaption>
                        </figure>

                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">GitHub Page</h2>
                    <p className="mt-4 text-zinc-300">リポジトリ</p>
                    <Link
                        href="https://github.com/IshIsseI/Attendance"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span className="i-catppuccin-folder-github w-6 h-6 mr-5"></span>GitHub/Attendance <span aria-hidden="true" className="ml-3">&rarr;</span>
                    </Link>
                    <p className="mt-4 text-zinc-300">プログラム</p>
                    <Link
                        href="https://github.com/IshIsseI/Attendance/tree/main/src"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span className="i-catppuccin-folder-github w-6 h-6 mr-5"></span>GitHub/Attendance/src <span aria-hidden="true" className="ml-3">&rarr;</span>
                    </Link>
                </div>

                <div className="hidden w-full h-px md:block bg-zinc-800" />
            </div>
        </div>
    );
}