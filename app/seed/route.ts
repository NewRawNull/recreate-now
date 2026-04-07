import sql from "@/app/_lib/db";
import { users } from "@/app/_lib/mockData";
import bcrypt from "bcrypt";

// NOTE: ONLY RUN localhost:3000/seed ONCE

async function seedUsers() {
  await sql`CREATE TABLE IF NOT EXISTS Users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password TEXT NOT NULL
  );`;

  users.map(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password_hash, 10);
    await sql`
        INSERT INTO Users (name, password)
        VALUES (${user.name}, ${hashedPassword})
        ON CONFLICT DO NOTHING
      `;
  });
}

export async function GET() {
  if (process.env.NODE_ENV === "production")
    return Response.json({ message: "Bad Request" }, { status: 400 });

  try {
    await seedUsers();

    return Response.json({ message: "Database successfully created!" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
