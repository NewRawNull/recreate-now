"use client";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form className="px-5 py-10 bg-white gap-6 flex flex-col items-center justify-center rounded-2xl">
      <h1 className="font-roboto-condensed text-black font-bold text-[30px]">
        Login
      </h1>
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
