import Link from "next/link"
import { ArticleListCardProps } from "../types"
import { ArticleListMeta } from "./ArticleListMeta"

export const ArticleListCard = ({ title, ...rest }: ArticleListCardProps) => {
  return (
    <div className="flex flex-col p-8 gap-6 bg-white shadow-md rounded-[1rem] border-l-[5px] border-l-[rgb(2,95,72)]">
      <Link href="#">
        <h1 className="text-3xl font-bold">{title}</h1>
      </Link>
      <ArticleListMeta {...rest} />
    </div>
  )
}
