"use client";

import { House } from "lucide-react";
import Link from "next/link";

export default function ErrorBoundary () {
  return (
    <article className="flex flex-col gap-4 items-center justify-center min-h-[50vh]">
      <h1 className="text-3xl font-md">Something went wrong on our end</h1>
      <p className="text-gray-500 text-sm">We are experiencing a temorary server issue. Our team has been notified and is working on it.</p>
      <Link href={`/`} className="flex gap-1 items-center transition hover:bg-[rgb(238,248,240)] hover:shadow-lg active:shadow-none border border-[rgb(18,82,64)] rounded-md text-[rgb(45,76,67)] p-2 px-4">
        <House strokeWidth={1.25} size={20} />
        <span>Back to Home</span>
      </Link>
    </article>
  )
}
