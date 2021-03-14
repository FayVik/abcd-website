import style from "../styles/landing.module.css";
export default function Landing({ children }) {
  return <div className={style.hero}>{children}</div>;
}
