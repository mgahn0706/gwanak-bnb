import {
  Compass,
  Hotel,
  Landmark,
  MapPin,
  Mountain,
  TreePalm,
} from "lucide-react";

import { Popover, PopoverTrigger } from "@/components/ui/popover";

import RecommendationPopover from "./LocationRecommendationPopover";
import SearchBar from "./SearchBar";

const RECOMMENDED_LOCATIONS = [
  {
    icon: Compass,
    title: "어디든지",
    subtitle: "유연한 일정으로 인기 여행지를 둘러보세요.",
  },
  {
    icon: MapPin,
    title: "서울",
    subtitle: "감각적인 동네 스테이와 도심 속 휴식을 찾아보세요.",
  },
  {
    icon: TreePalm,
    title: "제주",
    subtitle: "바다 전망 숙소와 한적한 감성 스팟을 추천해요.",
  },
  {
    icon: Mountain,
    title: "강릉",
    subtitle: "동해 바다와 산책하기 좋은 숙소를 모았어요.",
  },
  {
    icon: Landmark,
    title: "경주",
    subtitle: "한옥 감성과 역사적인 풍경을 함께 즐겨보세요.",
  },
  {
    icon: Hotel,
    title: "부산",
    subtitle: "광안리와 해운대 근처 인기 숙소를 둘러보세요.",
  },
] as const;

const LocationSearchBar = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <SearchBar />
      </PopoverTrigger>
      <RecommendationPopover items={RECOMMENDED_LOCATIONS} />
    </Popover>
  );
};

export default LocationSearchBar;
