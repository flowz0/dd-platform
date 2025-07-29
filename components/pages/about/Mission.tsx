import ValueCard from "./ValueCard";
import { FaHandshake, FaClock, FaSmile } from "react-icons/fa";

export default function MissionSection() {
  return (
    <section className="pt-48 max-w-7xl mx-auto px-6 sm:pt-64">
      <div className="flex flex-col items-center">
        <h2 className="text-white10 text-h4 font-bold sm:text-h2">
          Our Mission and Values
        </h2>
        <p className="text-white25 text-p mt-4">
          We&apos;re committed to improving indoor air quality and extending the life of your HVAC system.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-6 mt-16 md:grid-cols-3 md:gap-x-20">
        <ValueCard 
          Icon={FaHandshake} 
          desc="We believe in honest, transparent service with no shortcuts or hidden surprises."
        >
          Integrity
        </ValueCard>
        <ValueCard 
          Icon={FaClock} 
          desc="Dependable scheduling and consistent results you can count on every time."
        >
          Reliability
        </ValueCard>
        <ValueCard 
          Icon={FaSmile} 
          desc="Satisfaction is our priority and every job is done with your home's comfort in mind."
        >
          Customer Satisfaction
        </ValueCard>
      </div>
    </section>
  );
}