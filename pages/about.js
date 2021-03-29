import Image from "next/image";
import Link from "next/link";
import styles from "../styles/about.module.css"
import { AboutCard } from "../components/Cards"

// Friday - let's get background images working. Buky will try this before Friday
// https://tailwindcss.com/docs/background-image#customizing

// w-full md:w-1/2 <-- this means that everything on a small screen "up to" size medium is w-full. at medium and above, it's w-1/2


function about() {
  return (
    <div>
      <div className="bg-about-smile bg-cover min-h-screen pt-5 px-5 md:px-20">
        <div className="w-full lg:w-1/2 rounded-lg md:rounded-3xl lg:rounded-full p-20 pt-5 ml-0 mt-20 bg-blue-500 bg-opacity-80 hover:bg-blue-500">
        <div className="p-1 bg-blue-300 w-full bg-opacity-80 mt-11 hover:bg-blue-100"></div>
          <section className="m-5 py-9 ">
          
            <span className="text-2xl xl:text-4xl text-purple-900 xl:text-white font-bold">
              Africa's Blockchain Center for Developers
            </span>
            <p className="text-lg text-white italic">
              empowering the African woman for greater exploits...
            </p>
            
          </section>
          <div className="p-1 bg-blue-300 w-full bg-opacity-80 top-0 hover:bg-blue-100"></div>
          <section className="mx-5 my-10 mt-5">
            <Link href="/">
              <a className="bg-blue-300 hover:bg-blue-100 text-white hover:text-blue-700 p-3  rounded-lg">
                Learn more
              </a>
            </Link>
          </section>

        </div>
        
      </div>

      <section className="text-center py-20">
          <h1 className="text-5xl">WHAT WE DO </h1>
        </section>

      <div className="flex flex-col xl:flex-row xl:py-20 justify-center bg-gradient-to-r from-blue-800 via-white to-blue-800">
        <AboutCard>
            <div class="">
                <img class="h-48 w-full object-cover" src="/table.jpg" alt="Man looking at item at a store"/>
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Cardano Hub</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">We at ABCD are committed to continuous and groundbreaking tech growth in Africa</a>
              <p class="mt-2 text-gray-500">Women are the core of technological and we are all for Women empowerment.</p>
            </div>
        </AboutCard>

        <AboutCard>
            <div class="">
                <img class="h-48 w-full object-cover" src="/blue.jpg" alt="Man looking at item at a store"/>
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Build Applications for the Blockchaon</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">We at ABCD are committed to continuous and groundbreaking tech growth in Africa</a>
              <p class="mt-2 text-gray-500">Women are the core of technological and we are all for Women empowerment.</p>
            </div>  
        </AboutCard>

        <AboutCard>
            <div class="">
                <img class="h-48 w-full object-cover" src="/robot.jpg" alt="Man looking at item at a store"/>
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Innovation</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">We at ABCD are committed to continuous and groundbreaking tech growth in Africa</a>
              <p class="mt-2 text-gray-500">Women are the core of technological and we are all for Women empowerment.</p>
            </div>
        </AboutCard>
      </div>

      <section className="text-center p-20">
          <h1 className="text-5xl">OUR VISION</h1>
      </section>
      
      <section className="flex flex-col lg:flex-row w-5/6 mx-auto bg-gradient-to-r from-blue-800 via-white to-blue-800 rounded-3xl">
        <div className="w-full lg:w-3/6 px-5 pt-5 lg:pl-10 lg:py-10">
          <Image src="/robot.jpg" width={1224} height={816} alt="white background"/>
        </div>
        <div className="w-full lg:w-3/6 px-5 py-5 lg:px-10 lg:py-10">
          <p className="text-lg px-5 py-2">
            Africa has brilliant minds that are full of ideas and energy but who lack access to the infrastructure and funds to realize their dreams. 
          </p>
          <p className="text-lg px-5 py-2">
            ABCD will create opportunities for Africans providing blockchain solutions to the world utilizing the pool of talent working from Africa.
          </p>
          <p className="text-lg px-5 py-2">
             ABCD founders have been long involved in the development of initiatives related to the tech industry and blockchain in Nigeria and Africa.
          </p>
        </div>
      </section>




      <section className="text-center p-20 ">
          <h1 className="text-5xl">OUR MISSION STATEMENT</h1>
        </section>
      <div className={styles.header}></div>
      <div className="p-20 jistify-center border-blue-800">
        <p>
        Africa has brilliant minds that are full of ideas and energy but who lack access to the infrastructure and funds to realize their dreams.


ABCD will create opportunities for Africans providing blockchain solutions to the world utilizing the pool of talent working from Africa.


ABCD founders have been long involved in the development of initiatives related to the tech industry and blockchain in Nigeria and Africa.



To do so, we have reviewed some of our initial objectives, perhaps too ambitious, in order to arrive at a roadmap that is still ambitious but realistically achievable.

You will find below, a short description of the project. More detailed information is available in the attached documents.

---

The mission of the African Blockchain Center for Developers is to stimulate, thanks to Cardano adoption, the establishment and growth of technology-based start-up companies and other blockchain-enabled businesses.

By fulfilling this mission, ABCD will concretely contribute to:
- Local job creation
- Local business development
- On-boarding to the global Cardano ecosystem
- Contribute to the rise of blockchain technologies and decentralization in Africa
- Creation of Smart contracts and decentralized applications (Dapps)
- Address, thanks to decentralization, some of the most pressing issues in Africa (ID systems, land registration, blood donation, access to property, traceability, etc.)

Together with the Cardano Community and in particular with African entities such as Gimbalabs, WADA, IOG Africa and African SPOs, ABCD will create, develop and provide open source materials for new and emerging technology specializing in the development of core Cardano blockchain technologies and applications. In both the immediate and long terms, ABCD will facilitate enhanced economic health in Africa while promoting an encouraging adoption of Cardano and blockchain technologies throughout the continent.

These achievements will be self-reinforcing: by increasing the successful development of emerging businesses in the Cardano blockchain ecosystem, we will create value and new investment opportunities. By providing training, mentorship, shared space, and professional assistance, we will build a network of experts who will be able to share their expertise with additional developers. By incubating businesses, ABCD will move out into the community and contribute to the overall vitality, diversity, and growth of Cardano in the booming African economy.

ABCD will provide an environment that allows Africans to take an active role in "growing their own" businesses that will lead to job creation. These new businesses and new jobs produced create wealth through multiplier effects that ultimately benefits the overall community beyond the individuals.
        </p>

      </div>
      <div className={styles.header}></div>



      <section className="text-center p-20 ">
          <h1 className="text-5xl">MEET OUR FOUNDERS</h1>
        </section>
        
        <div className={styles.about}>
          <div>
            <Image src="/josh2.jpg" width={290} height={260} className="rounded-full"/> 
            <h1 className="text-3xl text-blue-800">JOSHUA AKPAN</h1>
            <p>Founder, ABCD</p>
          
          </div>
        </div>  

        <div className={styles.about}>
          <div>
            <Image src="/gwendal.jpg" width={290} height={260} className="rounded-full"/> 
            <h1 className="text-3xl text-blue-800">GWENDAL LE DIVECHEN</h1>
            <p>Co- Founder & Comms , ABCD</p>
          </div>
        </div>  


        <section className="text-center p-20 ">
          <h1 className="text-5xl">MEET OUR DEVELOPERS</h1>
        </section>


    </div>
  );
}

export default about;
