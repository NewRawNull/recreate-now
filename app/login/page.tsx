import LoginForm from "@/app/_ui/login-form";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <div className="font-roboto flex items-center justify-center h-screen bg-black">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
