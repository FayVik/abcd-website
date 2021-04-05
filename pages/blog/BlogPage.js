import style from "../../styles/blog.module.css";
import Image from "next/image";
import Link from "next/link";
import { BlogCard, AnotherCard } from "../../components/Cards";
import { Heading1, Heading2, Heading3, Paragraph } from "../../components/Type";

export default function BlogPage() {
  return (
    <div className={style.hero}>
      <div className="flex flex-col md:flex-row items-center w-full">
        <AnotherCard>
          <Heading1>#WomenInBlockchain</Heading1>
          <Heading1>#WomenInCardano</Heading1>
          <p className="text-2xl md:text-xl">
            Scroll through the blog to read more of our women stories
          </p>
        </AnotherCard>
        <div className="flex-2 lg:w-3/6 min-h-54 sm:w-full md:w-1/2 xs:w-full hidden lg:block md:block xl:block">
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
      <div className="min-h-96 text-center pt-10">
        <Heading2>STORIES Of OUR WOMEN IN CARDANO AND MORE</Heading2>
        <div className="flex flex-col md:flex-wrap lg:flex-row items-center w-full min-h-96 pt-20 px-4">
          <BlogCard>
            <Heading3>
              CARDANO BLOCKCHAIN: A SOLUTION TO SOME OF AFRICA’S MAJOR PROBLEM
            </Heading3>
            <Paragraph>
              What came to your mind when you first heard of blockchain
              technology? Well for me, I was unenthusiastic about it, I thought
              it would be lame(I had zero interest in technology at that
              time)...
            </Paragraph>
            <Link href="https://medium.com/@TCCPm/cardano-blockchain-a-solution-to-some-of-africas-major-problem-95bb3ce5594">
              <a className="lg:inline-flex mr-6 md:inline-flex sm:inline-flex xs:inline-flex text-blue-400">
                Read More...
              </a>
            </Link>
          </BlogCard>

          <BlogCard>
            <Heading3>
              Implementing the Cardano Blockchain in Curbing Food Wastage in
              Africa
            </Heading3>
            <Paragraph>
              Agriculture is one of the biggest industries of the world, because
              war or no war, pandemic or not, people must eat. Thus, new
              inventions are made to optimize production and delivery in the
              agricultural industry...
            </Paragraph>
            <Link href="https://medium.com/@TCCPm/implementing-the-cardano-blockchain-in-curbing-food-wastage-in-africa-64e912b23f6a">
              <a className="lg:inline-flex mr-6 md:inline-flex sm:inline-flex xs:inline-flex text-blue-400">
                Read More...
              </a>
            </Link>
          </BlogCard>

          <BlogCard>
            <Heading3>
              Why should ADA stake holders care about Saturated Pools?
            </Heading3>
            <Paragraph>
              <strong className="text-black-700">The saturation</strong> <br />{" "}
              point The saturation point ensures that staking pools do not
              become centralized. It’s a point at which rewards are essentially
              capped (not being able to grow any further)...
            </Paragraph>
            <Link href="https://twitter.com/abcdeveloperz">
              <a className="lg:inline-flex mr-6 md:inline-flex sm:inline-flex xs:inline-flex text-blue-400">
                Read More...
              </a>
            </Link>
          </BlogCard>
        </div>

        <div className="flex flex-col md:flex-wrap lg:flex-row items-center w-full">
          <BlogCard>
            <Heading3>
              Citizen Identification (3/4) : Self Sovereign identity (SSI)
            </Heading3>
            <Paragraph>
              In this series of blog posts, we will briefly present the major
              issues related to the digitization of identification documents and
              how…
            </Paragraph>
            <Link href="https://medium.com/poapool/citizen-identification-3-4-self-sovereign-identity-ssi-e0eac279b733">
              <a className="lg:inline-flex mr-6 md:inline-flex sm:inline-flex xs:inline-flex text-blue-400">
                Read More...
              </a>
            </Link>
          </BlogCard>

          <BlogCard>
            <Heading3>
              Citizen Identification (4/4): Benefits of Decentralized ID
            </Heading3>
            <Paragraph>
              In the last article of this series of blog posts, we will briefly
              sum up the benefits of Decentralized Identity and how blockchain…
            </Paragraph>
            <Link href="https://medium.com/poapool/citizen-identification-4-4-benefits-of-decentralized-id-1890e10d84b2">
              <a className="lg:inline-flex mr-6 md:inline-flex sm:inline-flex xs:inline-flex text-blue-400">
                Read More...
              </a>
            </Link>
          </BlogCard>

          <BlogCard>
            <Heading3>
              Land Registration (1/3) : Overview of the current situation
            </Heading3>
            <Paragraph>
              In this series of blog posts, we will dive into issues related to
              the land registration and how blockchain technology can ease
              access to…
            </Paragraph>
            <Link href="https://medium.com/poapool/land-registration-1-3-overview-of-the-current-situation-b9513ba754e8">
              <a className="lg:inline-flex mr-6 md:inline-flex sm:inline-flex xs:inline-flex text-blue-400">
                Read More...
              </a>
            </Link>
          </BlogCard>
        </div>
      </div>
    </div>
  );
}
