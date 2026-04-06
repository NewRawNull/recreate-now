export default function UserReview({
  name,
  activity,
  stars,
  review,
}: {
  name: string;
  activity: string;
  stars: number;
  review: string;
}) {
  return (
    <div
      key={name}
      className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm flex-1"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="font-roboto font-bold text-base">{name}</p>
          <p className="font-roboto text-sm text-gray-400">{activity}</p>
        </div>
        <span className="text-brand-yellow text-lg">{"★".repeat(stars)}</span>
      </div>
      <p className="font-roboto text-sm text-gray-600 leading-relaxed">
        &quot;{review}&quot;
      </p>
    </div>
  );
}
