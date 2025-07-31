import formatDate from "@/lib/formatDate";
import { FaUser, FaCalendarDays, FaClock } from "react-icons/fa6";

interface BlogFeaturesProps {
  author: string;
  date: string;
  readTime: string;
}

export default function BlogFeatures({author, date, readTime}: BlogFeaturesProps) {
  return (
    <section className="flex flex-wrap justify-center items-center gap-y-6 mt-8 gap-x-12">
      <div className="flex items-center gap-4">
        <FaUser className="text-primary w-4 h-4" />
        <h4 className="text-white25">
          {author}
        </h4>
      </div>
      <div className="flex items-center gap-4">
        <FaCalendarDays className="text-[#0080DB] w-4 h-4" />
        <p className="text-white25">
          {formatDate(date)}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <FaClock className="text-[#0080DB] w-4 h-4" />
        <p className="text-white25">
          {readTime} min read
        </p>
      </div>
    </section>
  );
}