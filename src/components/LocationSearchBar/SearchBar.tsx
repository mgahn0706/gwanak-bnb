import { forwardRef } from "react";

import { cn } from "@/lib/utils";

const SearchBar = forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "flex w-full max-w-2xl items-center gap-3 rounded-full border border-border/70 bg-background px-4 py-3 shadow-[0_18px_45px_-26px_rgba(15,23,42,0.35)] transition-colors hover:border-foreground/15",
          className
        )}
        {...props}
      >
        <div className="min-w-0 flex-1 text-left">
          <span className="mb-1 block text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Location
          </span>
          <span className="block text-sm font-medium text-muted-foreground">
            여행할 지역이나 도시를 검색해보세요
          </span>
        </div>
      </button>
    );
  }
);

SearchBar.displayName = "SearchBar";

export default SearchBar;
