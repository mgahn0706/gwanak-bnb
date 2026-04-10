import {
  Popover,
  PopoverAnchor,
  PopoverTrigger,
} from "@/components/ui/popover";

import RecommendationPopover from "./LocationRecommendationPopover";
import SearchBar from "./SearchBar";
import { DEFAULT_RECOMMENDATIONS } from "./data";
import { useState } from "react";

const LocationSearchBar = () => {
  const [recommendations, setRecommendations] = useState(
    DEFAULT_RECOMMENDATIONS
  );
  const [query, setQuery] = useState("");

  return (
    <Popover>
      <PopoverAnchor asChild>
        <SearchBar
          inputSlot={
            <PopoverTrigger asChild>
              <input
                id="location-search-input"
                type="text"
                placeholder="여행할 지역이나 도시를 검색해보세요"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full border-0 bg-transparent p-0 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </PopoverTrigger>
          }
        />
      </PopoverAnchor>
      <RecommendationPopover items={recommendations} />
    </Popover>
  );
};

export default LocationSearchBar;
