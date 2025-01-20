'use client'

import Image from '@/components/mdx/image'
import { HERO_LINKS } from '@/config/links'
import Link from 'next/link'
import { SVGProps } from 'react'
import { Cursor } from './ui/cursor'
const Hero = () => {
  return (
    <div className="space-y-6 md:my-16">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:justify-between">
        <div className="space-y-4 md:max-w-lg">
          <div className="flex flex-row items-center space-x-2">
            <Image
              src={"/images/logo.png"}
              width={55}
              height={55}
              alt="Loch"
            />
            <h1 className="text-2xl font-bold text-foreground sm:text-4xl">
              Loch Yan
            </h1>
          </div>
          <h2 className="font-medium text-muted-foreground sm:text-lg">
            Software Engineer
          </h2>
          <p className="sm:text-lg">
            I am a Passionate and creative Full Stack developer
          </p>
        </div>
        <div className="h-15 w-15 relative md:h-64 md:w-64">
          <div className="overflow-hidden">
            <Cursor
              attachToParent
              variants={{
                initial: { scale: 0.3, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.3, opacity: 0 },
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.15,
              }}
              className="left-12 top-4"
            >
              <div>
                <MouseIcon className="h-6 w-6" />
                <div className="ml-4 mt-1 rounded-[4px] bg-blue-500 px-2 py-0.5 text-neutral-50">
                  Loch Yan
                </div>
              </div>
            </Cursor>
            <Image
              src="/images/profile.jpg"
              className="rounded-full"
              width={140}
              height={142}
              alt="Loch"
              loading="eager"
              priority
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-0 blur-2xl md:opacity-50" />
        </div>
      </div>
      <div className="flex gap-6">
        {HERO_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Hero

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={26}
      height={31}
      fill='none'
      {...props}
    >
      <g clipPath='url(#a)'>
        <path
          fill={'#2563eb'}
          fillRule='evenodd'
          stroke={'#fff'}
          strokeLinecap='square'
          strokeWidth={2}
          d='M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z'
          clipRule='evenodd'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill={'#2563eb'} d='M0 0h26v31H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};
