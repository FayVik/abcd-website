import Image from "next/image";
import Link from "next/link";
import styles from "../styles/about.module.css"

// Friday - let's get background images working. Buky will try this before Friday
// https://tailwindcss.com/docs/background-image#customizing

function about() {
  return (
    <div>
      <div className="bg-about-smile bg-cover min-h-screen p-20">
        <div className="bg-blue-400 mt-20 rounded-full bg-opacity-50 p-20 float-left ml-0 w-1/2 h-96 pt-5 ">
        <div className="p-1 bg-blue-700 w-full bg-opacity-50 mt-11"></div>
          <section className="m-5 py-9 ">
          
            <span className="text-4xl text-white  font-bold">
              Africa's Blockchain Center for Developers
            </span>
            <p className="text-lg text-white italic">
              empowering the African woman for greater exploits...
            </p>
            
          </section>
          <div className="p-1 bg-blue-700 w-full bg-opacity-50 top-0"></div>
          <section className="mx-5 my-10 mt-5">
            <Link href="/">
              <a className="bg-blue-700 hover:bg-blue-100 text-white hover:text-blue-700 p-3  rounded-lg">
                Learn more
              </a>
            </Link>
          </section>

        </div>
        
      </div>

      <section className="text-center p-20 ">
          <h1 className="text-5xl">WHAT WE DO</h1>
        </section>

      <div className="bg-gradient-to-r from-blue-800 via-white to-blue-800 padding-20 mt-20 rounded-3xl">
        
        <div class="max-w-md mx-auto bg-white mb-20 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
              <div class="md:flex-shrink-0">
                  <img class="h-48 w-full object-cover md:w-48" src="/table.jpg" alt="Man looking at item at a store"/>
              </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Cardano Hub</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">We at ABCD are committed to continuous and groundbreaking tech growth in Africa</a>
              <p class="mt-2 text-gray-500">Women are the core of technological and we are all for Women empowerment.</p>
            </div>
          </div>
        </div>


        <div class="max-w-md mx-auto bg-white mb-20 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
              <div class="md:flex-shrink-0">
                  <img class="h-48 w-full object-cover md:w-48" src="/blue.jpg" alt="Man looking at item at a store"/>
              </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Build Applications for the Blockchaon</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">We at ABCD are committed to continuous and groundbreaking tech growth in Africa</a>
              <p class="mt-2 text-gray-500">Women are the core of technological and we are all for Women empowerment.</p>
            </div>
          </div>
        </div>


        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
              <div class="md:flex-shrink-0">
                  <img class="h-48 w-full object-cover md:w-48" src="/robot.jpg" alt="Man looking at item at a store"/>
              </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Innovation</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">We at ABCD are committed to continuous and groundbreaking tech growth in Africa</a>
              <p class="mt-2 text-gray-500">Women are the core of technological and we are all for Women empowerment.</p>
            </div>
          </div>
        </div>
          



      </div>==

      <section className="text-center p-20 ">
          <h1 className="text-5xl">OUR VISION</h1>
        </section>
      
      <div className="bg-gradient-to-r from-blue-800 via-white to-blue-800  rounded-3xl flex flex-row  ">
        <div className="w-3/6  " >
        <img className="mt-32 ml-24 rounded-tl-lg rounded-tr-lg mb-10 bg-white m-0 auto " width="100%" height="100%" src="/robot.jpg" alt="Man looking at item at a store"/>
        
        

        </div>
        <div className=" w-3/6 ml-96 p-32">
          <p>Africa has brilliant minds that are full of ideas and energy but who lack access to the infrastructure and funds to realize their dreams.


ABCD will create opportunities for Africans providing blockchain solutions to the world utilizing the pool of talent working from Africa.


ABCD founders have been long involved in the development of initiatives related to the tech industry and blockchain in Nigeria and Africa.



.</p>
        </div>
      </div>
      
    </div>
  );
}

export default about;
