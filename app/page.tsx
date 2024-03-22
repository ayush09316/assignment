import Collections from "@/components/Collections";
import Sports from "@/components/Sports";
import ThemeSwitch from "@/components/ThemeSwitch";


export default function Home() {
  return (
    <main>
      <header className="h-16 flex dark:bg-[#292B32] bg-[#E8EBF1]  items-center justify-end mb-8">
        <nav className="h-10 mx-10">
          <ThemeSwitch />
        </nav>
      </header>
     <div className="flex flex-col mx-10 gap-10 items-center">
     <Sports />
      <Collections/>
     </div>
    </main>
  );
}
