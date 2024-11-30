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
                        カラーコード入力支援装置
                    </h2>
                    <p className="inline-flex items-center mt-4 text-zinc-300"><span className="i-catppuccin-verilog w-7 h-7 mr-3"></span>
                        ESP32
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">使用技術</h2>
                    <p className="mt-4 text-zinc-300">ESP32 / ArduinoIDE</p>
                    <div>
                        <span className="i-catppuccin-verilog w-7 h-7"></span>/
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">概要</h2>
                    <p className="mt-4 text-zinc-300">卒業研究のテーマとして進めている、カラーコードの取得を効率化する支援装置です。</p>
                    <p className="mt-4 text-zinc-300">ESP32とRGBセンサを用いて色を検出し、そのカラーコードをBluetooth経由でPCやスマホに送信します。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">制作経緯</h2>
                    <p className="mt-4 text-zinc-300">デザインやプログラムの作業では、色をカラーコードに変換する作業に時間がかかるうえ、正確に色を再現するのが難しい場合があります。この装置は、色選定を簡単にし、正確なカラーコードの取得を可能にするツールとして開発を開始しました。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">内容</h2>
                    <p className="mt-4 text-zinc-300">ESP32: カラーコードをBluetoothでPCに送信するために使用。PCやスマホではキーボードデバイスとして認識。</p>
                    <p className="mt-4 text-zinc-300 ">RGBセンサ: 対象物の色を読み取り、RGB値を取得。</p>
                    <p className="mt-4 text-zinc-300 ">デバイスをPCやスマホとBluetoothで接続。</p>
                    <p className="mt-4 text-zinc-300 ">プッシュボタンを押すことで、現在読み取った色のカラーコードをPCに直接入力可能。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">工夫したポイント</h2>
                    <p className="mt-4 text-zinc-300">Bluetoothを採用することでケーブルレス化を実現し、どこでも簡単にPCやスマホで使用できる設計に。</p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />


                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">
                    <h2 className="font-bold tracking-tight text-zinc-100 sm:text-xl">GitHub Page</h2>
                    <p className="mt-4 text-zinc-300">リポジトリ</p>
                    <Link
                        href="https://github.com/IshIsseI/BLE_RGB"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span className="i-catppuccin-folder-github w-6 h-6 mr-5"></span>GitHub/BLE_RGB <span aria-hidden="true" className="ml-3">&rarr;</span>
                    </Link>
                    <p className="mt-4 text-zinc-300">プログラム</p>
                    <Link
                        href="https://github.com/IshIsseI/BLE_RGB/blob/main/BLE_RGB.ino"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span className="i-catppuccin-folder-github w-6 h-6 mr-5"></span>GitHub/BLE_RGB/BLE_RGB.ino <span aria-hidden="true" className="ml-3">&rarr;</span>
                    </Link>
                </div>

                <div className="hidden w-full h-px md:block bg-zinc-800" />

            </div>
        </div>
    );
}