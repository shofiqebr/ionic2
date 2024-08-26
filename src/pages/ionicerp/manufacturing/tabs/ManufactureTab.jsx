import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Accounting from "./Accounting";
import Crm from "./Crm";
import Sales from "./Sales";
import Inventory from "./Inventory";
import TabMaufacturing from "./TabManufacturing";
import Hr from "./Hr";
import Management from "./Management";
import ProjectManagement from "./ProjectManagement";
import Help from "./Help";
import Exim from "./Exim";
// import 'react-tabs/style/react-tabs.css';
import technologyImg from '../../../../assets/erp/erpnext-integration-final.png'

const ManufactureTab = ({heading, subHeading}) => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className="">
           

            <section className='flex flex-col justify-center items-center gap-2 mt-5 py-5 pb-10'>
                <h1 className='text-[#898989] font-semibold text-center text-[17.5px]'>{heading}</h1>
                <div className='w-10 h-[3px] bg-[#b3b2b2]'></div>
                <p className='text-center text-[#898989] font-semibold  text-[14.5px]'>{subHeading}</p>
            </section>


            <div className="px-20">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className="flex gap-5">
                    {/* TabList on the left side */}
                    <div className="w-[200px]">
                    <TabList className='text-[17.5px] font-bold flex flex-col gap-3 '>
                        <Tab className='cursor-pointer' selectedClassName='text-red-500 border-0'>অ্যাকাউন্টিং</Tab>
                        <Tab className='cursor-pointer' selectedClassName='text-red-500'>সিআরএম</Tab>
                        <Tab className='cursor-pointer' selectedClassName='text-red-500'>ইনভেন্টরি</Tab>
                        <Tab className='cursor-pointer' selectedClassName='text-red-500'>ক্রয় করা</Tab>
                        <Tab className='cursor-pointer' selectedClassName='text-red-500'>ম্যানুফ্যাকচারিং</Tab>
                        <Tab className='cursor-pointer' selectedClassName='text-red-500'>মানব সম্পদ</Tab>
                        <Tab className='cursor-pointer' selectedClassName='text-red-500'>সম্পদ ব্যবস্থাপনা</Tab>
                        <Tab className='cursor-pointer' selectedClassName='text-red-500'>প্রকল্প ব্যবস্থাপনা</Tab>
                        <Tab className='cursor-pointer' selectedClassName='text-red-500'>সহায়তা</Tab>
                        <Tab className='cursor-pointer' selectedClassName='text-red-500'>এক্সিম</Tab>
                    </TabList>
                    
                    </div >
                   
                    {/* TabPanel on the right side */}
                    <div className="w-[900px]">
                        <TabPanel><Accounting/></TabPanel>
                        <TabPanel><Crm/></TabPanel>
                        <TabPanel><Inventory/></TabPanel>
                        <TabPanel><Sales/></TabPanel>
                        <TabPanel><TabMaufacturing/></TabPanel>
                        <TabPanel><Hr/></TabPanel>
                        <TabPanel><Management/></TabPanel>
                        <TabPanel><ProjectManagement/></TabPanel>
                        <TabPanel><Help/></TabPanel>
                        <TabPanel><Exim/></TabPanel>
                    </div>
                </div>
            </Tabs>
            </div>

            



          
            <section className='flex flex-col justify-center items-center gap-2 mt-5 pb-5'>
                <h1 className='text-[#898989] font-semibold text-center text-[17.5px]'>আপনার প্রিয় ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার সাথে সংযোগ করুন</h1>
                <div className='w-10 h-[3px] bg-[#b3b2b2]'></div>
                <p className='text-center text-[#898989] font-semibold  text-[14.5px]'>``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর বিল্ট-ইন ইন্টিগ্রেশনের একটি হোস্ট রয়েছে যা আপনার ব্যবসাকে দ্রুত টেক অফ করতে সাহায্য করে।</p>
            </section>




            <section className='flex justify-center items-center  mx-auto pb-10'>
                <img src={technologyImg} alt="" />
            </section>
        </div>
    );
};

export default ManufactureTab;
