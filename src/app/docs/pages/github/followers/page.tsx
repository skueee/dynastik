"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { generate_url } from "@/lib/generate-url";

export default function Page() {
  const [generatedUrl, setGeneratedUrl] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const user = formData.get("user") as string;
    const svg = formData.get("svg") as string;

    const result = generate_url("/api/create/github/followers", svg, {
      user: user,
    });

    setGeneratedUrl(result);
  }

  return (
    <div className="flex flex-col gap-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="user">user</Label>
          <Input id="user" name="user" placeholder="skueee" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="svg">SVG</Label>
          <Textarea id="svg" name="svg" placeholder="Enter your SVG here" />
        </div>
        <Button type="submit">Generate URL</Button>
      </form>
      <p className="select-text whitespace-pre-wrap break-all text-sm font-medium">
        {generatedUrl}
      </p>
    </div>
  );
}
