import type { StayRecord } from "../types/stay.js";

export const staySeedData: readonly StayRecord[] = [
  {
    id: "stay-1",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    location: "해운대, 부산",
    keywords: ["부산", "해운대", "오션뷰", "해변"],
    price: 185000,
    rating: 4.91,
    maximumGuest: {
      adult: 4,
      children: 2,
    },
    isPetAvailable: true,
  },
  {
    id: "stay-2",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    location: "성수동, 서울",
    keywords: ["서울", "성수동", "카페", "도심"],
    price: 143000,
    rating: 4.82,
    maximumGuest: {
      adult: 2,
      children: 1,
    },
    isPetAvailable: false,
  },
  {
    id: "stay-3",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    location: "애월, 제주",
    keywords: ["제주", "애월", "노을", "드라이브"],
    price: 212000,
    rating: 4.97,
    maximumGuest: {
      adult: 6,
      children: 3,
    },
    isPetAvailable: true,
  },
  {
    id: "stay-4",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    location: "난바, 오사카",
    keywords: ["오사카", "난바", "도톤보리", "일본"],
    price: 168000,
    rating: 4.76,
    maximumGuest: {
      adult: 3,
      children: 2,
    },
    isPetAvailable: false,
  },
];
