import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";

export default async function ProjectsPage() {

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mt-10">
            Products
          </h2>
          <p className="mt-4 text-zinc-400">
            My products.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href="../takeshi">
              <article className="relative w-full h-full p-4 md:p-8">

                <h2
                  id="featured-post"
                  className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display2"
                >
                  たけしのタコス屋さん
                </h2>
                <p className="inline-flex items-center mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  <span className="i-catppuccin-unity w-6 h-6 mr-5"></span>
                  Unity Game
                </p>

                <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block mt-3">
                  Read more <span aria-hidden="true">&rarr;</span>
                </p>
              </article>
            </Link>
          </Card>

          <Card>
            <Link href="../TerraNauts">
              <article className="relative w-full h-full p-4 md:p-8">

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Terra Nauts
                </h2>
                <p className="inline-flex items-center mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  <span className="i-catppuccin-unity w-6 h-6 mr-5"></span>
                  Unity Game
                </p>

                <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block mt-3">
                  Read more <span aria-hidden="true">&rarr;</span>
                </p>
              </article>
            </Link>
          </Card>

          <Card>
            <Link href="../Attendance">
              <article className="relative w-full h-full p-4 md:p-8">

                <h2
                  id="featured-post"
                  className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display2"
                >
                  出席確認装置
                </h2>
                <p className="inline-flex items-center mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  <span className="i-catppuccin-next w-6 h-6 mr-5"></span>
                  Next.js App
                </p>

                <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block mt-3">
                  Read more <span aria-hidden="true">&rarr;</span>
                </p>
              </article>
            </Link>
          </Card>

          <Card>
            <Link href="../uso">
              <article className="relative w-full h-full p-4 md:p-8">

                <h2
                  id="featured-post"
                  className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display2"
                >
                  嘘七不思議ツアー
                </h2>
                <p className="inline-flex items-center mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  <span className="i-catppuccin-adobe-ai w-6 h-6 mr-5"></span>
                  Design
                </p>

                <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block mt-3">
                  Read more <span aria-hidden="true">&rarr;</span>
                </p>
              </article>
            </Link>
          </Card>

          <Card>
            <Link href="../denki">
              <article className="relative w-full h-full p-4 md:p-8">

                <h2
                  id="featured-post"
                  className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display2"
                >
                  初めての電気 × プログラミング
                </h2>
                <p className="inline-flex items-center mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  <span className="i-catppuccin-adobe-ai w-6 h-6 mr-5"></span>
                  Design
                </p>

                <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block mt-3">
                  Read more <span aria-hidden="true">&rarr;</span>
                </p>
              </article>
            </Link>
          </Card>

        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

      </div>
    </div>
  );
}
