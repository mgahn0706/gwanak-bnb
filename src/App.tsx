import "./App.css";
import { Search } from "lucide-react";
import GuestFilterSelectPopover from "./components/GuestFilterSelectPopover";
import LocationSearchBar from "./components/LocationSearchBar";
import { Button } from "./components/ui/button";

function App() {
  return (
    <section id="center">
      <div className="flex w-full max-w-4xl items-center gap-3 rounded-full border border-border/70 bg-background p-1.5 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.28)] md:gap-0">
        <LocationSearchBar triggerClassName="max-w-none rounded-none border-0 bg-transparent px-5 py-2.5 shadow-none hover:border-transparent md:rounded-l-full" />
        <div className="hidden h-10 w-px bg-border/80 md:block" />
        <GuestFilterSelectPopover triggerClassName="max-w-none rounded-none border-0 bg-transparent px-5 py-2.5 shadow-none hover:border-transparent md:rounded-r-full" />
        <Button
          type="button"
          size="icon-lg"
          className="ml-auto size-14 rounded-full bg-[#ff385c] text-white shadow-[0_16px_30px_-18px_rgba(255,56,92,0.95)] hover:bg-[#e31c5f]"
          aria-label="검색"
        >
          <Search className="size-5" />
        </Button>
      </div>
    </section>
  );
}

export default App;
