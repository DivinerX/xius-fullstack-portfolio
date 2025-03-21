"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import Image from "./mdx/image";
import Link from "next/link";

const ProjectCard = ({ id, name, image, description, techstack }: any) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <Link
      href={`/projects/${id}`}
      key={id}
      className="group relative flex flex-col rounded-lg border p-4"
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <Image
        src={image}
        width={1200}
        height={630}
        alt={name}
        className="rounded-lg"
      />
      <div className="flex-1 px-2 py-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">{name}</h2>
          <div className="text-muted-foreground">{description}</div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {techstack.map((t: any) => {
            const { label } = t;
            return (
              <div
                key={label}
                className="flex items-center justify-center gap-1 rounded-full border px-3 py-2"
              >
                <div className="text-xs leading-4">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
