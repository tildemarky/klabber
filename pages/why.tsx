import Layout from "@comp/Layout";
import { useLang } from "@hooks/useLang";
import { common } from "@locales/common";
import { StyledPage } from "@style/whyPage.css";

function WhyPage(): JSX.Element {
  const lang = useLang();
  return (
    <Layout>
      <main className={StyledPage}>
        <h1>{common[lang].explanationSummary}</h1>
        <p>{common[lang].explanationExpansion}</p>
        {common[lang].tips.map((tip) => (
          <p key={tip.message}>{tip.message}</p>
        ))}
      </main>
    </Layout>
  );
}

export default WhyPage;
