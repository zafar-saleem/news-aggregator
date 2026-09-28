import { PersonalizePanel } from "@/components/personalization/PersonalizePanel";
import { FilterBar } from "@/components/search/FilterBar";
import { ArticleFeed } from "@/components/feed/ArticleFeed";
import { SlidersHorizontal } from "lucide-react";

export default function Home() {
  return (
    <div className="has-[.checkbox:checked]:[&_.personalize]:bottom-[0vh] relative flex flex-col gap-8 flex-1 items-center bg-zinc-50 font-sans m-auto max-w-[var(--main-width)]">
      <FilterBar />
      <div className="relative grid grid-cols-1 gap-8 p-6 grid-cols-6">
        <ArticleFeed />
        <PersonalizePanel />
      </div>
      <label className="z-10 text-white fixed bottom-10 right-10 flex items-center justify-center lg:hidden bg-[rgb(3,90,69)] w-[4rem] aspect-[1/1] rounded-full shadow-[0_0_10px_rgba(0,0,0,1)] active:scale-[0.98]">
        <input type="checkbox" className="checkbox hidden" />
        <SlidersHorizontal />
      </label>
    </div>
  );
}
