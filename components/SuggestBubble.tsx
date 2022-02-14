import { Stores } from "@comp/Stores";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SuggestBub,
  StyledImage,
  Information,
  Links,
  Title,
  MainTitle,
} from "styles/components/SuggestBubble.css";

const bubble = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0,
  },
};
const hoverVariant = {
  rest: {
    scale: 1,
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: -100,
  },
  hover: {
    scale: 0.95,
  },
  tap: {
    scale: 0.85,
  },
};
const storesAnim = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      // staggerChildren: 0.5,
      delayChildren: 3,
    },
  },
  hidden: { opacity: 0 },
};

type ItemProps = {
  item: {
    background_image: string;
    name: string;
    ratings: {
      id?: number;
      title?: string;
      percent: number;
    }[];
    stores: {
      store: {
        id?: number;
        name?: string;
        slug: string;
      };
    }[];
  };
};

export function SuggestBubble(props: ItemProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sum, setSum] = useState(0);
  const { background_image, name, ratings, stores } = props.item;

  useEffect(() => {
    let recommended = 0;
    let exceptional = 0;
    ratings
      .filter((rating) => rating.id === 4)
      .forEach((rate) => (recommended = rate.percent));
    ratings
      .filter((rating) => rating.id === 5)
      .forEach((rate) => (exceptional = rate.percent));
    setSum(Math.ceil(recommended + exceptional));
  }, [ratings]);

  return (
    <motion.div className={SuggestBub} variants={bubble}>
      <motion.div
        className={Information}
        whileHover="hover"
        whileTap="tap"
        variants={hoverVariant}
      >
        <motion.img
          className={StyledImage}
          src={background_image || "./abstract.jpg"}
          alt={`Cover for ${name}`}
        />
        <span className={Title}>
          <h3 className={MainTitle}>{name}</h3>
        </span>
      </motion.div>
      <motion.div
        className={Links}
        initial="hidden"
        animate="visible"
        variants={storesAnim}
      >
        {stores &&
          stores.length > 0 &&
          stores
            .filter(({ store }) => store.slug !== "xbox360")
            .map(({ store }) => (
              <Stores key={store.slug} type={store.slug} name={name} />
            ))}
        {!stores && <span>Store link missing</span>}
      </motion.div>
    </motion.div>
  );
}
