import Link from "next/link";
import clsx from "clsx";
import { MdArrowRight } from "react-icons/md";

type Classifier = "title_bug" | "main_bug" | "main_bug_2";

const classifierStyles: Record<Classifier, string> = {
  title_bug: "bg-brand-yellow text-brand-green",
  main_bug: "bg-brand-green text-brand-yellow",
  main_bug_2: "bg-brand-pink text-brand-yellow",
};

export default function LinkedButton({
  href,
  text,
  classifier,
}: {
  href: string;
  text: string;
  classifier: Classifier;
}) {
  return (
    <Link
      className={clsx(
        "px-5 py-3 rounded-2xl inline-flex items-center gap-2",
        classifierStyles[classifier],
      )}
      href={href}
    >
      {text}
      <MdArrowRight size={24} />
    </Link>
  );
}
