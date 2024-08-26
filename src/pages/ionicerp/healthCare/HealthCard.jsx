import { healthData } from "./healthCardData";

const HealthCard = () => {
    return (
        <div className=""> 
             <section className="text-center py-5">
                <h1 className="text-2xl font-bold ">কোন কোন সেক্টর এ ব্যবহার করা যাই- ``আইওনিক ইআরপি`` হেলথকেয়ার স্বাস্থ্যসেবা টোটাল সলুয়েশন ইআরপি সফ্টওয়ার</h1>
                <hr className="border-[2px] border-black" />
                <p className="text-lg text-[#777777]">``আইওনিক ইআরপি`` হেলথকেয়ার স্বাস্থ্যসেবা টোটাল সলুয়েশন ইআরপি সফ্টওয়ার হল একটি হেলথকেয়ার স্বাস্থ্যসেবা সলিউশন যা এক ছাদের নিচে আপনার সমস্ত অপারেশনাল কার্যক্রম পরিচালনা করতে সাহায্য করে।</p>
            </section>


            <section className="grid grid-cols-2 gap-10">

                {
                    healthData.map((item, index) => {
                        return <div key={index} className="flex gap-10 bg-white  p-10">
                            <div className="flex justify-center items-center">
                                <img className="w-[500px] bg-[#F1F1F1] p-3 rounded-full" src={item.imgSrc} alt={item.title} />
                            </div>
                            <div className="text-center">
                                <h1 className="text-xl font-bold pb-2">{item.title}</h1>
                                <p className="text-lg text-[#777777]">{item.description}</p>
                            </div>

                        </div>
                    })
                }
            </section>


            
        </div>
    );
};

export default HealthCard;