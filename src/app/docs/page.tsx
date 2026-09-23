import { ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import Link from 'next/link';

export default function Docs() {
  return (
    <div className="min-h-screen bg-black p-6 md:p-12 text-slate-100 flex flex-col gap-8">
      <div className="flex flex-col gap-6 p-6 rounded-xl bg-gray-800">
        <label className="text-4xl font-bold">Github</label>
        <div className="w-full flex flex-col gap-2">
          <ListEntry text="Stars count" href="/docs/pages/github/stars" />
          <ListEntry text="Followers count" href="/docs/pages/github/followers" />
          <ListEntry text="Forks count" href="/docs/pages/github/forks" />
          <ListEntry text="Languages count" href="/docs/pages/github/languages" />
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
