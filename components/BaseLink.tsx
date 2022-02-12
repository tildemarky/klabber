import type {
  TargetAndTransition,
  VariantLabels,
  Variants,
} from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { StyledLink } from "styles/components/BaseLink.css";

type LinkProps = {
  url: string;
  text: string;
  variants?: Variants | undefined;
  whileHover?: VariantLabels | TargetAndTransition | undefined;
  whileTap?: VariantLabels | TargetAndTransition | undefined;
};

export function BaseLink({
  url,
  text,
  variants,
  whileHover,
  whileTap,
}: LinkProps): JSX.Element {
  return (
    <Link href={url} locale="en" passHref>
      <motion.a
        whileHover={whileHover}
        whileTap={whileTap}
        variants={variants}
        className={StyledLink}
      >
        {text}
      </motion.a>
    </Link>
  );
}
