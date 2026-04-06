import LoginForm from "@/app/ui/login-form";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <div className="font-roboto flex items-center justify-center h-screen">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
