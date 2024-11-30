import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";
import ProjectCard from "../components/projectCard";

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

          <ProjectCard
            title="わくわくどんどん計算ゲーム"
            category="Unity Game"
            icon="i-catppuccin-unity"
            link="../puzzle"
          />

          <ProjectCard
            title="たけしのタコス屋さん"
            category="Unity Game"
            icon="i-catppuccin-unity"
            link="../takeshi"
          />

          <ProjectCard
            title="Terra Nauts"
            category="Unity Game"
            icon="i-catppuccin-unity"
            link="../terranauts"
          />

          <ProjectCard
            title="出席確認装置"
            category="Next.js App"
            icon="i-catppuccin-next"
            link="../attendance"
          />

          <ProjectCard
            title="高専ロボコン2022"
            category="3DCAD"
            icon="i-catppuccin-robots"
            link="../robo"
          />

          <ProjectCard
            title="Locker.ai"
            category="3DCAD"
            icon="i-catppuccin-robots"
            link="../locker"
          />

          <ProjectCard
            title="カラーコード入力支援装置"
            category="ESP32"
            icon="i-catppuccin-verilog"
            link="../color"
          />

          <ProjectCard
            title="嘘七不思議ツアー"
            category="Design"
            icon="i-catppuccin-adobe-ai"
            link="../uso"
          />

          <ProjectCard
            title="neoわくわくクラブ"
            category="Design"
            icon="i-catppuccin-adobe-ai"
            link="../denki"
          />

        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

      </div>
    </div>
  );
}
