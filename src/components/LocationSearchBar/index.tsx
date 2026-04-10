import {
  Building2,
  Landmark,
  Navigation,
  TreePalm,
  Waves,
} from "lucide-react";

import {
  Popover,
  PopoverAnchor,
  PopoverTrigger,
} from "@/components/ui/popover";

import RecommendationPopover from "./LocationRecommendationPopover";
import SearchBar from "./SearchBar";

const DEFAULT_RECOMMENDATIONS = [
  {
    icon: Navigation,
    title: "근처 체험 찾기",
    subtitle: "현재 위치를 기준으로 가까운 체험을 둘러보세요.",
  },
  {
    icon: Waves,
    title: "광안리해수욕장",
    subtitle: "바다 앞 산책과 야경을 즐기기 좋은 해변 명소예요.",
  },
  {
    icon: Building2,
    title: "부산, 한국",
    subtitle: "바다와 도심 분위기를 함께 즐길 수 있는 인기 여행지예요.",
  },
  {
    icon: Building2,
    title: "오사카시, 일본",
    subtitle: "먹거리와 쇼핑, 활기찬 도심 여행을 즐기기 좋아요.",
  },
  {
    icon: Landmark,
    title: "서울",
    subtitle: "트렌디한 동네와 궁궐, 야경을 함께 즐길 수 있어요.",
  },
  {
    icon: TreePalm,
    title: "제주",
    subtitle: "바다, 오름, 한적한 휴식을 찾을 때 잘 어울리는 곳이에요.",
  },
  {
    icon: Building2,
    title: "도쿄, 일본",
    subtitle: "도시 감성과 미식, 다양한 동네 탐방을 즐기기 좋아요.",
  },
] as const;

const LocationSearchBar = () => {
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
                className="w-full border-0 bg-transparent p-0 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </PopoverTrigger>
          }
        />
      </PopoverAnchor>
      <RecommendationPopover items={DEFAULT_RECOMMENDATIONS} />
    </Popover>
  );
};

export default LocationSearchBar;
