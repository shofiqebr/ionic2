
import chemcalManage from '../../../assets/erp/manage-chemical-formulation.svg'
import chemicalManufacture from '../../../assets/erp/chemical-mfg-process.svg'
import quality from '../../../assets/erp/quality-assurance.svg'
import sample from '../../../assets/erp/sample-and-quotation.svg'

const ChemicalAccounting = () => {
    return (
        <div className="">
            <section className="text-center py-5 ">
                <h1 className="text-2xl font-bold ">রাসায়নিক শিল্পের জন্য একাউন্টিং ও বিজনেস ম্যানেজমেন্ট ``আইওনিক ইআরপি`` টোটাল সলুয়েশন ইআরপি সফ্টওয়ার</h1>
                <hr className="border-[2px] border-black" />
                <p className="text-lg text-[#777777]">প্রতিটি ব্যবসার মূল লক্ষ্য হল খরচ কমানো এবং আপনার ব্যবসার প্রক্রিয়াগুলিকে স্বয়ংক্রিয় করার সাহায্যে উত্পাদনশীলতা এবং দক্ষতা বৃদ্ধি করা। কিন্তু প্রথমে, আপনাকে বুঝতে হবে যে রাসায়নিক শিল্পের জন্য ইআরপি ব্যবসার জন্য নির্দিষ্ট বিভিন্ন দিক প্রয়োজন। উপাদান গুলো হল-</p>
            </section>

            <section className="grid grid-cols-2 gap-10 py-3">
                <div >
                    <ul className="list-disc text-xl font-bold flex flex-col gap-5 pl-5">
                        <li>প্রবিধান সঙ্গে কঠোর সম্মতি</li>
                        <li>ব্যাচ/লট ওয়াইজ ইনভেন্টরি ম্যানেজমেন্ট</li>
                        <li>দক্ষতা বা গুণমান উন্নত করতে সূত্র সমন্বয়</li>
                        <li>উত্পাদনের বিভিন্ন পর্যায়ে কঠোর মান পরীক্ষা</li>
                    </ul>
                </div>
                <div>
                    <ul className="list-disc text-xl font-bold flex flex-col gap-5">
                        <li>পণ্যের গুণমান/পরিমাণে তারতম্য সহ জটিল উত্পাদন পরিচালনা করা।</li>
                        <li>বাই-প্রোডাক্ট এবং রিসাইক্লিং বিবেচনা করে সঠিক খরচ অ্যাকাউন্টিং।</li>
                        <li>শেলফ-লাইফ এবং সংস্কার</li>
                        <li>গবেষণা ও উন্নয়ন</li>
                    </ul>
                </div>
            </section>



            {/* -----------------card part ----------------- */}
            <section className="grid grid-cols-3 gap-5 py-5">
                <div className='text-[#777777] text-lg p-5 bg-white rounded-xl text-justify'>
                    <div className='w-32 h-32 mx-auto bg-[#F1F1F1] rounded-full flex justify-center items-center'>
                        <img className='w-24' src={chemcalManage} alt="chemical" />
                    </div>
                    <h1 className='text-black text-2xl font-bold py-3'>রাসায়নিক গঠন পরিচালনা করুন</h1>
                    <p>রাসায়নিক ব্যবসায় যে কোনও উত্পাদনকারী সংস্থা, R&D আরও ভাল ফর্মুলেশন করতে উল্লেখযোগ্য পরিমাণ সময় রাখে। এর ল্যাব মডিউলের মাধ্যমে, রাসায়নিক শিল্পের জন্য “আইওনিক ইআরপি” টোটাল সলুয়েশন ইআরপি সফ্টওয়ার আপনার ল্যাবে সম্পাদিত সমস্ত ক্রিয়াকলাপ সঞ্চয় করে, যার মধ্যে রয়েছে সমস্ত বিভিন্ন ফর্মুলেশন এবং ফলস্বরূপ রাসায়নিকের বিভিন্ন রাসায়নিক পরামিতি। এটি কাঁচামালের বর্তমান মূল্যের উপর ভিত্তি করে নতুন নির্মিত ফর্মুলেশনের প্রত্যাশিত খরচও প্রদান করতে পারে।</p>
                    <ul className='list-disc  text-start pl-5'>
                        <li>সফ্টওয়্যারটি রাসায়নিকের নতুন সূত্র এবং রেসিপিগুলির জন্য সমস্ত গবেষণা ট্র্যাক করতে সহায়তা করে।</li>
                        <li>রিপোর্ট প্রজন্ম এবং আপডেট প্রযুক্তির সাহায্যে, এটি আপনাকে আপনার প্রতিযোগিতা থেকে এক ধাপ এগিয়ে থাকতে সাহায্য করতে পারে</li>
                    </ul>
                </div>
                <div className='text-[#777777] text-lg p-5 bg-white rounded-xl text-justify'>
                    <div className='w-32 h-32 mx-auto bg-[#F1F1F1] rounded-full flex justify-center items-center'>
                        <img className='w-24' src={sample} alt="chemical" />
                    </div>
                    <h1 className='text-black text-2xl font-bold py-3'>নমুনা এবং উদ্ধৃতি পরিচালনা করুন</h1>
                    <p>আমরা বুঝতে পারি বেশিরভাগ রাসায়নিক শিল্প নমুনার উপর ভিত্তি করে অর্ডারের উপর কাজ করে। যা রাসায়নিক কোম্পানিগুলির জন্য একটি অনন্য CRM-এর প্রয়োজন তৈরি করে যা তাদের সম্ভাব্যদের কাছে পাঠানো সমস্ত নমুনা পরিচালনা করতে এবং কাঁচামালের দামের ওঠানামার উপর ভিত্তি করে এই নমুনার বিপরীতে নিয়মিত উদ্ধৃতি প্রদান করতে দেয়। রাসায়নিক শিল্পের জন্য ইআরপি-তে আমরা বিভিন্ন ক্লায়েন্টকে তাদের কুরিয়ার বিশদ এবং ক্লায়েন্ট প্রতিক্রিয়া সহ পাঠানো সমস্ত নমুনার ডাটাবেস তৈরি করি।</p>
                    <ul className='list-disc  text-start pl-5'>
                        <li><p className='font-bold py-1'>সরবরাহকারী নমুনা</p>
                            আমরা কীভাবে আমাদের সরবরাহকারীদের কাছ থেকে প্রাপ্ত নমুনাগুলি ভুলে যেতে পারি, যা রাসায়নিক কাঁচামালের সরবরাহকারীদের দ্বারা প্রদত্ত উদ্ধৃতিতে দামের ওঠানামার বিবরণ সহ “আইওনিক ইআরপি” টোটাল সলুয়েশন ইআরপি সফ্টওয়ার-তে সংরক্ষণ করা যেতে পারে।</li>
                        <li><p className='font-bold py-1'>     স্বয়ংক্রিয় ফলো-আপ</p>

                            সিস্টেমটি ট্র্যাকিং বিশদগুলির বিরুদ্ধে স্বয়ংক্রিয় ফলো-আপ মেইলারগুলিকেও ট্রিগার করতে পারে, সম্ভাবনার বাইরে বেশিরভাগ ব্যবসা তৈরি করতে।</li>
                    </ul>
                </div>
                <div className='text-[#777777] text-lg p-5 bg-white rounded-xl text-justify'>
                    <div className='w-32 h-32 mx-auto bg-[#F1F1F1] rounded-full flex justify-center items-center'>
                        <img className='w-24' src={chemicalManufacture} alt="chemical" />
                    </div>
                    <h1 className='text-black text-2xl font-bold py-3'>রাসায়নিক গঠন পরিচালনা করুন</h1>
                    <p>রাসায়নিক উত্পাদন প্রক্রিয়া দুটি প্রধান ক্রিয়াকলাপে বিভক্ত করা যেতে পারে: প্রতিক্রিয়া এবং মিশ্রণ। ইআরপি সফ্টওয়্যার আপনাকে সিস্টেমে সহজে এই উভয় কার্যক্রম পরিচালনা করতে দেয়। আমরা চ্যালেঞ্জটিও বুঝতে পারি, যেখানে প্রতিবার ক্ষয়প্রাপ্ত কাঁচামাল উপকরণের বিল (BOM) এ সংজ্ঞায়িত মান থেকে পরিবর্তিত হতে পারে। “আইওনিক ইআরপি” টোটাল সলুয়েশন ইআরপি সফ্টওয়ার আপনাকে ব্যবহারকারীর দ্বারা সংজ্ঞায়িত প্রকৃত ব্যাচ / পরিমাণ সহ এবং BOM-তে সংজ্ঞায়িত মানগুলির সাথে তুলনা করে উত্পাদন এন্ট্রি করার অনুমতি দেবে। সিস্টেমটি মূল পরামিতিগুলি গণনা করবে যেমন ফলন, ক্ষতি সামাল দেওয়া এবং খরচ করা প্রকৃত কাঁচামালের উপর ভিত্তি করে।</p>
                    <ul className='list-disc  text-start pl-5'>
                        <li>এটি এই ফ্রন্টগুলির যে কোনও একটিতে দুর্বল উত্পাদন আউটপুটের বিষয়ে ব্যবস্থাপনাকে সতর্ক করতে পারে।</li>
                        <li>
                            সিস্টেমটি মূল পরামিতিগুলি গণনা করবে যেমন ফলন, ক্ষতি সামাল দেওয়া এবং খরচ করা প্রকৃত কাঁচামালের উপর ভিত্তি করে।</li>
                        <li>“আইওনিক ইআরপি” টোটাল সলুয়েশন ইআরপি সফ্টওয়ার সম্পূর্ণ উত্পাদন প্রক্রিয়ার প্রথম পর্যায়, কাঁচামাল থেকে চূড়ান্ত পণ্য পর্যন্ত শেষ-থেকে-এন্ড ট্রেসেবিলিটি নিশ্চিত করে।</li>
                    </ul>
                </div>
                <div className='text-[#777777] text-lg p-5 bg-white rounded-xl text-justify'>
                    <div className='w-32 h-32 mx-auto bg-[#F1F1F1] rounded-full flex justify-center items-center'>
                        <img className='w-24' src={chemicalManufacture} alt="chemical" />
                    </div>
                    <h1 className='text-black text-2xl font-bold py-3'>কেমিক্যাল ইনভেন্টরি ম্যানেজমেন্ট</h1>
                    <p>রাসায়নিক ইআরপি সফ্টওয়্যার বিশেষভাবে রাসায়নিক শিল্পের জন্য ডিজাইন করা অনন্য বৈশিষ্ট্যগুলির মাধ্যমে কার্যকর ইনভেন্টরি ব্যবস্থাপনা নিশ্চিত করতে পারে। সিস্টেমটি ইনভেন্টরিতে সংজ্ঞায়িত ব্যাচ/লট সংখ্যাগুলিতে ঘনত্ব বা ফলনের মতো রাসায়নিক বৈশিষ্ট্যগুলি বজায় রাখে। রাসায়নিক জায় ব্যবস্থাপনা গাছের কাঠামো গুদাম এবং আইটেম গ্রুপের মাধ্যমে কার্যকর হয়।</p>
                    <ul className='list-disc  text-start pl-5'>
                        <li><p className='font-bold py-1'> কার্যকরী ব্যবস্থাপনা</p>

                            রাসায়নিকের জন্য ইআরপি একই রাসায়নিকের বিভিন্ন রূপ বজায় রাখার জন্য বিশেষভাবে ডিজাইন করা উপায় রয়েছে। এটি বিশেষভাবে উপযোগী হতে পারে কারণ এই ধরনের অনেকগুলি বৈকল্পিক পরবর্তী প্রক্রিয়ায় বিকল্প রাসায়নিক হিসাবে ব্যবহার করা যেতে পারে।</li>
                    </ul>
                </div>
                <div className='text-[#777777] text-lg p-5 bg-white rounded-xl text-justify'>
                    <div className='w-32 h-32 mx-auto bg-[#F1F1F1] rounded-full flex justify-center items-center'>
                        <img className='w-24' src={quality} alt="chemical" />
                    </div>
                    <h1 className='text-black text-2xl font-bold py-3'>গুণমানের নিশ্চয়তা / পরিদর্শন</h1>
                    <p>
                    আমরা বুঝতে পারি রাসায়নিক ব্যবসার জন্য রাসায়নিক উত্পাদনের পাশাপাশি বাজার থেকে সংগ্রহ করা কাঁচামালের গুণমান পরিদর্শনের উপর দৃঢ় নজরদারি প্রয়োজন। রাসায়নিক ইআরপি সিস্টেম আপনাকে সমস্ত আইটেমের জন্য গুণমান পরিদর্শনের মানদণ্ড নির্ধারণ করতে দেয়। ব্যবস্থাপনা কাঁচামাল প্রাপ্তির সময়, উত্পাদন প্রক্রিয়ার যে কোনও পর্যায়ে বা রাসায়নিক সরবরাহের আগেও মান পরিদর্শন বাধ্যতামূলক করতে পারে। প্রভাবগুলি শুধুমাত্র আপনার সমাপ্ত রাসায়নিকের গুণমান উন্নত করতে পারে না, তবে সরবরাহকারীদের দ্বারা সরবরাহকৃত কাঁচামালের নিম্নমানের কারণে উত্পাদনে অপচয় কমাতেও আপনাকে অনুমতি দিতে পারে। একটি স্বয়ংক্রিয় উপায়ে এই সমস্ত প্রক্রিয়াগুলির কার্যকরী পরিচালনা মূল ক্রিয়াকলাপ এবং কাজগুলির মানককরণে সহায়তা করে। এটি রাসায়নিক শিল্পে যেভাবে কাজ করা হয় তাতে কোনো বিভ্রান্তি এড়াতে জনশক্তিকে সহজ করে তোলে।</p>
                   
                </div>
                <div className='text-[#777777] text-lg p-5 bg-white rounded-xl text-justify'>
                    <div className='w-32 h-32 mx-auto bg-[#F1F1F1] rounded-full flex justify-center items-center'>
                        <img className='w-24' src={chemcalManage} alt="chemical" />
                    </div>
                    <h1 className='text-black text-2xl font-bold py-3'>রাসায়নিক শিল্পের জন্য ইআরপি সফ্টওয়ার এর সুবিধা</h1>
                    <p>রাসায়নিক শিল্পের জন্য এই মূল সুবিধাগুলি ছাড়াও, আপনি যদি আপনার প্রক্রিয়াগুলি স্বয়ংক্রিয় করতে চান তবে রাসায়নিক শিল্পের জন্য “আইওনিক ইআরপি” টোটাল সলুয়েশন ইআরপি সফ্টওয়ার দ্বারা প্রদত্ত অন্যান্য সুবিধা রয়েছে।</p>
                    <ul className='list-disc  text-start pl-5'>
                        <li>দলের মধ্যে উন্নত সহযোগিতা</li>
                        <li>ব্যবসায়িক প্রক্রিয়াগুলিতে উত্পাদনশীলতা এবং দক্ষতা বৃদ্ধি।</li>
                        <li>সরকার এবং পরিবেশের সংবিধিবদ্ধ প্রবিধানগুলির সাথে সহজ সম্মতি।</li>
                        <li>একটি একক প্ল্যাটফর্মে আপনার গ্রাহক, পণ্য, সরবরাহকারীদের অ্যাক্সেস করুন।</li>
                        <li>অন্তর্দৃষ্টি লাভের জন্য গুরুত্বপূর্ণ ব্যবসায়িক তথ্য বিশ্লেষণ করুন।</li>
                        <li>সিদ্ধান্ত নেওয়ার জন্য পদ্ধতিগত পরিকল্পনা।</li>
                        <li>সম্পূর্ণ ব্যবসার তথ্যের মোবাইল অ্যাক্সেসযোগ্যতা</li>
                        <li>খরচের উপর স্পষ্ট অন্তর্দৃষ্টি দ্বারা কার্যকর মূল্য নির্ধারণের কৌশল।</li>
                        <li>সহজ ডকুমেন্টেশন এবং প্রক্রিয়া অপ্রয়োজনীয়তা হ্রাস.</li>
                        <li>উন্নত ব্র্যান্ডিং এবং উচ্চ স্তরের গ্রাহক সন্তুষ্টি।</li>
                    </ul>
                    <p>আপনার রাসায়নিক ব্যবসাকে অটোমেশন এবং প্রযুক্তির সাথে আপগ্রেড করুন এবং আপনার সমস্ত ব্যবসায়িক প্রক্রিয়া পরিচালনার জন্য “আইওনিক ইআরপি” টোটাল সলুয়েশন ইআরপি সফ্টওয়ার সফ্টওয়্যার ব্যবহার করুন। আপনার প্রতিযোগীদের উপর একটি ধার পান এবং দক্ষতা বৃদ্ধি এবং শক্তিশালী অন্তর্দৃষ্টি দিয়ে আপনার ব্যবসাকে উচ্চতায় নিয়ে যান। অন্যান্য সমস্ত মূল ফাংশন যেমন অর্থ, সংগ্রহ, ডেলিভারি এবং পণ্যের বিপণনও ইআরপি-র অন্তর্নির্মিত মডিউল দ্বারা পরিচালিত হয়। একটি সুসংহত ইআরপি সিস্টেম রাসায়নিক শিল্পের জটিল ক্রিয়াকলাপ পরিচালনা করার জন্য সরলতা আনতে সাহায্য করতে পারে।</p>
                </div>
            </section>


        </div>
    );
};

export default ChemicalAccounting;