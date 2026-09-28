import { ArticleListMetaAvatarProps } from "../types"

const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
];

export const ArticleListMetaAvatar = ({ publisher }: ArticleListMetaAvatarProps) => {
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <span
      className={`
          w-[1.5rem] aspect-[1/1] text-sm
          flex items-center justify-center
          font-semibold rounded-full ${color}
        `
      }
    >
      {publisher?.charAt(0).toUpperCase()}
    </span>
  )
}
