import { House } from "lucide-react";
import Link from "next/link";

export default function NotFound () {
  return (
    <article className="flex flex-col gap-2 items-center justify-center min-h-[50vh]">
      <h1 className="text-[15rem] font-thin p-0 m-none [text-box-trim:trim-both]">404</h1>
      <h2 className="text-3xl">Page not found</h2>
      <p className="text-gray-500 leading-loose">The page you are looking for doesn't exist or may have been moved. Let's get you back to the stories that matter.</p>
      <Link href={`/`} className="flex gap-1 items-center transition hover:bg-[rgb(238,248,240)] hover:shadow-lg active:shadow-none border border-[rgb(18,82,64)] rounded-md text-[rgb(45,76,67)] p-2 px-4">
        <House strokeWidth={1.25} size={20} />
        <span>Back to Home</span>
      </Link>
    </article>
  )
}