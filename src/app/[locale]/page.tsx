import PartOne from "@/components/PartOne/main/PartOne";
import PartTwo from "@/components/PartTwo/main/PartTwo";
import PartThree from "@/components/PartThree/main/PartThree";

export default function Home() {
  return (
    <main className="bg-[#FCFCFE] w-full flex flex-col">
      <PartOne />
      <PartTwo />
      <PartThree />
    </main>
  );
}
