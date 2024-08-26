import ProjectImg from '../../../../assets/erp/Project Management.svg'

const ProjectManagement = () => {
    return (
        <div>
        <section className='flex justify-between pb-5'>
            <div>
                <h1 className="text-3xl font-bold">  প্রকল্প ব্যবস্থাপনা</h1>
                <p className="text-xl font-medium text-[#777777]">
               
                একটি পরিকল্পনা ছাড়া একটি লক্ষ্য শুধুমাত্র একটি ইচ্ছা. – অ্যান্টোইন ডি সেন্ট-এক্সুপেরি</p>
            </div>
            <div><img className='w-96'  src={ProjectImg} alt="" /></div>
        </section>


        <section>
            <p className='text-xl font-medium text-[#777777] pb-5'>IONIC ERP প্রজেক্ট ম্যানেজমেন্ট একটি প্রকল্প পরিচালনার সাথে জড়িত বিভিন্ন কাজ এবং ক্রিয়াকলাপগুলির পরিকল্পনা, সংগঠন এবং প্রশাসনে সহায়তা করে, নিশ্চিত করে যে সেগুলি নথিভুক্ত এবং ট্র্যাক করা হয়েছে।</p>



            <ul className='list-disc pl-5 text-[#777777] text-lg pb-5'>
                 <li>IONIC ERP প্রজেক্ট ম্যানেজমেন্ট একটি প্রকল্পের বিভিন্ন কাজ ও ক্রিয়াকলাপ পরিকল্পনা, সংগঠিত এবং পরিচালনা করতে সহায়তা করে।



                </li>
                <li>এটি একটি প্রকল্পকে ছোট ছোট কাজগুলিতে ভেঙে দিতে এবং দায়িত্ব অর্পণ করতে সহায়তা করে।
                </li>
                <li>
                প্রকল্পের সময়সীমা, বাজেট এবং অগ্রগতি ট্র্যাক এবং নিরীক্ষণ করা যেতে পারে।</li>
                <li>দলের সদস্যদের মধ্যে যোগাযোগ ব্যবস্থার মাধ্যমে পরিচালিত হতে পারে।</li>
                <li>প্রকল্প টেমপ্লেট তৈরি এবং পুনরায় ব্যবহার করা যেতে পারে।</li>
                
                <li>প্রকল্পের অগ্রগতি নিরীক্ষণের জন্য রিয়েল-টাইম বিশ্লেষণ এবং রিপোর্টিং উপলব্ধ।</li>
            </ul>
        </section>
    </div>
    );
};

export default ProjectManagement;