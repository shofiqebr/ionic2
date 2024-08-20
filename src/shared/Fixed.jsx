import fixedImg from '../assets/corporation/care-call-4.png';

const Fixed = () => {
    return (
       
         <div className="lg:fixed top-0 right-0  mx-[160px] flex lg:justify-end justify-center gap-3 z-20   lg:mt-[102px] -mt-[18px] ">
        <h1 className='bg-[#001B41] text-white  p-1 font-semibold text-[16px] px-3 text-center hidden md:block'>
          কাষ্টমার কেয়ার : 01511142320

        </h1>
        <h1 className='bg-[#001B41] text-white  p-1 font-semibold text-[16px] px-3 text-center relative '>
          বিক্রয় প্রতিনিধি : 01958442200







          {/* -------------side fixed popup------------------ */}

          <div className='absolute right-[-155px] top-32 bg-gradient-to-b from-[#1574C4] to-[#001B42]  w-[150px] rounded-2xl hidden lg:block  '>
            <div className='-mt-14'>
              <img src={fixedImg} alt="" />
            </div>
            <h1 className='bg-[#FFAA00] text-black text-[16px] p-1  font-bold   text-center '>
              রিসোর্স প্ল্যানিং করতে
            </h1>
            <p className='pt-5 px-1  xl:font-[400] text-sm xl:pb-4 lg:pb-2 xl:text-sm text-center lg:text-[11px] '>যখন আপনার ব্যবসার জন্য এন্টারপ্রাইজ রিসোর্স প্ল্যানিং সফ্টওয়্যার বাস্তবায়নের কথা চিন্তায় আসে?</p>
            <p className='xl:pb-2 px-1  text-xs 2xl:font-medium xl:font-[400] text-center xl:text-[16px] text-[#FFAA00] leading-6'>আপনার ব্যবসা এন্টারপ্রাইজ রিসোর্স প্ল্যানিং প্রস্তুত করতে।</p>
            <p className=' 2xl:text-lg  font-bold  pt-2'>আমাকে কল করুন
            </p>
            <p className=' lg:text-[19px] pb-2 font-extrabold  number  text-[#ffbd3a]'>

              01958442200
            </p>

          </div>



         


        </h1>
      </div>
       
    );
};

export default Fixed;