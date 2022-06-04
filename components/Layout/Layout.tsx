import { useLang } from "@hooks/useLang";
import { common } from "@locales/common";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  const lang = useLang();

  return (
    <>
      <Header title={common[lang].title} disabled />

      {children}

      <Footer disabled />
    </>
  );
}

export default Layout;
