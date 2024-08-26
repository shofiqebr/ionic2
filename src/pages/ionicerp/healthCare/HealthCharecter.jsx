import { healthCharacter } from "./healthCharacter";

const HealthCharecter = () => {
    return (
        <div className="">
               <section className="text-center py-5 ">
                <h1 className="text-2xl font-bold ">``আইওনিক ইআরপি`` হেলথকেয়ার স্বাস্থ্যসেবা টোটাল সলুয়েশন ইআরপি সফ্টওয়ার এর বৈশিষ্ট্য</h1>
                <hr className="border-[2px] border-black" />
                <p className="text-lg text-[#777777]">
                আমরা চাই আপনি শুরু থেকেই এগিয়ে যান। আপনার স্বাস্থ্যসেবা সুবিধায় প্রথম দিন থেকে কাজগুলি সম্পন্ন করার জন্য আমাদের বিভিন্ন ব্যবহারের জন্য প্রস্তুত মডিউলগুলি ব্যবহার করুন।</p>
            </section>

            <section className="grid grid-cols-3 gap-10 pt-5">
                {
                    healthCharacter.map((item, index)=> {
                        return <div key={index} className="px-2 text-center">
                            <div>
                                <img src={item.imgSrc} alt="" />
                            </div>
                            <h1 className="text-[22px] font-bold py-3">{item.title}</h1>
                            <p className="text-lg text-[#777777]">{item.description}</p>

                        </div>
                    })
                }
            </section>
            
        </div>
    );
};

export default HealthCharecter;