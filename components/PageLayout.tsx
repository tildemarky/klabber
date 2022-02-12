import { Footer } from "@comp/Footer";
import { Header } from "@comp/Header";
import { useLang } from "hooks/useLang";
import React from "react";

import { common } from "../locales/common";

type LayoutProps = {
  children: React.ReactNode;
};

export function PageLayout({ children }: LayoutProps): JSX.Element {
  const lang = useLang();

  return (
    <>
      <Header title={common[lang].title} disabled />

      {children}

      <Footer disabled />
    </>
  );
}
