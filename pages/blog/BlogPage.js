import style from "../../styles/blog.module.css";
import Image from "next/image";
import { BlogCard } from "../../components/Cards"
import { Heading1, Heading2, Heading3, Paragraph } from "../../components/Type"

export default function BlogPage() {
  return (
    <div className={style.hero}>
      <div className="flex flex-col md:flex-row items-center w-full min-h-screen">
        <div className="flex-1 min-w-3/6 min-h-auto text-justify pl-4 pr-4">
          <Heading1>
            #WomenInBlockchain
          </Heading1>
          <Heading2>
            #WomenInCardano
          </Heading2>
          <p className="text-2xl md:text-xl">
            Scroll through the blog to read more of our women stories
          </p>
        </div>
        <div className="flex-2 p-0 m-0 w-3/6 text-justify m-n-h-54">
          <div className={style.heroImg}>
            <Image
              src="/rhero.jpg"
              width="1000"
              height="900"
              className="m-0 p-0"
            />
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <h2 className="text-center text-4xl pt-12 pb-12">
          STORIES Of OUR WOMEN IN CARDANO
        </h2>
        <div className="flex flex-col md:flex-row items-center w-full min-h-96">
          <BlogCard>
              <Heading3>
                CARDANO BLOCKCHAIN: A SOLUTION TO SOME OF AFRICA’S MAJOR PROBLEM
              </Heading3>
              <Paragraph>
                What came to your mind when you first heard of blockchain
                technology? Well for me, I was unenthusiastic about it, I
                thought it would be lame(I had zero interest in technology at
                that time)...
              </Paragraph>
          </BlogCard>
            
          <BlogCard>
              <Heading3>
                CARDANO BLOCKCHAIN: A SOLUTION TO SOME OF AFRICA’S MAJOR PROBLEM
              </Heading3>
              <Paragraph>
                What came to your mind when you first heard of blockchain
                technology? Well for me, I was unenthusiastic about it, I
                thought it would be lame(I had zero interest in technology at
                that time)...
              </Paragraph>
          </BlogCard>
            
          <BlogCard>
              <Heading3>
                CARDANO BLOCKCHAIN: A SOLUTION TO SOME OF AFRICA’S MAJOR PROBLEM
              </Heading3>
              <Paragraph>
                What came to your mind when you first heard of blockchain
                technology? Well for me, I was unenthusiastic about it, I
                thought it would be lame(I had zero interest in technology at
                that time)...
              </Paragraph>
          </BlogCard>
            
        </div>
      </div>
    </div>
  );
}
