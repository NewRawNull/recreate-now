import { Metadata } from "next";
import FunctionBar from "@/app/_ui/function-bar";
import ContentingBar from "@/app/_ui/mainfeed/contenting-bar";

export const metadata: Metadata = {
  title: "NOW Home Recreations",
};

export default function FeedLayout({
  children,
  popup,
}: Readonly<{
  children: React.ReactNode;
  popup: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[250px_1fr]">
      <aside className="sticky top-0 h-screen">
        <FunctionBar />
      </aside>

      <main>
        <nav className="sticky top-0">
          <ContentingBar />
        </nav>
        {children}
        {popup}
      </main>
    </div>
  );
}
