import Link from "next/link"
import { IsActiveLinkProps } from "../types"

export const IsActiveLink = ({ active, label, href }: IsActiveLinkProps) => {
  if (active) {
    return (
      <Link
        href={href}
        className="text-green-800 font-bold underline underline-offset-10 decoration-2 hover:text-green-800 hover:underline hover:underline-offset-10 hover:decoration-2 transition"
      >
        {label}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="text-green-1000 font-bold hover:text-green-800 hover:underline hover:underline-offset-10 hover:decoration-2 transition"
    >
      {label}
    </Link>
  )
}
