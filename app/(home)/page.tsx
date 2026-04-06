import Image from "next/image";
import LinkedButton from "@/app/ui/home/button";
import { mockUserReviews } from "@/app/lib/data";
import UserReview from "@/app/ui/home/user-review";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="h-screen bg-brand-pink flex justify-center items-center flex-col font-ibm-plex-mono">
        <span className="text-brand-yellow text-[150px] font-bold leading-none">
          RECREATE
        </span>
        <span className="text-brand-green text-[80px] font-bold leading-none">
          NOW
        </span>
        <span className="text-brand-yellow text-3xl font-thin leading-none italic mt-10">
          &quot;For extroverted, low-attention span, hyperflexing
          stakeholders&quot;
        </span>
        <div className="mt-10">
          <LinkedButton href="/login" text="Sign in" classifier="title_bug" />
        </div>
      </div>
      <div className="bg-transparent h-screen text-black flex flex-row p-10">
        {/* First panel */}
        <div className="flex flex-col gap-10 py-20 w-full">
          <h1 className="font-roboto-condensed text-[100px] font-extrabold leading-none">
            User Ratings
          </h1>
          <p className="font-roboto max-w-2xl text-lg text-justify">
            <span className="font-bold ">RecreateNOW </span> is being used by
            1,000,000+ users worldwide for different hobbies and activities. We
            received over approximately 10,000+ positive ratings and will be
            providing more help and interest for the user&apos;s specific needs.
          </p>

          {/* Star rating summary */}
          <div className="flex items-center gap-4">
            <span className="font-roboto-condensed text-[72px] font-extrabold leading-none">
              4.9
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 text-brand-yellow text-3xl">
                {"★★★★★"}
              </div>
              <span className="font-roboto text-gray-500 text-sm">
                Based on 10,482 reviews
              </span>
            </div>
          </div>

          {/* Individual review cards */}
          <div className="flex flex-row gap-6 mt-4">
            {mockUserReviews.map((r) => (
              <UserReview
                name={r.name}
                review={r.review}
                activity={r.activity}
                stars={r.stars}
                key={r.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
