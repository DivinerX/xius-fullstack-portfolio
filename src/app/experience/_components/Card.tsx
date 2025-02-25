"use client";

import cn from "@/utils/cn";
import Link from "next/link";

function ChevronRightIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Card({ as: Component = "div", className, children }: any) {
  return (
    <Component
      className={cn(className, "group relative flex flex-col items-start")}
    >
      {children}
    </Component>
  );
}

Card.Link = function CardLink({ children, ...props }: any) {
  return (
    <>
      <div className="absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-400-200/50 group-hover:scale-100 group-hover:opacity-80 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props} target="_blank">
        <span className="absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl " />
        <span className="relative z-10  ">{children}</span>
      </Link>
    </>
  );
};

Card.Title = function CardTitle({ as: Component = "h2", href, children }: any) {
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

Card.Cta = function CardCta({ children }: any) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 flex items-center mt-4 text-sm font-medium text-accent-500"
    >
      {children}
      <ChevronRightIcon className="w-4 h-4 ml-1 stroke-current" />
    </div>
  );
};

Card.Eyebrow = function CardEyebrow({
  as: Component = "p",
  decorate = false,
  className,
  children,
  ...props
}: any) {
  return (
    <Component
      className={cn(
        className,
        "relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500",
        decorate && "pl-3.5"
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
};
