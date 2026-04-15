import type { ComponentType, SVGProps } from "react";

export type LocationIconKey =
  | "building"
  | "landmark"
  | "navigation"
  | "tree-palm"
  | "waves";

export interface RecommendedLocationItem {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
}

export interface LocationSearchItem {
  id: string;
  title: string;
  subtitle: string;
  iconKey: LocationIconKey;
}

export interface LocationSearchResponse {
  data: LocationSearchItem[];
  meta: {
    query: string;
    count: number;
  };
}
