import { RxCross2 } from "react-icons/rx";
import ModalBody from "../../shared/ModalBody";
import bannerImg from '../../assets/corporation/backImgBanner.webp'
import { FaCheck } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="pt-36">
            <section className="flex  md:flex-row flex-col   childBanner" >


                {/* ------------banner left--------------- */}

                <div className=" bg-[#0B2A63] text-white flex   flex-col lg:justify-between md:rounded-tl-xl md:rounded-tr-none rounded-t-xl  bannerWidth  z-20  ">



                    <div className=" w-1/2 pl-10 pt-10 z-10 bannerTExt">


                        <div className="bannerHeading  ">

                            <p className="pb-3 font-bold text-[#FFAA00] text-lg  ">আইওনিক কর্পোরেশন</p>
                            <h1 className="lg:text-[40px] xl:text-[32px] 2xl:text-[36px]  text-3xl md:text-[34px] font-semibold pb-3 heading1 ">বাংলাদেশের একটি বিশ্বস্ত   </h1>
                            <h1 className="lg:text-[29px] xl:text-[23px] 2xl:text-[26px] text-[22px] md:text-[25px] font-semibold lg:pb-8 heading2">ডিজিটাল আইটি সলিউশন প্রতিষ্ঠান</h1>

                        </div>


                        <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px]  text-justify  ">

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





                        <button className="pl-5 xl:pt-[125px] 2xl:pt-[100px] lg:pt-[260px]  md:pt-[120px] leftOnurodh" onClick={() => document.getElementById('my_modal_5').showModal()}>  <p className="bg-[#FFAA00] text-[#001B41] rounded-full p-2 text-[16px] font-extrabold my-10 xl:my-3 px-5">
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
                    <div className="relative  md:hidden lg:block  ">
                        <img className="  lg:absolute lg:bottom-0 lg:right-0" src={bannerImg} alt="" />
                    </div>
                </div>







                {/* ------------banner right--------------- */}





                <div className="w-[950px] bg-[#001B41] text-white p-5 lg:pl-10 px-5 md:rounded-tr-xl z-20 bannerRight">
                    <p className=" font-semibold text-[#FFAA00] pb-3 text-lg">আমাদের সেবা সমূহ</p>

                    <p className="text-[15px]  text-justify ">বাংলাদেশে প্রথমবার সবচেয়ে সহজ ও নির্ভূল, ব্যবসা প্রতিষ্ঠান পরিচালনার পূর্নাঙ্গ সমাধান নিয়ে, "আইওনিক কর্পোরেশন" প্রোগ্রামিং ভাষা পাইথন দিয়ে তৈরি, টোটাল সলুয়েশন ইআরপি সফ্টওয়ার উপস্খাপন করলো আপনার জন্য। যে কোন ব্যবসা ও প্রতিষ্ঠান পরিচালনার জন্য প্রতিষ্ঠান ব্যবস্থাপনা ও একাউন্টিং সিস্টেম সহ ১০০+ এর অধিক সমাধানের মডিউল নিয়ে আসলো "আইওনিক কর্পোরেশন"।</p>

                    <h1 className="xl:text-[19px] lg:text-[18px] text-xl font-semibold pb-5 pt-5 text-[#FFAA00] bannerRightH2">আমাদের বিজনেস সলিউশন সেবা সমূহ</h1>


                    <div className="grid grid-cols-2 gap-1 ">

                        <section>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px] ">ইআরপি সফটওয়্যার</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px]">ওয়েব ডেভেলপ</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px]">সফটওয়্যার ডেভেলপ</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px]">মোবাইল অ্যাপস</p>
                            </div>
                        </section>


                        <section>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px]">ক্লাউড স্টোরেজ</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px]">ডোমেন ও হোস্টিং</p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                <p className="text-[12px] 2xl:text-[13.8px]">এসএমএস সার্ভিস </p>
                            </div>
                            <div className="flex items-center gap-4 pb-5">
                                <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
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
                    <div className="text-center 2xl:mt-5">
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

export default Banner;