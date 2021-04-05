import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Heading1, Heading2, Heading3, Paragraph } from "../components/Type";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row w-full p-2 lg:p-6 bg-gray-700 text-white lg:z-40">
      <div className="lg:w-3/6 md:w-full mb-10 sm:text-center sm:w-full px-4 text-1xl">
        <span>Port Harcourt Office Address</span> <br />
        <span>Woji Estate Road, YKC Junction, Port Harcourt</span> <br />
        <span>Tel: +234 816 643 5419</span>
      </div>
      <div className="lg:w-3/6 md:w-full mb-10 sm:text-center sm:w-full px-4 text-1xl">
        <span>Email Us: hr@hxi.com.ng</span>
        <span>T@Copyright 2020. All rights reserved by ABCD</span>
      </div>
      <div className="lg:w-3/6 md:w-full mb-10 md:text-center sm:text-center xs:text-center sm:w-full px-4">
        <Link href="https://twitter.com/abcdeveloperz">
          <a className="lg:inline-flex mr-6 md:inline-flex sm:inline-flex xs:inline-flex">
            <FontAwesomeIcon className="text-4xl" icon={["fab", "twitter"]} />
          </a>
        </Link>

        <Link href="/">
          <a className="lg:inline-flex mr-6 md:inline-flex sm:inline-flex xs:inline-flex">
            <FontAwesomeIcon className="text-4xl" icon={["fab", "instagram"]} />
          </a>
        </Link>

        <Link href="https://medium.com/poapool">
          <a className="lg:inline-flex mr-6 md:inline-flex sm:inline-flex xs:inline-flex">
            <FontAwesomeIcon className="text-4xl" icon={["fab", "medium-m"]} />
          </a>
        </Link>
      </div>
    </footer>
  );
}
