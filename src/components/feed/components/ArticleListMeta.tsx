import { Temporal } from "@js-temporal/polyfill";
import Link from "next/link"
import { ArticleListMetaProps } from "../types"
import { ArticleListMetaAvatar } from "./ArticleListMetaAvatar";

const formateDate = (published_at: string) => {
  const instant = Temporal.Instant.from(published_at);

  const zonedDateTime = instant.toZonedDateTimeISO(
    "Europe/Lisbon"
  );

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
  }).format(
    new Date(zonedDateTime.epochMilliseconds)
  );
}

export const ArticleListMeta = ({
  publisher,
  published_at
}: ArticleListMetaProps) => {
  return (
    <div className="flex gap-8 items-center">
      <p className="flex gap-1 items-center text-sm">
        <ArticleListMetaAvatar publisher={publisher} />
        <Link href="#" className="font-semibold text-gray-400 text-sm">{publisher}</Link>
      </p> <span className="text-gray-400 text-sm">{formateDate(published_at)}</span>
    </div>
  )
}
