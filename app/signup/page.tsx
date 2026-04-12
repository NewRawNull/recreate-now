import SignupForm from "@/app/_ui/signup-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function LoginPage() {
  const session = await auth();
  if (session) {
    redirect("/mainfeed");
  }

  return (
    <div className="font-roboto flex items-center justify-center h-screen bg-black">
      <Suspense>
        <SignupForm />
      </Suspense>
    </div>
  );
}
