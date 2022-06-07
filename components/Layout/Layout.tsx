import { useLang } from "@hooks/useLang";
import { common } from "@locales/common";
import Script from "next/script";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  const lang = useLang();

  return (
    <>
      <Script
        async
        defer
        data-website-id="f06a2b69-f4ee-432c-97ec-56a1d2e410ae"
        src="https://umamiocto.netlify.app/umami.js"
        strategy="afterInteractive"
      />
      <Header title={common[lang].title} disabled />

      {children}

      <Footer disabled />
    </>
  );
}

export default Layout;
