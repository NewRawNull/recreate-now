"use client";
import { signUpAction } from "@/app/_lib/auth";
import Link from "next/link";
import { useActionState } from "react";

export default function SignupForm() {
  const [state, signupFormAction, pending] = useActionState(
    signUpAction,
    undefined,
  );

  return (
    <form
      action={signupFormAction}
      className="px-5 py-10 bg-white gap-6 flex flex-col items-center justify-center rounded-2xl"
    >
      <h1 className="font-roboto-condensed text-black font-bold text-[30px]">
        Create a new account
      </h1>
      {state?.message && (
        <p className="text-red-600 font-bold">{state.message}</p>
      )}
      {!state?.success ? (
        <>
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
            {state?.errors?.username && (
              <p className="text-red-600 col-span-3">{state.errors.username}</p>
            )}
            <label htmlFor="password" className="text-black">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-white text-black p-1.5 col-span-2 outline-black outline-1 focus:outline-2 focus:bg-gray-200"
            />
            {state?.errors?.password && (
              <div className="text-red-600 col-span-3">
                <p>Follow instructions below:</p>
                <ul>
                  {state.errors.password.map((error) => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <Link
              href="/login"
              className="underline text-gray-600 hover:text-gray-800"
            >
              Log in account?
            </Link>
            <input
              type="submit"
              value="SUBMIT"
              className="bg-brand-yellow p-3 font-roboto text-black rounded hover:bg-brand-darkyellow font-bold cursor-pointer"
            />
          </div>
        </>
      ) : (
        <>
          <p className="text-green-600 font-bold">{state.success}</p>
          <Link
            href="/login"
            className="underline text-gray-600 hover:text-gray-800"
          >
            Back to Login
          </Link>
        </>
      )}
    </form>
  );
}
