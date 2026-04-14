"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";

export default function EditEntry({
  uuid,
  description,
  imageLink,
}: {
  uuid: string;
  description: string;
  imageLink: string;
}) {
  return (
    <div className="w-full p-4 rounded outline-2 outline-gray-800 font-roboto flex flex-col">
      <p className="text-sm text-gray-500">{uuid}</p>
      <p className="text-black line-clamp-1">{description}</p>

      {/* TODO: Make sure to add an image here */}
    </div>
  );
}
