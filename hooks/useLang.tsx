import { useRouter } from "next/router";

export type Languages = "en" | "pt";
export const defaultLang: Languages = "en";

export function useLang(): Languages {
  const { locale } = useRouter();
  return (locale as Languages) || defaultLang;
}
