import { Metadata } from "next";
import FunctionBar from "@/app/ui/function-bar";

export const metadata: Metadata = {
  title: "NOW Home Recreations",
};

export default function FeedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[250px_1fr]">
      <aside className="sticky top-0 h-screen">
        <FunctionBar />
      </aside>

      <main>{children}</main>
    </div>
  );
}
