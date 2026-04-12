"use server";

import { FormState, SignupFormSchema } from "@/app/_lib/definitions";
import { addUser } from "@/app/_lib/query";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function loginAction(prevState: unknown, formData: FormData) {
  try {
    await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirectTo: "/mainfeed",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return "Invalid username or password";
    }
    throw error;
  }
}

export async function logoutAction() {
  await signOut({ redirectTo: "/" });
}

export async function signUpAction(prevState: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const user = await addUser(
    validatedFields.data.username,
    validatedFields.data.password,
  );

  if (!user) {
    return {
      message: "Username is already taken.",
    };
  }
  return { success: "Successfully created account." };
  // redirect("/login");
}
