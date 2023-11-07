import Image from 'next/image'
import Navbar from './components/Navbar'
import Link from 'next/link';
import Map from './components/Map';
import type { Metadata } from 'next';


const foodImages = [
  {
    url: "https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "creamy buns",
  },
  {
    url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "buffet",
  },
  {
    url: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "pasta bake",
  },
  {
    url: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "stir fry",
  },
  {
    url: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "bread",
  },
  {
    url: "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "donuts"
  },
];

export default function Home() {
  return (
    <div className="bg-[#1A1A1A]">
      <Navbar />

      <div
        title="azariah"
        className="h-screen w-full bg-landing-bg bg-cover bg-center flex items-center justify-center"
      >
        <h1 className="text-4xl md:text-8xl">azariah kitchen</h1>
      </div>

      <div className="w-full flex flex-col mt-8 px-12 md:px-24 lg:px-64 py-10">
        <h1 className="text-center font-semibold px-5 text-3xl">About Us</h1>
        <div className="flex mt-12 lg:flex-row flex-col  justify-center lg:justify-start relative w-full flex-1">
          <div className="h-full w-full md:w-4/6 lg:w-1/3 bg-neutral-500">
            <Image
              src={"https://s6.imgcdn.dev/9eykO.webp"}
              alt="about-us-image"
              width={50}
              height={50}
              className="w-full h-full aspect-square object-cover"
            />
          </div>
          <div className="lg:absolute bottom-0 left-52 max-w-lg mt-4 md:mt-4 lg:mt-0">
            <p>
              Kitchen Azariah is your culinary companion, dedicated to home
              chefs seeking the best recipes and expert cooking tips. Explore
              our content for delightful recipes, culinary inspiration, and food
              adventures, all designed to elevate your home cooking experience.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-8 ">
        <h1 className="text-center font-semibold px-5 text-3xl">
          Food Showcase
        </h1>
        <div className="masonry sm:masonry-sm md:masonry-md px-12 lg:px-24 mt-10">
          {foodImages.map((foodImage) => (
            <div
              key={foodImage.title}
              className="break-inside mt-6 rounded-xl overflow-hidden"
            >
              <Image
                src={foodImage.url}
                height={300}
                width={300}
                alt={foodImage.title}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="h-[70vh] w-full flex flex-col mt-8 px-12 md:px-64 py-10">
        <h1 className="text-center font-semibold px-5 text-3xl">
          Our Locations
        </h1>
        <div className="flex mt-12 relative w-full flex-1">
          <Map address="" />
        </div>
      </div>

      <div className="w-full flex flex-col mt-8 px-12 md:px-64 py-10">
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
                placeholder="email"
                type="text"
              />
            </div>
            <div className="flex flex-col mt-3">
              <textarea
                placeholder="message"
                title="message"
                className="outline-none border-none px-4 py-3 rounded-xl text-black resize-none mt-2"
                name="message"
                id=""
                cols={30}
                rows={5}
              ></textarea>
            </div>
            <button
              title="submit"
              type="submit"
              className="mt-6 px-6 py-2 rounded-xl bg-amber-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="bg-black py-6 grid grid-cols-2 md:grid-cols-4 px-12 md:px-24 mt-10">
        <h1 className="font-semibold md:text-xl">Kitchen Azariah</h1>
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
