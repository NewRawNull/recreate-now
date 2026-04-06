import { FaSadCry } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen font-roboto-condensed">
      <FaSadCry size={50} className="mb-10" />
      <h1 className="text-3xl font-extrabold">404</h1>
      <p>Sad boy! The page does not exist.</p>
    </div>
  );
}
