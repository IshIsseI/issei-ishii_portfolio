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
                        高専ロボコン2022
                    </h2>
                    <p className="inline-flex items-center mt-4 text-zinc-300"><span className="i-catppuccin-robots w-7 h-7 mr-3"></span>
                        3DCAD
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">使用技術</h2>
                    <p className="mt-4 text-zinc-300">SOLIDWORKS</p>
                    <div>
                        <span className="i-catppuccin-robots w-7 h-7"></span>
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">制作経緯</h2>
                    <p className="mt-4 text-zinc-300">ロボット部の活動の一環として、全国高等専門学校ロボットコンテスト2022 関東甲信越地区大会に参加しました。</p>
                    <p className="mt-4 text-zinc-300">大会のテーマは「ミラクル☆フライ」で、ロボットが紙飛行機を飛ばし、目的地に着地させて得点を競うというものです。</p>
                    <Link
                        href="https://official-robocon.com/history/kosen/history/35th/"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span className="i-catppuccin-http w-6 h-6 mr-5"></span>高専ロボコンホームページ <span aria-hidden="true" className="ml-3">&rarr;</span>
                    </Link>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">役割</h2>
                    <p className="mt-4 text-zinc-300">チーム人数は約10人。</p>
                    <p className="mt-4 text-zinc-300">ロボットの機構（足回りと主砲の設計および加工），装飾を担当</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">ロボットの概要</h2>
                    <p className="mt-4 text-zinc-300">足回り: オムニホイールを採用し全方位へ移動可能にした。軽量化を目指して設計。</p>
                    <p className="mt-4 text-zinc-300">主砲: 紙飛行機を正確かつ遠くまで飛ばすためのメイン機構。</p>
                    <p className="mt-4 text-zinc-300">副砲（6つ）: 紙飛行機を大量に飛ばすことで得点を稼ぐための補助機構。</p>
                    <p className="mt-4 text-zinc-300">羽展開機構: 競技中にロボットを視覚的に目立たせるため、羽を広げる機構を設計。</p>
                    <p className="mt-4 text-zinc-300">主砲高さ調節機構: 紙飛行機を高い位置から飛ばせるように，手法を持ち上げる機構を設計。</p>
                    <p className="mt-4 text-zinc-300">戦略: 主砲と6つの副砲を活用して紙飛行機を大量に飛ばし、得点を稼ぐことを主軸とした</p>
                    <p className="mt-4 text-zinc-300">デザイン: ロボットのデザインには、「戦艦の上に鳥（ひばり）が乗っている」モチーフを採用しました。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">工夫したポイント</h2>
                    <p className="mt-4 text-zinc-300">紙飛行機の目標地点に正確に飛ばせるよう、主砲の向きを上下・左右に調整可能な構造を採用しました。これにより、多様な位置を狙う戦略が可能となりました。</p>
                    <p className="mt-4 text-zinc-300">重量制限をクリアするため、足回りを軽量化をしました。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">画像</h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <figure>
                            <Image
                                src="/images/robo1.png"
                                alt="ロボット"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">足回り図面</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/robo2.jpg"
                                alt="ロボット"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">足回り3Dモデル</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/robo3.png"
                                alt="ロボット"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">主砲図面</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/robo4.png"
                                alt="ロボット"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">主砲3Dモデル</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/robo5.jpg"
                                alt="ロボット"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">ロボット装飾なし</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/robo7.jpg"
                                alt="ロボット"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">ロボット装飾なし</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/robo8.jpg"
                                alt="ロボット"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">ロボット背面</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/robo9.jpg"
                                alt="ロボット"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">ロボット装飾あり</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/robo6.jpg"
                                alt="ロボット"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">ロボット足回り</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />
            </div>
        </div>
    );
}