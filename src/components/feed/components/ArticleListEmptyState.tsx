import { MoveRight } from "lucide-react"
import Link from "next/link"

export const ArticleListEmptyState = () => {
  return (
    <div className="flex flex-col gap-4 w-full col-span-4 items-center justify-center max-h-[50vh]">
      <h1 className="text-4xl font-medium">No stories match your filters</h1>
      <p className="text-gray-600">Try adjusting your filters or explore more topics to discover stories that matter to you.</p>
      <Link href={`/`} className="border border-[rgb(2,95,72)] p-2 px-4 rounded-md text-[rgb(2,95,72)]">Explore all stories</Link>
      <p className="text-gray-400 flex gap-2">Or update your personalization preferences <MoveRight /></p>
    </div>
  )
}
