import Bubble from "@comp/Bubble";
import ErrorBubble from "@comp/Bubbles/ErrorBubble";
import InputBubble from "@comp/Bubbles/InputBubble";
import LoadingBubble from "@comp/Bubbles/LoadingBubble";
import Choices from "@comp/Choices";
import Container from "@comp/Container";
import Feedback from "@comp/Feedback";
import Footer from "@comp/Layout/Footer";
import Header from "@comp/Layout/Header";
import { useLang } from "@hooks/useLang";
import { common } from "@locales/common";
import Head from "next/head";
import type { SyntheticEvent } from "react";
import { useEffect, useRef, useState } from "react";

export default function Home(): JSX.Element {
  const lang = useLang();
  const chatEl = useRef<HTMLInputElement>(null);
  const suggestEl = useRef<HTMLDivElement>(null);
  const [replies, setReplies] = useState([
    { id: 0, type: "comp", message: common[lang].greet },
    { id: 2, type: "comp", message: common[lang].helperTwo },
    { id: 3, type: "comp", message: common[lang].suggestion },
  ]);
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState(true);
  const [reset, setReset] = useState(false);
  const [visited, setVisited] = useState(false);
  const [error, setError] = useState({ enabled: false, code: 0, message: "" });
  const [suggestion, setSuggestion] = useState<any[]>([]);
  const [messages, setMessages] = useState([{ id: 0, type: "bot", games: null, message: common[lang].greet }]);

  useEffect(() => {
    if (chatEl?.current) {
      chatEl.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [replies]);
  useEffect(() => {
    if (suggestEl?.current) {
      suggestEl.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [suggestion]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("visited")) {
        setVisited(true);
      } else {
        localStorage.setItem("visited", "true");
      }
    }
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    const obj = { id: messages.length + 1, type: "reply", games: null, message: text };
    setMessages([...messages, obj]);
    setReplies([...replies, obj]);
    await getData(text);
  };
  const handleReset = async (): Promise<void> => {
    setLoading(true);
    const latestMessage = replies[replies.length - 1].message;
    await getData(latestMessage);
  };
  const handleChoice = async (e: SyntheticEvent) => {
    e.preventDefault();
    switch (e.currentTarget.id) {
      case "good": {
        setFeedback(false);
        setReset(true);
        break;
      }
      case "bad": {
        setFeedback(false);
        setSuggestion([]);
        setInput(true);
        break;
      }
      case "reset": {
        setReset(false);
        setInput(false);
        await handleReset();
        break;
      }
    }
  };
  const getData = async (query: string) => {
    try {
      setInput(false);
      setLoading(true);
      const response = await fetch(`/api/search?question=${query}`);
      if (response.status !== 200 && response.status !== 504) {
        const errorMsg = { id: messages.length + 1, type: "error", games: null, message: "Oops, something went wrong" };
        setMessages([...messages, errorMsg]);
      }
      const { data } = await response.json();
      if (data.length > 0) {
        setSuggestion(data);
        console.log(data);
        const gamesAddition = {
          id: messages.length + 1,
          type: "suggestion",
          games: data,
          message: "Here are some games fitting that description",
        };
        setMessages([...messages, gamesAddition]);
        setFeedback(true);
      }
      if (data.length === 0) {
        setReset(true);
      }

      // Simulating longer load times bc using a local placeholder
      // const response = await fetch("./placeholder.json");
      // const data = await response.json();
      // const setVariables = () => {
      //   setLoading(false);
      //   setFeedback(true);
      //   setSuggestion(data.results);
      // };
      // setTimeout(setVariables, 2000);
      setLoading(false);
    } catch {
      setReset(true);
    }
  };

  return (
    <>
      <Head>
        <title>{common[lang].title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title={common[lang].title} />

      <Container visited={visited}>
        {messages && messages.map((msg) => <Bubble key={msg.id} {...msg} />)}

        {loading && <LoadingBubble />}

        {/* {suggestion && suggestion.length > 0 && (
          <>
            <SuggestionBox>
              {suggestion?.slice(0, 6).map((item, index) => (
                <SuggestBubble key={item ? item?.id : index} item={item} />
              ))}
            </SuggestionBox>
            {feedback && (
              <Feedback question ref={suggestEl}>
                <Choices
                  variant="good"
                  onClick={async (e) => {
                    await handleChoice(e);
                  }}
                />
                <Choices
                  variant="bad"
                  onClick={async (e) => {
                    await handleChoice(e);
                  }}
                />
              </Feedback>
            )}
            {!feedback && !input && <ConvoBubble type="comp" message={common[lang].final} />}
          </>
        )} */}

        {input && (
          <InputBubble ref={chatEl} text={text} setText={setText} handleSubmit={handleSubmit} visited={visited} />
        )}

        {error.enabled && <ErrorBubble code={error.code} message={error.message} />}

        {reset && (
          <Feedback ref={suggestEl}>
            <Choices
              variant="reset"
              onClick={async (e) => {
                await handleChoice(e);
              }}
            />
          </Feedback>
        )}
      </Container>

      <Footer />
    </>
  );
}
