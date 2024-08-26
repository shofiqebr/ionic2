import { RxCross2 } from 'react-icons/rx';
import bgImg from '../../../assets/erp/Healthcare-ERP-system.jpg'
import BannerMangement from './BannerManagement'
import { FaCheck, FaLaptop, FaWhatsapp } from 'react-icons/fa';

import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import { useState } from 'react';
import HealthManagementCard from './HealthManagementCard';

const HealthManagement = () => {
    const [isVisible1, setIsVisible1] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);
    const [isVisible3, setIsVisible3] = useState(true);
    const [isVisible4, setIsVisible4] = useState(true);
    const [isVisible5, setIsVisible5] = useState(true);

    // const toggleVisibility = () => {
    //     setIsVisible(!isVisible);
    // };
    return (
        <div className=' bg-[#F3F3F3] '>

            <BannerMangement/>

            <div className='px-[405px] pt-32'>
                <section className="h-[560px] pt-44 flex bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className='w-1/2 h-full'></div>
                    <div className='text-white pt-0 w-1/2'>
                        <h1 className='text-3xl pb-5'>স্বাস্থ্যসেবা পরিচালনায় ``আইওনিক ইআরপি`` টোটাল সলুয়েশন ইআরপি সফ্টওয়ার সিস্টেম
                        </h1>
                        <p className='text-xl'>বিশ্বের সেরা ``আইওনিক ইআরপি`` টোটাল সলুয়েশন ইআরপি সফ্টওয়্যারের সাথে আরও ভাল অপারেশন এবং ফলাফলের জন্য বিশেষায়িত স্বাস্থ্যসেবা ইআরপি সফ্টওয়্যার।</p>
                    </div>

                </section>

            </div>

            <section className='grid grid-cols-2 gap-10 py-5 text-[#777777] text-xl px-[405px]'>
                <div>
                    <h1 className='text-4xl font-bold text-black pb-5'>"আইওনিক ইআরপি" টোটাল সলুয়েশন ইআরপি সফ্টওয়ার এর সাথে দক্ষতার সাথে আপনার স্বাস্থ্যসেবা ব্যবসা উন্নত করুন</h1>
                    <p >প্রায় সমস্ত স্বাস্থ্যসেবা ব্যবসা একটি সাধারণ চ্যালেঞ্জের মুখোমুখি হয় এবং তা হল রোগী এবং কর্মচারী ব্যবস্থাপনা খুঁজে পাওয়া। এর জন্য, স্বাস্থ্যসেবা ব্যবসার এমন একটি হাতিয়ার প্রয়োজন যা মানসম্পন্ন পরিষেবা প্রদানের জন্য তাদের ক্ষমতা বাড়াতে পারে।</p>
                    <p className='py-5'> এটি স্বাস্থ্যসেবা শিল্পের জন্য বিশ্বের সেরা ইআরপি সফ্টওয়্যারের সাথে ঘটতে পারে।</p>
                    <p>হেলথকেয়ার ইআরপি সলিউশন বিভিন্ন বৈশিষ্ট্যের সাথে সজ্জিত যেমন অ্যাপয়েন্টমেন্টের সময় নির্ধারণ, ভাইটাল ক্যাপচার করা, ওষুধ পরিচালনা এবং আরও অনেক কিছু।</p>
                    <p className='py-5'>আপনার উত্পাদনশীলতা সর্বাধিক করার সুযোগটি ব্যবহার করুন, আপনার প্রচেষ্টাকে ছোট করুন এবং সবকিছু আপনার নিয়ন্ত্রণে রাখুন।</p>
                    <p>“আইওনিক ইআরপি” টোটাল সলুয়েশন ইআরপি সফ্টওয়ার আপনাকে স্বাস্থ্যসেবা শিল্পের জন্য বিশ্বের শীর্ষস্থানীয় ERP সফ্টওয়্যার দিয়ে আপনার স্বাস্থ্যসেবা ব্যবসায় রূপান্তর করতে সহায়তা করবে।
                    </p>
                    <p className='py-5'>এটি ব্যবসায়িক প্রক্রিয়াগুলিকে স্বয়ংক্রিয় করবে, সময় এবং সেইসাথে সংস্থানগুলি সাশ্রয় করবে এবং আপনার ব্যবসায়িক কর্মক্ষমতা উন্নত করবে৷</p>


                    <div className='flex justify-center items-center gap-5'>
                        <button className='flex justify-center items-center gap-5 bg-black text-white p-1 rounded px-5'> <FaWhatsapp />হোয়াটস অ্যাপ চ্যাট</button>
                        <button className='flex justify-center items-center gap-5 bg-[#FF0000] text-white p-1 rounded px-5'><FaLaptop />ডেমোর জন্য অনুরোধ করুন</button>
                    </div>
                </div>






                    {/* ----------toggle effect--------- */}

                    <div>
            {/* First Section */}
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible1(!isVisible1)}
                        className="mr-2 flex justify-center items-center gap-2 text-black"
                    >
                        {isVisible1 ? <FaCircleMinus /> : <FaCirclePlus />}
                        <h1 className="text-xl font-bold">দ্রুত কেস ব্যবস্থাপনা</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible1 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                        প্রতিদিন স্বাস্থ্যসেবার লোড দ্রুতগতিতে বাড়ছে। এই সমস্যা সমাধানের
                        প্রয়াসে, স্বাস্থ্যসেবা অনুশীলনকারীদের দ্রুত রোগীর নিবন্ধন রেকর্ড
                        করতে সক্ষম হওয়া উচিত। স্বাস্থ্যসেবা ইআরপি সফ্টওয়্যার আপনাকে
                        রোগীদের যোগ করতে, ডাক্তারের সময়সূচী পরিচালনা করতে,
                        অ্যাপয়েন্টমেন্ট বুক করতে এবং আরও অনেক কিছু করতে দেয়।
                    </p>
                </div>
            </div>

            {/* Second Section */}
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible2(!isVisible2)}
                        className="mr-2 flex justify-center items-center gap-2 text-black"
                    >
                        {isVisible2 ? <FaCircleMinus /> : <FaCirclePlus />}
                        <h1 className="text-xl font-bold">প্রেসক্রিপশন এবং অনুস্মারক</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible2 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                    আপনি ইনভয়েসিং অ্যাপয়েন্টমেন্ট, ইমেল/এসএমএস রিমাইন্ডার পাঠানো, অ্যাপয়েন্টমেন্ট এবং ল্যাব পরীক্ষার ফলাফল পাঠানোর মতো ক্রিয়াকলাপগুলি স্বয়ংক্রিয়ভাবে করতে পারেন। হেলথকেয়ার ইআরপি সফ্টওয়্যার দ্বারা এই কাজগুলি স্বয়ংক্রিয় করা আপনাকে সেই কাজে আরও বেশি সময় বিনিয়োগ করতে সাহায্য করে যেটি আসলে আপনার মনোযোগের প্রয়োজন।
                    </p>
                </div>
            </div>

            {/* Third Section */}
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible3(!isVisible3)}
                        className="mr-2 flex justify-center items-center gap-2 text-black"
                    >
                        {isVisible3 ? <FaCircleMinus /> : <FaCirclePlus />}
                        <h1 className="text-xl font-bold">ট্রেসেবিলিটি</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible3 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                    হেলথকেয়ার ইআরপি সফ্টওয়্যার ট্রেসেবিলিটি প্রদান করতে সাহায্য করে, যাতে আপনি আপনার স্বাস্থ্যসেবা ব্যবসায় যেমন রোগীর বিশদ বিবরণ, নার্সের বিবরণ ইত্যাদির মতো ছোটখাটো বিবরণ খুঁজে পেতে পারেন।
                    </p>
                </div>
            </div>

               {/* 4th Section */}
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible4(!isVisible4)}
                        className="mr-2 flex justify-center items-center gap-2 text-black"
                    >
                        {isVisible4 ? <FaCircleMinus /> : <FaCirclePlus />}
                        <h1 className="text-xl font-bold">ব্যবসার অন্তর্দৃষ্টি উন্নত করুন</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible4 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                    স্বাস্থ্যসেবা ইআরপি সফ্টওয়্যারটি বিস্তারিত ব্যবসার অন্তর্দৃষ্টি দেখতে একাধিক ড্যাশবোর্ড ফর্ম্যাট প্রদর্শন করে সুসংগঠিত নির্দিষ্ট প্রয়োজনের উপর নির্ভর করে দ্রুত প্রাসঙ্গিক প্রতিবেদন তৈরি করতে দেয়।
                    </p>
                </div>
            </div>

             {/* 5th Section */}
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible5(!isVisible5)}
                        className="mr-2 flex justify-center items-center gap-2 text-black"
                    >
                        {isVisible5 ? <FaCircleMinus /> : <FaCirclePlus />}
                        <h1 className="text-xl font-bold">অনন্য কার্যকারিতা</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible5 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                    হেলথকেয়ার ইআরপি সফ্টওয়্যারের অপরিবর্তনীয় বৈশিষ্ট্যগুলি কার্যকারিতার ক্ষেত্রে একটি অনন্য অভিজ্ঞতা প্রদান করে। ফাইন্যান্স এবং অ্যাকাউন্টিং, এইচআর এবং বেতন, বাজেট ইত্যাদির মতো অনন্য কার্যকারিতাগুলি একটি আশ্চর্যজনক সফ্টওয়্যারে আসবে।
                    </p>
                </div>
            </div>
        </div>
            </section>


            <HealthManagementCard/>


        </div>
    );
};

export default HealthManagement;