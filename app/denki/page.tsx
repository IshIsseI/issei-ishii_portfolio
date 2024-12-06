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
                        neoわくわくクラブ
                    </h2>
                    <p className="inline-flex items-center mt-4 text-zinc-300"><span className="i-catppuccin-adobe-ai w-7 h-7 mr-3"></span>
                        Design
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">使用技術</h2>
                    <p className="mt-4 text-zinc-300">Adobe Illustrator, Photoshop</p>
                    <div>
                        <span className="i-catppuccin-adobe-ai w-7 h-7"></span>/
                        <span className="i-catppuccin-adobe-ps w-7 h-7"></span>
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">概要</h2>
                    <p className="mt-4 text-zinc-300">低学年，初心者のための教室を開き簡単な電気やプログラミングを学べるクラブです．</p>
                    <p className="mt-4 text-zinc-300">ロゴやフライヤーのデザインを担当．企画や運営も担当．</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">デザイン</h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <figure>
                            <Image
                                src="/images/NEOLOGO.png"
                                alt="neo"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">ロゴデザイン</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/denki1.png"
                                alt="neo"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">フライヤーデザイン</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/denki2.png"
                                alt="neo"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">フライヤーデザイン</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src="/images/denki3.png"
                                alt="neo"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                            <figcaption className="mt-2 text-sm text-zinc-300">フライヤーデザイン</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">SNS</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-1">
                        <Link
                            href="https://instagram.com/neo_wakuwaku_club"
                            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            <span className="i-simple-icons-instagram w-5 h-5 mr-3"></span>
                            @ neo_wakuwaku_club <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}