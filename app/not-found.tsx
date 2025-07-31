import Footer from "@/components/home/Footer";
import Navbar from "@/components/navigation/Navbar"
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="pt-32 max-w-7xl px-6 mx-auto sm:pt-48">
        <div className="flex flex-col items-center">
          <h1 className="text-white10 text-h2 font-bold text-center max-w-3xl mt-4 sm:text-h1">
            Page Not Found But Clean Air is A Click Away
          </h1>
          <p className="text-white25 text-p text-center max-w-2xl mt-4">
            Looks like the page you&apos;re searching for doesn&apos;t exist. But no worries, Duct Daddy Duct Cleaning is still here with expert HVAC and air duct cleaning services.
          </p>
          <Link href="/" className="mt-8">
            <Button variant="primary">Back to Fresh Air</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}