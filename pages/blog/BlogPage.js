import style from "../../styles/landing.module.css";
export default function BlogPage() {
  return (
    <div>
      <div className="flex flex-row items-center w-full h-screen hig">
        <div className="flex-1 w-3/6 h-auto pr-3 text-justify pl-4 pr-4">
          <h1 className="text-4xl">#WomenInBlockchain</h1>
          <h1 className="text-4xl">#WomenInCardano</h1>
          <p>Scroll through the blog to read more of our women stories</p>
        </div>
        <div className="flex-2 w-3/6 text-justify">
          <div className={style.heroImag}></div>
          {/* <img src={"../styles/image/hero.jpg"} alt="hero" /> */}
          {/* <img src={require("../styles/image/hero.jpg")} /> */}
        </div>
      </div>
      
    </div>
  );
}
