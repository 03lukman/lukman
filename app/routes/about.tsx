import { Link } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";
import clsx from "clsx";

import { Container } from "../components/Container";
import type { Icon } from "../components/Icons";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../components/Icons";
import portraitImage from "../images/portrait.webp";
import { metadata } from "../models/metadata";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: Icon;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        to={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-600 dark:text-zinc-200 dark:hover:text-teal-400"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

const linkClassName =
  "text-teal-700 dark:text-teal-400 underline transition hover:text-teal-800 dark:hover:text-teal-300";

function ExternalLink({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
      {...props}
    >
      {children}
    </a>
  );
}

export const meta: MetaFunction = () => [
  {
    title: `About - ${metadata.title}`,
  },
  {
    name: "description",
    content: metadata.description,
  },
];

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <img
              src={portraitImage}
              alt=""
              height={300}
              width={300}
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Lukman Nurhakim, a front-end developer living in Indonesia{" "}
            <span role="img" aria-label="Indonesian Flag">
              🇮🇩
            </span>
            .
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Medium publication to help my fellow Indonesian developers learn.
            </p>
            <p>
              and raise your questions over there! We would love to keep in
              touch with you. 😉
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul>
            <SocialLink
              href="https://x.com/NurhakimLu95669"
              icon={TwitterIcon}
            >
              Follow on Twitter/X
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/lukmanrh_/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/03lukman"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/lukman-nurhakim"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:lukmannurhakim3130@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              Contact me
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
