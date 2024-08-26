import { moduleData } from "./moduleData";

const Modules = ({heading,subheading }) => {
    return (
        <div>

            <section className='flex flex-col justify-center items-center gap-2 mt-10 px-10'>
                <h1 className=' text-[#898989] text-xl font-semibold '>{heading}</h1>
                <div className='w-[80%] h-[3px] bg-[#b3b2b2]'></div>
                <p className='text-center text-[#898989] font-semibold '>{subheading}</p>
            </section>





            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  pt-10 '>
                {
                    moduleData.map((module, index) => {
                        return (
                            <div className='pb-10 bg-white pt-3  px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                                <img className='p-5 w-28 h-28 grayImg ' src={module.imgSrc} alt="" />
                                <h2 className='font-bold text-[18.5px] '> {module.title}</h2>
                                <p className='text-center  text-sm text-[#5e5d5d] flex-grow'>{module.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Modules;