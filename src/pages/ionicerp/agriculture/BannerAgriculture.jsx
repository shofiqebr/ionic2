import { RxCross2 } from "react-icons/rx";
import bannerImg from '../../../assets/corporation/backImgBanner.webp'
import { FaCheck } from "react-icons/fa";
import ModalBody from "../../../shared/ModalBody";




const BannerLoan = () => {
    return (
        <div className="pt-36">

            <section className="grid xl:grid-cols-6  md:grid-cols-5  grid-cols-1  childBanner" >


                {/* ------------banner left--------------- */}

                <div className="xl:col-span-4  md:col-span-3 bg-[#2c2a2a] text-white flex   flex-col lg:justify-between md:rounded-tl-xl md:rounded-tr-none rounded-t-xl  bannerWidth  
                  ">


                    <div className="bannerHeading pl-10 pt-7 mr-7 ">

                        <p className="pb-3 font-bold text-[#FFAA00] text-lg  lg:mt-[135px] xl:mt-[70px] 2xl:mt-[10px]  ">আইওনিক ইআরপি</p>
                        <h1 className="lg:text-[40px] xl:text-[32px] 2xl:!text-[30px]  text-3xl md:text-[34px] font-semibold pb-3 heading1 ">টোটাল সলুয়েশন বিজনেস ম্যানেজমেন্ট ইআরপি সফটওয়্যার  </h1>
                        <h1 className="lg:text-[29px] xl:text-[23px] 2xl:!text-[18px] text-[22px] md:text-[25px] text-justify  font-semibold lg:pb-8  heading2">বাংলাদেশে প্রথমবার সবচেয়ে সহজ ও নির্ভূল ব্যবসা পরিচালনার জন্য বিলিং ও একাউন্টিং সিস্টেম কে পেপারলেস ও অটোমেশন করতে, ১০০০+ এর অধিক ব্যবসা পরিচালনার মডিউল বিদ্যমান আছে <span className="text-[#FFAA00]">“আইওনিক ইআরপি”</span>-র মধ্যে। </h1>


                    </div>

                    <div className=" xl:w-[70%] 2xl:w-[55%] lg:pl-10  2xl:pt-7   bannerTExt">




                        <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px] lg:pb-5 text-justify md:w-[350px] lg:w-auto ">

                            পাইথন প্রোগ্রামিং ভাষা হল শক্তিশালী এবং দ্রুত অন্যদের সাথে ভাল মিশতে পারে, সর্বত্র চলে বন্ধুত্বপূর্ণ এবং শেখা সহজ, ওপেন সোর্স।<span className="text-[#FFAA00]">"আইওনিক ইআরপি"</span>  বিজনেস ম্যানেজমেন্ট সফটওয়্যার- তৈরিতে ব্যবহার করা হয়েছে <span className="text-[#FFAA00]">"পাইথন প্রোগ্রামিং ভাষা"</span> । পাইথন সফটওয়্যার ফাউন্ডেশন হল পাইথন প্রোগ্রামিং ভাষার সাথে সম্পর্কিত ওপেন সোর্স প্রযুক্তির অগ্রগতির জন্য নিবেদিত একটি সংস্থা।
                        </p>
                        <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px] lg:pb-5 text-justify md:w-[350px] lg:w-auto ">
                        এগ্রিকালচার ব্যবস্থাপনায় ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার ইআরপি সিস্টেম
                        </p>
                        <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px] lg:pb-5 text-justify md:w-[350px] lg:w-auto ">

                        সেরা ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার সলিউশনের সাথে ডিজিটাল রূপান্তরের মাধ্যমে কৃষির চেহারা পরিবর্তন করা।
                        </p>





                        <button className="pl-5 xl:pt-[170px] 2xl:pt-[5px] lg:hidden xl:block  md:pt-[120px] leftOnurodh" onClick={() => document.getElementById('my_modal_5').showModal()}>  <p className="bg-[#FFAA00] text-[#001B41] rounded-full p-2 text-[16px] font-extrabold my-10 xl:my-3 px-5">
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
                        <img className=" xl:w-[300px] lg:w-[300px] lg:absolute bottom-0 right-0" src={bannerImg} alt="" />
                    </div>
                </div>







                {/* ------------banner right--------------- */}





                <div className=" xl:col-span-2 md:col-span-2 bg-black  text-white x p-7 md:rounded-tr-xl text-center md:text-start bannerRight">
                    <p className=" font-semibold text-[#FFAA00] pb-3 text-lg">আমাদের সেবা সমূহ</p>

                    <p className="text-[15px]  text-justify ">বাংলাদেশে প্রথমবার সবচেয়ে সহজ ও নির্ভূল, ব্যবসা প্রতিষ্ঠান পরিচালনার পূর্নাঙ্গ সমাধান নিয়ে, "আইওনিক কর্পোরেশন" প্রোগ্রামিং ভাষা পাইথন দিয়ে তৈরি, টোটাল সলুয়েশন ইআরপি সফ্টওয়ার উপস্খাপন করলো আপনার জন্য। যে কোন ব্যবসা ও প্রতিষ্ঠান পরিচালনার জন্য প্রতিষ্ঠান ব্যবস্থাপনা ও একাউন্টিং সিস্টেম সহ ১০০+ এর অধিক সমাধানের মডিউল নিয়ে আসলো "আইওনিক কর্পোরেশন"।</p>

                    <h1 className="xl:text-[18px] lg:text-[15px] md:text-[17px] text-xl font-semibold pb-5 pt-5 text-[#FFAA00] bannerRightH2">আমাদের বিজনেস সলিউশন সেবা সমূহ</h1>


                    <div className="grid grid-cols-2 gap-1 ">

                        <section>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px] ">ইআরপি সফটওয়্যার</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px]">ওয়েব ডেভেলপ</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px]">সফটওয়্যার ডেভেলপ</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px]">মোবাইল অ্যাপস</p>
                            </div>
                        </section>


                        <section>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px]">ক্লাউড স্টোরেজ</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px]">ডোমেন ও হোস্টিং</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px]">এসএমএস সার্ভিস </p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px]">ইকমার্স সলিউশন </p>
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

export default BannerLoan;