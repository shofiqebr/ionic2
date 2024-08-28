import { RxCross2 } from "react-icons/rx";
import ModalBody from "../../shared/ModalBody";
import bannerImg from '../../assets/corporation/backImgBanner.webp'
import { FaCheck } from "react-icons/fa";


const BannerKarmochary = () => {
    return (
        <div className="pt-36">
  
            <section className="grid xl:grid-cols-6  md:grid-cols-5  grid-cols-1  childBanner" >


                {/* ------------banner left--------------- */}

                <div className="xl:col-span-4  md:col-span-3 bg-[#0B2A63] text-white flex   flex-col lg:justify-between md:rounded-tl-xl md:rounded-tr-none rounded-t-xl  bannerWidth  
                  ">



                    <div className=" xl:w-[70%] 2xl:w-[60%] lg:pl-10 lg:pt-10 p-7   bannerTExt">


                        <div className="bannerHeading  ">

                            <p className="pb-3 font-bold text-[#FFAA00] text-lg  ">আইওনিক কর্পোরেশন</p>
                            <h1 className="lg:text-[37px] xl:text-[40px] 2xl:!text-[40px]  text-3xl md:text-[43px] font-semibold pb-3 heading1 ">বাংলাদেশের একটি বিশ্বস্ত   </h1>
                            <h1 className="lg:text-[27px] xl:text-[29px] 2xl:!text-[29px]  text-[22px] md:text-[31px] font-semibold lg:pb-8 pb-5 heading2">ডিজিটাল আইটি সলিউশন প্রতিষ্ঠান</h1>

                        </div>


                        <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px]   md:mt-12 lg:mt-0 text-justify  ">

                            বাংলাদেশে প্রথমবার সবচেয়ে সহজ ও নির্ভূল
                            ক্যাটাগরির টোটাল সলুয়েশন সফটওয়্যার
                            যেমন- স্কুল , হাসপাতাল, ফার্মা, রেস্তোরাঁ,
                            সেলুন, ট্রাভেল এজেন্সি, মেরামতের দোকান,
                            দর্জির দোকান, ভাড়া ব্যবসা, ইন্ডাস্টিয়াল
                            ইআরপি ও একাউন্ট ব্যবস্থাপনা  সহ
                            যে কোন ব্যবসা পরিচালনার অটোমেশন
                            সফটওয়্যার তৈরি ও সেবাদানকারী প্রতিষ্ঠান
                            -“আইওনিক কর্পোরেশন”।
                        </p>
                        <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px]   md:mt-12 lg:mt-0 text-justify  ">

                        পাইথন প্রোগ্রামিং ভাষা হল শক্তিশালী এবং দ্রুত অন্যদের সাথে ভাল মিশতে পারে, সর্বত্র চলে বন্ধুত্বপূর্ণ এবং শেখা সহজ, ওপেন সোর্স। টোটাল সলুয়েশন “কর্মচারি” ম্যানেজমেন্ট সফটওয়্যার- তৈরিতে ব্যবহার করা হয়েছে "পাইথন প্রোগ্রামিং ভাষা"। পাইথন সফটওয়্যার ফাউন্ডেশন হল পাইথন প্রোগ্রামিং ভাষার সাথে সম্পর্কিত ওপেন সোর্স প্রযুক্তির অগ্রগতির জন্য নিবেদিত একটি সংস্থা।
                        </p>





                        <button className="pl-5 xl:pt-[170px] 2xl:pt-[100px] lg:hidden xl:block  md:pt-[120px] leftOnurodh" onClick={() => document.getElementById('my_modal_5').showModal()}>  <p className="bg-[#FFAA00] text-[#001B41] rounded-full p-2 text-[16px] font-extrabold my-10 xl:my-3 px-5">
                            অনুরোধ করুন
                        </p>
                        </button>


                        <dialog id="my_modal_5" className="rounded-xl">
                            <div className=" lg:w-[400px]  bg-[#808285] rounded-xl relative">
                                <ModalBody />



                                <div className="modal-action ">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className=" absolute top-2 right-2"><RxCross2 className='text-white text-2xl' /></button>
                                    </form>
                                </div>
                            </div>
                        </dialog>



                    </div>
                    <div className="relative  md:hidden lg:block flex justify-end  ">
                    <img className="2xl:w-[340px]  xl:w-[300px] lg:w-[300px] lg:absolute bottom-0 right-0" src={bannerImg} alt="" />
                    </div>
                </div>







                {/* ------------banner right--------------- */}





                <div className=" xl:col-span-2 md:col-span-2 bg-[#001B41] text-white x p-7 md:rounded-tr-xl text-center md:text-start bannerRight">
                    <p className=" font-semibold text-[#FFAA00] pb-3 text-lg">আমাদের সেবা সমূহ</p>

                    <p className="text-[15px]  text-justify ">বাংলাদেশে প্রথমবার সবচেয়ে সহজ ও নির্ভূল, ব্যবসা প্রতিষ্ঠান পরিচালনার পূর্নাঙ্গ সমাধান নিয়ে, "আইওনিক কর্পোরেশন" প্রোগ্রামিং ভাষা পাইথন দিয়ে তৈরি, টোটাল সলুয়েশন ইআরপি সফ্টওয়ার উপস্খাপন করলো আপনার জন্য। যে কোন ব্যবসা ও প্রতিষ্ঠান পরিচালনার জন্য প্রতিষ্ঠান ব্যবস্থাপনা ও একাউন্টিং সিস্টেম সহ ১০০+ এর অধিক সমাধানের মডিউল নিয়ে আসলো "আইওনিক কর্পোরেশন"।</p>

                    <h1 className="xl:text-[18px] lg:text-[15px] md:text-[17px] text-xl font-semibold pb-5 pt-5 text-[#FFAA00] bannerRightH2">আমাদের বিজনেস সলিউশন সেবা সমূহ</h1>


                    <div className="grid grid-cols-2 gap-1  pl-5 md:pl-0">

                        <section className="text-center">
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] md:text-[11px] lg:text-[10px] xl:text-[12px] 2xl:text-[13.8px] ">ইআরপি সফটওয়্যার</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] md:text-[11px] lg:text-[10px] xl:text-[12px] 2xl:text-[13.8px]">ওয়েব ডেভেলপ</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] md:text-[11px] lg:text-[10px] xl:text-[12px] 2xl:text-[13.8px]">সফটওয়্যার ডেভেলপ</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] md:text-[11px] lg:text-[10px] xl:text-[12px] 2xl:text-[13.8px]">মোবাইল অ্যাপস</p>
                            </div>
                        </section>


                        <section className="text-center">
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] md:text-[11px] lg:text-[10px] xl:text-[12px] 2xl:text-[13.8px]">ক্লাউড স্টোরেজ</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] md:text-[11px] lg:text-[10px] xl:text-[12px] 2xl:text-[13.8px]">ডোমেন ও হোস্টিং</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] md:text-[11px] lg:text-[10px] xl:text-[12px] 2xl:text-[13.8px]">এসএমএস সার্ভিস </p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] md:text-[11px] lg:text-[10px] xl:text-[12px] 2xl:text-[13.8px]">ইকমার্স সলিউশন </p>
                            </div>
                        </section>
                    </div>

                    <div>
                        <p className="text-[20px] font-medium text-[#FFAA00] text-center">
                            আপনার প্রয়োজন কোনটি?
                        </p>
                    </div>






                    {/* ---------------------modal start---------------------------- */}


                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <div className="text-center lg:mt-20 xl:mt-0 ">
                        <button className="" onClick={() => document.getElementById('my_modal_5').showModal()}>  <p className="bg-[#FFAA00] text-[#001B41] rounded-full p-2 text-[16px]  font-extrabold my-3 px-5 ">
                            অনুরোধ করুন
                        </p>
                        </button>
                    </div>




                    <dialog id="my_modal_5" className="">
                        <div className=" lg:w-[1000px]  bg-[#808285] relative">
                            <ModalBody />



                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className=" absolute top-2 right-2"><RxCross2 className='text-white text-2xl' /></button>
                                </form>
                            </div>
                        </div>
                    </dialog>







                    {/* ---------------------modal end---------------------------- */}



                </div>
            </section>
        </div>
    );
};

export default BannerKarmochary;