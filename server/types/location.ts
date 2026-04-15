export type LocationIconKey =
  | "building"
  | "landmark"
  | "navigation"
  | "tree-palm"
  | "waves";

export interface LocationRecord {
  id: string;
  title: string;
  subtitle: string;
  iconKey: LocationIconKey;
  keywords: readonly string[];
  featured?: boolean;
}

export interface SearchLocationsParams {
  query?: string;
  limit?: number;
}

export interface LocationSearchItem {
  id: string;
  title: string;
  subtitle: string;
  iconKey: LocationIconKey;
}
