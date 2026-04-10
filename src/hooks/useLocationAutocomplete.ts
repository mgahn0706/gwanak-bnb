import { useEffect, useState } from "react";

import {
  DEFAULT_RECOMMENDATIONS,
  DUMMY_AUTOCOMPLETE_RECOMMENDATIONS,
} from "@/fixtures/data";
import type { RecommendedLocationItem } from "@/types";

export const useLocationAutocomplete = () => {
  const [query, setQuery] = useState("");
  const [recommendations, setRecommendations] = useState<
    readonly RecommendedLocationItem[]
  >(DEFAULT_RECOMMENDATIONS);

  useEffect(() => {
    if (query.trim() === "") {
      setRecommendations(DEFAULT_RECOMMENDATIONS);
      return;
    }
    const newRecommendations = DUMMY_AUTOCOMPLETE_RECOMMENDATIONS.filter(
      (item) => item.title.toLowerCase().includes(query.toLowerCase())
    );
    setRecommendations(newRecommendations);
  }, [query]);

  return {
    query,
    recommendations,
    setQuery,
  };
};
