import { useForm } from "react-hook-form";
const Contact = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

    return (
      <div className=" " >
        <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.2614811050375!2d90.45120552592653!3d23.702354640618037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b74993c45fad%3A0x4036eaf54121ad53!2sIONIC%20Corporation!5e0!3m2!1sbn!2sbd!4v1720508977665!5m2!1sbn!2sbd"
    className="w-full h-[600px] pt-44"

    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
        <div className="bg-[#F3F3F3] flex gap-10 lg:flex-row flex-col justify-center 2xl:mx-[215px] lg:mx-[160px] mainHome text-black">



  {/* form part starts */}



            {/* ------------left section-------------- */}
      <section className="pt-10 lg:w-1/2 ">
      <p className="text-3xl font-bold pb-10 text-center text-black">গ্রাহক সেবা কেন্দ্র</p>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>

      <div>
      <label htmlFor="firstName" className="flex justify-start items-center pl-3 pb-2">আপনার নাম</label>
      <input className="border w-full h-12 mt-2 rounded px-3" placeholder="আপনার নাম" {...register("name")} required />
      </div>
      <div>
      <label htmlFor="firstName" className="flex justify-start items-center pl-3 pb-2">আপনার মোবাইল নাম্বার</label>
      <input className="border w-full h-12 mt-2 rounded px-3" placeholder="আপনার মোবাইল নাম্বার" {...register("mobile")} required />
      </div>
      <div>
      <label htmlFor="firstName" className="flex justify-start items-center pl-3 pb-2">যে সফ্টওয়ারটির ডেমো দেখতে চাচ্ছেন, নির্বাচন করুন</label>
     
      <select className="border w-full h-12 mt-2 rounded px-3"  {...register("software")}  required >
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
      <div>
      <label htmlFor="firstName" className="flex justify-start items-center pl-3 pb-2">আপনার ব্যবসার ধরণ কি</label>
      <input className="border w-full h-12 mt-2 rounded px-3" placeholder="আপনার ব্যবসার ধরণ কি" {...register("businessType")} required />
      </div>

       <div className=" flex justify-center lg:justify-start">

      <button className="w-40 bg-[#FFAA00] text-[#001B41] rounded-full p-2 text-[16px] font-extrabold my-10 xl:my-3 px-5"> 
                            অনুরোধ করুন
                        
                        </button>
       </div>
    


    </form>
      </section>



      {/* ---------------right section------------------ */}
      <section className="lg:w-1/2 ">
        <div className="">
          <div className="pt-0 lg:pt-10 ">
            <p className="font-bold text-3xl pb-5 lg:pb-[45px] text-center">আমাদের অফিস</p>
            <ul className="bg-white text-[#656464]  border pl-5 py-5">
            <p className="font-semibold text-lg text-black pb-2">অফিসের ঠিকানা</p>
           
              <li>ঠিকানা:  House # 18, Road # 01, Proschim Rayarbag, Jattrabari, Dhaka-1362.</li>
              <li>বিক্রয় প্রতিনিধি : 01958442200</li>
              <li>হিসাব বিভাগ : 01911142320</li>
              <li>ই-মেইল: ioniccorporation@gmail.com</li>
              <li>ওয়েবসাইট : ioniccorporation.com</li>
            </ul>
          </div>


          <div className="bg-white">
              <ul className="bg-white text-[#656464]  border pl-5 py-5">
              <p className="font-semibold text-lg text-black pb-2">হেল্পলাইন এবং ব্যবসার সময়</p>
                <li>শনিবার থেকে শুক্রবার পর্যন্ত</li>
                <li>সকাল ৯ থেকে সন্ধ্যা ৭ পর্যন্ত</li>
                <li>কাষ্টমার কেয়ার -8801511142320(হোয়াটসঅ্যাপ)
                </li>
                <li>  (২৪/৭ লাইভ সাপোর্ট)
                </li>
              </ul>

          </div>



          <div className=" mb-10  bg-white text-[#656464]  border pl-5 py-5">
              <p className="font-semibold text-lg text-black pb-2 ">যোগাযোগ করুন</p>
              
                <p className="md:pr-32">সপ্তাহের 7 দিন 24 ঘন্টা আমাদের সাপোর্ট পেতে, 01511142320 এই (Imo/WhatsApp) নম্বরে কল করুন। এছাড়াও বিস্তারিত জানার জন্য এই 01958442200 নম্বর ব্যবহার করুন. - ধন্যবাদ</p>
              

          </div>
        </div>

      </section>






  {/* form part ends */}

        </div>

</div>

    );
};

export default Contact;