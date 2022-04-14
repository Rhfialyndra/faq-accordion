import {FC} from 'react';
import Image from 'next/image';
import AccordionTile from '../components/AccordionTile';
import FAQ from "../components/Data";


const Home : FC = () => {



  return(
    <div className="max-w-screen min-h-screen flex justify-center items-center">
      <div className="relative w-3/5 max-w-sm lg:max-w-3xl min-h-[450px] flex flex-col lg:flex-row justify-end items-center
       py-10 px-10 lg:px-16 rounded-2xl bg-white shadow-2xl modal">
        
        <div className="block lg:hidden z-10 absolute h-64 w-64 -top-[150px]">
          <Image
          src={"/images/illustration-woman-online-mobile.svg"}
          layout="fill"
          alt="box"
          className='shadow-2xl'
          />
        </div>

        <div className="hidden lg:block z-10 absolute h-40 w-44 -left-[85px] top-[37%]">
          <Image
          src={"/images/illustration-box-desktop.svg"}
          layout="fill"
          alt="box"
          className='shadow-2xl'
          />

        </div>

        <main className='w-full lg:w-1/2 flex flex-col '>
          <h1 className='dark-blue text-center lg:text-left'>FAQ</h1>

          {FAQ.map((item, index )=> {

              return(
                <AccordionTile key={index} question={item.question} answer={item.answer}/>
              )

          })}
      
        </main>


      </div>
    </div>
  )
  
}

export default Home;