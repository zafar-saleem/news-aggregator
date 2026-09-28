import { ArrowBigDown } from "lucide-react"

export const PreferredCategoryListLoadingState = () => {
  return (
    <article className="text-gray-500 flex gap-1 w-full flex col-span-4 items-center justify-center min-h-[10rem]">
      <ArrowBigDown size={20} className="animate-bounce mt-4" />
      <p className="text-lg">Categories are loading <span className="animate-ping text-4xl">.</span><span className="animate-ping text-4xl">.</span><span className="animate-ping text-4xl">.</span></p>
    </article>
  )
}