import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";


export const metadata: Metadata = {
  title: "My Awsome Site!",
  description: "Generated by create next app + Sanity",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // get all of our pages
  const pages = await getPages();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../favicon.ico" sizes="any" />
      </head>
      <body className="max-w-5xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link href="/"
          className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">
            Simon
          </Link>
          <div className="font-semibold flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link className="hover:underline" key={page._id} href={`/${page.slug}`}>{page.title}</Link>
            ))}
          </div>
        </header>

        <main className="py-20">
          {children}
        </main>
      </body>
    </html>
  );
}
