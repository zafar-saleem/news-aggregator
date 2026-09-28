"use client";

import { BuildingComplex, Check, Sparkles, Tag, UserRound } from "lucide-react"
import { PrefferedSourceList } from "./components/PreferredSources/PreferredSourceList"
import { PreferredCategoryList } from "./components/PreferredCategories/PreferredCategoryList"
import { PreferredAuthorList } from "./components/PreferredAuthors/PreferredAuthorList"
import { usePreferrencesSave } from "./hooks/usePreferencesSave";

export const PersonalizePanel = () => {
  const { onPreferrencesSave } = usePreferrencesSave();

  return (
    <aside className="personalize transition flex flex-col gap-6 bg-white p-6 rounded-[1rem] shadow-[0_-15px_10px_rgba(0,0,0,0.1)] lg:shadow-md w-stretch col-span-6 lg:col-span-2 flex lg:flex fixed -bottom-[120vh] lg:relative lg:bottom-[0vh] overflow-y-scroll lg:overflow-none lg:h-fit h-[50vh]">
      <form onSubmit={onPreferrencesSave} className="flex flex-col gap-6 h-full bg-white">
        <div>
          <p className="flex gap-1 items-center">
            <Sparkles color="green" fill="green" stroke="none" />
            <span className="text-[1.25rem] font-medium">Personalize Your Feed</span>
          </p>
        </div>
        <div className="divide-y divide-gray-200 flex flex-col">
          <PrefferedSourceList
            title={`Preferred Sources`}
            icon={<BuildingComplex color="green" width={20} />}
          />

          <PreferredCategoryList
            title="Preferred Categories"
            icon={<Tag color="green" width={20} />}
          />

          <PreferredAuthorList
            title="Preferred Authors"
            icon={<UserRound color="green" width={20} />}
          />
        </div>
        {/* <button className="flex gap-1 p-2 border border-gray-300 w-full rounded-md bg-[rgb(2,95,72)] text-white justify-center cursor-pointer hover:shadow-lg transition active:scale-[0.99]">
          <Check />
          <span>Save Preferences</span>
        </button> */}
      </form>
    </aside>
  )
}
