import BaseLink from "@comp/BaseLink";
import { motion } from "framer-motion";
import * as Head from "./Header.css";

const list = {
  visible: {
    opacity: 1,
    transition: {
      delay: 4.5,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
  hidden: { opacity: 0 },
};
const items = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 100 },
  hover: { scale: 0.95 },
  tap: { scale: 0.85 },
};

type HeaderProps = {
  title: string;
  disabled?: boolean;
};

function Header({ title, disabled }: HeaderProps): JSX.Element {
  return (
    <motion.header
      className={Head.StyledHeader}
      initial={disabled ? { opacity: 1 } : { opacity: 0 }}
      animate={disabled ? false : { opacity: 1 }}
      transition={disabled ? { delay: 0, duration: 0 } : { delay: 4, duration: 2 }}
    >
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/" className={Head.TitleLink}>
        <h1 className={Head.Title}>{title}</h1>
      </a>

      <motion.nav className={Head.Nav} initial={disabled ? "visible" : "hidden"} animate="visible" variants={list}>
        {/* disabling alternative languages because wit isn't handling them... but it was fun lol */}
        {/* <Link href="/" locale="pt" passHref>
          <motion.a variants={items}>Home (pt)</motion.a>
        </Link> */}
        <BaseLink url="/why" text="?" whileTap="tap" whileHover="hover" variants={items} />
      </motion.nav>
    </motion.header>
  );
}

export default Header;
