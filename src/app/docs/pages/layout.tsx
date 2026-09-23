// app/forms/layout.tsx
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SharedFormLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="container mx-auto py-10 max-w-2xl">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Create a Sticker</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
