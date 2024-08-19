
import python from '../../assets/corporation/Python-Logo-2048x1152.png'
import frappe from '../../assets/corporation/frappe-framwork.png'
import javascript from '../../assets/corporation/JavaScript-JS.png'
import react from '../../assets/corporation/React.png'
import redux from '../../assets/corporation/REDUX.png'
import firebase from '../../assets/corporation/Firebase.png'
import plesk from '../../assets/corporation/plesk.png'
import ubuntu from '../../assets/corporation/ubonto-logo.jpg'
import ionos from '../../assets/corporation/ionos-logo.jpg'
import debian from '../../assets/corporation/debian.png'
import nginx from '../../assets/corporation/nginx.png'
import apache from '../../assets/corporation/apache.png'
import figma from '../../assets/corporation/figma.jpg'
import wordpress from '../../assets/corporation/wordpress-logo.jpg'
import flutter from '../../assets/corporation/flutter.png'
import andriod from '../../assets/corporation/Android-logo.jpg'
import swift from '../../assets/corporation/swift-1.png'
import native from '../../assets/corporation/react-native.jfif'

const Technologies = () => {
    return (
        <div className='pb-5 -mt-12 technology '>
              <section className='flex flex-col justify-center items-center gap-2 mt-16 '>
                <h1 className=' text-[#898989] font-semibold  text-center'>আমাদের সফটওয়্যার এর ব্যবহৃত টেকনোলজি সমূহ</h1>
                <div className='w-10 h-[3px] bg-[#b3b2b2]'></div>
            </section>

           
            <section className="lg:grid-cols-6 grid md:grid-cols-3 grid-cols-2 items-center  justify-center gap-5 pt-3 mt-5 bg-white  rounded-lg ">
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={python}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={frappe}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={javascript}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={react}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={redux}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={firebase}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={plesk}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={ubuntu}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={ionos}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={debian}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={nginx}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={apache}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={figma}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={wordpress}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={flutter}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={andriod}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={swift}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={native}/>
                </div>
               
              
          
              
          

            </section>
            
        </div>
    );
};

export default Technologies;