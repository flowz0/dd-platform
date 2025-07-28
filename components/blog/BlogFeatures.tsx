import { FaUser, FaCalendarDays, FaClock } from "react-icons/fa6";

export default function BlogFeatures() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 mt-8 md:gap-x-8">
      <div className="flex items-center gap-2">
        <FaUser className="text-primary w-4 h-4" />
        <h4 className="text-white10 font-semibold">
          Karson Kolle
        </h4>
      </div>
      <div className="flex items-center gap-2">
        <FaCalendarDays className="text-[#0080DB] w-4 h-4" />
        <p className="text-white10 font-semibold">
          July 18, 2025
        </p>
      </div>
      <div className="flex items-center gap-2">
        <FaClock className="text-[#0080DB] w-4 h-4" />
        <p className="text-white10 font-semibold">
          3 min read
        </p>
      </div>
    </section>
  );
}