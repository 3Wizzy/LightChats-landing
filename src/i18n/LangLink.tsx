import { Link, type LinkProps } from "react-router-dom";
import { useLang } from "./LanguageContext";

interface Props extends Omit<LinkProps, "to"> {
  to: string;
}

/** A <Link> that prepends the current language prefix to its `to` prop. */
export default function LangLink({ to, ...rest }: Props) {
  const { localizedTo } = useLang();
  return <Link to={localizedTo(to)} {...rest} />;
}
