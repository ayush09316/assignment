import Collections from "@/components/Collections";
import Sports from "@/components/Sports";
import ThemeSwitch from "@/components/ThemeSwitch";


export default function Home() {
  return (
    <>
     <header className="h-16 flex dark:bg-[#292B32] bg-[#E8EBF1] items-center justify-between mb-8 px-4 md:px-8 lg:px-16 w-full">
  <nav className="h-10">
    <ThemeSwitch />
  </nav>
</header>

     <div className="flex flex-col mx-10 gap-10 items-center">
     <Sports />
      <Collections/>
     </div>
    </>
  );
}
