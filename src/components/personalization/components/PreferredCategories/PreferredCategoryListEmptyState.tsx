import { ShieldAlert } from "lucide-react"

export const PreferredCategoryListEmptyState = () => {
  return (
    <div className="flex flex-col gap-4 w-full col-span-4 items-center justify-center min-h-[10rem] text-center">
      <ShieldAlert color="orange" size={30} />
      <p className="text-gray-600">No categories found to load for personalization</p>
    </div>
  )
}
