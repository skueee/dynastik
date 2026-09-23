import { ArrowRight } from "lucide-react";

export default function Docs() {
  return (
    <div className="min-h-screen bg-black p-6 md:p-12 text-slate-100 flex flex-col gap-8">
      <div className="flex flex-col gap-6 p-6 rounded-xl bg-gray-800">
        <label className="text-4xl font-bold">Github</label>
        <div className="w-full flex flex-col gap-2">
          <ListEntry text="Stars count" />
          <ListEntry text="Followers count" />
          <ListEntry text="Commit count" />
          <ListEntry text="Repos count" />
        </div>
      </div>
    </div>
  );
}

interface ListEntryProps {
  text: string;
}

export function ListEntry({ text }: ListEntryProps) {
  return (
    <button className="hover:bg-gray-700 items-center justify-between flex px-2 rounded-full w-full h-full ">
      <label className="text-2xl">{text}</label>
      <ArrowRight />
    </button>
  );
}
