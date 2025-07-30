import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export default function MobileCallBtn() {
  return (
    <Link href="tel:+18167082608" className="fixed bottom-16 right-8 z-30 lg:hidden">
      <div className="bg-secondary shadow shadow-white10 p-4 rounded-full">
        <FaPhoneAlt className="text-white95 w-8 h-8" />
      </div>
    </Link>
  );
}