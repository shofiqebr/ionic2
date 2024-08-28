import BannerCardErp from "./BannerCardErp";
import BannerErp from "./BannerErp";
import Modules from "./Modules";
import ProductDetailsErp from './ProductDetailsErp'
import SoftwarePrice from "./SoftwarePrice";
import TechnologyErp from "./TechnologyErp";


const HomeErp = () => {
    return (
        <div className="2xl:mx-[215px] lg:mx-[160px] mainHome">
            <BannerErp/>
            <BannerCardErp/>

            <ProductDetailsErp heading={'``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর ব্যবহারের সেক্টর সমূহ'}  subheading={<>আইওনিক কর্পোরেশন এর পেশাদারদের একটি বিশেষজ্ঞ দল রয়েছে যারা যুগ যুগ ধরে সমাধান তৈরি করছে এবং স্থানীয় এবং বিদেশী উভয় শিল্পের ক্লায়েন্টদের বিশ্বাস এবং <br />  নির্ভর যোগ্যতার সাথে উল্লেখ যোগ্য ভাবে বৃদ্ধি পাচ্ছে।</>}   grayscale={true}/>


            <Modules heading={'``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর মডিউল সমূহ'} subheading={<>আইওনিক কর্পোরেশন এর পেশাদারদের একটি বিশেষজ্ঞ দল রয়েছে যারা যুগ যুগ ধরে সমাধান তৈরি করছে এবং স্থানীয় এবং বিদেশী উভয় শিল্পের ক্লায়েন্টদের বিশ্বাস এবং <br/> নির্ভর যোগ্যতার সাথে উল্লেখ যোগ্য ভাবে বৃদ্ধি পাচ্ছে।</>} grayscale={true}/>  

            <TechnologyErp heading={'আপনার প্রিয় ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার সাথে সংযোগ করুন'} subheading={'``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর বিল্ট-ইন ইন্টিগ্রেশনের একটি হোস্ট রয়েছে যা আপনার ব্যবসাকে দ্রুত টেক অফ করতে সাহায্য করে।'}/>

            <SoftwarePrice heading={'``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার মূল্য পরিকল্পনা'} subheading={'``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর সকল প্যাকেজ বাৎসরিক চার্জ প্রযোজ্য।'} cardheading={'আপনার ব্যবসায়িক প্রক্রিয়া সহজ করতে এবং কাজের প্রবাহে দক্ষতা বাড়ানোর জন্য “আইওনিক ইআরপি” বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর একটি প্যাকেজ দিয়ে আপনার যাত্রা শুরু করুন।'} textColor={'black'}/>
            
        </div>
    );
};

export default HomeErp;