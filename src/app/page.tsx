import Image from 'next/image'
import Navbar from './components/Navbar'

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
            <div className='h-full w-1/3 bg-neutral-500'>

            </div>
            <div className='absolute bottom-0 left-52 max-w-lg'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis tempore ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit facilis eius at ipsum! Magni ipsa adipisci facilis eligendi pariatur.</p>
            </div> 
        </div>
      </div>
      
      <div className="h-[70vh] w-full flex flex-col mt-8 px-64 py-10">
        <h1 className="text-center font-semibold px-5 text-3xl">About Us</h1>
        <div className="flex mt-12 relative w-full flex-1">
            <div className='h-full w-1/3 bg-neutral-500'>

            </div>
            <div className='absolute bottom-0 left-52 max-w-lg'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis tempore ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit facilis eius at ipsum! Magni ipsa adipisci facilis eligendi pariatur.</p>
            </div> 
        </div>
      </div>
    </div>
  );
}
