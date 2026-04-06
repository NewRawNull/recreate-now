import type { Metadata } from "next";
// import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Login",
  description: "Recreate NOW Login Page",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
