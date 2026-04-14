"use client";
import EditEntry from "@/app/_ui/mainfeed/edit/edit-item";
import Image from "next/image";

export default function EditPostTable() {
  return (
    <div className="font-roboto flex flex-col gap-5 p-5">
      <h1 className="font-bold">Select a post to edit:</h1>

      {/* The post tables */}

      <div className="flex flex-col min-h-[50vh] justify-between items-center p-5 outline outline-red-500 gap-5">
        <EditEntry
          uuid="123"
          description="Hello test 1"
          imageLink="/images/posts/arthur_leningrad.png"
        />
        <EditEntry
          uuid="456"
          description="Hello test 2qo 23w98fhq9 8fh981 34hf9839 8f2q 39i fj293j f9823 j49uj"
          imageLink=""
        />
        <EditEntry uuid="789" description="Hello test 3" imageLink="" />
        <EditEntry uuid="147" description="Hello test 4" imageLink="" />
        <EditEntry uuid="258" description="Hello test 5" imageLink="" />
      </div>
    </div>
  );
}
