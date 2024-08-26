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
            <section className="text-center py-5">
                <h1 className="text-2xl font-bold ">
                    {/* */}
                    {heading}
                    </h1>
                <hr className="border-[2px] border-black" />
                <p className="text-lg text-[#777777]">{subHeading}</p>
            </section>


            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className="flex gap-5">
                    {/* TabList on the left side */}
                    <div className="w-[200px]">
                    <TabList className='text-xl font-bold flex flex-col gap-3 '>
                        <Tab selectedClassName='text-red-500 border-0'>অ্যাকাউন্টিং</Tab>
                        <Tab selectedClassName='text-red-500'>সিআরএম</Tab>
                        <Tab selectedClassName='text-red-500'>ইনভেন্টরি</Tab>
                        <Tab selectedClassName='text-red-500'>ক্রয় করা</Tab>
                        <Tab selectedClassName='text-red-500'>ম্যানুফ্যাকচারিং</Tab>
                        <Tab selectedClassName='text-red-500'>মানব সম্পদ</Tab>
                        <Tab selectedClassName='text-red-500'>সম্পদ ব্যবস্থাপনা</Tab>
                        <Tab selectedClassName='text-red-500'>প্রকল্প ব্যবস্থাপনা</Tab>
                        <Tab selectedClassName='text-red-500'>সহায়তা</Tab>
                        <Tab selectedClassName='text-red-500'>এক্সিম</Tab>
                    </TabList>
                    
                    </div>
                   
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



            <section className='flex flex-col justify-center items-center gap-2 mt-10 '>
                <h1 className='  text-3xl font-semibold '>আপনার প্রিয় ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার সাথে সংযোগ করুন</h1>
                <div className='w-[100%] h-[3px] bg-black'></div>
                <p className='text-center text-[#777777] pb-5  font-semibold '>``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর বিল্ট-ইন ইন্টিগ্রেশনের একটি হোস্ট রয়েছে যা আপনার ব্যবসাকে দ্রুত টেক অফ করতে সাহায্য করে।</p>
            </section>


            <section className='flex justify-center items-center  mx-auto pb-5'>
                <img src={technologyImg} alt="" />
            </section>
        </div>
    );
};

export default ManufactureTab;
