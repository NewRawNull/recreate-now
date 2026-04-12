import type { Metadata } from "next";
// import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Sign up for new account",
  description: "Recreate NOW Sign Up Page",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
