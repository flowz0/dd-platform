import Link from "next/link";
import AreaCard from "./AreaCard";

export default function Areas() {
  return (
    <div className="grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-3 mt-8">
      <Link href="/service-area/oak-grove">
        <AreaCard>
          Oak Grove
        </AreaCard>
      </Link>
      <Link href="/service-area/grain-valley">
        <AreaCard>
          Grain Valley
        </AreaCard>
      </Link>
      <Link href="/service-area/blue-springs">
        <AreaCard>
          Blue Springs
        </AreaCard>
      </Link>
      <Link href="/service-area/lees-summit">
        <AreaCard>
          Lees Summit
        </AreaCard>
      </Link>
      <Link href="/service-area/independence">
        <AreaCard>
          Independence
        </AreaCard>
      </Link>
      <Link href="/service-area/kansas-city">
        <AreaCard>
          Kansas City
        </AreaCard>
      </Link>
      <Link href="/service-area/raymore">
        <AreaCard>
          Raymore
        </AreaCard>
      </Link>
      <Link href="/service-area/raytown">
        <AreaCard>
          Raytown
        </AreaCard>
      </Link>
      <Link href="/service-area/pleasant-hill">
        <AreaCard>
          Pleasant Hill
        </AreaCard>
      </Link>
      <Link href="/service-area/odessa">
        <AreaCard className="sm:hidden">
          Odessa
        </AreaCard>
      </Link>
    </div>
  );
}