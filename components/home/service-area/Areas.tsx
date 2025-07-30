import AreaCard from "./AreaCard";

export default function Areas() {
  return (
    <div className="grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-3 mt-8">
      <AreaCard>
        Oak Grove
      </AreaCard>
      <AreaCard>
        Grain Valley
      </AreaCard>
      <AreaCard>
        Blue Springs
      </AreaCard>
      <AreaCard>
        Lees Summit
      </AreaCard>
      <AreaCard>
        Independence
      </AreaCard>
      <AreaCard>
        Kansas City
      </AreaCard>
      <AreaCard>
        Raymore
      </AreaCard>
      <AreaCard>
        Raytown
      </AreaCard>
      <AreaCard>
        Pleasant Hill
      </AreaCard>
      <AreaCard className="sm:hidden">
        Odessa
      </AreaCard>
    </div>
  );
}