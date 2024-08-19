import fixedImg from '../../assets/corporation/care-call-4.png'; 

const Home = () => {
    return (
        <div className=''>
             <div className="navLine flex  justify-center gap-3 md:ml-[283px]  pt-[105px] ">
            <h1 className='bg-[#001B41] text-white  p-1 font-semibold text-[16px] px-3 text-center hidden md:block z-50'>
            কাষ্টমার কেয়ার : 01511142320
          
            </h1>
            <h1 className='bg-[#001B41] text-white  p-1 font-semibold text-[16px] px-3 text-center relative z-50'>
            বিক্রয় প্রতিনিধি : 01958442200
            
                
               




               {/* -------------side fixed popup------------------ */}





               <div className='w-full bg-[#F3F3F3] z-50 absolute'>
      <div className=''>
        
          <div className='absolute top-72 test hidden lg:block'>
            <div className='relative  '>
              <section className='bg-gradient-to-b from-[#1574C4] to-[#001B42] testSection w-44 rounded-2xl  px-1 pb-2'>
                <div className='text-white'>
                  <div className='relative'>
                    <img className='-mt-3 absolute -top-10' src={fixedImg} alt="" />
                  </div>
                  <h1 className= 'orangeSquare bg-[#FFAA00] text-black absolute xl:top-[98px] lg:top-[80px] -left-[12px]  pt-[4px] font-bold 2xl:w-44  text-center '>
                   রিসোর্স প্ল্যানিং করতে
                  </h1>
                  <div className='px-1'>

                  <p className=' xl:pt-36 lg:pt-28  xl:font-[400] text-sm xl:pb-4 lg:pb-2 xl:text-sm text-center lg:text-[11px] '>যখন আপনার ব্যবসার জন্য এন্টারপ্রাইজ রিসোর্স প্ল্যানিং সফ্টওয়্যার বাস্তবায়নের কথা চিন্তায় আসে?</p>
                  <p className='xl:pb-2 text-xs 2xl:font-medium xl:font-[400] text-center xl:text-[16px] text-[#FFAA00] leading-6'>আপনার ব্যবসা এন্টারপ্রাইজ রিসোর্স প্ল্যানিং প্রস্তুত করতে।</p>
                 




                
<section className="flex flex-col justify-center items-center" > 
            <div className=' 2xl:text-lg  font-bold  pt-2'>আমাকে কল করুন
            </div>
          <div className=' lg:text-[19px] font-extrabold  number  text-[#ffbd3a]'>

          01958442200
          </div>
</section>
                  </div>
                </div>
              </section>
            </div>
          </div>
        
      </div>
                </div>


                </h1>
              </div> 
        </div>
    );
};

export default Home;