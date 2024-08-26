import { LuSunDim } from "react-icons/lu";
import { healthManagementdata } from "./healthManagementdata";
import ionicerpfinal from '../../../assets/erp/erpnext-integration-final.png'

const HealthManagementCard = () => {
    return (
        <div className="px-[400px]">
               <section className="text-center py-5">
                <h1 className="text-2xl font-bold ">ট্রেডিং হেলথকেয়ার "আইওনিক ইআরপি" টোটাল সলুয়েশন ইআরপি সফ্টওয়ার সিস্টেমের ব্যাপক বৈশিষ্ট্য</h1>
           
              
            </section>

            <section className="grid grid-cols-3 gap-10 py-5">
                {
                    healthManagementdata.map((item, index) =>{
                        return (
                            <div key={index} className="relative bg-white rounded-xl p-5 pl-10 text-justify">
                                <div className="absolute left-0 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-6xl"><LuSunDim /></div>
                                <h1 className="text-[19px] font-bold">{item.module_name}</h1>
                                <p className="text-xl">{item.description}</p>
                            </div>
                        )
                    })
                }
            </section>

            <img className="pb-5" src={ionicerpfinal} alt="" />
            
        </div>
    );
};

export default HealthManagementCard;