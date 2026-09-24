import { ArrowRight, FileCodeCorner } from "lucide-react";
import { Label } from "@/components/ui/label";
import Link from 'next/link';

export default function Docs() {
  return (
    <div className="bg-black text-slate-100">

      <header className="px-20 py-5 flex items-center justify-between">
        <label className="text-4xl font-black">Dynastik</label>
        <a href="https://github.com/skueee/dynastik" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-900 p-2 rounded-xl"><FileCodeCorner size={40} /></a>
      </header>

      <div className="min-h-screen py-2 px-12 flex flex-col gap-8">
        <div className="flex flex-col gap-6 p-6 rounded-xl bg-gray-800">
          <label className="text-4xl font-bold">Github</label>
          <div className="w-full flex flex-col gap-2">
            <ListEntry text="Stars count" href="/docs/pages/github/stars" />
            <ListEntry text="Followers count" href="/docs/pages/github/followers" />
            <ListEntry text="Forks count" href="/docs/pages/github/forks" />
            <ListEntry text="Languages count" href="/docs/pages/github/languages" />
          </div>
        </div>
        <div className="flex flex-col gap-6 p-6 rounded-xl bg-gray-800">
          <label className="text-4xl font-bold">NPM</label>
          <div className="w-full flex flex-col gap-2">
            <ListEntry text="Monthly downloads" href="/docs/pages/npm/monthly-downloads" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ListEntryProps {
  text: string;
  href: string;
}

export function ListEntry({ text, href }: ListEntryProps) {
  return (
    <Link href={href} className="hover:bg-gray-700 items-center justify-between flex px-2 rounded-full w-full h-full ">
      <Label className="text-2xl">{text}</Label>
      <ArrowRight />
    </Link>
  );
}
