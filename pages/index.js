import Head from "next/head";
import style from "../styles/index.module.css";
import { Heading1 } from "../components/Type";

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
      </body>
    </div>
  );
}
