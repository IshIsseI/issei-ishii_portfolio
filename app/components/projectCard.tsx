import React from 'react';
import Link from 'next/link';
import { Card } from './card';

type FeatureCardProps = {
  title: string;
  category: string;
  icon: string;
  link: string;
};

const ProjectCard: React.FC<FeatureCardProps> = ({ title, category, icon, link}) => {
  return (
    <Card>
      <Link href={link}>
        <article className="relative w-full h-full p-4 md:p-8">
          <h2
            id="featured-post"
            className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display2"
          >
            {title}
          </h2>
          <p className="inline-flex items-center mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
            <span className={`${icon} w-6 h-6 mr-5`}></span>
            {category}
          </p>
            <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block mt-3">
              Read more <span aria-hidden="true">&rarr;</span>
            </p>
        </article>
      </Link>
    </Card>
  );
};

export default ProjectCard;