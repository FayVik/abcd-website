import Image from "next/image";
import Link from "next/link";

// Friday - let's get background images working. Buky will try this before Friday
// https://tailwindcss.com/docs/background-image#customizing

function about() {
  return (
    <div className="bg-about-smile bg-cover min-h-screen p-20">
      <div className="bg-blue-400 bg-opacity-50 w-1/2 h-96 pt-5">
        <section className="m-5">
          <span className="text-4xl text-blue-700">
            Africa's Blockchain Center for Developers
          </span>
          <p className="text-lg">
            empowering the African woman for greater exploits...
          </p>
        </section>
        <section className="mx-5 my-10">
          <Link href="/">
            <a className="bg-blue-700 hover:bg-blue-100 text-white hover:text-blue-700 p-5 rounded-lg">
              Learn more
            </a>
          </Link>
        </section>
      </div>
      <div className="bg-worker bg-cover w-96 h-96 mt-5 p-5 text-white place-content-end">
        <p className="text-center">I hope this div is on top!</p>
      </div>
    </div>
  );
}

export default about;
