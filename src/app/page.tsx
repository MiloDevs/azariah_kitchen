import Image from 'next/image'
import Navbar from './components/Navbar'
import Link from 'next/link';
import Map from './components/Map';

export default function Home() {
  return (
    <div className="bg-[#1A1A1A]">
      <Navbar />

      <div className="h-screen w-full bg-landing-bg bg-cover bg-center flex items-center justify-center">
        <h1 className="text-8xl">azariah kitchen</h1>
      </div>

      <div className="h-[70vh] w-full flex flex-col mt-8 px-64 py-10">
        <h1 className="text-center font-semibold px-5 text-3xl">About Us</h1>
        <div className="flex mt-12 relative w-full flex-1">
          <div className="h-full w-1/3 bg-neutral-500"></div>
          <div className="absolute bottom-0 left-52 max-w-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              veritatis tempore ratione! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vel sit facilis eius at ipsum! Magni ipsa
              adipisci facilis eligendi pariatur.
            </p>
          </div>
        </div>
      </div>

      <div className="h-[70vh] w-full mt-8 ">
        <h1 className="text-center font-semibold px-5 text-3xl">
          Food Showcase
        </h1>
        <div></div>
      </div>

      <div className="h-[70vh] w-full flex flex-col mt-8 px-64 py-10">
        <h1 className="text-center font-semibold px-5 text-3xl">
          Our Locations
        </h1>
        <div className="flex mt-12 relative w-full flex-1">
          <Map address=''/>
        </div>
      </div>

      <div className="w-full flex flex-col mt-8 px-64 py-10">
        <h1 className="text-center font-semibold px-5 text-3xl">Talk to us</h1>
        <div className="flex mt-12 relative w-full justify-center items-center flex-1">
          <form className="text-sm">
            <div className="flex flex-col">
              <input
                className="mt-1 outline-none border-none px-4 py-3 rounded-xl text-black"
                title="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="flex flex-col mt-3">
              <input
                className="mt-1 outline-none border-none px-4 py-3 rounded-xl text-black"
                title="fullName"
                name="fullName"
                placeholder='email'
                type="text"
              />
            </div>
            <div className="flex flex-col mt-3">  
              <textarea
                placeholder='message'
                title="message"
                className="outline-none border-none px-4 py-3 rounded-xl text-black resize-none mt-2"
                name="message"
                id=""
                cols={30}
                rows={5}
              ></textarea>
            </div>
            <button title="submit" type='submit' className="mt-6 px-6 py-2 rounded-xl bg-amber-500">
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="bg-black py-6 grid grid-cols-4 px-24 place-content-center mt-10 align-content-center">
        <h1 className="font-semibold text-xl">Kitchen Azariah</h1>
        <div>
          <h1 className="font-semibold">Social Links</h1>
          <ul className="text-sm list-disc">
            <li>
              <Link href={"#"}>instagram</Link>
            </li>
            <li>
              <Link href={"#"}>twitter</Link>
            </li>
            <li>
              <Link href={"#"}>email</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
