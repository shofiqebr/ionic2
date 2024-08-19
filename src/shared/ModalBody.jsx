import { useForm } from 'react-hook-form';
const ModalBody = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className=' px-10 pt-5 md:w-96'>
          <div className=''>
            <p className=' lg:text-[18px] text-[20px] text-center leading-snug font-bold  bg-[#001B41] text-[#FFAA00] rounded-md py-2 mb-4'>আমাদের সাথে  যোগাযোগ করুন</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-1 py-1'>
              <label className='text-' htmlFor="firstName">আপনার নাম</label>
              <input className='py-1 px-3 rounded '  placeholder='আপনার নাম' {...register("firstName")} required />
              </div>
              <div className='flex flex-col gap-1 py-1'>
              <label className='text-' htmlFor="firstName">আপনার মোবাইল নাম্বার</label>
              <input className='py-1 px-3 rounded '  placeholder='আপনার মোবাইল নাম্বার' {...register("mobile")} required />
              </div>
              <div className='flex flex-col gap-1 py-1'>
                      <label className='text-' htmlFor="firstName">যে সফ্টওয়ারটির ডেমো দেখতে চাচ্ছেন</label>
                      <select className='py-1 px-3 rounded ' {...register("software")}>
                     



                        <option value="IONIC shop">আইওনিক সপ</option>
                        <option value="Shikkha chat">শিক্ষা চ্যাট</option>
                        <option value="IONIC ERP">আইওনিক ইআরপি</option>
                        <option value="IONIC Hospital">আইওনিক হসপিটাল</option>
                        <option value="IONIC Hospital">কর্মচারী</option>
                        <option value="My Bhara">মাই ভাড়া</option>
                        <option value="My Restura">মাই রেস্তোরাঁ</option>
                        <option value="My Diagnostic">আমার ডায়াগনস্টিক</option>
                        <option value="IONIC Pharma">আইওনিক ফার্মা</option>
                        <option value="IONIC Reapir">আইওনিক রিপিয়ার</option>
                        <option value="IONIC Tailor">আইওনিক টেইলার্স</option>
                        <option value="IONIC Travel">আইওনিক ট্রাভেল</option>
                        <option value="IONIC Transport">আইওনিক ট্রান্সপোর্ট</option>
                        <option value="IONIC Store">বিক্রয় শক্তি</option>
                        <option value="IONIC Real State">আইওনিক ওসেন</option>
                        <option value="Go Account">গো একাউন্ট</option>
                      </select>
             </div>
              <div className='flex flex-col gap-1 py-1'>
              <label className='text-' htmlFor="firstName">আপনার ব্যবসার ধরণ কি</label>
              <input className='py-1 px-3 rounded '  placeholder='আপনার ব্যবসার ধরণ কি' {...register("businessType")} required />
              </div>
            
                <div className="my-5 text-center ">
                        <button className="" onClick={() => document.getElementById('my_modal_5').showModal()}>  <p className="bg-[#FFAA00] text-[#001B41] rounded-full p-2 text-[16px]  font-extrabold  px-5 mb-1  ">
                            অনুরোধ করুন
                        </p>
                        </button>
                    </div>
    </form>
    <div>
               
            <p className='text-white text-center pb-1'>যেকোন বিজনেস সলিউশন সফটওয়্যার, ইআরপি সফটওয়্যার, ক্লাউড স্টোরেজ, ওয়েবসাইট ডেভেলপমেন্ট, মোবাইল অ্যাপস, হোস্টিং, ডোমেন, এসএমএস এবং ইকমার্স সলিউশন।</p>
                </div>
          </div>
         
        </section>
    );
};

export default ModalBody;