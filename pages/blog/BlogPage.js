import style from "../../styles/landing.module.css";
import Image from "next/image";
export default function BlogPage() {
  return (
    <div>
      <div className="flex flex-row items-center w-full h-screen hig">
        <div className="flex-1 w-3/6 h-auto pr-3 text-justify pl-4 pr-4">
          <h1 className="text-6xl mb-1">#WomenInBlockchain</h1>
          <h1 className="text-6xl mb-8">#WomenInCardano</h1>
          <p className="text-2xl">
            Scroll through the blog to read more of our women stories
          </p>
        </div>
        <div className="flex-2 w-3/6 text-justify">
          <div className={style.heroImag}>
            <Image
              src=""
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="pt-12 pb-6 min-h-96 bg-opacity-100">
        <h2 className="text-center text-4xl text-green-600">
          STORIES Of OUR WOMEN IN CARDANO
        </h2>
        <div className="flex flex-row items-center w-full h-96">
          <div className="flex-1 w-3/6 text-justify pl-4 pr-4 min-h-64">
            <div className="border h-full w-full p-4 rounded-lg bg-white bg-opacity-100">
              <h3 className="text-2xl text-center mb-3">
                CARDANO BLOCKCHAIN: A SOLUTION TO SOME OF AFRICA’S MAJOR PROBLEM
              </h3>
              <p className="text-justify">
                What came to your mind when you first heard of blockchain
                technology? Well for me, I was unenthusiastic about it, I
                thought it would be lame(I had zero interest in technology at
                that time)...
              </p>
            </div>
          </div>
          <div className="flex-1 w-3/6 text-justify pl-4 pr-4 min-h-64">
            <div className="border h-full w-full p-4 rounded-lg bg-white bg-opacity-100">
              <h3 className="text-2xl text-center mb-3">
                CARDANO BLOCKCHAIN: A SOLUTION TO SOME OF AFRICA’S MAJOR PROBLEM
              </h3>
              <p className="text-justify">
                What came to your mind when you first heard of blockchain
                technology? Well for me, I was unenthusiastic about it, I
                thought it would be lame(I had zero interest in technology at
                that time)...
              </p>
            </div>
          </div>
          <div className="flex-1 w-3/6 text-justify pl-4 pr-4 min-h-64">
            <div className="border h-full w-full p-4 rounded-lg bg-white bg-opacity-100">
              <h3 className="text-2xl text-center mb-3">
                CARDANO BLOCKCHAIN: A SOLUTION TO SOME OF AFRICA’S MAJOR PROBLEM
              </h3>
              <p className="text-justify">
                What came to your mind when you first heard of blockchain
                technology? Well for me, I was unenthusiastic about it, I
                thought it would be lame(I had zero interest in technology at
                that time)...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40"></div>
    </div>
  );
}
