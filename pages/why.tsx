import { PageLayout } from "@comp/PageLayout";
import React from "react";
import { StyledPage } from "styles/whyPage.css";

import { useLang } from "../hooks/useLang";
import { common } from "../locales/common";

function WhyPage(): JSX.Element {
  const lang = useLang();
  return (
    <PageLayout>
      <main className={StyledPage}>
        <h1>{common[lang].explanationSummary}</h1>
        <p>{common[lang].explanationExpansion}</p>
      </main>
    </PageLayout>
  );
}

export default WhyPage;
