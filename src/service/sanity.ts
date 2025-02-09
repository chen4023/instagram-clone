import { createClient } from "next-sanity";

// sanity와 프로젝트 연결
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-02-09", // 현재 날짜 사용
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // serverToken
  perspective: "published", // 기본값
});
