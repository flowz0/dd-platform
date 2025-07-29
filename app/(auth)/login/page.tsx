import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";
import DuctDaddyLogo from "@/public/assets/duct-daddy-logo.png";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-12 sm:mt-16">
      <div className="flex flex-col items-center justify-center">
        <Link href={"/"}>
          <Image
            src={DuctDaddyLogo}
            alt="Duct Daddy Duct Cleaning logo"
            className="h-full w-28 object-cover"
            priority={true}
            draggable={false}
            loading="eager"
          />
        </Link>
        <h1 className="text-white10 text-h4 font-bold text-center mt-8 sm:text-h3">
          Dashboard Login
        </h1>
        <p className="text-white25 text-p text-center mt-4">
          Enter your email and password to access the dashboard.
        </p>
        <LoginForm />
      </div>
    </div>
  );
}