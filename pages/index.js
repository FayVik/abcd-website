import Head from "next/head";
import style from "../styles/index.module.css";
import Image from "next/image";
import { BlogCard, ImageCard } from "../components/Cards";
import { Heading1, Heading2, Heading3, Paragraph } from "../components/Type";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Site Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="bg-woman min-h-screen w-full flex flex-col object-fill justify-start bg-cover">
          <div
            className={`flex-1 w-full sm:w-full xs:w-full lg:w-full px-6 pt-64 text-center text-2xl ${style.movement}`}
          >
            <p>Welcome</p>
            <Heading1>AFRICA'S BLOCKCHAIN CENTER FOR DEVELOPERS</Heading1>
            <p>( ABCD )</p>
          </div>
        </div>
        <div className="w-full min-h-screen">
          <Heading2>More About ABCD</Heading2>
          <div className="flex flex-col md:flex-wrap lg:flex-row items-center w-full min-h-96 py-20 px-4">
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

            <ImageCard>
              <Image
                src="/rhero.jpg"
                width="600"
                height="500"
                className="m-0 p-0 rounded-lg shadow-lg"
              />
            </ImageCard>
          </div>
        </div>
      </body>
    </div>
  );
}
