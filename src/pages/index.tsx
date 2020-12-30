import Head from "next/head";
import { PostItem } from "../types";
import { PostList, Logo } from "../components";
import posts from "../../.contents/posts.json";
import Link from "next/link";
import Image from "next/image";

export default function Home({}) {
  return (
    <>
      <header className="relative z-10 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center">
            <Link href="/">
              <a className="block">
                <Logo />
              </a>
            </Link>
          </div>

          <div className="flex text-sm">
            <Link href="/blog">
              <a className="font-medium text-gray-500 hover:text-gray-900">
                Blog
              </a>
            </Link>
            <Link href="/about">
              <a className="ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </header>
      <section>
        <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 mt-10 mb-8">
          Articles
        </h2>
        <PostList items={posts as PostItem[]} />
      </section>
    </>
  );
}
