import consulting from '../../assets/karmochary/consulting.jpg';
import development from '../../assets/karmochary/development.jpg';
import customization from '../../assets/karmochary/customization.jpg';
import implementation from '../../assets/karmochary/implementation.jpg';
import support from '../../assets/karmochary/support.jpg';
import training from '../../assets/karmochary/training.jpg';

const ServicesErp = () => {
    return (
        <div className='2xl:mx-[215px] lg:mx-[160px] mainHome'>
            <section className='flex flex-col justify-center items-center gap-2 pt-36'>
                <h1 className='text-[#898989] text-xl font-semibold'>
                "আইওনিক ইআরপি" এর কাস্টম ক্লাউড-ভিত্তিক ইআরপি সফ্টওয়্যার সমস্ত সেবা সমূহ
                </h1>
                <div className='w-[80%] h-[3px] bg-[#b3b2b2]'></div>
                <p className='text-center text-[#898989] font-semibold'>
                আপনার ব্যবসার জন্য বিশেষভাবে তৈরি “আইওনিক ইআরপি” সফ্টওয়্যার- কাস্টম ইআরপি সমাধান তৈরি করে যা কর্মপ্রবাহকে স্ট্রীমলাইন করার উপর মনোযোগ দিয়ে আপনার অনন্য ব্যবসার প্রয়োজনীয়তা পূরণ করে।
                </p>
            </section>

            <section className='grid grid-cols-3 gap-10 py-10'>
                {/* Consulting */}
                <div className='relative group rounded-2xl overflow-hidden'>
                    <div 
                        className='h-[200px] bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                        style={{
                            backgroundImage: `url(${consulting})`,
                        }}
                    ></div>
                    <div className='absolute inset-0 bg-black opacity-30 rounded-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-60'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-white text-3xl uppercase'>consulting</div>
                    </div>
                </div>

                {/* Development */}
                <div className='relative group rounded-2xl overflow-hidden'>
                    <div 
                        className='h-[200px] bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                        style={{
                            backgroundImage: `url(${development})`,
                        }}
                    ></div>
                    <div className='absolute inset-0 bg-black opacity-30 rounded-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-60'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-white text-3xl uppercase'>development</div>
                    </div>
                </div>

                {/* Customization */}
                <div className='relative group rounded-2xl overflow-hidden'>
                    <div 
                        className='h-[200px] bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                        style={{
                            backgroundImage: `url(${customization})`,
                        }}
                    ></div>
                    <div className='absolute inset-0 bg-black opacity-30 rounded-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-60'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-white text-3xl uppercase'>customization</div>
                    </div>
                </div>

                {/* Implementation */}
                <div className='relative group rounded-2xl overflow-hidden'>
                    <div 
                        className='h-[200px] bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                        style={{
                            backgroundImage: `url(${implementation})`,
                        }}
                    ></div>
                    <div className='absolute inset-0 bg-black opacity-30 rounded-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-60'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-white text-3xl uppercase'>implementation</div>
                    </div>
                </div>

                {/* Support */}
                <div className='relative group rounded-2xl overflow-hidden'>
                    <div 
                        className='h-[200px] bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                        style={{
                            backgroundImage: `url(${support})`,
                        }}
                    ></div>
                    <div className='absolute inset-0 bg-black opacity-30 rounded-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-60'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-white text-3xl uppercase'>support</div>
                    </div>
                </div>

                {/* Training */}
                <div className='relative group rounded-2xl overflow-hidden'>
                    <div 
                        className='h-[200px] bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                        style={{
                            backgroundImage: `url(${training})`,
                        }}
                    ></div>
                    <div className='absolute inset-0 bg-black opacity-30 rounded-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-60'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-white text-3xl uppercase'>training</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesErp;
