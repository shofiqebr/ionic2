import { manufacturer } from "./manufactureBody/manufacturerData";


const ManufacturingCard = () => {
    return (
        <div className='text-black py-5'>
            <section className="text-center pb-5">
                <h1 className="text-3xl font-bold">"আইওনিক ইআরপি" বিজনেস ম্যানেজমেন্ট সফটওয়্যার ম্যানুফ্যাকচারিং এক্সিলেন্স ইন্ডাস্ট্রিজ</h1>
                <p className="text-lg text-[#777777] py-2 ">"আইওনিক ইআরপি" বিজনেস ম্যানেজমেন্ট সফটওয়্যার আধুনিক ক্লাউড ম্যানুফ্যাকচারিং ইআরপি সফ্টওয়্যার যা উৎপাদন চক্রকে সহজ করে, উপাদানের ব্যবহার ট্র্যাক করতে সহায়তা করে, ক্ষমতা পরিকল্পনা প্রদর্শন করে, সাবকন্ট্রাক্টিং পরিচালনা করে এবং আরও অনেক কিছু!</p>
            </section>

            <div className='grid grid-cols-2 gap-8'>
            {
                manufacturer.map((manufacturer, index) => <div key={index} className='text-center'>
                    <div className='flex justify-center items-center'>

                    <img src={manufacturer.imgSrc} alt={manufacturer.title} />
                    </div>
                    <h1 className='text-xl font-bold py-2'>{manufacturer.title}</h1>
                    <p className='text-[17px] text-[#777777]'>{manufacturer.description}</p>
                </div>

                )
            }
        </div>
            
        </div>
    );
};

export default ManufacturingCard;