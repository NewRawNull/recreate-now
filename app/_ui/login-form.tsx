"use client";
import { loginAction } from "@/app/_lib/auth";
import Link from "next/link";
import { useActionState } from "react";

export default function LoginForm() {
  const [error, formAction] = useActionState(loginAction, undefined);

  return (
    <form
      className="px-5 py-10 bg-white gap-6 flex flex-col items-center justify-center rounded-2xl"
      action={formAction}
    >
      <h1 className="font-roboto-condensed text-black font-bold text-[30px]">
        Login
      </h1>
      {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
      <div className="grid grid-cols-3 gap-3 items-center">
        <label htmlFor="username" className="text-black">
          Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="bg-white text-black p-1.5 col-span-2 outline-black outline-1 focus:outline-2 focus:bg-gray-200"
        />

        <label htmlFor="password" className="text-black">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-white text-black p-1.5 col-span-2 outline-black outline-1 focus:outline-2 focus:bg-gray-200"
        />
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <Link href="/" className="underline text-gray-600 hover:text-gray-800">
          Go back
        </Link>
        <input
          type="submit"
          value="SUBMIT"
          className="bg-brand-yellow p-3 font-roboto text-black rounded hover:bg-brand-darkyellow font-bold cursor-pointer"
        />
      </div>
    </form>
  );
}
