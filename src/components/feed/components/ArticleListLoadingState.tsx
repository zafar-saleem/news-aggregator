import { ArrowBigDown, ArrowBigDownDash } from "lucide-react"

export const ArticleListLoadingState = () => {
  return (
    <article className="text-gray-500 flex flex-col gap-4 w-full col-span-4 items-center justify-center max-h-[50vh]">
      <ArrowBigDown size={30} className="animate-bounce" />
      <p className="text-lg">Your articles are being loaded <span className="animate-ping text-4xl">.</span><span className="animate-ping text-4xl">.</span><span className="animate-ping text-4xl">.</span></p>
    </article>
  )
}
